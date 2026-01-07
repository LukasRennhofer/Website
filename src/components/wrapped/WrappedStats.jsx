import CountUp from "../external/CountUp";

const stats = [
  { label: "Lines of code", value: 428713 },
  { label: "Commits", value: 612 },
  { label: "GitHub stars", value: 3400 }
];

export default function WrappedStats() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 border-b border-white/[0.08] bg-gradient-to-b from-black via-black to-black/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-16 sm:mb-20 text-white tracking-tight text-center bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Year in Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-sm p-8 sm:p-10 hover:border-white/[0.15] transition-all duration-500 group"
              style={{
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${0.2 * index}s forwards`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent mb-4">
                  <CountUp
                    from={0}
                    to={item.value}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm sm:text-base text-white/40 leading-snug font-medium tracking-wide">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
