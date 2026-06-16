import React from 'react';
import { Github, Linkedin, Twitter, Instagram, MessageCircle, Mail, MapPin, Heart } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animations/FadeIn';

const Footer = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    whatsapp: MessageCircle,
  };

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-highlight/5 opacity-20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/5 opacity-20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <FadeIn delay={0}>
            <div className="md:col-span-1">
              <h3 className="text-3xl font-bold bg-linear-to-r from-white via-highlight to-white/80 bg-clip-text text-transparent mb-4 tracking-tight">
                {PERSONAL_INFO.name.split(' ')[0]}
              </h3>

              <p className="text-white/50 text-sm mb-6 leading-relaxed max-w-xs">
                {PERSONAL_INFO.tagline}
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-white/[0.08] hover:border-highlight/30 transition-all duration-300"
                >
                  <div className="p-2 bg-highlight/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4 text-highlight" />
                  </div>
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                <div className="flex items-center gap-3 p-3 bg-white/[0.03] border border-white/10 rounded-xl">
                  <div className="p-2 bg-highlight/10 rounded-lg">
                    <MapPin className="w-4 h-4 text-highlight" />
                  </div>
                  <span className="text-white/60 text-sm">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:contents gap-8">
            {/* Quick Links Column */}
            <FadeIn delay={100}>
              <div>
                <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
                <ul className="space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.id}>
                      <button
                        onClick={() => scrollToSection(link.id)}
                        className="group flex items-center gap-2 text-white/50 hover:text-highlight transition-all duration-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-highlight group-hover:w-3 transition-all duration-300" />
                        <span className="text-sm">{link.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
                

            {/* Social Connect Column */}
            <FadeIn delay={200}>
              <div>
                <h4 className="text-white font-semibold mb-6 text-lg">Connect With Me</h4>
                <p className="text-white/50 text-sm mb-6 leading-relaxed">
                  Let's connect and create something amazing together.
                </p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return Icon ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative p-4 bg-white/[0.03] rounded-xl border border-white/10 hover:border-highlight/40 hover:scale-110 transition-all duration-300"
                        aria-label={`Connect on ${platform}`}
                      >
                        <Icon className="w-5 h-5 text-white/40 group-hover:text-highlight transition-colors duration-300" />
                        {/* Aura Glow Effect */}
                        <div className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 blur-md rounded-xl transition-all duration-300 pointer-events-none" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={300}>
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <p className="text-white/40 text-xs tracking-wide">
                © {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()}. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;