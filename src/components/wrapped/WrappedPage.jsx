import WrappedHero from "./WrappedHero";
import WrappedProjects from "./WrappedProjects";
import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";
import Header from "../home/Header";
import UnderConstruction from '../about/UnderConstruction';

export default function WrappedPage() {
  // Temporarily show under construction page
  // return <UnderConstruction />;

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <Header />
      <main>
        <WrappedHero />
        <WrappedProjects />
      </main>
      <Footer />
    </div>
  );
}
