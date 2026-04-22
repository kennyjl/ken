import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">项目不存在</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-400 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft size={20} /> back
          </button>
        </div>
      </div>
    );
  }

  const relatedProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-sm font-bold tracking-widest text-white/60 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
              <ArrowLeft size={18} />
            </div>
            back
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="text-[10px] tracking-[4px] font-black text-blue-500 uppercase mb-4">{project.category}</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-xl text-[#B5BBC8] leading-relaxed font-light">
              {project.desc}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 relative"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </header>

      {/* Main Content Sections - Pure Vertical Stacking */}
      <main className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-32">
          {project.sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-1.5 h-6 bg-blue-600 rounded-full"></div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{section.title}</h2>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent"></div>
              </div>

              <div className="space-y-8">
                {Array.isArray(section.content) ? (
                  <div className="space-y-6">
                    {section.content.map((item, i) => {
                      // Detect list items or subheads
                      const isList = item.startsWith('•') || item.startsWith('*') || item.match(/^\d+\./);
                      return (
                        <p 
                          key={i} 
                          className={`text-lg leading-relaxed text-[#B5BBC8] font-light ${isList ? 'pl-6' : ''}`}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-lg leading-relaxed text-[#B5BBC8] font-light">
                    {section.content}
                  </p>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-32 px-6 border-t border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4">相关案例</h2>
              <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <Link 
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="group rounded-[2rem] overflow-hidden bg-white/[0.03] border border-white/5 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full"
                >
                  <div className="aspect-[1.5] overflow-hidden">
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">{p.title}</h3>
                    <p className="text-[#B5BBC8]/60 text-sm font-light line-clamp-2">{p.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final Button */}
      <footer className="py-24 px-6 text-center">
        <button 
          onClick={() => navigate('/')}
          className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black tracking-[4px] rounded-full transition-all active:scale-95"
        >
          back TO home
        </button>
      </footer>
    </div>
  );
}
