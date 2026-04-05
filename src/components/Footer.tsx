import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Youtube, Instagram, Facebook, Linkedin, Github, Send } from 'lucide-react';
import { BRAND } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-bg-card border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-gold" />
              <span className="text-xl font-bold tracking-tighter">
                LASARI <span className="text-gold">DIGITAL</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering digital brands with cutting-edge web and app development solutions. 
              Crafting experiences that matter.
            </p>
            <div className="flex space-x-4">
              <a href={BRAND.socials.youtube} className="text-white/40 hover:text-gold transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href={BRAND.socials.instagram} className="text-white/40 hover:text-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={BRAND.socials.facebook} className="text-white/40 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={BRAND.socials.linkedin} className="text-white/40 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href={BRAND.socials.github} className="text-white/40 hover:text-gold transition-colors"><Github className="w-5 h-5" /></a>
              <a href={BRAND.socials.telegram} className="text-white/40 hover:text-gold transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/resume-builder" className="hover:text-gold transition-colors">Resume Builder</Link></li>
              <li><Link to="/video-downloader" className="hover:text-gold transition-colors">Video Downloader</Link></li>
              <li><Link to="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold" />
                <span>{BRAND.email}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Assam, India</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Developed by {BRAND.owner}</p>
        </div>
      </div>
    </footer>
  );
}
