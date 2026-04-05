import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section className={cn("relative py-24 overflow-hidden bg-bg-dark", className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(212,175,55,0.15),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === title.split(' ').length - 1 ? "text-gold" : "text-white"}>
                {word}{' '}
              </span>
            ))}
          </h1>
          {subtitle && (
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1 bg-gold rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
