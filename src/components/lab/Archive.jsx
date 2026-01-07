import { useState, useEffect, useRef } from 'react';

// Sample papers data - replace with real data
const papers = [
  {
    title: "Multi Render Hardware Interfaces",
    year: "2025",
    venue: "Personal Research",
    abstract: "An paper for deep diving into rendering architecture and as a preperation for EEVEE contribution.",
    pdfUrl: "/papers/MRHI_Lukas_Rennhofer_2025_1_0_0.pdf",
    type: "paper"
  }
];

const talks = [
  // Empty for now - will show "No talks yet"
];

export default function Archive() {
  const [activeTab, setActiveTab] = useState('papers');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentItems = activeTab === 'papers' ? papers : talks;

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 bg-black border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div 
          className="mb-12 sm:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Archive
          </h2>
          <p className="text-[17px] sm:text-[19px] text-white/60 leading-[1.75]">
            Papers, talks, and presentations
          </p>
        </div>

        {/* Tab navigation */}
        <div 
          className="flex gap-3 sm:gap-4 mb-12 sm:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
          }}
        >
          <button
            onClick={() => setActiveTab('papers')}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-[14px] sm:text-[15px] transition-all duration-300 ${
              activeTab === 'papers'
                ? 'bg-white text-black'
                : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.08] hover:text-white/80 border border-white/[0.08]'
            }`}
          >
            Papers ({papers.length})
          </button>
          <button
            onClick={() => setActiveTab('talks')}
            className={`px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-medium text-[14px] sm:text-[15px] transition-all duration-300 ${
              activeTab === 'talks'
                ? 'bg-white text-black'
                : 'bg-white/[0.05] text-white/60 hover:bg-white/[0.08] hover:text-white/80 border border-white/[0.08]'
            }`}
          >
            Talks ({talks.length})
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          {currentItems.length === 0 ? (
            <div 
              className="text-center py-16 sm:py-20"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              <p className="text-[17px] sm:text-[19px] text-white/40">
                No {activeTab} yet
              </p>
            </div>
          ) : (
            currentItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 sm:p-8 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300 group"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + idx * 0.05}s`
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white/95 group-hover:text-white transition-colors duration-300 mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-[14px] text-white/40">
                      <span>{item.year}</span>
                      <span>•</span>
                      <span>{item.venue}</span>
                    </div>
                  </div>
                  <a
                    href={item.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/[0.15] rounded-lg text-[14px] text-white/70 hover:text-white transition-all duration-300 shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                </div>
                <p className="text-[15px] sm:text-[16px] text-white/60 leading-[1.7] group-hover:text-white/70 transition-colors duration-300">
                  {item.abstract}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
