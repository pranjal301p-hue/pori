import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Download, Youtube, Instagram, Facebook, Linkedin, Github, Send, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, PROJECTS, SERVICES } from '../constants';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{BRAND.name} | {BRAND.title}</title>
        <meta name="description" content="Lasari Digital - App Developer, Web Developer, Digital Creator. Expert solutions for your digital brand." />
        <meta name="keywords" content="Lasari Digital, App Developer, Web Developer, Resume Builder, Video Downloader, Pranjal Saikia" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Welcome to {BRAND.name}</h2>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                I'm <span className="gold-text">{BRAND.owner}</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-lg leading-relaxed">
                {BRAND.title}. I build high-performance digital products that help brands grow and succeed in the modern world.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-10">
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-all flex items-center group"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/resume-builder"
                  className="px-8 py-4 border border-white/20 hover:border-gold/50 rounded-full font-bold transition-all flex items-center"
                >
                  Create Resume
                  <Download className="ml-2 w-5 h-5" />
                </Link>
              </div>

              <div className="flex space-x-6">
                <a href={BRAND.socials.youtube} className="text-white/40 hover:text-gold transition-colors"><Youtube className="w-6 h-6" /></a>
                <a href={BRAND.socials.instagram} className="text-white/40 hover:text-gold transition-colors"><Instagram className="w-6 h-6" /></a>
                <a href={BRAND.socials.facebook} className="text-white/40 hover:text-gold transition-colors"><Facebook className="w-6 h-6" /></a>
                <a href={BRAND.socials.linkedin} className="text-white/40 hover:text-gold transition-colors"><Linkedin className="w-6 h-6" /></a>
                <a href={BRAND.socials.github} className="text-white/40 hover:text-gold transition-colors"><Github className="w-6 h-6" /></a>
                <a href={BRAND.socials.telegram} className="text-white/40 hover:text-gold transition-colors"><Send className="w-6 h-6" /></a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-gold/20 relative group">
                <img
                  src="https://picsum.photos/seed/pranjal/800/800"
                  alt={BRAND.owner}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
              </div>
              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-bg-card border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
                <p className="text-gold font-bold text-2xl">5+</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-bg-card border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl">
                <p className="text-gold font-bold text-2xl">50+</p>
                <p className="text-white/60 text-xs uppercase tracking-widest">Projects Done</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">What I Do</h2>
            <h3 className="text-4xl font-bold">My Premium Services</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-bg-dark border border-white/5 hover:border-gold/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-all">
                  {/* Icon placeholder - in real app would use dynamic icon */}
                  <Globe className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                <Link to="/services" className="text-gold text-sm font-bold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Portfolio</h2>
              <h3 className="text-4xl font-bold">Featured Projects</h3>
            </div>
            <Link to="/portfolio" className="px-6 py-3 border border-gold/30 text-gold rounded-full font-bold hover:bg-gold hover:text-black transition-all">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                  <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  <button className="w-fit px-4 py-2 bg-white text-black text-xs font-bold rounded-lg">View Details</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
