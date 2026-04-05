import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../constants';
import { CheckCircle2, Code2, Cpu, Layout, Smartphone, Terminal } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const SKILLS = [
  { name: 'Frontend Development', icon: Layout, level: '95%' },
  { name: 'Backend Development', icon: Terminal, level: '85%' },
  { name: 'Mobile App Dev', icon: Smartphone, level: '90%' },
  { name: 'UI/UX Design', icon: Code2, level: '80%' },
  { name: 'Cloud Services', icon: Cpu, level: '75%' },
];

const TOOLS = ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'MongoDB', 'Flutter', 'Figma', 'Git'];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | {BRAND.name}</title>
      </Helmet>

      <PageHeader 
        title="About Lasari Digital" 
        subtitle="Crafting Digital Excellence with Passion and Precision."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">About Me</h2>
              <h3 className="text-4xl font-bold mb-8">Crafting Digital Excellence with Passion</h3>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Hello! I'm <span className="text-white font-bold">{BRAND.owner}</span>, a dedicated developer and digital creator based in Assam, India. 
                  With over 5 years of experience in the tech industry, I specialize in building high-quality web and mobile applications.
                </p>
                <p>
                  My journey started with a curiosity for how things work on the internet, which led me to dive deep into coding and design. 
                  Today, I help businesses and individuals bring their ideas to life through modern technology and user-centric design.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest trends to provide the best solutions for my clients.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-bg-card border border-white/5">
                  <h4 className="text-gold font-bold text-3xl mb-1">50+</h4>
                  <p className="text-white/60 text-sm">Projects Completed</p>
                </div>
                <div className="p-6 rounded-2xl bg-bg-card border border-white/5">
                  <h4 className="text-gold font-bold text-3xl mb-1">30+</h4>
                  <p className="text-white/60 text-sm">Happy Clients</p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-12">
              <div>
                <h4 className="text-xl font-bold mb-8 flex items-center">
                  <Code2 className="mr-3 text-gold" /> My Expertise
                </h4>
                <div className="space-y-6">
                  {SKILLS.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-white/80">{skill.name}</span>
                        <span className="text-sm font-medium text-gold">{skill.level}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full gold-gradient"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {TOOLS.map((tool) => (
                    <span key={tool} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 hover:border-gold/50 transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Journey</h2>
            <h3 className="text-4xl font-bold">Work Experience</h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { year: '2022 - Present', role: 'Senior Developer', company: 'Lasari Digital', desc: 'Leading digital transformation projects and building custom SaaS solutions.' },
              { year: '2020 - 2022', role: 'Full Stack Developer', company: 'Tech Innovators', desc: 'Developed scalable web applications and managed cloud infrastructure.' },
              { year: '2018 - 2020', role: 'Junior Web Developer', company: 'Creative Agency', desc: 'Focused on frontend development and responsive UI design.' },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 border-l border-gold/30 pb-8 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                <span className="text-gold font-bold text-sm mb-2 block">{exp.year}</span>
                <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                <p className="text-white/40 text-sm mb-4">{exp.company}</p>
                <p className="text-white/60 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
