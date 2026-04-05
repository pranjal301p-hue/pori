import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Download, Plus, Trash2, User, Mail, Phone, MapPin, Briefcase, GraduationCap, Star, FileText, Layout, ArrowLeft } from 'lucide-react';
import { BRAND } from '../constants';

const ResumeBuilder = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: BRAND.owner,
    email: BRAND.email,
    phone: '+91 98765 43210',
    location: 'Assam, India',
    title: 'Full Stack App Developer',
    summary: 'Passionate developer with 5+ years of experience in building modern web and mobile applications. Expert in React, Node.js, and Flutter.',
  });

  const [experience, setExperience] = useState([
    { id: 1, company: BRAND.name, role: 'Lead Developer', duration: '2020 - Present', desc: 'Leading the development of high-performance web and mobile solutions for global clients.' },
  ]);

  const [education, setEducation] = useState([
    { id: 1, school: 'Assam University', degree: 'B.Tech in Computer Science', duration: '2016 - 2020' },
  ]);

  const [skills, setSkills] = useState(['React', 'Node.js', 'Flutter', 'TypeScript', 'Tailwind CSS', 'Firebase']);

  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const handleAddExperience = () => {
    setExperience([...experience, { id: Date.now(), company: '', role: '', duration: '', desc: '' }]);
  };

  const handleRemoveExperience = (id: number) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const handleAddEducation = () => {
    setEducation([...education, { id: Date.now(), school: '', degree: '', duration: '' }]);
  };

  const handleRemoveEducation = (id: number) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const handleAddSkill = (skill: string) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black">
      <Helmet>
        <title>AI Resume Builder | {BRAND.name}</title>
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase tracking-tighter">AI <span className="gold-text">Resume</span> Builder</h1>
            <p className="text-white/60">Craft your professional identity with AI precision.</p>
          </div>
          
          <div className="bg-bg-card border border-white/10 p-1 rounded-xl flex gap-1">
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-8 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 ${
                activeTab === 'edit' ? 'bg-gold text-black' : 'text-white/40 hover:text-white'
              }`}
            >
              <Layout className="h-4 w-4" />
              Editor
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-8 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2 ${
                activeTab === 'preview' ? 'bg-gold text-black' : 'text-white/40 hover:text-white'
              }`}
            >
              <FileText className="h-4 w-4" />
              Preview
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {activeTab === 'edit' ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {/* Personal Info */}
              <section className="bg-bg-card border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <User className="h-6 w-6 text-gold" />
                  <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/40 text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                      value={personalInfo.name}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-sm mb-2">Professional Title</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                      value={personalInfo.title}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-white/40 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-white/40 text-sm mb-2">Professional Summary</label>
                    <textarea
                      rows={4}
                      className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                      value={personalInfo.summary}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
                    />
                  </div>
                </div>
              </section>

              {/* Experience */}
              <section className="bg-bg-card border border-white/10 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6 text-gold" />
                    <h2 className="text-2xl font-bold text-white">Work Experience</h2>
                  </div>
                  <button onClick={handleAddExperience} className="text-gold hover:text-gold/80 flex items-center gap-1 font-bold">
                    <Plus className="h-4 w-4" /> Add
                  </button>
                </div>
                <div className="space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={exp.id} className="p-6 bg-black border border-white/10 rounded-xl relative group">
                      <button onClick={() => handleRemoveExperience(exp.id)} className="absolute top-4 right-4 text-white/20 hover:text-red-500 transition-colors">
                        <Trash2 className="h-5 w-5" />
                      </button>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white/40 text-sm mb-2">Company Name</label>
                          <input
                            type="text"
                            className="w-full bg-bg-card border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                            value={exp.company}
                            onChange={(e) => {
                              const newExp = [...experience];
                              newExp[idx].company = e.target.value;
                              setExperience(newExp);
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-white/40 text-sm mb-2">Role / Position</label>
                          <input
                            type="text"
                            className="w-full bg-bg-card border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                            value={exp.role}
                            onChange={(e) => {
                              const newExp = [...experience];
                              newExp[idx].role = e.target.value;
                              setExperience(newExp);
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-white/40 text-sm mb-2">Duration</label>
                          <input
                            type="text"
                            className="w-full bg-bg-card border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                            value={exp.duration}
                            onChange={(e) => {
                              const newExp = [...experience];
                              newExp[idx].duration = e.target.value;
                              setExperience(newExp);
                            }}
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-white/40 text-sm mb-2">Description</label>
                          <textarea
                            rows={3}
                            className="w-full bg-bg-card border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                            value={exp.desc}
                            onChange={(e) => {
                              const newExp = [...experience];
                              newExp[idx].desc = e.target.value;
                              setExperience(newExp);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="bg-bg-card border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="h-6 w-6 text-gold" />
                  <h2 className="text-2xl font-bold text-white">Skills</h2>
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  {skills.map(skill => (
                    <span key={skill} className="px-4 py-2 bg-gold/10 border border-gold/20 text-gold rounded-full flex items-center gap-2">
                      {skill}
                      <button onClick={() => handleRemoveSkill(skill)} className="hover:text-red-500">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Add a skill (e.g. React, Python)"
                    className="flex-1 bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-gold outline-none"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        handleAddSkill((e.target as HTMLInputElement).value);
                        (e.target as HTMLInputElement).value = '';
                      }
                    }}
                  />
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto w-full"
            >
              <div className="bg-white text-zinc-900 p-12 rounded-2xl shadow-2xl min-h-[1000px]">
                <div className="flex justify-between items-start border-b-2 border-zinc-200 pb-8 mb-8">
                  <div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">{personalInfo.name}</h1>
                    <p className="text-amber-600 font-bold text-xl">{personalInfo.title}</p>
                  </div>
                  <div className="text-right space-y-1 text-zinc-500 text-sm">
                    <div className="flex items-center justify-end gap-2"><Mail className="h-4 w-4" /> {personalInfo.email}</div>
                    <div className="flex items-center justify-end gap-2"><Phone className="h-4 w-4" /> {personalInfo.phone}</div>
                    <div className="flex items-center justify-end gap-2"><MapPin className="h-4 w-4" /> {personalInfo.location}</div>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-12">
                  <div className="col-span-8 space-y-10">
                    <section>
                      <h3 className="text-lg font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Summary</h3>
                      <p className="text-zinc-600 leading-relaxed text-sm">{personalInfo.summary}</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Experience</h3>
                      <div className="space-y-8">
                        {experience.map(exp => (
                          <div key={exp.id}>
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-bold text-zinc-900">{exp.role}</h4>
                              <span className="text-zinc-500 text-xs font-medium">{exp.duration}</span>
                            </div>
                            <p className="text-amber-600 font-bold text-xs mb-2">{exp.company}</p>
                            <p className="text-zinc-600 text-sm leading-relaxed">{exp.desc}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="col-span-4 space-y-10">
                    <section>
                      <h3 className="text-lg font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-800 text-[10px] font-bold rounded uppercase">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-lg font-black uppercase tracking-widest border-b border-zinc-200 pb-2 mb-4">Education</h3>
                      <div className="space-y-6">
                        {education.map(edu => (
                          <div key={edu.id}>
                            <h4 className="font-bold text-zinc-900 text-sm">{edu.degree}</h4>
                            <p className="text-amber-600 text-xs font-bold">{edu.school}</p>
                            <p className="text-zinc-500 text-xs mt-1">{edu.duration}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>

                <div className="mt-20 pt-8 border-t border-zinc-100 text-center">
                  <button className="bg-gold text-black px-12 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-gold-light transition-all flex items-center gap-3 mx-auto shadow-xl">
                    <Download className="h-5 w-5" />
                    Download PDF
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;

