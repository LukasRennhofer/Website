import { Suspense, lazy } from "react";
import Header from "./components/home/Header";
import VideoHero from "./components/home/VideoHero";
import Quote from "./components/home/Quote";
import Footer from "./components/home/Footer";
import CustomCursor from "./components/home/CustomCursor";

const WrappedPage = lazy(() => import("./components/wrapped/WrappedPage"));
const LabPage = lazy(() => import("./components/lab/LabPage"));
const BlogPost = lazy(() => import("./components/lab/BlogPost"));
const AboutPage = lazy(() => import("./components/about/AboutPage"));

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  // Normalize path: remove trailing slashes (except root)
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  
  const isWrapped = normalizedPath === "/wrapped";
  const isLab = normalizedPath === "/blog";
  const isBlogPost =
    normalizedPath.startsWith("/blog/") || normalizedPath.startsWith("/blog/");
  const isAbout = normalizedPath === "/about";

  const pageFallback = (
    <div className="min-h-screen bg-black text-white" />
  );

  if (isWrapped) {
    return (
      <Suspense fallback={pageFallback}>
        <WrappedPage />
      </Suspense>
    );
  }

  if (isBlogPost) {
    const slug = normalizedPath.replace(/^\/lab\//, "").replace(/^\/blog\//, "");
    return (
      <Suspense fallback={pageFallback}>
        <BlogPost slug={slug} />
      </Suspense>
    );
  }

  if (isLab) {
    return (
      <Suspense fallback={pageFallback}>
        <LabPage />
      </Suspense>
    );
  }

  if (isAbout) {
    return (
      <Suspense fallback={pageFallback}>
        <AboutPage />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header />
      <main>
        <VideoHero />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
