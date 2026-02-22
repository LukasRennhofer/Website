import { useEffect, useRef, useState } from 'react';

export default function Testimonials() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  const testimonials = [
    {
      quote: "Lukas shows a rare understanding of deep technical systems. His work on Blender contributions demonstrates both mastery and thoughtfulness in software architecture.",
      author: "Ton Rosendahl",
      role: "Blender Creator & Core Developer",
      initials: "TR"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, 0]));
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRefs.current[0]) observer.observe(sectionRefs.current[0]);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={el => sectionRefs.current[0] = el} className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent leading-tight">
            What Others Say
          </h2>
          <p className="text-[17px] sm:text-[19px] text-white/60 max-w-2xl leading-[1.75]">
            Insights from collaborators and people I've worked with across projects and research.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                opacity: visibleSections.has(0) ? 1 : 0,
                transform: visibleSections.has(0) ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
              }}
              className="group rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] p-8 sm:p-10 lg:p-12 hover:border-white/[0.2] transition-all duration-500 hover:bg-gradient-to-br hover:from-white/[0.12] hover:to-white/[0.04]"
            >
              {/* Quote mark */}
              <div className="mb-6 sm:mb-8">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white/20 group-hover:text-white/30 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-3-6.142-3.142C3.101 2.1 2 4.429 2 6.19V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-3-6.142-3.142C15.101 2.1 14 4.429 14 6.19V20c0 1 0 1 1 1z" />
                </svg>
              </div>

              {/* Quote text */}
              <blockquote className="mb-8 sm:mb-10">
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] font-light tracking-[-0.01em]">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Avatar */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm sm:text-base font-semibold text-white/60 group-hover:text-white/80 transition-colors duration-500">
                    {testimonial.initials}
                  </span>
                </div>

                {/* Name and role */}
                <div>
                  <p className="text-base sm:text-[17px] font-semibold text-white leading-tight">
                    {testimonial.author}
                  </p>
                  <p className="text-sm sm:text-[15px] text-white/50 group-hover:text-white/70 transition-colors duration-500 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/10"></div>
        </div>
      </div>
    </section>
  );
}
