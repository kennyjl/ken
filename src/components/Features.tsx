import { motion } from 'framer-motion';

const features = [
  {
    icon: 'https://i.imghippo.com/files/LvB1496beg.png', // 替换为此处图片的真实URL
    title: '专业专注的设计沉淀',
    desc: '20年产品体验与全链路设计经验，10年大型团队管理。擅长科技产品、系统级UI、硬件配套软件、控制台界面设计。',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20'
  },
  {
    icon: 'https://i.imghippo.com/files/TwdX4472v.png', // 替换为此处图片的真实URL
    title: '理科背景的严谨思维',
    desc: '计算机科班出身，懂技术逻辑，能深度理解硬件设备、系统软件、数据可视化与复杂交互流程。',
    color: 'text-green-500',
    bgColor: 'bg-green-500/20'
  },
  {
    icon: 'https://i.imghippo.com/files/bol6812WiM.png', // 替换为此处图片的真实URL
    title: '复杂体系设计经验',
    desc: '深耕B端、金融、AI、平台型产品，注重严谨、安全、高效、专业的体验标准，适配高端科技设备需求。',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/20'
  },
  {
    icon: 'https://i.imghippo.com/files/SDE7277WAw.png', // 替换为此处图片的真实URL
    title: '体验设计闭环能力',
    desc: '能独立负责产品架构、交互逻辑、UI体系、体验闭环，用设计提升科技产品的易用性与商业价值。',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/20'
  }
];

export default function Features() {
  return (
    <section className="py-32 px-6 md:px-32 bg-[#000000]">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">化繁为简 重塑体验</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-8 p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group"
          >
            <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform">
              <img 
                src={f.icon} 
                className="w-full h-full object-cover" 
                alt={f.title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{f.title}</h3>
              <p className="text-[#B5BBC8] leading-relaxed text-sm font-light">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
