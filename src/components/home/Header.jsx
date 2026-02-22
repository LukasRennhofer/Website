import { useEffect, useRef, useState } from "react";
import Portal from "./Portal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsVisible(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closeMenu = () => {
    setIsOpen(false);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => setIsVisible(false), 600);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-3xl bg-black/40 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <div className="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                lukas rennhofer.
              </div>
            </div>
            <button
              type="button"
              onClick={openMenu}
              className="text-[13px] sm:text-[14px] font-semibold tracking-[0.02em] text-white/80 hover:text-white transition-colors"
              aria-haspopup="dialog"
              aria-expanded={isOpen}
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <Portal isOpen={isOpen} isVisible={isVisible} onClose={closeMenu} />
    </>
  );
}
