import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon } from '../components/SocialIcons';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const post = PORTFOLIO_DATA.blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-24 text-center space-y-6">
        <h1 className="font-heading text-3xl font-bold text-foreground">Article Not Found</h1>
        <p className="text-muted-foreground">The article you are looking for does not exist or has been moved.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Get related posts (excluding current)
  const relatedPosts = PORTFOLIO_DATA.blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-16 sm:py-20">
        <div className="container relative max-w-4xl">
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition mb-8"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Articles
          </button>

          <div className="space-y-4">
            <span className="inline-block rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-3 py-1 text-xs font-semibold">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-2">
              <span className="flex items-center gap-2">
                <img
                  src={PORTFOLIO_DATA.personal.avatarImage}
                  alt="Ashish Mishra"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <span className="font-semibold text-foreground">Ashish Mishra</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-primary" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-primary" /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="container max-w-4xl py-12">
        <div className="overflow-hidden rounded-3xl mb-10 border border-border/60 shadow-lg">
          <img src={post.image} alt={post.title} className="w-full aspect-[21/9] object-cover" />
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {post.content.map((paragraph, idx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="font-heading text-2xl font-bold text-foreground pt-4 pb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            return <p key={idx}>{paragraph}</p>;
          })}
        </div>

        {/* AUTHOR & SHARE FOOTER */}
        <div className="mt-16 border-t border-border/60 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={PORTFOLIO_DATA.personal.avatarImage}
              alt="Ashish Mishra"
              className="h-12 w-12 rounded-full object-cover border-2 border-cyan-400"
            />
            <div>
              <p className="font-heading text-base font-bold text-foreground">Ashish Mishra</p>
              <p className="text-xs text-muted-foreground">Executive IT Leader & AI Strategy Advisor</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent transition"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-cyan-400" /> : <Share2 className="h-3.5 w-3.5" />}
              {copied ? 'Link Copied!' : 'Share Article'}
            </button>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-primary transition"
              aria-label="Share on LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* RELATED ARTICLES */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-10 border-t border-border/60 space-y-8">
            <h2 className="font-heading text-2xl font-bold text-foreground">Related Insights</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((rel) => (
                <Link key={rel.id} to={`/blog/${rel.slug}`} className="group block">
                  <div className="border text-card-foreground shadow rounded-2xl border-border/70 bg-card/60 p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/40">
                    <span className="text-xs font-semibold text-cyan-400">{rel.category}</span>
                    <h3 className="font-heading text-lg font-bold text-foreground mt-2 group-hover:text-primary transition">
                      {rel.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-muted-foreground mt-2">{rel.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
