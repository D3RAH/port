import React from 'react';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Skills = () => {
  
  // Categorize skills - Keeping your logic intact
  const skillCategories = {
    'Frontend Development': [
      skills.find(s => s.name === 'React.js'),
      skills.find(s => s.name === 'JavaScript'),
      skills.find(s => s.name === 'TypeScript'),
      skills.find(s => s.name === 'Next.js'),
      skills.find(s => s.name === 'Tailwind CSS'),
      skills.find(s => s.name === 'Redux'),
    ].filter(Boolean),
    'Backend & APIs': [
      skills.find(s => s.name === 'Node.js'),
      skills.find(s => s.name === 'REST APIs'),
      skills.find(s => s.name === 'Redux'),
      skills.find(s => s.name === 'MongoDB'),
    ].filter(Boolean),
  //   'AI & Automation': [
  //   skills.find(s => s.name === 'Anthropic Claude'),
  //   skills.find(s => s.name === 'Gemini AI'),
  //   skills.find(s => s.name === 'AI Automation'),
  // ].filter(Boolean),
    'Tools & Ops': [
      skills.find(s => s.name === 'Git & GitHub'),
      skills.find(s => s.name === 'Figma'),
      skills.find(s => s.name === 'Vite'),
    ].filter(Boolean),
  };

  return (
    <section id="skills" className="relative pt-4 pb-20 bg-black overflow-hidden scroll-mb-24">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-[120px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-highlight/5 rounded-full blur-[120px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={100}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 border border-highlight/30 rounded-full mb-6">
              <Icons.Sparkles className="w-4 h-4 text-highlight" />
              <span className="text-xs text-highlight font-medium tracking-widest uppercase">My Expertise</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <div key={category} className={`${category === 'Tools & Ops' ? 'col-span-2 lg:col-span-1' : 'h-full'}`}>
              <FadeIn delay={categoryIndex * 100}>
                <div className="group relative p-px rounded-2xl transition-all duration-500 h-full">
                  {/* Aura Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/20 via-highlight/5 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl" />

                  <div className="relative z-10 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 h-full">
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                      <div className="w-1.5 h-6 bg-highlight rounded-full shadow-[0_0_12px_rgba(var(--highlight-rgb),0.5)]" />
                      <h3 className="text-xl font-medium text-white tracking-tight">{category}</h3>
                    </div>

                    <div className="space-y-4">
                      {categorySkills.map((skill) => {
                        const IconComponent = Icons[skill.icon] || Icons.Code2;
                        return (
                          <div key={skill.id} className="group/skill space-y-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/5 border border-white/10 rounded-lg group-hover/skill:border-highlight/30 transition-colors">
                                  <IconComponent className="w-4 h-4 text-highlight" />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-white group-hover/skill:text-highlight transition-colors">
                                    {skill.name}
                                  </div>
                                  <div className="text-[10px] text-white/40 uppercase tracking-tighter">
                                    {skill.experience}
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Platinum Proficiency Bar */}
                            <div className="relative h-px w-full">
                              <div className="absolute inset-0 bg-linear-to-r from-transparent via-highlight/40 to-transparent transition-opacity duration-500"/>
                              <div className="absolute inset-0 bg-linear-to-r from-transparent via-highlight to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;