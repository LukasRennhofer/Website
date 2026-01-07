import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl sm:text-2xl text-white/50 leading-relaxed tracking-[-0.01em]">
              Your privacy on this personal portfolio website
            </p>
            <p className="text-sm text-white/40 mt-6">Last updated: January 1, 2026</p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 text-[17px] sm:text-[19px] leading-[1.75] text-white/65 tracking-[-0.01em]">
            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                1. Data Protection at a Glance
              </h2>
              <h3 className="text-2xl font-semibold mb-4 tracking-tight text-white/90">General information</h3>
              <p>
                This is a personal portfolio website that respects your privacy. <strong className="text-white/90">We do not collect, store, or process any personal data.</strong> We do not use cookies, tracking tools, analytics services, or any other data collection mechanisms. This website is a static portfolio site that does not interact with or store any information about its visitors.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                2. What We Don't Collect
              </h2>
              <p>
                This website does <strong className="text-white/90">not</strong> collect or store:
              </p>
              <ul className="list-disc list-outside ml-6 mt-4 space-y-2 marker:text-white/40">
                <li>Cookies</li>
                <li>IP addresses</li>
                <li>Browser information</li>
                <li>Device information</li>
                <li>Usage statistics or analytics</li>
                <li>Personal information</li>
                <li>Contact form data (no contact forms exist)</li>
              </ul>
              <p className="mt-4">
                This is a purely informational portfolio website. You can browse freely without any tracking or data collection.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                3. Hosting
              </h2>
              <p>
                This website is hosted by an external service provider. While the hosting provider may temporarily process technical data (such as IP addresses) in their server logs for the purpose of delivering the website to your browser, this website itself does not access, store, or process any of this information. Any data processed by the hosting provider is subject to their own privacy policy and data retention practices.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                4. GDPR Compliance
              </h2>
              <p>
                This website is operated from Austria and complies with the General Data Protection Regulation (GDPR) and Austrian data protection laws (Datenschutzgesetz - DSG). As this website does not collect any personal data, most GDPR provisions regarding data processing do not apply.
              </p>
              <p className="mt-4">
                The Austrian supervisory authority for data protection is:<br />
                <strong className="text-white/80">Österreichische Datenschutzbehörde</strong><br />
                Barichgasse 40-42<br />
                1030 Wien<br />
                Austria
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                5. External Links
              </h2>
              <p>
                This website may contain links to external platforms such as GitHub, LinkedIn, or other professional networks. When you click on these links, you will leave this website and be redirected to the respective external platform. 
              </p>
              <p className="mt-4">
                Please note that these external platforms operate under their own privacy policies, and we have no control over how they collect, use, or process your data. We recommend reviewing the privacy policies of any external sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                6. Contact
              </h2>
              <p>
                If you wish to contact us regarding this privacy policy or have questions about your privacy on this website, you can reach us at the contact information provided in the <a href="/imprint" className="text-white/90 underline decoration-white/30 underline-offset-2 hover:decoration-white/60 hover:text-white transition-all duration-200">Imprint</a>.
              </p>
              <p className="mt-4">
                <strong className="text-white/80">Responsible party:</strong><br />
                Lukas Rennhofer<br />
                Schulstrasse 1<br />
                2640 Enzenreith<br />
                Austria
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                7. Your Rights Under GDPR
              </h2>
              <p>
                Even though this website does not collect any personal data, you still have rights under the GDPR and Austrian data protection law:
              </p>
              <ul className="list-disc list-outside ml-6 mt-4 space-y-2 marker:text-white/40">
                <li>Right to information (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right to lodge a complaint with the Austrian Data Protection Authority</li>
              </ul>
              <p className="mt-4">
                Since we do not collect or process any personal data, most of these rights are not applicable in practice. However, if you have any concerns, you may contact us or the Austrian Data Protection Authority.
              </p>
            </section>

            <section>
              <h2 className="text-3xl sm:text-4xl font-semibold mb-5 tracking-tight text-white/95">
                8. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to update this privacy policy to reflect changes to the website or legal requirements. Any changes will be posted on this page with an updated date. Since this is a personal portfolio website that does not collect data, significant changes are unlikely.
              </p>
            </section>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
