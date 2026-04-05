import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Search, User, ChevronDown, Sparkles, FileText, Layout, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../constants';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const TOOLS = [
  { name: 'Resume Builder', path: '/resume-builder', icon: FileText, desc: 'AI-powered resume creation' },
  { name: 'Video Downloader', path: '/video-downloader', icon: Download, desc: 'Fast social media downloader' },
  { name: 'Templates', path: '/portfolio', icon: Layout, desc: 'Professional design layouts' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isToolsOpen, setIsToolsOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-bg-dark/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gold rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
              <Globe className="w-6 h-6 text-black" />
            </div>
            <span className="text-xl font-black tracking-tighter">
              LASARI <span className="text-gold">DIGITAL</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-bold transition-all hover:text-gold relative group",
                    location.pathname === link.path ? "text-gold" : "text-white/70"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              ))}
              
              {/* Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-bold text-white/70 hover:text-gold transition-colors">
                  AI Tools <ChevronDown className={cn("w-4 h-4 transition-transform", isToolsOpen && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {isToolsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-bg-card border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl"
                    >
                      <div className="space-y-2">
                        {TOOLS.map((tool) => (
                          <Link
                            key={tool.name}
                            to={tool.path}
                            className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
                              <tool.icon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white">{tool.name}</p>
                              <p className="text-[10px] text-white/40">{tool.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="h-6 w-px bg-white/10 mx-2" />

            <div className="flex items-center space-x-4">
              <button className="p-2 text-white/50 hover:text-gold transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/resume-builder"
                className="px-6 py-2.5 bg-gold text-black text-xs font-black uppercase tracking-widest rounded-full hover:bg-gold-light transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                Get Started
              </Link>
              <Link
                to="/contact"
                className="p-2.5 border border-white/10 rounded-full text-white/70 hover:text-white hover:border-white/30 transition-all"
              >
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link
              to="/resume-builder"
              className="px-4 py-2 bg-gold text-black text-[10px] font-black uppercase tracking-widest rounded-full"
            >
              AI Tool
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white/70 hover:text-white bg-white/5 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 top-20 z-40 bg-bg-dark/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="px-4 py-8 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-6 py-4 text-2xl font-black rounded-2xl transition-all",
                    location.pathname === link.path 
                      ? "bg-gold text-black" 
                      : "text-white/70 hover:bg-white/5"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 grid grid-cols-2 gap-4">
                <Link
                  to="/resume-builder"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center justify-center p-6 bg-gold/10 border border-gold/30 rounded-3xl text-gold"
                >
                  <Globe className="w-8 h-8 mb-2" />
                  <span className="text-xs font-black uppercase tracking-widest">Builder</span>
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-3xl text-white"
                >
                  <User className="w-8 h-8 mb-2" />
                  <span className="text-xs font-black uppercase tracking-widest">Login</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
