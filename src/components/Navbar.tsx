import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'ABOUT', href: '/#about' },
  { name: 'EXPERIENCE', href: '/#experience' },
  { name: 'PROJECTS', href: '/#projects' },
  { name: 'CONTACT', href: '/#contact' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { scrollY } = useScroll();
  
  // Transform scroll position to opacity/colors (0 to 1 over 100px)
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  );
  
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.05)']
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(24px)']
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHome && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ x: -60, y: 40, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // smooth ease out expo
      style={{ 
        backgroundColor, 
        borderBottomColor: borderColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur 
      }}
      className="fixed top-0 left-0 right-0 z-[100] flex items-center h-20 border-b px-[50px]"
    >
      {/* Logo Container */}
      <div className="flex-shrink-0">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer">
          <img 
            src="https://i.imghippo.com/files/LH4830hI.png" 
            alt="Logo" 
            className="h-10 w-auto group-hover:scale-110 transition-transform" 
            referrerPolicy="no-referrer"
          />
        </Link>
      </div>
      
      {/* Right-aligned Navigation and Button */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5 // Start after the main nav bar has settled a bit
            }
          }
        }}
        className="flex-1 flex items-center justify-end gap-16"
      >
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
            >
              <Link 
                to={item.href}
                onClick={(e) => handleClick(e as any, item.href)}
                className="text-[11px] font-bold tracking-[0.2em] text-[#ffffff] hover:text-blue-600 transition-all relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button 
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
          }}
          className="hidden md:block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold tracking-widest rounded-lg transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex-shrink-0"
        >
          DOWNLOAD RESUME
        </motion.button>
      </motion.div>

      <div className="md:hidden">
        <button className="p-2 text-white/60 hover:text-white">
          <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5 rounded-full"></div>
          <div className="w-6 h-0.5 bg-current rounded-full"></div>
        </button>
      </div>
    </motion.nav>
  );
}

