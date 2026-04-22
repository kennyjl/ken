import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import { LayoutGrid, Binary, Terminal, ShieldPlus, TrendingUp } from 'lucide-react';

const categories = [
  { name: '全部', icon: <LayoutGrid size={16} /> },
  { name: '软硬件结合', icon: <Binary size={16} /> },
  { name: '软件应用', icon: <Terminal size={16} /> },
  { name: '客户端系统', icon: <ShieldPlus size={16} /> },
  { name: '品牌', icon: <ShieldPlus size={16} /> },
  { name: '产品运营', icon: <TrendingUp size={16} /> },
] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<typeof categories[number]['name']>('全部');

  const filteredProjects = activeTab === '全部' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-32 px-6 md:px-32 bg-[#000000]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">项目作品</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-20">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(cat.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-widest transition-all duration-300 border ${
                activeTab === cat.name 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-white/[0.03] border-white/5 text-white/40 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat.icon}
              {cat.name.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div 
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group rounded-[40px] overflow-hidden bg-[#1D1D1D] border border-white/5 hover:bg-blue-600 hover:border-blue-500 transition-all duration-500 flex flex-col"
            >
              <Link to={`/project/${p.id}`} className="flex flex-col h-full">
                <div className="p-6 pb-0">
                  <div className="aspect-[1.5] overflow-hidden rounded-[24px] relative bg-white/[0.05] group-hover:bg-white transition-all duration-500">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <div className="px-6 py-3 bg-white text-blue-600 rounded-full text-[10px] font-black tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">VIEW CASE STUDY</div>
                    </div>
                  </div>
                </div>
                <div className="p-10 pt-8 flex-grow flex flex-col">
                  <div className="text-[9px] font-black tracking-[3px] text-blue-500 mb-4 group-hover:text-blue-100 uppercase">{p.category}</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight text-white transition-colors">{p.title}</h3>
                  <p className="text-[#B5BBC8] group-hover:text-white transition-colors text-sm leading-relaxed font-light line-clamp-2">{p.desc}</p>
                  <div className="mt-auto pt-8">
                    <div className="w-8 h-0.5 bg-white/10 group-hover:bg-white/40 transition-all duration-500"></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

