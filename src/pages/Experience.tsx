import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, MapPin, CheckCircle, Download, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Career Timeline
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              17+ Years of Executive Technology Leadership
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              A track record of driving operational excellence, ITSM modernization, and multi-country technology transformation across APAC and global enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE LIST */}
      <section className="container py-20">
        <div className="relative mx-auto max-w-4xl space-y-12">
          {/* Vertical line indicator */}
          <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent hidden md:block" />

          {PORTFOLIO_DATA.experienceHistory.map((exp) => (
            <div key={exp.id} className="relative md:pl-12">
              {/* Timeline node */}
              <div className="absolute left-0 top-1.5 hidden h-8 w-8 items-center justify-center rounded-full bg-slate-900 border-2 border-cyan-400 text-cyan-400 shadow-glow md:flex">
                <Briefcase className="h-4 w-4" />
              </div>

              <div className="border text-card-foreground shadow rounded-3xl border-border/70 bg-card/60 p-8 sm:p-10 transition duration-300 hover:border-primary/40 hover:shadow-glow">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {exp.type}
                    </span>
                    <h2 className="font-heading text-2xl font-extrabold text-foreground mt-1">
                      {exp.role}
                    </h2>
                    <p className="font-heading text-lg font-bold text-gradient mt-0.5">{exp.company}</p>
                  </div>

                  <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:items-end">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground bg-primary/10 px-3 py-1 rounded-full border border-primary/20 w-fit">
                      <Calendar className="h-3.5 w-3.5 text-primary" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 mt-1">
                      <MapPin className="h-3.5 w-3.5" /> {exp.location}
                    </span>
                  </div>
                </div>

                <p className="mt-6 leading-relaxed text-muted-foreground text-base">
                  {exp.description}
                </p>

                <div className="mt-6 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">Key Accomplishments & Impact:</p>
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0 mt-1" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-border/60">
                  <span className="text-xs font-semibold text-muted-foreground mr-2">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD RESUME CALLOUT */}
      <section className="container py-16">
        <div className="glass rounded-3xl p-10 shadow-soft border border-border/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-heading text-2xl font-extrabold text-foreground">Need a Formal Executive Resume?</h2>
            <p className="text-muted-foreground text-sm max-w-lg">
              Download the complete 2026 executive CV highlighting project milestones, team scale, and strategic accomplishments.
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <Link
              to="/resources"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 text-white shadow-glow hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Download Resume
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-input bg-background h-11 rounded-full px-7 text-foreground hover:bg-accent"
            >
              Contact Ashish <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
