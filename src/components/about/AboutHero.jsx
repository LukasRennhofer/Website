import { useState, useEffect } from 'react';
import Aurora from '../external/Aurora';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0">
        <Aurora />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 max-w-5xl mx-auto pt-20 text-center">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
            This is me
          </span>
        </h1>

        <p 
          className="text-xl sm:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-[1.6]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
          }}
        >
          A journey through code, creativity, and curiosity
        </p>
      </div>
    </section>
  );
}
