import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Github, MessageCircle} from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { useScrollSpy, scrollToSection } from '../../hooks/useScrollSpy';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-1000 w-full py-4 transition-all duration-300 ${isScrolled
        ? 'bg-black/30 backdrop-blur-lg'
        : 'bg-transparent'
      }`}
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Code className="w-6 h-6 text-highlight" />

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='text-2xl font-bold bg-linear-to-r from-highlight via-highlight/50 to-highlight/30 bg-clip-text text-transparent hover:opacity-80 transition-opacity'
              aria-label="Home"
            >
              {PERSONAL_INFO.logoText.split(' ')[0]}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-base font-medium transition-all duration-300 ${activeSection === link.id
                  ? 'text-white'
                  : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2">
  <div className="relative group">
    {/* Platinum Outer Glow */}
    <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-[17px] pointer-events-none" />
    
    <a
      href={SOCIAL_LINKS.github} 
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 overflow-hidden px-6 py-3 bg-white text-[#212121] hover:text-white hover:bg-black/40 font-medium text-base rounded-[17px] border border-white transition-all duration-500 flex items-center gap-2"
    >
      {/* Internal Shine Streak */}
      <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/20 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
      
      <Github className="w-5 h-5 relative z-10" />
      <span className="relative z-10">GitHub</span>
    </a>
  </div>
</div>
          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white hover:text-white/80 transition-colors"
            aria-label='menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3'>
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeSection === link.id
                ? 'text-white bg-white/10'
                : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
            >
                {link.label}
            </button>
          ))}

          
          <div className="grid grid-cols-2 gap-3 w-full mt-2">
            {/* WhatsApp Mobile Button */}
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-highlight/10 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 rounded-[17px] pointer-events-none" />
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 overflow-hidden w-full px-4 py-3.5 bg-white text-[#212121] hover:text-white hover:bg-black/40 font-medium text-base rounded-[17px] border border-white transition-all duration-500 flex items-center justify-center gap-2"
              >
                <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/20 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
                <MessageCircle className="w-5 h-5 relative z-10" />
                <span className="relative z-10">WhatsApp</span>
              </a>
            </div>

            {/* GitHub Mobile Button */}
            <div className="relative group w-full">
              <div className="absolute inset-0 bg-highlight/10 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 rounded-[17px] pointer-events-none" />
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 overflow-hidden w-full px-4 py-3.5 bg-white text-[#212121] hover:text-white hover:bg-black/40 font-medium text-base rounded-[17px] border border-white transition-all duration-500 flex items-center justify-center gap-2"
              >
                <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/20 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-700 ease-in-out pointer-events-none" />
                <Github className="w-5 h-5 relative z-10" />
                <span className="relative z-10">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

