import ProjectsHero from "./ProjectsHero";
import ProjectsGrid from "./ProjectsGrid";
import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <main>
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </div>
  );
}
