import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const TypewriterText = ({ text, delay = 0, startTrigger = false }: { text: string; delay?: number; startTrigger?: boolean }) => {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  // Once startTrigger is true, set started to true after the specified delay
  useEffect(() => {
    if (startTrigger && !started) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [startTrigger, delay, started]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (started && displayText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, 40); // Slightly slower for better readability
    }
    return () => clearTimeout(timer);
  }, [started, displayText, text]);

  return <span className="inline-block">{displayText}<span className="inline-block w-0.5 h-5 bg-blue-500 ml-1 animate-pulse" /></span>;
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [startTypewriter, setStartTypewriter] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  const introVideo = "https://videotourl.com/videos/1778128715006-c14471d8-72ce-4eba-b780-7102633bcbc0.webm";
  const mainVideo = "https://videotourl.com/videos/1776837464843-489ad79d-5810-4a25-bb11-5bdf8c03b15a.webm";
  
  const [showMainVideo, setShowMainVideo] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(true);

  const handleIntroEnded = () => {
    setShowMainVideo(true);
    setTimeout(() => {
      setShowIntroVideo(false);
    }, 5000);
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Safety fallback: if animations take too long or fail to trigger, 
    // start the typewriter after a reasonable delay
    const timer = setTimeout(() => {
      setStartTypewriter(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const titleLines = [
    "20载产品全栈设计",
    "体验赋能商业价值"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Faster stagger for character-by-character
        delayChildren: 0.3,
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        onComplete: () => {
          // This might be called multiple times, we only care when the 2nd line completes or starts
        }
      }
    }
  };

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen flex items-start md:items-center justify-center pt-4 md:pt-24 pb-20 px-6 md:px-12 overflow-x-hidden md:overflow-hidden bg-black">
      {/* Centered Content Container */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20 relative z-20">
        {/* Left Side: Content Box */}
        <motion.div 
          style={{ y }} 
          className="relative z-30 w-full md:w-1/2 flex flex-col items-center md:items-start order-2 md:order-1 md:translate-x-[120px]"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white/40 text-[18px] md:text-[24px] mb-3 block font-medium tracking-wider text-center md:text-left"
          >
            SENIOR UX ARCHITECT
          </motion.span>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-6 w-full flex flex-col items-center md:items-start"
          >
            {titleLines.map((line, i) => (
              <div key={i} className="flex flex-wrap justify-center md:justify-start h-auto md:h-[80px] mb-2 md:mb-0">
                {line.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={{
                      hidden: { 
                        opacity: 0, 
                        scale: 1.5, 
                        y: -20,
                      },
                      visible: { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.6,
                          ease: [0.215, 0.610, 0.355, 1.000],
                        } 
                      }
                    }}
                    onAnimationStart={() => {
                      if (i === 1 && charIndex === line.length - 1) {
                        setStartTypewriter(true);
                      }
                    }}
                    className="inline-block text-[34px] sm:text-[37px] md:text-[64px] font-bold leading-tight tracking-tight whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm sm:text-base md:text-lg text-white/80 w-full max-w-[280px] sm:max-w-md md:max-w-lg leading-relaxed mb-10 min-h-[5rem] text-center md:text-left"
          >
            <TypewriterText 
              text="从代码逻辑到硬件交互，致力于构建严谨、高效且具有科技质感的复杂系统体验。擅长将晦涩的硬核技术转化为用户能轻松理解的操作语言。" 
              startTrigger={startTypewriter}
              delay={0.2}
            />
          </motion.p>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5
                }
              }
            }}
            className="grid grid-cols-2 gap-4 md:gap-x-[30px] md:gap-y-6 w-full max-w-[320px] sm:max-w-md md:max-w-fit px-4 md:px-0"
          >
            {[
              { label: '服务用户数', value: '10', unit: '亿+', color: 'text-[#3b82f6]', border: 'border-[#3b82f6]/40 hover:border-[#3b82f6]', shadow: '', glow: '' },
              { label: '服务品牌', value: '60', unit: '+', color: 'text-[#eab308]', border: 'border-[#eab308]/40 hover:border-[#eab308]', shadow: '', glow: '' },
              { label: '参与主导项目', value: '35', unit: '+', color: 'text-[#4ade80]', border: 'border-[#4ade80]/40 hover:border-[#4ade80]', shadow: '', glow: '' },
              { label: '服务领域', value: '14', unit: '', color: 'text-[#c084fc]', border: 'border-[#c084fc]/40 hover:border-[#c084fc]', shadow: '', glow: '' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5 }
                  }
                }}
                className={`w-auto min-w-[140px] md:w-[237px] h-auto md:h-[95px] py-2 md:py-0 px-3 md:pl-[30px] rounded-[18px] border-2 ${stat.border} bg-black/40 border-white/10 transition-all duration-500 flex flex-col justify-center items-center md:items-start group relative overflow-hidden`}
              >
                <div className={`text-[20px] sm:text-[24px] md:text-[32px] font-bold mb-[1px] tracking-tight ${stat.color} flex items-baseline`}>
                  {stat.value}
                  <span className="ml-1 flex items-baseline">
                    {stat.unit.includes('亿') ? (
                      <>
                        <span className="text-[14px] sm:text-[18px] font-normal mr-1">亿</span>
                        <span className="text-[24px] sm:text-[32px]">+</span>
                      </>
                    ) : (
                      <span className="text-[24px] sm:text-[32px]">{stat.unit}</span>
                    )}
                  </span>
                </div>
                <div className="text-[11px] sm:text-[14px] text-white/70 md:text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Right Side: Large Portrait Image (Increased Scale) */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center md:justify-start relative order-1 md:order-2 pt-10 md:-translate-x-[40px] md:-translate-y-[60px]"
        >
          <div className="relative w-full max-w-[600px] aspect-[4/5] flex items-end justify-center md:justify-start">
            {showMainVideo && (
              <video 
                src={mainVideo} 
                autoPlay 
                loop
                muted 
                playsInline 
                className="h-full w-auto object-contain object-bottom z-10"
              />
            )}
            {showIntroVideo && (
              <video 
                src={introVideo} 
                autoPlay 
                muted 
                playsInline 
                onEnded={handleIntroEnded}
                className={`h-full w-auto object-contain object-bottom ${showMainVideo ? 'absolute bottom-0' : ''}`}
              />
            )}
            {/* Background elements removed */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

