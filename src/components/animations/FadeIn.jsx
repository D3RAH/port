import React, { useEffect, useRef, useState } from "react";

const FadeIn = ({ children, delay = 0, duration = 500, threshold = 0.1 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger animation when element enters viewport
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, isVisible]);

  return (
    <div
      ref={elementRef}
      className={isVisible ? 'animate-fadeIn' : 'opacity-0'}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
        animationFillMode: 'both'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
