export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Contact */}
          <div>
            <h5 className="text-sm font-light text-white/40 mb-4 uppercase tracking-wider">
              Contact
            </h5>
            <a
              href="mailto:hello@lukas-rennhofer.com"
              className="text-base sm:text-lg font-light text-white/80 hover:text-white transition-colors"
            >
              hello@lukas-rennhofer.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-sm font-light text-white/40 mb-4 uppercase tracking-wider">
              Connect
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/lukasrennhofer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-light text-white/80 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/lukasrennhofer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-light text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/lukasrennhofer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-light text-white/80 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-sm font-light text-white/40 mb-4 uppercase tracking-wider">
              Legal
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="/imprint"
                  className="text-base font-light text-white/80 hover:text-white transition-colors"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-base font-light text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40 font-light">
            © {currentYear} Lukas Rennhofer. All rights reserved.
          </p>
          <p className="text-sm text-white/30 font-light">
            Crafted with reactbits.dev and coffee :)
          </p>
        </div>
      </div>
    </footer>
  );
}
