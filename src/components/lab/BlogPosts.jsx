import { useEffect, useState } from "react";
import matter from "gray-matter";

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="mb-20 sm:mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
            Latest Experiments
          </h2>
          <p className="text-lg sm:text-xl text-white/40 tracking-[-0.01em]">
            Thoughts and learnings from the workshop
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              onClick={() => window.location.href = `/lab/${post.slug}`}
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
