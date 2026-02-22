import { useEffect, useState } from "react";

export default function VideoHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative w-full pt-32 sm:pt-24 md:pt-20 lg:pt-16 overflow-hidden bg-black">
        {/* Video */}
        <div className="relative w-full px-4 sm:px-6 lg:px-0 mb-10 sm:mb-16 lg:mb-24">
          <div className="relative w-full lg:w-[96%] lg:ml-auto aspect-[16/9] sm:aspect-video overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-none lg:rounded-l-2xl border border-white/10 lg:border-l lg:border-t lg:border-b lg:border-r-0">
            {/* <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              style={{
                transform: `scale(${1 + scrollY * 0.0003})`,
              }}
            >
              <source src="/showcase.mp4" type="video/mp4" />
            </video> */}
            {/* Just comment it out to enable video again*/}
            <img 
              src="/assets/img/hero.png" 
              alt="Hero" 
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="1920"
              height="1080"
              style={{
                transform: `scale(${1 + scrollY * 0.0003})`,
                willChange: "transform"
              }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20"
              style={{
                opacity: Math.min(0.5, scrollY / 400)
              }}
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-10 sm:mt-16 lg:mt-24 pb-16 sm:pb-24 lg:pb-32">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold tracking-[-0.02em] leading-[0.95] text-white mb-6 sm:mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards] bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              I’m curious about what happens underneath.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/50 leading-relaxed max-w-2xl opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
              Exploring low-level systems, engines, and ideas that are fun to play with.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
