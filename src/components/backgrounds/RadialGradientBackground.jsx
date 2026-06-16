import React from 'react';

const RadialGradientBackground = ({variant='hero', gradients=[], active = true}) => {
  const variants = {
    hero: [
      {
        position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[1400px] h-[1400px]',
        colors: [
          { color: 'rgba(59, 130, 246, 0.05)', stop: '0%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '40%' },  
          { color: 'rgba(229, 231, 235, 0.15)', stop: '60%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '80%' },  
          { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
        ],
        blur: '0px',
        opacity: 0.5,
      },

      {
        position: 'top-1 left-1',
        size: 'w-[1400px] h-[1400px]',
        colors: [
          { color: 'rgba(59, 130, 246, 0.05)', stop: '0%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '40%' },  
          { color: 'rgba(229, 231, 235, 0.15)', stop: '60%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '80%' },  
          { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
        ],
        blur: '0px',
        opacity: 0.5,
      },

      {
        position: 'bottom-1 right-1',
        size: 'w-[1400px] h-[1400px]',
        colors: [
          { color: 'rgba(59, 130, 246, 0.05)', stop: '0%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '40%' },  
          { color: 'rgba(229, 231, 235, 0.15)', stop: '60%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '80%' },  
          { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
        ],
        blur: '0px',
        opacity: 0.5,
      },
    ],
    
    about: [
      {
        position: 'bottom-0 left-[75%]',
        size: 'w-[700px] h-[700px]',
        colors: [
          { color: 'rgba(59, 130, 246, 0.05)', stop: '0%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '40%' },  
          { color: 'rgba(229, 231, 235, 0.15)', stop: '60%' }, 
          { color: 'rgba(59, 130, 246, 0.1)', stop: '80%' },  
          { color: 'rgba(0, 0, 0, 0)', stop: '100%' },
        ],
        blur: '0px',
        opacity: 0.5,
      },
    ],
  };

  const activeGradients = variant === 'custom' ? gradients : variants[variant] || variants.hero;

  const generateGradient = (colors) => {
  const colorStops = colors.map(({ color, stop }) => `${color} ${stop}`).join(', ');
  return `radial-gradient(circle at center, ${colorStops})`;
};

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-1000 ease-in-out"
      style={{
        opacity: active ? 1 : 0.8,
        transition: 'opacity 1s ease-in-out'
      }}
    >

      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
