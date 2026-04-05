import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { PRICING, BRAND } from '../constants';
import { cn } from '../lib/utils';
import PageHeader from '../components/PageHeader';

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing | {BRAND.name}</title>
      </Helmet>

      <PageHeader 
        title="Transparent Pricing" 
        subtitle="Choose the perfect plan for your digital journey. No hidden fees."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Pricing Plans</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Perfect Plan</h3>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              Transparent pricing for every stage of your digital journey. No hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "p-10 rounded-[2.5rem] border transition-all relative flex flex-col",
                  plan.popular 
                    ? "bg-bg-card border-gold/50 shadow-[0_0_40px_rgba(212,175,55,0.1)] scale-105 z-10" 
                    : "bg-bg-card border-white/5 hover:border-white/20"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-10">
                  <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className="text-white/40 text-sm">/ project</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/70">
                      <Check className="w-5 h-5 text-gold shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={cn(
                  "w-full py-4 rounded-2xl font-bold transition-all",
                  plan.popular
                    ? "bg-gold text-black hover:bg-gold-light"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                )}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-bg-card border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-white/60">Everything you need to know about my services.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: 'How long does a project take?', a: 'Typically, a basic website takes 1-2 weeks, while more complex projects can take 4-8 weeks.' },
              { q: 'Do you offer maintenance?', a: 'Yes, I offer monthly maintenance packages to keep your site updated and secure.' },
              { q: 'Can I upgrade my plan later?', a: 'Absolutely! You can upgrade your plan at any time as your business grows.' },
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-bg-dark border border-white/5">
                <h4 className="font-bold mb-3">{item.q}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
