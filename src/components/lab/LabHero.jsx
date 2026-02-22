import { useEffect, useState } from "react";

export default function LabHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 px-1 sm:px-2 lg:px-3 py-3 sm:py-4">
        <div className="relative h-full w-full rounded-[18px] sm:rounded-[24px] overflow-hidden border border-white/10">
          <video
            className="h-full w-full object-cover"
            src="/showcase.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/img/hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
        </div>
      </div>

      <div
        className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
          <span className="inline-block text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.2em] text-white/40">
            Welcome to
          </span>
        </div>
        
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] mb-10 sm:mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent leading-[0.95]">
          THE BLOG
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl font-normal text-white/50 max-w-4xl mx-auto leading-[1.4] mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] tracking-[-0.01em]">
          Stories, experiments, and ideas from the workshop. Where I explore new technologies, document learnings, and share what I experienced.
        </p>

        <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
          <a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.02em] text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-full transition-all duration-300 backdrop-blur-sm group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back Home
          </a>
        </div>
      </div>
    </section>
  );
}
