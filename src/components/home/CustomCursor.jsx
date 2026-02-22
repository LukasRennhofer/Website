import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const outlineRefPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };
    
    checkMobile();
  }, []);

  useEffect(() => {
    // Don't set up cursor listeners on mobile
    if (isMobile) return;
    const handleMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const animate = () => {
      const dot = dotRef.current;
      const outline = outlineRef.current;
      if (dot && outline) {
        const { x, y } = targetRef.current;
        const outlinePos = outlineRefPos.current;
        outlinePos.x += (x - outlinePos.x) * 0.18;
        outlinePos.y += (y - outlinePos.y) * 0.18;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        outline.style.transform = `translate3d(${outlinePos.x}px, ${outlinePos.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile || !isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        ref={dotRef}
      />
      <div
        className="cursor-dot-outline"
        ref={outlineRef}
      />
    </>
  );
}
