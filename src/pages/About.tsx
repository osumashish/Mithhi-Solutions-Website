import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Brain,
  Rocket,
  Workflow,
  ServerCog,
  Network,
  Shield,
  Cloud,
  Handshake,
  Zap,
  Database,
  ShieldCheck,
  Layers,
  DollarSign,
  RefreshCw,
  Radio,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Strategy', 'Operations', 'Technology', 'Leadership'];

  const filteredDomains = selectedCategory === 'All'
    ? PORTFOLIO_DATA.domains
    : PORTFOLIO_DATA.domains.filter(d => d.category === selectedCategory);

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
      case 'Handshake': return <Handshake className="h-5 w-5" />;
      case 'Zap': return <Zap className="h-5 w-5" />;
      case 'Database': return <Database className="h-5 w-5" />;
      case 'ShieldCheck': return <ShieldCheck className="h-5 w-5" />;
      case 'Layers': return <Layers className="h-5 w-5" />;
      case 'DollarSign': return <DollarSign className="h-5 w-5" />;
      case 'RefreshCw': return <RefreshCw className="h-5 w-5" />;
      case 'Radio': return <Radio className="h-5 w-5" />;
      default: return <Compass className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              About Ashish Mishra
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Enterprise Technology Leader & Strategy Advisor
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Over 17 years of driving digital transformation, ITSM modernization, and pragmatically governed enterprise AI adoption across the APAC region.
            </p>
          </div>
        </div>
      </section>

      {/* BIOGRAPHY & PHILOSOPHY */}
      <section className="container py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <h2 className="font-heading text-3xl font-extrabold text-foreground tracking-tight">
              A Career Built on Execution & Leadership
            </h2>
            <p>
              My journey in enterprise technology began over 16 years ago in core network engineering at Infosys. Over the past nearly two decades, I have evolved from hands-on Cisco network configurations and server administration to executive technology leadership managing regional operations across multiple countries in APAC.
            </p>
            <p>
              Currently serving as <strong className="text-foreground font-semibold">Regional Technology Leader — APAC at The Woodbridge Group</strong>, I oversee enterprise IT infrastructure, ServiceNow ITSM modernization, cloud architecture, cybersecurity governance, and vendor ecosystems across manufacturing and corporate operations.
            </p>
            <p>
              My primary mission is to bridge board-level strategic intent with empirical ground-level execution — ensuring that IT functions as a true business accelerator rather than a friction point.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-10 border border-border/80 space-y-6">
            <h3 className="font-heading text-2xl font-bold text-foreground">Leadership Philosophy</h3>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground leading-relaxed">
              "{PORTFOLIO_DATA.personal.philosophy}"
            </blockquote>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Governance as Speed:</strong> Clear safety perimeters enable teams to innovate faster without taking reckless IP risks.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Empirical Transparency:</strong> Real-time operational dashboards replace guesswork and create shared accountability.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">People-First Leadership:</strong> Great technology is built and sustained by motivated, continuously trained engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16 DOMAINS OF EXPERTISE */}
      <section id="expertise" className="border-y border-border/60 bg-card/30 py-20">
        <div className="container">
          <div className="flex flex-col gap-4 text-center items-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Complete Skill Matrix
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              16 Domains of Enterprise Expertise
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              Comprehensive capabilities built across strategy, operations, core technology, and executive leadership.
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

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredDomains.map((domain) => (
              <div key={domain.id}>
                <div className="border text-card-foreground shadow group h-full rounded-2xl border-border/70 bg-card/60 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <div className="flex h-full flex-col gap-3 p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/15 to-cyan-400/15 text-primary transition group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                        {getDomainIcon(domain.iconName)}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2.5 py-1 rounded-full border border-border bg-secondary">
                        {domain.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-base font-bold text-foreground mt-2">{domain.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{domain.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & CREDENTIALS */}
      <section className="container py-20">
        <div className="flex flex-col gap-4 text-center items-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Credentials
          </span>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            Certifications & Technical Standards
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Globally recognized accreditations across project management, IT service frameworks, cloud, and enterprise architecture.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div key={cert.id} className="glass rounded-2xl p-6 border border-border/80 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-xs">
                    {cert.badge}
                  </span>
                  <Award className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mt-3">{cert.name}</h3>
                <p className="text-xs text-primary font-medium">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{cert.description}</p>
              </div>
              <p className="text-[11px] font-semibold text-muted-foreground/70 uppercase tracking-wider pt-2 border-t border-border/60">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CONSULTATION CTA */}
      <section className="container py-16">
        <div className="glass rounded-3xl p-10 text-center shadow-soft border border-border/80 flex flex-col items-center gap-6">
          <h2 className="font-heading text-3xl font-extrabold text-foreground">Ready to Elevate Your IT Operations?</h2>
          <p className="max-w-xl text-muted-foreground text-base">
            Let's discuss how customized strategy, ServiceNow modernization, or governed AI adoption can drive performance across your enterprise.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-white shadow-glow hover:opacity-90"
          >
            Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
