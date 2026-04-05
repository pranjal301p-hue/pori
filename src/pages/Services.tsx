import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, FileText, Download, Palette, ArrowRight } from 'lucide-react';
import { SERVICES, BRAND } from '../constants';
import PageHeader from '../components/PageHeader';

const ICON_MAP: Record<string, any> = {
  Globe,
  Smartphone,
  FileText,
  Download,
  Palette,
};

const SERVICE_LINKS: Record<string, string> = {
  'resume-builder': '/resume-builder',
  'video-downloader': '/video-downloader',
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | {BRAND.name}</title>
      </Helmet>

      <PageHeader 
        title="Our Premium Services" 
        subtitle="Comprehensive digital solutions to help you build, grow, and scale your brand."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">My Services</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Solutions for Your Digital Growth</h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              I provide comprehensive digital services to help you build, grow, and scale your brand in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = ICON_MAP[service.icon] || Globe;
              const link = SERVICE_LINKS[service.id] || '/contact';
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-bg-card border border-white/5 hover:border-gold/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-[5rem] -mr-10 -mt-10 group-hover:bg-gold/10 transition-all" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-black transition-all">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                  <p className="text-white/60 leading-relaxed mb-8">{service.description}</p>
                  
                  <ul className="space-y-3 mb-10">
                    {['High Performance', 'SEO Optimized', 'Modern UI'].map((item) => (
                      <li key={item} className="flex items-center text-sm text-white/40">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link to={link} className="flex items-center text-gold font-bold group-hover:translate-x-2 transition-transform">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-black text-4xl md:text-5xl font-black mb-8">Ready to Start Your Project?</h3>
          <p className="text-black/70 max-w-xl mx-auto mb-10 font-medium">
            Let's collaborate to build something amazing that stands out from the crowd.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-black/80 transition-all">
              Contact Me Now
            </button>
            <button className="px-10 py-4 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-white transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
