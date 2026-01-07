import { useEffect, useRef, useState } from 'react';
import GradualBlur from '../external/GradualBlur';

export default function AboutStory() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section style={{ position: 'relative', height: '200vh', overflow: 'hidden' }} className="bg-black">
      <div style={{ height: '100%', overflowY: 'auto', padding: '6rem 1rem' }} className="sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-32 sm:space-y-40 lg:space-y-48">
        
        {/* Introduction */}
        <div 
          ref={el => sectionRefs.current[0] = el}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center"
        >
          <div 
            style={{
              opacity: visibleSections.has(0) ? 1 : 0,
              transform: visibleSections.has(0) ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              The Beginning
            </h2>
            <div className="space-y-6 text-[17px] sm:text-[19px] text-white/60 leading-[1.75]">
              <p>
                I'm Lukas Rennhofer, a creative developer from Austria. My journey into programming began in 2019 when I wrote my first lines of Python code. What started as simple text-based games quickly turned into a deep fascination with understanding how things work beneath the surface.
              </p>
              <p>
                I discovered early on that I wasn't just interested in making things function—I wanted to know why they worked the way they did. This curiosity has driven every project I've taken on since.
              </p>
            </div>
          </div>
          <div 
            className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08]"
            style={{
              opacity: visibleSections.has(0) ? 1 : 0,
              transform: visibleSections.has(0) ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            <img 
              src="https://picsum.photos/800/1000?random=10" 
              alt="Lukas working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* The Journey */}
        <div 
          ref={el => sectionRefs.current[1] = el}
          className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center"
        >
          <div 
            className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08] lg:order-first order-last"
            style={{
              opacity: visibleSections.has(1) ? 1 : 0,
              transform: visibleSections.has(1) ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <img 
              src="https://picsum.photos/800/1000?random=11" 
              alt="Development work"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            style={{
              opacity: visibleSections.has(1) ? 1 : 0,
              transform: visibleSections.has(1) ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              The Journey
            </h2>
            <div className="space-y-6 text-[17px] sm:text-[19px] text-white/60 leading-[1.75]">
              <p>
                From Discord bots to web development, I've explored many different areas of programming. Each project taught me something new about APIs, databases, user interfaces, and the importance of writing code that not only works but lasts.
              </p>
              <p>
                In 2021, I discovered JavaScript and React, which opened up a whole new world of possibilities. The ability to create interactive, beautiful experiences in the browser captivated me immediately.
              </p>
            </div>
          </div>
        </div>

        {/* Going Deeper */}
        <div 
          ref={el => sectionRefs.current[2] = el}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center"
        >
          <div 
            style={{
              opacity: visibleSections.has(2) ? 1 : 0,
              transform: visibleSections.has(2) ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              Going Deeper
            </h2>
            <div className="space-y-6 text-[17px] sm:text-[19px] text-white/60 leading-[1.75]">
              <p>
                My fascination with computer graphics began in 2022. Learning about WebGL, shaders, and real-time rendering felt like discovering a new language—one that lets you paint with mathematics and light.
              </p>
              <p>
                I started building my own renderers, experimenting with GPU programming, and diving into the world of game engines. The challenge of optimizing performance while creating something visually compelling became my new obsession.
              </p>
            </div>
          </div>
          <div 
            className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.08]"
            style={{
              opacity: visibleSections.has(2) ? 1 : 0,
              transform: visibleSections.has(2) ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
            }}
          >
            <img 
              src="https://picsum.photos/800/1000?random=12" 
              alt="Graphics work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Today */}
        <div 
          ref={el => sectionRefs.current[3] = el}
          className="text-center max-w-4xl mx-auto"
        >
          <div 
            style={{
              opacity: visibleSections.has(3) ? 1 : 0,
              transform: visibleSections.has(3) ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
              Today
            </h2>
            <div className="space-y-6 text-[17px] sm:text-[19px] text-white/60 leading-[1.75] mb-12">
              <p>
                I continue to explore the intersection of technology, design, and performance. Whether it's building GPU-driven renderers, crafting elegant user interfaces, or diving into low-level systems programming, I'm driven by a desire to understand and create.
              </p>
              <p>
                I believe in writing code that's not just functional, but thoughtful—code that considers performance, maintainability, and the experience of those who will use it.
              </p>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
              {[13, 14, 15, 16, 17, 18].map((num, idx) => (
                <div 
                  key={num}
                  className="aspect-square rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group"
                  style={{
                    opacity: visibleSections.has(3) ? 1 : 0,
                    transform: visibleSections.has(3) ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.05}s`
                  }}
                >
                  <img 
                    src={`https://picsum.photos/600/600?random=${num}`}
                    alt={`Work ${num}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div 
              style={{
                opacity: visibleSections.has(3) ? 1 : 0,
                transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              <p className="text-[17px] sm:text-[19px] text-white/60 mb-6">
                Let's create something together
              </p>
              <a
                href="mailto:hello@lukas-rennhofer.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-medium text-[15px] hover:bg-white/90 transition-all duration-300 group"
              >
                Get in touch
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        </div>
      </div>

      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
