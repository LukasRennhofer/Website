import WrappedHero from "./WrappedHero";
import WrappedStats from "./WrappedStats";
import WrappedProjects from "./WrappedProjects";
import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";
import UnderConstruction from '../about/UnderConstruction';

export default function WrappedPage() {
  // Temporarily show under construction page
  // return <UnderConstruction />;

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <main>
        <WrappedHero />
        <WrappedStats />
        <WrappedProjects />
      </main>
      <Footer />
    </div>
  );
}
