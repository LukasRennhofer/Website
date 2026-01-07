import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CustomCursor from "../home/CustomCursor";
import Footer from "../home/Footer";

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading blog post with slug:", slug);
    
    // Dynamically import the markdown file
    import(`../../blog/${slug}.md?raw`)
      .then((module) => {
        const text = module.default;
        console.log("Loaded markdown text, length:", text.length);
        const { data, content } = matter(text);
        console.log("Parsed frontmatter:", data);
        setPost({ metadata: data, content });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog post:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <CustomCursor />
        <div className="text-white/50">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <CustomCursor />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <a href="/lab" className="text-white/70 hover:text-white">← Back to Lab</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      
      {/* Header - Apple-style minimal nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/50 border-b border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <a 
            href="/lab" 
            className="inline-flex items-center gap-2 text-[13px] font-medium text-white/50 hover:text-white transition-all duration-300 group"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Lab
          </a>
        </div>
      </header>

      {/* Hero - Apple-style spacious header */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Metadata */}
          <div className="flex items-center gap-3 mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[11px] font-medium uppercase tracking-[0.15em] text-white/60">
              {post.metadata.category}
            </span>
            <span className="text-[13px] text-white/30">{post.metadata.date}</span>
            <span className="text-[13px] text-white/20">·</span>
            <span className="text-[13px] text-white/30">{post.metadata.readTime}</span>
          </div>

          {/* Title - Large, bold Apple typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards] bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
            {post.metadata.title}
          </h1>

          {/* Description if exists */}
          {post.metadata.description && (
            <p className="text-xl sm:text-2xl text-white/50 leading-relaxed mb-12 max-w-3xl opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards]">
              {post.metadata.description}
            </p>
          )}

          {/* Hero Image */}
          {post.metadata.image && (
            <div className="relative opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-pink-500/20 blur-3xl opacity-30" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img 
                  src={post.metadata.image} 
                  alt={post.metadata.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content - Apple-style readable article */}
      <article className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[680px] mx-auto">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => (
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 mt-16 tracking-tight leading-tight text-white" {...props} />
              ),
              h2: ({node, ...props}) => (
                <h2 className="text-3xl sm:text-4xl font-semibold mb-5 mt-14 tracking-tight leading-tight text-white/95" {...props} />
              ),
              h3: ({node, ...props}) => (
                <h3 className="text-2xl sm:text-3xl font-semibold mb-4 mt-12 tracking-tight leading-snug text-white/90" {...props} />
              ),
              p: ({node, ...props}) => (
                <p className="text-[17px] sm:text-[19px] text-white/65 leading-[1.75] mb-7 font-normal tracking-[-0.01em]" {...props} />
              ),
              a: ({node, ...props}) => (
                <a className="text-white/90 underline decoration-white/30 underline-offset-2 hover:decoration-white/60 hover:text-white transition-all duration-200" {...props} />
              ),
              ul: ({node, ...props}) => (
                <ul className="list-disc list-outside ml-6 mb-8 text-white/65 space-y-3 text-[17px] sm:text-[19px] leading-[1.75] marker:text-white/40" {...props} />
              ),
              ol: ({node, ...props}) => (
                <ol className="list-decimal list-outside ml-6 mb-8 text-white/65 space-y-3 text-[17px] sm:text-[19px] leading-[1.75] marker:text-white/40" {...props} />
              ),
              li: ({node, ...props}) => (
                <li className="leading-[1.75] pl-2" {...props} />
              ),
              code: ({node, inline, className, children, ...props}) => {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                
                return !inline && language ? (
                  <div className="my-8 rounded-xl overflow-hidden border border-white/[0.08] shadow-lg">
                    <SyntaxHighlighter
                      style={oneDark}
                      language={language}
                      PreTag="div"
                      customStyle={{
                        margin: 0,
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.04)',
                        fontSize: '14px',
                        lineHeight: '1.6',
                      }}
                      codeTagProps={{
                        style: {
                          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        }
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className="bg-white/[0.08] px-2 py-0.5 rounded-md text-[15px] text-white/90 font-mono border border-white/5" {...props}>
                    {children}
                  </code>
                );
              },
              pre: ({node, children, ...props}) => (
                <div {...props}>{children}</div>
              ),
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-[3px] border-white/20 pl-6 py-2 italic text-white/50 mb-8 text-[17px] sm:text-[19px] leading-[1.75]" {...props} />
              ),
              img: ({node, ...props}) => (
                <div className="my-12">
                  <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
                    <img 
                      className="w-full" 
                      {...props} 
                    />
                  </div>
                </div>
              ),
              hr: ({node, ...props}) => (
                <hr className="border-white/[0.08] my-16" {...props} />
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Spacer before footer */}
      <div className="h-20" />

      <Footer />
    </div>
  );
}
