import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import Testimonials from './Testimonials';
import Footer from '../home/Footer';
import CustomCursor from '../home/CustomCursor';
import UnderConstruction from './UnderConstruction';

export default function AboutPage() {
  // Temporarily show under construction page
  return <UnderConstruction />;

  // Uncomment when ready:
  // return (
  //   <div className="min-h-screen bg-black text-white">
  //     <CustomCursor />
  //     <AboutHero />
  //     <AboutStory />
  //     <Testimonials />
  //     <Footer />
  //   </div>
  // );
}
