import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, X, Building, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { CaseStudy } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const categories = ['All', 'ITSM Modernization', 'AI Strategy', 'Cloud Infrastructure', 'IT Operations'];

  const filteredCases = selectedCategory === 'All'
    ? PORTFOLIO_DATA.caseStudies
    : PORTFOLIO_DATA.caseStudies.filter(c => c.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Projects & Case Studies
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Empirical Results Delivered at Scale
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Deep dives into real-world transformations — from ServiceNow rollouts and AI governance perimeters to multi-country cloud migrations.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
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
          </div>
        </div>
      </section>

      {/* CASE STUDIES LIST */}
      <section className="container py-20">
        <div className="grid gap-10">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="border text-card-foreground shadow rounded-3xl border-border/70 bg-card/60 overflow-hidden transition duration-300 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-5 relative min-h-[300px]">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/60" />
                  <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 text-cyan-400 border border-cyan-400/30 backdrop-blur px-3 py-1 text-xs font-semibold">
                    {cs.category}
                  </span>
                </div>

                <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 font-medium text-foreground">
                        <Building className="h-3.5 w-3.5 text-primary" /> {cs.clientIndustry}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {cs.region}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl font-extrabold text-foreground">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cs.subtitle}
                    </p>
                  </div>

                  {/* Metrics Bar */}
                  <div className="grid grid-cols-3 gap-3 border-y border-border/60 py-4 bg-primary/5 rounded-2xl px-4">
                    {cs.results.map((res, i) => (
                      <div key={i} className="text-center">
                        <p className="font-heading text-lg font-extrabold text-gradient sm:text-xl">{res.metric}</p>
                        <p className="text-[11px] text-muted-foreground leading-tight">{res.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalCase(cs)}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-white shadow-glow hover:opacity-90"
                    >
                      Read Case Study Details <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL MODAL OVERLAY */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl border border-border bg-slate-900 p-6 sm:p-10 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalCase(null)}
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 px-3 py-1 text-xs font-semibold">
              {activeModalCase.category}
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground">
              {activeModalCase.title}
            </h2>

            <div className="grid grid-cols-3 gap-4 border-y border-border/60 py-4">
              {activeModalCase.results.map((res, i) => (
                <div key={i}>
                  <p className="font-heading text-xl font-extrabold text-gradient">{res.metric}</p>
                  <p className="text-xs text-muted-foreground">{res.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">The Challenge</h3>
                <p>{activeModalCase.challenge}</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1">The Solution</h3>
                <p>{activeModalCase.solution}</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-foreground mb-2">Key Takeaways & Lessons</h3>
                <div className="space-y-2">
                  {activeModalCase.keyTakeaways.map((tk, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{tk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-2.5 text-sm font-semibold text-white shadow-glow"
              >
                Discuss a Similar Project <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
