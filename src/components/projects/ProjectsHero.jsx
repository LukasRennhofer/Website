import Dither from "../external/Dither";

export default function ProjectsHero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Dither
            waveColor={[0.0, 1.0, 1.0]}
            mouseRadius={0.3}
            enableMouseInteraction={true}
            colorNum={4}
            waveAmplitude={0.39}
            waveFrequency={1.1}
            waveSpeed={0.05}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-[1]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <span className="inline-block text-[11px] sm:text-[13px] font-medium uppercase tracking-[0.2em] text-white/40">
              Portfolio
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] leading-[0.95] mb-10 sm:mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent pb-2">
            Projects
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl font-normal text-white/50 max-w-4xl mx-auto leading-[1.4] opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] tracking-[-0.01em]">
            A collection of systems, tools, and experiments built with precision and care. Each project represents a deep dive into technology and design.
          </p>
        </div>
      </section>
    </>
  );
}
