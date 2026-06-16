import React from 'react';
import { services } from '../../data/services';
import * as Icons from 'lucide-react';
import { Wrench } from 'lucide-react';
import FadeIn from '../animations/FadeIn';

const Services = () => {
  return (
    <section id="services" className="relative pt-2 pb-20 bg-black overflow-x-hidden">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-highlight/10 rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-highlight/10 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
             
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-highlight/5 border border-highlight/20 rounded-full mb-6 hover:bg-highlight/10 hover:border-highlight/50 transition-all duration-500 cursor-default">
              <Wrench className="w-4 h-4 text-highlight group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm text-highlight font-medium uppercase tracking-wider">What I Offer</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Built for innovation.
            </h2>
          </div>
        </FadeIn>

        {/* Top Row: Large Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={100 + index * 100}>
                <div className="group relative p-px flex flex-col transition-all duration-500">
                  {/* THE GLOW: Animated Platinum-Blue aura */}
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />

                  {/* THE GLASS CARD */}
                  <div className="relative z-10 w-full h-full bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-8 flex flex-col transition-all duration-500 hover:scale-105 overflow-hidden">
                    
                    {/* Internal Shine Reflection */}
                    <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

                    <div className="mb-6 relative z-10">
                      <div className="relative p-3 w-fit bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent border border-highlight/30 rounded-xl">
                        <IconComponent className="w-8 h-8 text-highlight transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>

                    <div className="flex-1 relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-highlight transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Row: Smaller Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => {
            const IconComponent = Icons[service.icon] || Icons.Code2;
            return (
              <FadeIn key={service.id} delay={300 + index * 100}>
                <div className="group relative p-px flex flex-col transition-all duration-500">
                  {/* THE GLOW: Animated Platinum-Blue aura */}
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/30 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />

                  {/* THE GLASS CARD */}
                  <div className="relative z-10 w-full h-full bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover:border-highlight/50 rounded-2xl p-6 flex flex-col transition-all duration-500 hover:scale-105 overflow-hidden">
                    
                    {/* Internal Shine Reflection */}
                    <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/5 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

                    <div className="mb-4 relative z-10">
                      <div className="relative p-2.5 w-fit bg-linear-to-r from-highlight/20 via-highlight/10 to-transparent border border-highlight/30 rounded-xl">
                        <IconComponent className="w-6 h-6 text-highlight" />
                      </div>
                    </div>
                    <div className="flex-1 relative z-10">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-highlight transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;