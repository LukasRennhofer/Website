import { useState, useEffect } from 'react';
import Dither from '../external/Dither';
import CustomCursor from '../home/CustomCursor';

export default function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <CustomCursor />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Red Dither background */}
        <div className="absolute inset-0">
          <Dither waveColor={[1.0, 0.0, 0.0]} enableMouseInteractio={true} />
        </div>

        {/* Fixed glass header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/[0.08]">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex items-center justify-between">
            <a 
              href="/"
              className="text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-[14px] font-medium">Back</span>
            </a>
          </div>
        </header>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-12">
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent">
              Under Construction
            </span>
          </h1>
        </div>
      </section>
    </>
  );
}
