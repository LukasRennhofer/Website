import { useState, useEffect } from 'react';
import Dither from '../external/Dither';
import CustomCursor from '../home/CustomCursor';
import Header from '../home/Header';

export default function UnderConstruction() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <CustomCursor />
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Red Dither background */}
        <div className="absolute inset-0">
          <Dither waveColor={[1.0, 0.0, 0.0]} enableMouseInteractio={true} />
        </div>

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
