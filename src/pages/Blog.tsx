import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Search, ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI', 'ITSM', 'Leadership', 'Cloud', 'Automation'];

  const filteredPosts = PORTFOLIO_DATA.blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Blog & Insights
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Writing on Technology Leadership
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Practical, experience-driven articles on AI adoption, ITSM, cloud strategy and the journey from engineer to executive.
            </p>

            {/* Search Input */}
            <div className="relative w-full max-w-md mt-2">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-border bg-card/80 py-2.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES & POSTS GRID */}
      <section className="container py-16">
        {/* Category Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow'
                  : 'border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="text-sm font-semibold text-primary underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <div key={post.id}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="border text-card-foreground shadow h-full overflow-hidden rounded-3xl border-border/70 bg-card/60 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-glow flex flex-col justify-between">
                    <div>
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-slate-950/70 text-white backdrop-blur px-3 py-1 text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3 p-6">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {post.readTime}
                          </span>
                        </div>
                        <h2 className="font-heading text-lg font-bold leading-snug transition group-hover:text-primary text-foreground">
                          {post.title}
                        </h2>
                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-2">
                      <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                        Read article <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* NEWSLETTER BOX */}
      <section className="container py-16">
        <div className="glass rounded-3xl p-10 text-center shadow-soft border border-border/80 flex flex-col items-center gap-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-foreground">Want These Insights in Your Inbox?</h2>
          <p className="max-w-xl text-muted-foreground text-base">
            Subscribe to The Executive Technology Brief — monthly, practical, no noise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-white shadow-glow hover:opacity-90"
          >
            Subscribe / Contact Ashish <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
