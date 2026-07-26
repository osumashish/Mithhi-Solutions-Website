import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  Download,
  Briefcase,
  ChevronDown,
  Compass,
  Brain,
  Rocket,
  Workflow,
  ServerCog,
  Network,
  Shield,
  Cloud,
  Quote,
  Clock,
  ArrowUpRight,
  ArrowLeft,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon } from '../components/SocialIcons';

export const Home: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const testimonials = PORTFOLIO_DATA.testimonials;

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="h-5 w-5" />;
      case 'Brain': return <Brain className="h-5 w-5" />;
      case 'Rocket': return <Rocket className="h-5 w-5" />;
      case 'Workflow': return <Workflow className="h-5 w-5" />;
      case 'ServerCog': return <ServerCog className="h-5 w-5" />;
      case 'Network': return <Network className="h-5 w-5" />;
      case 'Shield': return <Shield className="h-5 w-5" />;
      case 'Cloud': return <Cloud className="h-5 w-5" />;
      default: return <Compass className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-20">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

        <div className="container relative grid items-center gap-14 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="flex flex-col items-start gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Executive IT Leader · APAC
              </span>
            </div>

            <div>
              <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl text-foreground">
                Leading Digital Transformation Through{' '}
                <span className="text-gradient">AI, IT Strategy</span> & Operational Excellence
              </h1>
            </div>

            <div>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                Helping enterprises modernize IT, optimize operations, and embrace AI-driven transformation across the APAC region and beyond.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all shadow hover:bg-primary/90 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 text-white shadow-glow hover:opacity-90"
              >
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 rounded-full px-7 text-foreground"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
              <Link
                to="/experience"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground h-10 rounded-full px-7 text-muted-foreground hover:text-foreground"
              >
                <Briefcase className="mr-2 h-4 w-4" /> View Experience
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              {PORTFOLIO_DATA.certifications.slice(0, 5).map((cert) => (
                <div
                  key={cert.id}
                  className="inline-flex items-center border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full px-3 py-1 text-xs font-semibold"
                >
                  {cert.badge}
                </div>
              ))}
            </div>
          </div>

          {/* Profile Card & Floaters */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-600/30 to-cyan-400/20 blur-2xl pointer-events-none" />
              <div className="glass relative overflow-hidden rounded-[2rem] shadow-soft border border-border/60">
                <img
                  src={PORTFOLIO_DATA.personal.avatarImage}
                  alt="Ashish Mishra — Executive IT Leader"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent p-6">
                  <p className="font-heading text-xl font-bold text-white">Ashish Mishra</p>
                  <p className="text-sm text-slate-300">Regional Technology Leader — APAC, The Woodbridge Group</p>
                </div>
              </div>

              {/* Floater Pills */}
              <div className="glass absolute -left-6 top-10 hidden rounded-2xl px-4 py-3 shadow-soft sm:block border border-border/80">
                <p className="font-heading text-2xl font-extrabold text-gradient">17+</p>
                <p className="text-xs text-muted-foreground">Years of Leadership</p>
              </div>

              <div className="glass absolute -right-6 bottom-24 hidden rounded-2xl px-4 py-3 shadow-soft sm:block border border-border/80">
                <p className="font-heading text-2xl font-extrabold text-gradient">96%</p>
                <p className="text-xs text-muted-foreground">SLA Compliance Delivered</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative flex justify-center pb-6">
          <div className="text-muted-foreground animate-bounce">
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* TRUST LOGOS BAR */}
      <section className="border-y border-border/60 bg-card/40 py-10">
        <div className="container">
          <div className="flex flex-col items-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted across global enterprises
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
              {PORTFOLIO_DATA.companies.map((comp) => (
                <span
                  key={comp.name}
                  className="font-heading text-lg font-bold tracking-wide text-muted-foreground/70 transition hover:text-foreground"
                >
                  {comp.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STAT COUNTERS GRID */}
      <section className="container py-20">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PORTFOLIO_DATA.stats.map((st) => (
            <div key={st.label}>
              <div className="glass flex h-full flex-col items-center justify-center gap-1 rounded-2xl p-6 text-center transition hover:border-primary/30 hover:shadow-glow">
                <p className="font-heading text-3xl font-extrabold text-gradient sm:text-4xl">
                  {st.value}
                </p>
                <p className="text-xs font-medium text-muted-foreground sm:text-sm">{st.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AREAS OF EXPERTISE GRID */}
      <section className="container py-20">
        <div className="flex flex-col gap-4 text-center items-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Areas of Expertise
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Depth Across the Enterprise Technology Stack
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            From boardroom strategy to service desk operations — 16 domains of hands-on leadership expertise.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_DATA.domains.slice(0, 8).map((domain) => (
            <div key={domain.id}>
              <div className="border text-card-foreground shadow group h-full rounded-2xl border-border/70 bg-card/60 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                <div className="flex h-full flex-col gap-3 p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/15 to-cyan-400/15 text-primary transition group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                    {getDomainIcon(domain.iconName)}
                  </span>
                  <h3 className="font-heading text-base font-bold text-foreground">{domain.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{domain.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/about#expertise"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 rounded-full px-6 text-foreground"
          >
            Explore All 16 Domains <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative overflow-hidden border-y border-border/60 bg-card/30 py-20">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />
        <div className="container relative">
          <div className="flex flex-col gap-4 text-center items-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Services
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              Executive-Grade Advisory & Consulting
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ten focused offerings — from AI strategy to fractional CIO leadership — each designed for measurable business outcomes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PORTFOLIO_DATA.services.slice(0, 3).map((srv) => (
              <div key={srv.id}>
                <div className="border text-card-foreground shadow group h-full rounded-2xl border-border/70 bg-card/70 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex h-full flex-col gap-4 p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                      {getDomainIcon(srv.iconName)}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground">{srv.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{srv.shortDesc}</p>
                    <p className="mt-auto border-t border-border/60 pt-4 text-sm font-medium text-primary">
                      {srv.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-9 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-white hover:opacity-90 shadow-glow"
            >
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDY SHOWCASE */}
      <section className="container py-20">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white shadow-glow border border-border/60">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-center gap-5 p-10 sm:p-14">
                <span className="w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  Featured Case Study
                </span>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                  IT Service Management Transformation — ITIL & ServiceNow
                </h2>
                <p className="leading-relaxed text-slate-300">
                  Inconsistent processes across teams meant SLA compliance was below expectations and leadership had limited visibility into IT performance.
                </p>
                <div className="grid grid-cols-3 gap-4 my-2">
                  <div>
                    <p className="font-heading text-xl font-extrabold text-cyan-300 sm:text-2xl">82% → 96%</p>
                    <p className="text-xs text-slate-400">SLA compliance uplift</p>
                  </div>
                  <div>
                    <p className="font-heading text-xl font-extrabold text-cyan-300 sm:text-2xl">Real-time</p>
                    <p className="text-xs text-slate-400">Leadership visibility</p>
                  </div>
                  <div>
                    <p className="font-heading text-xl font-extrabold text-cyan-300 sm:text-2xl">3</p>
                    <p className="text-xs text-slate-400">ITIL practices embedded</p>
                  </div>
                </div>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white h-9 px-4 py-2 w-fit rounded-full"
                >
                  Read the Full Case Study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="relative min-h-[280px]">
                <img
                  src={PORTFOLIO_DATA.caseStudies[0].image}
                  alt="IT Service Management Transformation"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="container py-20">
        <div className="flex flex-col gap-4 text-center items-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            What Leaders, Clients & Mentees Say
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Corporate recommendations from the people who have worked alongside Ashish.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="border text-card-foreground shadow rounded-2xl border-border/70 bg-card/60 p-8 sm:p-12 transition duration-300">
            <Quote className="h-10 w-10 text-primary/40 mb-6" />
            <p className="text-lg sm:text-xl leading-relaxed text-foreground italic mb-8">
              "{testimonials[activeTestimonialIdx].quote}"
            </p>
            <div className="border-t border-border/60 pt-6 flex items-center justify-between">
              <div>
                <p className="font-heading text-base font-bold text-foreground">
                  {testimonials[activeTestimonialIdx].author}
                </p>
                <p className="text-xs text-primary font-medium mt-0.5">
                  {testimonials[activeTestimonialIdx].title} · {testimonials[activeTestimonialIdx].category}
                </p>
              </div>

              {/* Carousel Nav Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition hover:bg-accent text-foreground"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition hover:bg-accent text-foreground"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES SECTION */}
      <section className="border-y border-border/60 bg-card/30 py-20">
        <div className="container">
          <div className="flex flex-col gap-4 text-center items-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Insights
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              Featured Articles
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Practical writing on AI adoption, ITSM transformation and technology leadership.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PORTFOLIO_DATA.blogPosts.slice(0, 3).map((post) => (
              <div key={post.id}>
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="border text-card-foreground shadow h-full overflow-hidden rounded-2xl border-border/70 bg-card/70 transition duration-300 group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-glow">
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
                      <h3 className="font-heading text-lg font-bold leading-snug transition group-hover:text-primary text-foreground">
                        {post.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 py-2 rounded-full px-6 text-foreground"
            >
              Read My Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EXECUTIVE BRIEF NEWSLETTER BOX */}
      <section className="container py-20">
        <div>
          <div className="glass mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-3xl p-10 text-center shadow-soft sm:p-14 border border-border/80">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
              <Sparkles className="h-5 w-5" />
            </span>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl text-foreground">
              The Executive Technology Brief
            </h2>
            <p className="max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              Monthly insights on AI adoption, ITSM and technology leadership — written for executives and aspiring leaders. No spam, ever.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 bg-cyan-400/10 p-3 rounded-full border border-cyan-400/30 px-6">
                <Check className="h-4 w-4" /> You're subscribed to The Executive Technology Brief!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex w-full border border-input bg-transparent py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-12 rounded-full px-5 text-foreground"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors py-2 h-12 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 text-white hover:opacity-90 shadow-glow"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LET'S WORK TOGETHER CTA BANNER */}
      <section className="container py-20">
        <div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-10 text-white shadow-glow sm:p-16 border border-border/60">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl pointer-events-none" />
            <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                  Let's Work Together
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-300 sm:text-lg">
                  Whether you need an AI strategy, an ITSM transformation, or executive technology leadership — the first conversation is free.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-7 text-white shadow-glow hover:opacity-90"
                >
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors border border-white/25 bg-white/5 h-10 rounded-full px-7 text-white hover:bg-white/10"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" /> Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
