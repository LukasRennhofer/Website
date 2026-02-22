import { useEffect, useState } from "react";
import matter from "gray-matter";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredEvents = [
    {
      id: 1,
      title: "Open Source Summit 2025",
      date: "Nov 2025",
      location: "Berlin",
      type: "Event",
      description: "Talk on rendering pipelines and tools for creative coding.",
      link: "https://example.com/open-source-summit",
      cta: "View Event",
      image: "https://picsum.photos/900/600?random=81",
      accent: "from-cyan-300/40 via-blue-400/25 to-indigo-500/35",
      badge: "from-cyan-200/50 to-blue-400/50"
    },
    {
      id: 2,
      title: "Workshop: Engine Architecture",
      date: "Aug 2025",
      location: "Zurich",
      type: "Workshop",
      description: "Hands-on session exploring ECS patterns and performance profiling.",
      link: "https://example.com/engine-workshop",
      cta: "View Details",
      image: "https://picsum.photos/900/600?random=82",
      accent: "from-emerald-300/35 via-teal-400/25 to-lime-400/35",
      badge: "from-emerald-200/50 to-teal-400/50"
    },
    {
      id: 3,
      title: "Special Post: Building the Vantor Demo",
      date: "Jun 2025",
      location: "Studio",
      type: "Special Post",
      description: "Deep dive into the visuals, tech choices, and lessons learned.",
      link: "/projects/vantor",
      cta: "Open Project",
      image: "https://picsum.photos/900/600?random=83",
      accent: "from-fuchsia-300/35 via-purple-400/25 to-pink-400/35",
      badge: "from-fuchsia-200/50 to-pink-400/50"
    }
  ];

  useEffect(() => {
    // Dynamically import all markdown files
    const markdownFiles = import.meta.glob('/src/blog/*.md', { query: '?raw', import: 'default', eager: true });
    
    const loadedPosts = Object.entries(markdownFiles).map(([path, content], index) => {
      const { data } = matter(content);
      const slug = path.replace('/src/blog/', '').replace('.md', '');
      
      return {
        id: index + 1,
        slug,
        title: data.title || 'Untitled',
        date: data.date || 'No date',
        category: data.category || 'Uncategorized',
        excerpt: content.split('\n\n').find(p => p.length > 50 && !p.startsWith('#') && !p.startsWith('---')) || 'No excerpt available',
        readTime: data.readTime || '5 min read',
        image: data.image || 'https://picsum.photos/800/500?random=' + (index + 40),
        dateObj: data.date ? new Date(data.date) : new Date(0)
      };
    });

    // Sort by date (newest first)
    loadedPosts.sort((a, b) => b.dateObj - a.dateObj);
    
    setPosts(loadedPosts);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="py-20 sm:py-28 lg:py-36 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white/50">Loading posts...</div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/*
        <div className="mb-14 sm:mb-18 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Special Events & Highlights
          </h2>
          <p className="text-base sm:text-lg text-white/40 tracking-[-0.01em]">
            Curated moments, visits, and special posts
          </p>
        </div>

        <div className="grid gap-10 sm:gap-12 lg:gap-14 mb-20 sm:mb-24">
          {featuredEvents.map((item, index) => (
            <a
              key={item.id}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              className="group"
              style={{
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${0.08 * index}s forwards`
              }}
            >
              <div className="relative rounded-[32px] border border-white/[0.14] bg-gradient-to-br from-white/[0.04] to-white/[0.015] transition-all duration-500 hover:border-white/[0.28]">
                <div className={`grid overflow-hidden rounded-[30px] lg:grid-cols-[1.05fr_0.95fr] ${index % 2 === 1 ? "lg:grid-cols-[0.95fr_1.05fr]" : ""}`}>
                  <div className={`relative p-8 sm:p-10 lg:p-12 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <span className="absolute right-8 top-6 text-[11px] uppercase tracking-[0.4em] text-white/20">
                      0{index + 1}
                    </span>
                    <div className="mb-6 flex items-center gap-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 bg-gradient-to-r ${item.badge}`}>
                        {item.type}
                      </span>
                      <span className="text-[12px] text-white/35">{item.date}</span>
                      <span className="text-[12px] text-white/20">·</span>
                      <span className="text-[12px] text-white/35">{item.location}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05] mb-6 text-white/95 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[15px] sm:text-[17px] text-white/60 leading-relaxed mb-10 max-w-xl">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-2 text-[13px] font-medium text-white/60 group-hover:text-white transition-colors duration-300">
                      <span>{item.cta}</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  <div className={`relative min-h-[260px] sm:min-h-[300px] lg:min-h-[420px] overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-45`} />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        */}

        <div className="mb-20 sm:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Latest Posts
          </h2>
          <p className="text-lg sm:text-xl text-white/40 tracking-[-0.01em]">
            Thoughts, stories, and learnings from the workshop
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              onClick={() => window.location.href = `/blog/${post.slug}`}
              className="group cursor-pointer"
              style={{
                opacity: 0,
                animation: `fadeIn 0.6s ease-out ${0.1 * index}s forwards`
              }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-white/[0.15] hover:from-white/[0.05] hover:to-white/[0.02] transition-all duration-500 backdrop-blur-sm">
                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
                  {/* Image */}
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium uppercase tracking-[0.12em] text-white/50">
                        {post.category}
                      </span>
                      <span className="text-[13px] text-white/25">{post.date}</span>
                      <span className="text-[13px] text-white/20">·</span>
                      <span className="text-[13px] text-white/25">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight mb-4 text-white/95 group-hover:text-white transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[13px] font-medium text-white/60 group-hover:text-white transition-colors duration-300">
                      <span>Read Article</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
