import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Brain,
  Rocket,
  Workflow,
  ServerCog,
  UserCheck,
  Cloud,
  Shield,
  Handshake,
  GraduationCap,
  Check,
  ArrowRight,
  Sparkles,
  Layers,
  Search,
  Zap,
  TrendingUp
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="h-6 w-6" />;
      case 'Brain': return <Brain className="h-6 w-6" />;
      case 'Rocket': return <Rocket className="h-6 w-6" />;
      case 'Workflow': return <Workflow className="h-6 w-6" />;
      case 'ServerCog': return <ServerCog className="h-6 w-6" />;
      case 'UserCheck': return <UserCheck className="h-6 w-6" />;
      case 'Cloud': return <Cloud className="h-6 w-6" />;
      case 'Shield': return <Shield className="h-6 w-6" />;
      case 'Handshake': return <Handshake className="h-6 w-6" />;
      case 'GraduationCap': return <GraduationCap className="h-6 w-6" />;
      default: return <Briefcase className="h-6 w-6" />;
    }
  };

  const processSteps = [
    { step: '01', title: 'Discovery & Audit', desc: 'Thorough evaluation of current IT architecture, service desk metrics, governance gaps, and business objectives.', icon: Search },
    { step: '02', title: 'Strategy Blueprint', desc: 'Designing a tailored target operating model (TOM), roadmap, financial budget impact, and risk matrix.', icon: Layers },
    { step: '03', title: 'Execution & Oversight', desc: 'Hands-on program management, vendor coordination, ServiceNow workflow configuration, and team enablement.', icon: Zap },
    { step: '04', title: 'KPI Verification & Handoff', desc: 'Empirical measurement against SLA targets, documentation handoff, and establishing self-sufficient operations.', icon: TrendingUp }
  ];

  return (
    <div className="space-y-0">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

        <div className="container relative">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Services & Offerings
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Executive-Grade Advisory & Consulting
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ten focused offerings designed for enterprise technology leaders, boards, and mid-market organizations seeking measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* 10 SERVICE CARDS GRID */}
      <section className="container py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {PORTFOLIO_DATA.services.map((srv) => (
            <div
              key={srv.id}
              className="border text-card-foreground shadow group rounded-3xl border-border/70 bg-card/60 p-8 sm:p-10 transition duration-300 hover:border-primary/40 hover:shadow-glow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                    {getServiceIcon(srv.iconName)}
                  </span>
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {srv.engagementModel}
                  </span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground pt-2">
                  {srv.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {srv.fullDesc}
                </p>

                <div className="space-y-2 pt-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground">Key Deliverables:</p>
                  {srv.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 shrink-0">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-xs text-muted-foreground">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border/60 pt-5 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">Expected Outcome</p>
                  <p className="text-sm font-semibold text-primary mt-0.5">{srv.outcome}</p>
                </div>
                <Link
                  to="/contact"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background transition group-hover:border-primary group-hover:bg-primary group-hover:text-white shrink-0 text-foreground"
                  aria-label={`Book ${srv.title}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-STEP ADVISORY PROCESS */}
      <section className="border-y border-border/60 bg-card/30 py-20">
        <div className="container">
          <div className="flex flex-col gap-4 text-center items-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Methodology
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
              How We Work Together
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              A structured, zero-fluff advisory framework designed for rapid execution and sustainable handoff.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="glass rounded-2xl p-8 border border-border/80 relative space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-3xl font-extrabold text-gradient">{p.step}</span>
                    <Icon className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOK CONSULTATION CTA */}
      <section className="container py-20">
        <div className="glass rounded-3xl p-10 text-center shadow-soft border border-border/80 flex flex-col items-center gap-6">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </span>
          <h2 className="font-heading text-3xl font-extrabold text-foreground">Schedule Your Advisory Session</h2>
          <p className="max-w-xl text-muted-foreground text-base">
            Book an initial 30-minute strategic consultation. We will discuss your current technology challenges and outline actionable next steps.
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
