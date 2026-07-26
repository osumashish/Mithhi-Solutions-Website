import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon, InstagramIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: 'Executive IT Consulting',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const faqs = [
    {
      q: 'How does an initial advisory engagement work?',
      a: 'We begin with a complimentary 30-minute discovery call to discuss your current operational challenges, IT goals, and timeline. If there is mutual alignment, I provide a clear proposal with deliverables and scope.'
    },
    {
      q: 'What are your typical engagement models?',
      a: 'Engagements range from fixed-scope strategy audits (4-8 weeks) and ServiceNow process modernizations to fractional CIO retainers (part-time executive oversight) and 1-day executive masterclasses.'
    },
    {
      q: 'Do you work with global teams outside of APAC?',
      a: 'Yes. While I am based in Pune, India and lead regional operations across APAC, I regularly advise North American and European enterprises with multi-country footprint.'
    },
    {
      q: 'What is your availability for urgent ITSM or crisis advisory?',
      a: 'For critical major incident management (MIM) escalation, SLA crisis recovery, or post-breach governance audits, priority slots are made available within 24-48 hours.'
    }
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
              Book a Consultation
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
              Let's Start the Conversation
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether you need AI strategy, ITSM transformation, or executive technology leadership — I look forward to connecting with you.
            </p>
          </div>
        </div>
      </section>

      {/* FORM & DETAILS GRID */}
      <section className="container py-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-extrabold text-foreground">Direct Reach out</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect directly via email or professional channels. Typical response time is within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="glass rounded-2xl p-5 border border-border/80 flex items-center gap-4 transition hover:border-primary/50 group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Email Ashish Directly</p>
                  <p className="font-heading text-base font-bold text-foreground group-hover:text-primary transition">
                    {PORTFOLIO_DATA.personal.email}
                  </p>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 border border-border/80 flex items-center gap-4 transition hover:border-primary/50 group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                  <LinkedinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">LinkedIn Network</p>
                  <p className="font-heading text-base font-bold text-foreground group-hover:text-primary transition">
                    linkedin.com/in/osumashish
                  </p>
                </div>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 border border-border/80 flex items-center gap-4 transition hover:border-primary/50 group"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-glow">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Instagram / Blog</p>
                  <p className="font-heading text-base font-bold text-foreground group-hover:text-primary transition">
                    @byteandbrewpune
                  </p>
                </div>
              </a>
            </div>

            <div className="glass rounded-2xl p-6 border border-border/80 space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                <MapPin className="h-4 w-4 text-cyan-400" /> Executive Office Location
              </div>
              <p>{PORTFOLIO_DATA.personal.location}</p>
              <div className="flex items-center gap-2 pt-2 text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" /> Hours: Mon – Fri, 9:00 AM – 7:00 PM IST (APAC)
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="border text-card-foreground shadow rounded-3xl border-border/70 bg-card/60 p-8 sm:p-10">
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <span className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 shadow-glow">
                    <CheckCircle className="h-8 w-8" />
                  </span>
                  <h3 className="font-heading text-2xl font-extrabold text-foreground">Message Received!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-foreground">{formData.name}</strong>. Ashish will review your request regarding <strong className="text-foreground">{formData.service}</strong> and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', service: 'Executive IT Consulting', message: '' });
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-2.5 text-xs font-semibold text-foreground hover:bg-accent mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="font-heading text-2xl font-extrabold text-foreground">Book a Consultation Session</h2>
                    <p className="text-xs text-muted-foreground">Fill out the form below and we will schedule your advisory discussion.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Company / Organization</label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full rounded-xl border border-input bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-xl border border-input bg-slate-900 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {PORTFOLIO_DATA.services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="General Inquiry / Other">General Inquiry / Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message / Project Context *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives, current challenges, or timeline..."
                      className="w-full rounded-xl border border-input bg-transparent p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all h-12 w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow hover:opacity-90"
                  >
                    <Send className="h-4 w-4" /> Submit Consultation Request
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" /> Confidentiality guaranteed. Your details are never shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="border-t border-border/60 bg-card/30 py-20">
        <div className="container max-w-4xl">
          <div className="flex flex-col gap-4 text-center items-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              FAQ
            </span>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="glass rounded-2xl border border-border/80 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-heading text-base font-bold text-foreground"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${activeFaq === idx ? 'rotate-180 text-cyan-400' : 'text-muted-foreground'}`} />
                </button>

                {activeFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed animate-fade-in border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
