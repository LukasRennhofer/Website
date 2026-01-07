import LabHero from "./LabHero";
import BlogPosts from "./BlogPosts";
import Archive from "./Archive";
import Footer from "../home/Footer";
import CustomCursor from "../home/CustomCursor";

export default function LabPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <LabHero />
      <BlogPosts />
      <Archive />
      <Footer />
    </div>
  );
}
