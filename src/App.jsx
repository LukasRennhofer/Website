import Header from "./components/home/Header";
import VideoHero from "./components/home/VideoHero";
import Quote from "./components/home/Quote";
import About from "./components/home/About";
import Portal from "./components/home/Portal";
import Footer from "./components/home/Footer";
import CustomCursor from "./components/home/CustomCursor";
import WrappedPage from "./components/wrapped/WrappedPage";
import LabPage from "./components/lab/LabPage";
import BlogPost from "./components/lab/BlogPost";
import Imprint from "./components/legal/Imprint";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import ProjectsPage from "./components/projects/ProjectsPage";
import AboutPage from "./components/about/AboutPage";

export default function App() {
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/";
  
  console.log("Current pathname:", pathname);
  
  const isWrapped = pathname === "/wrapped";
  const isLab = pathname === "/lab" || pathname === "/lab/";
  const isBlogPost = pathname.startsWith("/lab/") && !isLab;
  const isImprint = pathname === "/imprint";
  const isPrivacy = pathname === "/privacy";
  const isProjects = pathname === "/projects";
  const isAbout = pathname === "/about";

  console.log("Route checks:", { isWrapped, isLab, isBlogPost, isImprint, isPrivacy, isProjects });

  if (isWrapped) {
    return <WrappedPage />;
  }

  if (isBlogPost) {
    const slug = pathname.replace("/lab/", "").replace(/\/$/, "");
    console.log("Loading blog post with slug:", slug);
    return <BlogPost slug={slug} />;
  }

  if (isLab) {
    return <LabPage />;
  }

  if (isImprint) {
    return <Imprint />;
  }

  if (isPrivacy) {
    return <PrivacyPolicy />;
  }

  if (isProjects) {
    return <ProjectsPage />;
  }

  if (isAbout) {
    return <AboutPage />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header />
      <main>
        <VideoHero />
        <Quote />
        <About />
        <Portal />
      </main>
      <Footer />
    </div>
  );
}
