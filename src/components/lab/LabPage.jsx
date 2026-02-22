import { useEffect, useState } from "react";
import LabHero from "./LabHero";
import BlogPosts from "./BlogPosts";
import Archive from "./Archive";
import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";
import Header from "../home/Header";

export default function LabPage() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Header />
      </div>
      <LabHero />
      <BlogPosts />
      <Archive />
      <Footer />
    </div>
  );
}
