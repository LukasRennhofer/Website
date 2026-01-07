const highlights = [
  {
    title: "Vantor Engine v2",
    summary: "Rebuilt the core renderer, added GPU-driven culling, and shipped a modular pipeline.",
    description: "A complete rewrite of the rendering system from the ground up. Implemented advanced culling algorithms, optimized vertex buffers, and created a plugin-based architecture for custom shaders. The new engine handles 10x more geometry without breaking a sweat.",
    role: "Lead + Systems",
    image: "https://picsum.photos/600/400?random=31"
  },
  {
    title: "Realtime Visualizer",
    summary: "Built an interactive audio-reactive visual system for live performances.",
    description: "Developed a full-featured audio analysis engine that reacts to live music in real-time. Supports multiple visualization modes, custom color palettes, and synchronizes with stage lighting. Used in 4 professional live shows with 1000+ attendees each.",
    role: "Design + Graphics",
    image: "https://picsum.photos/600/400?random=32"
  },
  {
    title: "Dev Toolchain",
    summary: "CLI + task runner to standardize builds, lint, and previews across projects.",
    description: "Created an integrated development environment focused on DX. Single command to build, lint, run tests, and deploy. Integrated with GitHub Actions for CI/CD. Reduced onboarding time by 80% for new team members.",
    role: "DX + Infra",
    image: "https://picsum.photos/600/400?random=33"
  }
];

export default function WrappedProjects() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 sm:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">Highlights</h2>
          <p className="text-lg sm:text-xl text-white/40 tracking-[-0.01em]">The work that moved the needle in 2025</p>
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {highlights.map((project, idx) => (
            <div
              key={project.title}
              className="group"
              style={{
                opacity: 0,
                animation: `fadeIn 0.8s ease-out ${0.15 * idx}s forwards`
              }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-white/[0.15] hover:from-white/[0.05] hover:to-white/[0.02] transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative aspect-video lg:aspect-auto overflow-hidden order-2 lg:order-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5 text-white/95 group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl text-white/60 leading-relaxed mb-5">
                      {project.summary}
                    </p>
                    <p className="text-[15px] sm:text-[17px] text-white/45 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 mb-2 font-medium">Role</p>
                      <p className="text-base text-white/70 font-medium">{project.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
