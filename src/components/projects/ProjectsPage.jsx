import ProjectsHero from "./ProjectsHero";
import ProjectsGrid from "./ProjectsGrid";
import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";
import Header from "../home/Header";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
