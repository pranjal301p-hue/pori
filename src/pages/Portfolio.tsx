import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS, BRAND } from '../constants';
import PageHeader from '../components/PageHeader';

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | {BRAND.name}</title>
      </Helmet>

      <PageHeader 
        title="Creative Portfolio" 
        subtitle="A collection of projects where design meets technology to solve real-world problems."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">My Work</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Creative Portfolio</h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              A collection of projects where I've combined design and technology to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-8 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button className="p-4 bg-gold text-black rounded-full hover:scale-110 transition-transform">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                    <button className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                      <Github className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                <div className="px-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                      <h4 className="text-2xl font-bold">{project.title}</h4>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'Firebase'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-white/50 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-bg-card border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Projects Done', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
              { label: 'Awards Won', value: '12' },
              { label: 'Years Exp', value: '5+' },
            ].map((stat, index) => (
              <div key={index}>
                <h4 className="text-gold text-4xl md:text-5xl font-black mb-2">{stat.value}</h4>
                <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
