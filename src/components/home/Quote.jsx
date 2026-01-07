import { useRef } from 'react';
import VariableProximity from "../external/VariableProximity";

export default function Quote() {
  const containerRef = useRef(null);

  return (
    <section className="relative z-30 py-16 sm:py-24 lg:py-36 px-4 sm:px-6 lg:px-12 border-y border-white/[0.08] bg-black">
      <div className="max-w-5xl mx-auto" ref={containerRef}>
        <div style={{ position: 'relative' }}>
          <VariableProximity
            label="Somewhere, something incredible is waiting to be known."
            className="variable-proximity-demo text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/60 leading-[1.25] italic font-light tracking-tight"
            fromFontVariationSettings="'wght' 300, 'opsz' 12"
            toFontVariationSettings="'wght' 700, 'opsz' 72"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
          />
        </div>
        <span className="block mt-6 sm:mt-8 text-[12px] sm:text-[13px] text-white/30 font-medium tracking-[0.1em] uppercase">
          — Carl Sagan
        </span>
      </div>
    </section>
  );
}
