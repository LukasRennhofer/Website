import { useEffect, useRef, useState } from 'react';

export default function Quote() {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  const testimonials = [
    {
      quote: "... Impressive work you show, for such a young person. ...",
      author: "Ton Roosendaal",
      role: "Former Blender Founder & CEO",
      image: "/about/blender-roosendaal.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, 1]));
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRefs.current[1]) observer.observe(sectionRefs.current[1]);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section ref={el => sectionRefs.current[0] = el} className="relative z-30 py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 border-y border-white/[0.08] bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 sm:space-y-10">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 leading-[1.4] font-normal tracking-tight">
              I've always been obsessed with things that feel huge and unreal — the kind of stuff that makes you stop and just stare for a second.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/70 leading-[1.5] font-light tracking-tight">
              That's basically what I chase in everything I make. Whether I'm working on my next project, competing in robotics, or studying computer science and graphics, I'm always trying to capture that feeling and turn it into something you can actually see.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/60 leading-[1.5] font-light tracking-tight">
              I like working with tech and building things that feel real, detailed, and impressive. If something I make makes people stop and look twice, that's the goal.
            </p>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={el => sectionRefs.current[1] = el} className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 bg-black border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                opacity: visibleSections.has(1) ? 1 : 0,
                transform: visibleSections.has(1) ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`
              }}
              className="grid md:grid-cols-[0.5fr_1.5fr] gap-12 lg:gap-20 items-center"
            >
              {/* Image on the left */}
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote on the right */}
              <div className="space-y-8">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.6] sm:leading-[1.7] lg:leading-[1.8] font-light tracking-[-0.01em]">
                  "{testimonial.quote}"
                </p>

                <div>
                  <p className="text-lg font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-base text-white/50 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
