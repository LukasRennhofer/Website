import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Vantor Engine",
    category: "Graphics Engine",
    description: "A performance-orientated 3D realtime rendering built from scratch with custom GPU-driven culling, modern shader pipeline, and modular architecture.",
    longDescription: "This is my personal hobby-project, which is focused on rendering massive planet-scaled worlds inspired from No Mans Sky, because no commercial engine can handle something like this, so I took it into my own hands.",
    tech: ["C++", "Git", "Python", "NVRHI", "..."],
    mainImage: "/assets/img/projects/Vantor/1.jpg",
    gallery: [
      "/assets/img/projects/Vantor/LogoFull.png",
      "/assets/img/projects/Vantor/1.jpg",
    ],
    github: "https://github.com/lukasrennhofer/VantorEngine",
    demo: null,
    year: "2025-Now",
    status: "Active Development"
  }
];

export default function ProjectsGrid() {
  const [expandedId, setExpandedId] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openLightbox = (img) => {
    setLightboxImage(img);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <section className="py-24 sm:py-32 bg-black">
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-[fadeIn_0.2s_ease-out]"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center group z-[101]"
            aria-label="Close image"
          >
            <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="max-w-[90vw] max-h-[90vh] p-4 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightboxImage}
              alt="Enlarged view"
              className="w-full h-full object-contain rounded-xl border border-white/20 shadow-2xl"
            />
          </div>
        </div>
      )}

      <div className="max-w-[100vw] mx-auto">
        {/* Header */}
        <div className="mb-20 sm:mb-24 text-center px-4 sm:px-6">
          <p className="text-[13px] text-white/40 uppercase tracking-[0.15em] mb-3">
            {projects.length} Projects
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured Work
          </h2>
        </div>

        {/* Projects List */}
        <div className="space-y-1">
          {projects.map((project, index) => {
            const isExpanded = expandedId === project.id;
            
            return (
              <article
                key={project.id}
                className="group"
                style={{
                  opacity: 0,
                  animation: `fadeIn 0.6s ease-out ${0.1 * index}s forwards`
                }}
              >
                {/* Main Project Bar */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full text-left border-y border-white/[0.08] hover:border-white/[0.15] bg-gradient-to-r from-black via-black to-black hover:from-white/[0.02] hover:via-white/[0.01] hover:to-black transition-all duration-500 cursor-pointer"
                >
                  <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">
                            {project.category}
                          </span>
                          <span className="text-[13px] text-white/30">{project.year}</span>
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium uppercase tracking-[0.1em] border ${
                            project.status === 'Active Development' 
                              ? 'bg-green-500/20 border-green-500/30 text-green-300'
                              : project.status === 'Completed'
                              ? 'bg-blue-500/20 border-blue-500/30 text-blue-300'
                              : 'bg-white/10 border-white/20 text-white/60'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 text-white/95 group-hover:text-white transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-3xl">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-[13px] text-white/40 font-medium">
                          {isExpanded ? 'Close' : 'View Details'}
                        </div>
                        <div className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : 'rotate-0'
                        }`}>
                          <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-b border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-black relative">
                    {/* Floating Close Button */}
                    {isExpanded && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center group shadow-2xl shadow-black/50"
                        aria-label="Close project details"
                      >
                        <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                    
                    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
                      <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
                        <div>
                          {/* Long Description */}
                          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-white/95 tracking-tight">
                            About this project
                          </h4>
                          <p className="text-[17px] sm:text-[19px] text-white/60 leading-[1.75] mb-12">
                            {project.longDescription}
                          </p>

                          {/* Gallery */}
                          <h4 className="text-2xl sm:text-3xl font-semibold mb-6 text-white/95 tracking-tight">
                            Gallery
                          </h4>
                          <div className="grid grid-cols-2 gap-4 mb-12">
                            {project.gallery.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={() => openLightbox(img)}
                                className="aspect-video rounded-xl overflow-hidden border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 cursor-zoom-in group"
                              >
                                <img
                                  src={img}
                                  alt={`${project.title} screenshot ${idx + 1}`}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          {/* Tech Stack */}
                          <div className="mb-10">
                            <h4 className="text-xl font-semibold mb-5 text-white/90 tracking-tight">
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[14px] text-white/70 font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Links */}
                          <div>
                            <h4 className="text-xl font-semibold mb-5 text-white/90 tracking-tight">
                              Links
                            </h4>
                            <div className="flex flex-col gap-3">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] hover:border-white/[0.2] text-[14px] font-medium text-white/70 hover:text-white transition-all duration-300 group/btn"
                                >
                                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                  </svg>
                                  View on GitHub
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.15] hover:border-white/[0.25] text-[14px] font-medium text-white/80 hover:text-white transition-all duration-300 group/btn"
                                >
                                  Watch Demo
                                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
