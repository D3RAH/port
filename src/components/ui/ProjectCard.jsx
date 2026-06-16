import React from 'react';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

const ProjectCard = ({project}) => {
  const { title, description, image, technologies, metrics, demoUrl, githubUrl } = project;

  return (
    <div className="group relative z-10 flex flex-col h-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-highlight/50 transition-all duration-500">
      <div className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none -z-10" />
      
      {/* Container for Image and Overlays */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/10 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out pointer-events-none" />

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex items-center gap-3 z-20">
          {demoUrl && (
              <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group/btn p-2.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/20 hover:border-highlight/50 transition-all duration-500 hover:scale-110 overflow-hidden"
              title="View Demo"
            >
              <div className="absolute inset-0 bg-highlight/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <ExternalLink className="relative z-10 w-4 h-4 text-white group-hover/btn:text-highlight transition-colors duration-300" />
            </a>
         )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/btn p-2.5 bg-black/40 backdrop-blur-md rounded-lg border border-white/20 hover:border-highlight/50 transition-all duration-500 hover:scale-110 overflow-hidden"
            title="View Code"
          >
          <div className="absolute inset-0 bg-highlight/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
            <Github className="relative z-10 w-4 h-4 text-white group-hover/btn:text-highlight transition-colors duration-300" />
          </a>
        )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-sm border border-white/20 rounded-full">
            {project.category}
          </span>
        </div>
      </div> {/* Correctly closing the image section here */}

      {/* Content Section - This was being cut off before */}
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-highlight transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-highlight bg-highlight/5 border border-white/10 rounded-lg hover:bg-highlight/20 hover:border-highlight/40 hover:shadow-[0_0_15px_rgba(214,214,214,0.1)] transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {metrics && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10 mt-auto">
            <TrendingUp className="w-4 h-4 text-highlight" />
            <p className="text-sm font-medium text-highlight/90 tracking-wide">{metrics}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;