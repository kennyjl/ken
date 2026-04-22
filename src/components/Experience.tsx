import { motion } from 'framer-motion';

const experiences = [
  {
    date: '2024/11 - 至今',
    company: 'Diffmind / Gonest',
    logo: 'https://i.imghippo.com/files/BUc2442N.png',
    role: '产品&体验负责人',
    desc: '负责 AI 多模型对话产品 diffmind 功能规划与全流程体验设计。主导gonest、gonestbuy跨境代购及物流平台功能梳理与交互体验设计。重构物流保险：通过产品重构与体验优化，实现付费用户提升 5 倍、保险毛利提升 10 倍，成为业务核心增长力',
    side: 'left',
    color: 'border-blue-500',
    dotColor: 'bg-blue-500'
  },
  {
    date: '2021/1 - 2023/10',
    company: '招银网络科技/招商银行',
    logo: 'https://i.imghippo.com/files/lZjY2387FwI.png',
    role: '对公（公司级面向客户业务）体验设计负责人',
    desc: '负责招商银行企业网银 App、PC 版 UBank 等大型系统级产品的体验设计与规范制定。主导招赢通、资金托管 +、跨境金融业务等多个较为复杂、安全级别较高系统的体验架构设计。搭建企业级体验标准与设计体系，注重严谨流程、操作效率、专业感知，适配高端系统与设备类软件的设计要求。',
    side: 'right',
    color: 'border-red-500',
    dotColor: 'bg-red-500'
  },
  {
    date: '2018/10 - 2020/3',
    company: '小赢科技',
    logo: 'https://i.imghippo.com/files/NaBP6668wuA.png',
    role: '设计总监',
    desc: '主导金融科技平台产品交互、系统 UI 与全流程体验改版，优化复杂业务路径与转化效率。用用户洞察与数据具象化提升产品易用性与价值感知，擅长工具类、平台类产品体验设计。1 个多月完成核心产品重大改版，效率与质量获公司高度认可，推动多条业务线体验升级。',
    side: 'left',
    color: 'border-indigo-500',
    dotColor: 'bg-indigo-500'
  },
  {
    date: '2017/12 - 2018/10',
    company: '百度',
    logo: 'https://i.imghippo.com/files/lPJL2830dI.png',
    role: '高级设计经理',
    desc: '负责百度 FaceMoji 输入法、Aladdin 智能硬件、AR 广告平台 CAAD 的产品交互与系统 UI 设计。结合智能硬件与软件交互逻辑，打造跨平台、多终端、一体化的体验。统筹全球产品体验一致性，适配多语言、多设备、多场景的设计输出。',
    side: 'right',
    color: 'border-blue-400',
    dotColor: 'bg-blue-400'
  },
  {
    date: '2014/07 - 2016/3',
    company: '英威诺',
    logo: 'https://i.imghippo.com/files/KAJf2150cM.png',
    role: '平台事业部副总监',
    desc: '统筹全平台产品体验质量，搭建平台级产品与系统 UI 设计体系。主导小知等核心产品的规划、交互、运营全流程策略，服务手机厂商等策略硬件生态。凭借专业体验与方案竞争力，3 个月内拿下华为、联想等核心客户，助力公司完成 2 亿 B 轮融资。',
    side: 'left',
    color: 'border-green-500',
    dotColor: 'bg-green-500'
  },
  {
    date: '2009/04 - 2014/06',
    company: '腾讯科技',
    logo: 'https://i.imghippo.com/files/LG6849WFU.png',
    role: '设计 leader',
    desc: '负责超级 QQ、手机 QQ、QQ 浏览器、腾讯地图等亿级用户产品的体验与系统 UI 设计。搭建覆盖 App、Web、客户端的全平台设计规范，推进多终端、多设备形态的体验输出。团队年度 S 级优秀员工，公司最高荣誉、设计奥斯卡创意大奖、人才培养与产研部门精英。',
    side: 'right',
    color: 'border-blue-600',
    dotColor: 'bg-blue-600'
  },
  {
    date: '2006/09 - 2009/04',
    company: '好耶广告/分众传媒',
    logo: 'https://i.imghippo.com/files/lPfg3893uE.png',
    role: '高级创意设计师',
    desc: '负责一线品牌的数字营销、互动网站、创意界面全案设计。具备全栈设计能力，擅长科技感视觉表达、专业级 UI 质感、营销话术包装。公司内部分协作品获中国金印奖全场大奖、Mobius 国际广告节一等奖等国内国际权威奖项。',
    side: 'left',
    color: 'border-red-600',
    dotColor: 'bg-red-600'
  }
];

export default function Experience() {
  const getAccentRGB = (dotColor: string) => {
    const colorMap: Record<string, string> = {
      'bg-blue-500': '59, 130, 246',
      'bg-red-500': '239, 68, 68',
      'bg-indigo-500': '99, 102, 241',
      'bg-blue-400': '96, 165, 250',
      'bg-green-500': '34, 197, 94',
      'bg-blue-600': '37, 99, 235',
      'bg-red-600': '220, 38, 38',
    };
    return colorMap[dotColor] || '255, 255, 255';
  };

  return (
    <section id="experience" className="py-32 px-6 md:px-32 bg-[#000000] overflow-hidden">
      <div className="text-center mb-32">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">职业轨迹</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block -translate-x-1/2"></div>

        <div className="relative isolate">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col md:flex-row items-center w-full group/exp transition-all duration-300 pointer-events-none
                ${i > 0 ? 'md:-mt-[150px]' : ''} 
                ${exp.side === 'left' ? 'md:justify-start' : 'md:justify-end'}
                z-10 hover:z-30
              `}
              style={{
                '--accent-rgb': getAccentRGB(exp.dotColor)
              } as any}
            >
              {/* Dot - Hollow ring that fills on hover (smaller) */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-[3px] z-30 hidden md:block transition-all duration-300 group-hover/exp:scale-110"
                style={{ 
                  borderColor: `rgb(var(--accent-rgb))`,
                  backgroundColor: 'transparent'
                }}
              >
                <div 
                  className="w-full h-full rounded-full transition-all duration-300 scale-0 group-hover/exp:scale-50"
                  style={{ backgroundColor: `rgb(var(--accent-rgb))` }}
                ></div>
              </div>

              {/* Interaction Area / Card Wrapper */}
              <div className={`w-full md:w-1/2 p-4 relative pointer-events-auto ${exp.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  initial={{ opacity: 0, x: exp.side === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border-2 border-[rgba(var(--accent-rgb),0.5)] group-hover/exp:border-[rgba(var(--accent-rgb),1)] hover:bg-white/[0.07] transition-all duration-300 relative shadow-2xl"
                >
                  <div className="flex items-start gap-6 ml-5 mt-5">
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="w-16 h-16 rounded-2xl object-cover bg-white/5 border border-white/10 group-hover/exp:border-blue-500/50 transition-all duration-500 shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div 
                        className="font-bold text-[12px] mb-1 tracking-[3px] uppercase opacity-80"
                        style={{ color: `rgb(var(--accent-rgb))` }}
                      >
                        {exp.date}
                      </div>
                      <h3 
                        className="text-2xl font-bold mb-1 tracking-tight transition-colors group-hover/exp:text-[rgb(var(--accent-rgb))]"
                      >
                        {exp.company}
                      </h3>
                      <div className="text-[#A8A8A8] text-xs mb-3 font-medium tracking-wide">{exp.role}</div>
                    </div>
                  </div>
                  
                  <div className="mt-2 p-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 group-hover/exp:border-white/10 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                      <div className="text-[10px] font-black text-yellow-500/90 tracking-[2px] uppercase">工作与成果</div>
                    </div>
                    <p className="text-[#D4D4D4] text-[13px] leading-relaxed font-normal opacity-90">{exp.desc}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
