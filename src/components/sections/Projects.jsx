import React, { useState, useRef } from 'react';
import { projects, categories } from '../../data/projects';
import { Briefcase, Sparkles, Target, Globe, Palette, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';

const Projects = () => {

  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  //move slide dot when swipe via screentouch or trackpad 
  React.useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const card = container.querySelector('.snap-start');
      if (!card) return;
      const cardWidth = card.offsetWidth + 24;
      const newIndex = Math.round(container.scrollLeft / cardWidth);
      if (newIndex !== currentIndex) setCurrentIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, filteredProjects]);


  // Reset carousel when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const getVisibleCards = () => {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };
  
  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector('.snap-start');
      const gap = 24; // gap-6
      
      if (card) {
        const scrollAmount = (card.offsetWidth + gap) * index;
        container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        setCurrentIndex(index);
      }
    }
  };


  const nextSlide = () => {
    const visibleCards = getVisibleCards();
    const maxIndex = filteredProjects.length - visibleCards;
    if (currentIndex < maxIndex) {
       scrollToIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  // Category icons mapping
  const categoryIcons = {
    'All': Target,
    'Web Apps': Globe,
    'UI Components': Palette,
    'Full Stack': Zap,
  };

  return (
    <section id="projects" className="relative pt-2 pb-20  bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-highlight/10 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-highlight/10 opacity-20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-highlight/5 opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="group inline-flex items-center gap-2 px-4 py-2 bg-highlight/5 border border-highlight/20 rounded-full mb-6 hover:bg-highlight/10 hover:border-highlight/50 hover:shadow-[0_0_20px_rgba(214,214,214,0.1)] transition-all duration-500 cursor-default">
              <Briefcase className="w-4 h-4 text-highlight group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm text-highlight font-medium uppercase tracking-wider transition-colors duration-300">
                My Work
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Showcasing my best work and achievements
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                
                  <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary/10 opacity-100'
                      : 'bg-white/5 border border-white/10 group-hover:bg-white/10'
                  }`} />

                  <div className="relative flex items-center gap-2">
                    {React.createElement(categoryIcons[category], { className: 'w-4 h-4' })}
                    <span className="text-sm">{category}</span>
                  </div>

                  {activeCategory === category && (
                    <div className="absolute inset-0 rounded-full bg-highlight blur-xl opacity-30 -z-10" />
                  )}
                </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Carousel */}
        <FadeIn delay={200}>
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar"
              >
                <div className="flex gap-6 pb-4">
                  {filteredProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start flex"
                    >
                      <ProjectCard 
                        project={{
                          ...project,
                          image: `/images/projects/project${project.id}.png`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            

            {/* Navigation Arrows */}
            {filteredProjects.length > getVisibleCards()  && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>


                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filteredProjects.length - getVisibleCards()}
                  className="flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                  aria-label="Next projects"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
                
              </>
            )}

            {/* Navigation Dots */}
            {filteredProjects.length > 1 && (
                <div className="flex items justify-center gap-2 mt-8">
                    {Array.from({ length: filteredProjects.length - (getVisibleCards() - 1) }).map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? 'bg-highlight w-6 h-2 shadow-[0_0_10px_rgba(214,214,214,0.5)]'
                                : 'bg-white/20 w-2 h-2 hover:bg-white/40'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> 
            )}
        </div>
        </FadeIn>
        </div>
    </section>
  );
};

export default Projects;
