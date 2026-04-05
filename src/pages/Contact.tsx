import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Youtube, Instagram, Facebook, Linkedin, Github } from 'lucide-react';
import { BRAND } from '../constants';
import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | {BRAND.name}</title>
      </Helmet>

      <PageHeader 
        title="Get In Touch" 
        subtitle="Have a question or a project in mind? I'd love to hear from you."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Project</h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Have a question or a project in mind? I'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 rounded-3xl bg-bg-card border border-white/5 space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Me</h4>
                    <p className="text-white/60 text-sm">{BRAND.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Me</h4>
                    <p className="text-white/60 text-sm">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-white/60 text-sm">Assam, India</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-bg-card border border-white/5">
                <h4 className="font-bold mb-6">Follow Me</h4>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Youtube, link: BRAND.socials.youtube },
                    { icon: Instagram, link: BRAND.socials.instagram },
                    { icon: Facebook, link: BRAND.socials.facebook },
                    { icon: Linkedin, link: BRAND.socials.linkedin },
                    { icon: Github, link: BRAND.socials.github },
                    { icon: Send, link: BRAND.socials.telegram },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 rounded-[2.5rem] bg-bg-card border border-white/5"
              >
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-bg-dark border border-white/10 rounded-2xl focus:border-gold/50 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-bg-dark border border-white/10 rounded-2xl focus:border-gold/50 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 bg-bg-dark border border-white/10 rounded-2xl focus:border-gold/50 outline-none transition-all text-sm"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-2">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full px-6 py-4 bg-bg-dark border border-white/10 rounded-2xl focus:border-gold/50 outline-none transition-all text-sm resize-none"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full py-5 bg-gold text-black font-black uppercase tracking-widest rounded-2xl hover:bg-gold-light transition-all flex items-center justify-center gap-3">
                      Send Message <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-20 rounded-[2.5rem] overflow-hidden h-[400px] border border-white/5 grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.648212345678!2d91.7362!3d26.1445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332439b273a!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
