import GradientBlinds from "../external/GradientBlinds";
import GradientText from "../external/GradientText";

export default function WrappedHero() {
  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/50 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white transition-all duration-300 group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back Home
          </a>
        </div>
      </header>

      <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 sm:py-28 lg:py-32">
        <div className="opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
          <p className="text-[11px] sm:text-[13px] tracking-[0.2em] uppercase text-white/40 mb-4 font-medium">Lukas Rennhofer</p>
        </div>
        <div className="w-max mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Wrapped 2025
          </GradientText>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.02em] leading-[1.1] mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent pb-2">
          A year of building.
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/50 max-w-3xl leading-[1.6] mb-12 sm:mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] tracking-[-0.01em]">
          A cinematic snapshot of everything I shipped, broke, rebuilt, and learned in 2025.
          Featuring a self-made wrap video, deep dives into projects, experiments, and the messy bits.
        </p>

        <div className="relative w-full max-w-5xl aspect-video rounded-2xl border border-white/[0.08] overflow-hidden bg-black/40 shadow-2xl shadow-black/50 opacity-0 animate-[fadeIn_1s_ease-out_1s_forwards]">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="/wrapped-poster.png"
          >
            <source src="/showcase.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
    </>
  );
}
