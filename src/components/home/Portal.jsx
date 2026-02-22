import FlowingMenu from "../external/FlowingMenu";

export default function Portal({ isOpen, isVisible, onClose }) {
  const items = [
    {
      link: "/",
      text: "Home",
      image: "/assets/img/slide/gradient1.jpg"
    },
    {
      link: "/blog",
      text: "The Blog",
      image: "/assets/img/slide/gradient3.jpeg"
    },
    {
      link: "/wrapped",
      text: "Wrapped 2025",
      image: "/assets/img/slide/gradient4.jpg"
    },
    {
      link: "/about",
      text: "About Me",
      image: "/assets/img/slide/gradient1.jpg"
    }
  ];

  if (!isVisible) return null;

  const overlayState = isOpen
    ? "opacity-100 translate-y-0 scale-100"
    : "opacity-0 translate-y-1 scale-[0.99] pointer-events-none";

  const contentState = isOpen
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-4";

  return (
    <div
      className={`fixed inset-0 z-[60] bg-black text-white transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${overlayState}`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="h-full w-full px-6 sm:px-8 lg:px-12">
        <div className={`max-w-7xl mx-auto h-full flex flex-col min-h-0 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${contentState}`}>
          <div className="flex items-center justify-between py-5 sm:py-6">
            <div className="text-sm sm:text-base text-white/60 tracking-tight">Navigation</div>
            <button
              type="button"
              onClick={onClose}
              className="text-sm sm:text-base text-white/70 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>

          {/* Mobile menu */}
          <nav className="flex-1 md:hidden overflow-y-auto">
            <ul className="w-full space-y-6 py-6">
              {items.map((item) => (
                <li key={item.link}>
                  <a
                    href={item.link}
                    onClick={onClose}
                    className="block text-3xl sm:text-4xl font-normal tracking-tight text-white hover:text-white/80 transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop menu */}
          <div className="hidden md:flex flex-1 overflow-hidden rounded-2xl border border-white/[0.08] bg-black">
            <FlowingMenu
              items={items}
              speed={18}
              textColor="#ffffff"
              bgColor="transparent"
              marqueeBgColor="#ffffff"
              marqueeTextColor="#060010"
              borderColor="rgba(255,255,255,0.1)"
              onItemClick={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
