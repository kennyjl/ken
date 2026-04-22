import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-32 bg-[#000000]">
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">联系我</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          whileHover={{ y: -5 }}
          className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all text-center group"
        >
          <div className="p-5 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
            <Mail size={28} />
          </div>
          <div className="space-y-2">
            <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Email</div>
            <div className="text-sm text-white/70 font-medium">420325498@qq.com</div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 transition-all text-center group"
        >
          <div className="p-5 rounded-2xl bg-green-500/10 text-green-400 group-hover:scale-110 transition-transform">
            <Phone size={28} />
          </div>
          <div className="space-y-2">
            <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Phone</div>
            <div className="text-sm text-white/70 font-medium">+86 13168740076</div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-all text-center group"
        >
          <div className="p-5 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
            <MapPin size={28} />
          </div>
          <div className="space-y-2">
            <div className="text-[10px] text-white/30 tracking-widest uppercase font-bold">Location</div>
            <div className="text-sm text-white/70 font-medium">广东 深圳</div>
          </div>
        </motion.div>
      </div>

      <div className="mt-32 text-center">
        <div className="text-white/10 text-[10px] tracking-[0.4em] uppercase font-bold mb-4">Design & Developed by UX Architect</div>
        <div className="text-white/5 text-[9px]">© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </section>
  );
}

