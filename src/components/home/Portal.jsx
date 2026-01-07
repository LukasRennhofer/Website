import FlowingMenu from "../external/FlowingMenu";
import ScrollReveal from "../ScrollReveal";

export default function Portal() {
  const projects = [
    {
      link: "/projects",
      text: "Projects",
      image: "/assets/img/slide/marion64.png"
    },
    {
      link: "/lab",
      text: "The Lab",
      image: "https://picsum.photos/1200/800?random=22"
    },
    {
      link: "/wrapped",
      text: "Wrapped 2025",
      image: "https://picsum.photos/1200/800?random=23"
    },
    {
      link: "/about",
      text: "About Me",
      image: "https://picsum.photos/1200/800?random=24"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 border-t border-white/[0.08] bg-black">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 lg:mb-16 text-white tracking-tight">
            The Portal
          </h2>
        </ScrollReveal>

        <div className="relative h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.08] bg-black bg-gradient-to-br from-white/[0.02] to-white/[0.01]">
          <FlowingMenu
            items={projects}
            speed={18}
            textColor="#ffffff"
            bgColor="transparent"
            marqueeBgColor="#ffffff"
            marqueeTextColor="#060010"
            borderColor="rgba(255,255,255,0.1)"
          />
        </div>
      </div>
    </section>
  );
}
