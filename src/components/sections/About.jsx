import React, { useState} from 'react';
import { Download, Code2, Sparkles, Zap, BrainCircuit, Database } from 'lucide-react';
import { SiReact, SiNextdotjs,SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiGithub, SiAnthropic, SiGooglegemini } from 'react-icons/si';
import { PERSONAL_INFO, ABOUT_STATS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const About = () => {

  const [isHoveringGrid, setIsHoveringGrid] = useState(false);
  
  const skills = [
    { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'GitHub', icon: SiGithub, color: '#FFFFF' },
    { name: 'Gemini', icon: SiGooglegemini, color: '#8E75FF' },
    { name: 'Anthropic', icon: SiAnthropic, color: '#D97757' },
  ];

  return (
    <section id="about" className="relative py-2 bg-transparent">
      <div className="pointer-events-none">
      <RadialGradientBackground variant="about" active={isHoveringGrid} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Content */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <FadeIn delay={60}>
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-highlight/30 bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent rounded-full w-fit">
                    <Code2 className="w-4 h-4 text-highlight" />
                    <span className="text-sm text-white font-medium tracking-wide">
                      Software Developer | Ai automation Engineer                    </span>
                    <Sparkles className="w-4 h-4 text-highlight" />
                  </div>
                </FadeIn>

                <FadeIn delay={100}>
                  <h2 className="text-4xl lg:text-5xl font-normal text-white leading-[1.1] ">
                    Building Scalable Apps & Autonomous Systems
                  </h2>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="flex flex-col gap-4">
                    {PERSONAL_INFO.bio.map((paragraph, index) => (
                      <p key={index} className="text-base text-white/70 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeIn>
                  
                <FadeIn delay={300}>
                  <div className="grid grid-cols-3 gap-8 ml-4">
                    {ABOUT_STATS.map((stat, index) => (
                      <div key={index} className="relative">
                        {/* The Vertical Accent Bar*/}
                        <div className="absolute -left-4 top-0 w-1 h-full bg-linear-to-b from-highlight via-highlight/50 to-transparent rounded-full" />
                        
                        <div className="text-3xl font-normal text-white mb-2 font-mono">
                          {stat.value}
                        </div>
                        
                        <p className="text-sm text-white/60 leading-snug">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
 

                <FadeIn delay={400}>
                  <div className="relative group w-fit z-[100]">
                    <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-full pointer-events-none" />
                    <button
                      onClick={() => window.open(PERSONAL_INFO.resume, '_blank')}
                      className="relative z-10 overflow-hidden inline-flex items-center gap-3 bg-white text-black hover:text-white hover:bg-black/40 border border-white rounded-full px-8 py-4 text-base font-medium transition-all duration-500"
                    >
                      <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/20 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
                      <Download className="relative z-10 w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                      <span className="relative z-10">Download Resume</span>
                    </button>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Right Column - Info Grid */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-4">

                {/* Expertise Card */}
                <div className="col-span-2 relative group p-px transition-all duration-500">
                  {/* THE GLOW: Matching Tech Stack Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />

                  {/* THE GLASS CARD */}
                  <div className="relative z-10 overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105">

                    {/* Internal Shine Reflection */}
                    <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out" />

                    <div className="flex items-start gap-4">
                      <div className="relative z-10 p-3 bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent border border-highlight/30 rounded-xl">
                        <Zap className="w-6 h-6 text-highlight" />
                      </div>
                      <div className="relative z-10 flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2">Velocity UI</h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          Building high-performance interfaces with React and Next.js that prioritize speed, SEO, and seamless user transitions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clean Code Card */}
                <div className="relative group p-px transition-all duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />
                  <div className="relative z-10 overflow-hidden h-full bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105">

                    <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out" />

                    <div className="relative z-10 p-3 bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent border border-highlight/30 rounded-xl w-fit mb-4">
                      <BrainCircuit className="w-5 h-5 text-highlight" />
                    </div>
                    <h3 className="relative z-10 text-base font-semibold text-white mb-2">Clean Workflow</h3>
                    <p className="relative z-10 text-sm text-white/70 leading-relaxed">
                      Architecting autonomous systems that leverage LLMs to automate complex decision-making and business logic.
                    </p>
                  </div>
                </div>

                {/* Performance Card */}
                <div className="relative group p-px transition-all duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />
                  <div className="relative z-10 overflow-hidden h-full bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105">

                    <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out" />

                    <div className="relative z-10 p-3 bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent border border-highlight/30 rounded-xl w-fit mb-4">
                      <Database className="w-5 h-5 text-highlight" />
                    </div>
                    <h3 className="relative z-10 text-base font-semibold text-white mb-2">Cloud & Databases</h3>
                    <p className="relative z-10 text-sm text-white/70 leading-relaxed">
                      Managing scalable SQL/NoSQL databases and deploying robust applications via CI/CD pipelines to AWS, Vercel.
                    </p>
                  </div>
                </div>

                {/* Stats Card */}
                <div className="col-span-2 relative group p-px transition-all duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />
                  <div className="relative z-10 overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-6 transition-all duration-500 hover:scale-105">

                    <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out" />
      
                    <div className="relative z-10 grid grid-cols-3 gap-6 text-center">
                      <div className="group/stat">
                        <div className="text-2xl font-bold text-highlight mb-1 group-hover/stat:scale-110 transition-transform duration-300">100%</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/60">CI/CD Automated</div>
                      </div>
                      <div className="group/stat">
                        <div className="text-2xl font-bold text-highlight mb-1 group-hover/stat:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/60">Uptime</div>
                      </div>
                      <div className="group/stat">
                        <div className="text-2xl font-bold text-highlight mb-1 group-hover/stat:scale-110 transition-transform duration-300">100%</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/60">Production Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Skills Grid Section */}
          <FadeIn delay={500}>
            <div className="flex flex-col items-center gap-8 relative z-20"
            onMouseEnter={() => setIsHoveringGrid(true)}
            onMouseLeave={() => setIsHoveringGrid(false)}
          >
              <div className="text-center">
                <h3 className="text-2xl font-normal text-white mb-2">
                  Tech Stack & Expertise
                </h3>
                <p className="text-sm text-white/60">
                  Technologies I work with to build amazing products
                </p>
              </div>

              {/* ── MOBILE: 2-row infinite marquee ── */}
              <div className="md:hidden w-full overflow-hidden">
                {[skills.filter((_, i) => i % 2 === 0), skills.filter((_, i) => i % 2 !== 0)].map((row, rowIndex) => (
                  <div key={rowIndex} className="flex mb-4 last:mb-0">
                    <div
                      className="flex gap-4 shrink-0"
                      style={{
                        animation: `marquee-row 18s linear infinite`,
                        animationDelay: rowIndex === 1 ? '-9s' : '0s',
                      }}
                    >
                      {[...row, ...row, ...row].map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                          <div
                            key={index}
                            className="shrink-0 w-24 relative group p-1 flex flex-col items-center justify-center"
                          >
                            <div className="relative z-10 w-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-4 flex flex-col items-center justify-center">
                              <IconComponent
                                className="text-2xl mb-2"
                                style={{ color: skill.color }}
                              />
                              <div className="text-[11px] text-white/70 font-medium text-center">
                                {skill.name}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-5xl">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="group relative p-1 flex flex-col items-center justify-center transition-all duration-500"
                    >
                      {/* THE GLOW: Animated Platinum-Blue aura behind the glass */}
                      <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />

                      {/* THE GLASS CARD: Backdrop blur and thin border */}
                      <div className="relative z-10 w-full h-full bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105">
                        
                        {/* Internal Shine Reflection */}
                        <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

                        <IconComponent 
                          className="text-3xl mb-3 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                          style={{ color: skill.color }} 
                        />
                        
                        <div className="text-sm text-white/70 font-medium text-center group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
      </div>
    </section>
  );
};

export default About;
