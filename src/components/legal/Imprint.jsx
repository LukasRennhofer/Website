import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";

export default function Imprint() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/50 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white transition-all duration-300 group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Home
          </a>
        </div>
      </header>

      {/* Content */}
      <article className="pt-32 sm:pt-40 pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[780px] mx-auto">
          {/* Header */}
          <div className="mb-16 sm:mb-20 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
              Imprint
            </h1>
            <p className="text-xl sm:text-2xl text-white/50 leading-relaxed tracking-[-0.01em]">
              Legal information about this website
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 text-[17px] sm:text-[19px] leading-[1.75] text-white/65 tracking-[-0.01em]">
            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Information according to Austrian E-Commerce Law (ECG)
              </h2>
              <div className="space-y-2">
                <p className="text-white/80 font-medium">Lukas Rennhofer</p>
                <p>Schulstrasse 1</p>
                <p>2640 Enzenreith</p>
                <p>Austria</p>
              </div>
              <p className="mt-4 text-white/50 text-base">
                This is a personal portfolio website operated by a private individual for non-commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Contact
              </h2>
              <div className="space-y-2">
                <p>Email: <a href="mailto:hello@lukas-rennhofer.com" className="text-white/90 underline decoration-white/30 underline-offset-2 hover:decoration-white/60 hover:text-white transition-all duration-200">hello@lukas-rennhofer.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Responsible for content
              </h2>
              <p>Lukas Rennhofer</p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Dispute resolution
              </h2>
              <p>
                The European Commission provides a platform for online dispute resolution (OS): 
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-white/90 underline decoration-white/30 underline-offset-2 hover:decoration-white/60 hover:text-white transition-all duration-200 ml-1">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-4">
                We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Liability for content
              </h2>
              <p>
                As a service provider, we are responsible for our own content on these pages in accordance with general legislation. 
                However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances 
                that indicate illegal activity.
              </p>
              <p className="mt-4">
                Obligations to remove or block the use of information in accordance with general legislation remain unaffected. 
                However, liability in this regard is only possible from the time of knowledge of a specific infringement. 
                Upon becoming aware of corresponding legal violations, we will remove this content immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Liability for links
              </h2>
              <p>
                Our website contains links to external third-party websites over whose content we have no influence. 
                Therefore, we cannot accept any liability for this third-party content. The respective provider or operator 
                of the pages is always responsible for the content of the linked pages.
              </p>
              <p className="mt-4">
                The linked pages were checked for possible legal violations at the time of linking. Illegal content was not 
                recognizable at the time of linking. However, permanent monitoring of the content of the linked pages is not 
                reasonable without concrete evidence of an infringement. Upon becoming aware of legal violations, we will 
                remove such links immediately.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                Copyright
              </h2>
              <p>
                The content and works created by the site operators on these pages are subject to copyright law. 
                Duplication, editing, distribution, and any kind of exploitation outside the limits of copyright require 
                the written consent of the respective author or creator.
              </p>
              <p className="mt-4">
                Downloads and copies of this page are only permitted for private, non-commercial use. Insofar as the 
                content on this page was not created by the operator, the copyrights of third parties are respected. 
                Third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, 
                please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
