import React, { useState, useEffect } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../backgrounds/RadialGradientBackground';

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = PERSONAL_INFO.roles || ['Fullstack Developer', 'Software Developer'];
  const typingSpeed = isDeleting ? 10 : 50;
  
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
    
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, roles]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <RadialGradientBackground variant="hero" />

      {/* MOBILE CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 md:hidden overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-full w-[200%] translate-x-[50%] opacity-60">
          <img
            src="/developer-portrait.png"
            alt=""
            className="w-full h-full object-cover object-left grayscale-[10%]"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10" />
      </div>
      
      {/* Content Container - Adjusted px-8 for mobile spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pt-24 pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          
          {/* Left Column - Content */}
          <div className="text-left relative z-20">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-2.5 py-2.75 mb-8 bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent border border-highlight/30 rounded-full backdrop-blur-sm"> 
                <Star className="w-4 h-4 text-highlight fill-highlight" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  {PERSONAL_INFO.title} | Based in {PERSONAL_INFO.location}
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="mb-6">
                <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 whitespace-nowrap drop-shadow-2xl">
                  I'm {PERSONAL_INFO.name}
                </h1>

                <h3 className="text-2xl md:text-3xl font-bold leading-tight min-h-[1.2em]">
                  <span className="text-highlight">
                    {displayText}
                    <span className="animate-pulse border-r-2 border-highlight ml-1"></span>
                  </span>
                </h3>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8 drop-shadow-md">
                I bridge the gap between vision and reality through clean code and cutting-edge technology. Whether it's architecting dynamic React applications or streamlining workflows with AI automation, I’m dedicated to building high-performance digital products that solve real-world problems.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="relative group w-fit mb-12 z-[100]">
                <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-[17px] pointer-events-none" />
                <button
                  onClick={() => scrollToSection('contact')}
                  className="relative z-10 overflow-hidden inline-flex items-center bg-white text-[#212121] hover:text-white hover:bg-black/40 rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white transition-all duration-500"
                >
                  <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/20 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
                  <span className="relative z-10">Get in Touch</span>
                </button>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-full">
                {STATS.map((stat, index) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute left-0 top-0 w-1 h-full bg-linear-to-b from-highlight via-highlight/50 to-transparent rounded-full" />
                    <div className="text-2xl font-normal text-white mb-2 font-mono drop-shadow-md">
                      {stat.value}
                    </div>
                    <p className="text-sm text-white/60 leading-snug">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Desktop Image */}
          <div className="hidden md:block">
            <FadeIn delay={200}>
              <div className="relative animate-float">
                <div className="absolute -inset-4 bg-highlight/20 rounded-full blur-[50px] opacity-50 animate-pulse pointer-events-none" />

                <div className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] mx-auto lg:ml-auto group">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
                    <div className="absolute inset-0 z-0">
                      <div className="absolute inset-[-2px] bg-linear-to-r from-highlight/20 via-highlight/10 to-highlight animate-spin-flow rounded-2xl"></div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden m-px h-[calc(100%-2px)] z-10">
                      <img
                        src="/developer-portrait.png"
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-[85%]">
                    <FadeIn delay={500}>
                      <div className="flex items-center justify-center gap-5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                        <SiReact className="w-6 h-6 text-highlight hover:scale-110 transition-transform" />
                        <SiNextdotjs className="w-6 h-6 text-highlight hover:scale-110 transition-transform" />
                        <SiNodedotjs className="w-6 h-6 text-highlight hover:scale-110 transition-transform" />
                        <SiTailwindcss className="w-6 h-6 text-highlight hover:scale-110 transition-transform" />
                        <SiMongodb className="w-6 h-6 text-highlight hover:scale-110 transition-transform" />
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce z-50 p-2"
      >
        <ChevronDown className="w-8 h-8 text-highlight" />
      </button>
    </section>
  );
};

export default Hero;