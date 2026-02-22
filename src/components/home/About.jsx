import { useRef, useEffect, useState } from "react";

export default function About() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-12 relative z-20 bg-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left column - Main heading */}
          <div 
            style={{
              opacity: 1,
              transform: `translateY(0)`,
              transition: "opacity 0.1s ease-out"
            }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white">
              I'm Lukas. I like understanding how things work.
            </h2>
          </div>

          {/* Right column - Body text */}
          <div 
            className="space-y-5 sm:space-y-6"
            style={{
              opacity: 1,
              transform: `translateY(0)`,
              transition: "opacity 0.1s ease-out"
            }}
          >
            <p className="text-base sm:text-lg lg:text-xl text-white/50 leading-[1.75] font-normal tracking-[-0.01em]">
              I spend most of my time exploring low-level systems, engines, and ideas that sit between technology and research.
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-white/50 leading-[1.75] font-normal tracking-[-0.01em]">
              For me, writing software is less about shipping quickly and more about understanding deeply and building things that hold up over time.
            </p>
            <div className="pt-3 sm:pt-4">
              <a href="/projects" className="inline-flex items-center gap-2 text-[13px] sm:text-[14px] font-medium text-white/60 hover:text-white transition-colors duration-300 group">
                Explore my work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
