import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outlinePosition, setOutlinePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || ('ontouchstart' in window) 
        || (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };
    
    checkMobile();
  }, []);

  useEffect(() => {
    // Don't set up cursor listeners on mobile
    if (isMobile) return;
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setOutlinePosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile || !isVisible) return null;

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="cursor-dot-outline"
        style={{
          left: `${outlinePosition.x}px`,
          top: `${outlinePosition.y}px`,
        }}
      />
    </>
  );
}
