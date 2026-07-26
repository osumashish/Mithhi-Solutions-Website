import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Mic, Video, ArrowRight } from 'lucide-react';

export const Media: React.FC = () => {
  const mediaItems = [
    {
      title: 'Enterprise AI Governance: Moving Past the Hype',
      type: 'Keynote Panel',
      event: 'APAC CIO Summit 2025',
      date: 'November 2025',
      icon: Video,
      desc: 'Discussions on establishing zero-data-retention AI perimeters and evaluating real ROI across APAC manufacturing estates.'
    },
    {
      title: 'ITIL 4 in Action: SLA Compliance Transformation',
      type: 'Podcast Interview',
      event: 'The Modern IT Leader Podcast',
      date: 'August 2025',
      icon: Mic,
      desc: 'How Ashish shifted SLA compliance from 82% to 96% using ServiceNow workflows and proactive trend analysis.'
    },
    {
      title: 'From Network Engineer to Executive Technology Leader',
      type: 'Speaker Session',
      event: 'Tech Leadership India',
      date: 'May 2025',
      icon: Tv,
      desc: 'Keynote sharing career mindset shifts, executive presence, and bridging engineering with board goals.'
    }
  ];

  return (
    <div className="space-y-0">
      <section className="relative overflow-hidden border-b border-border/60 py-24 sm:py-28">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="container relative text-center max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Press & Media
          </span>
          <h1 className="font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
            Speaking Engagements & Media Mentions
          </h1>
          <p className="text-muted-foreground text-lg">
            Keynotes, panel discussions, and executive interviews on AI adoption, ITSM, and enterprise tech leadership.
          </p>
        </div>
      </section>

      <section className="container py-20 max-w-4xl">
        <div className="space-y-6">
          {mediaItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass rounded-3xl p-8 border border-border/80 flex flex-col sm:flex-row items-start gap-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                  <Icon className="h-6 w-6" />
                </span>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-cyan-400">{item.type}</span>
                    <span>·</span>
                    <span>{item.event}</span>
                    <span>·</span>
                    <span>{item.date}</span>
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="glass rounded-3xl p-8 border border-border/80 space-y-4">
            <h2 className="font-heading text-2xl font-bold text-foreground">Invite Ashish to Speak or Host a Workshop</h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Available for corporate keynotes, panel discussions, executive masterclasses, and tech leadership workshops across APAC.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-semibold text-white shadow-glow"
            >
              Book Speaking Engagement <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
