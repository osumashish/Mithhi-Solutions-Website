import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="border-t border-border bg-card/40 relative">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div className="space-y-4">
          <Link className="flex items-center gap-2.5" to="/">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-heading text-sm font-extrabold text-white">
              AM
            </span>
            <span className="font-heading text-base font-extrabold text-foreground">
              Ashish <span className="text-gradient">Mishra</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Executive IT Leader helping enterprises modernize IT, optimize operations and embrace AI-driven transformation across the APAC region and beyond.
          </p>
          <div className="flex gap-2">
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">Explore</h3>
          <ul className="grid grid-cols-2 gap-2">
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/about">About</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/experience">Experience</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/projects">Projects</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">Services</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/blog">Blog</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/resources">Resources</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/media">Media</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">Services</h3>
          <ul className="space-y-2">
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">Executive IT Consulting</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">AI Strategy & Adoption</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">ITSM & ITIL Modernization</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">Fractional CIO Services</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">Corporate Training</Link></li>
            <li><Link className="text-sm text-muted-foreground transition hover:text-primary" to="/services">Vendor Governance</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">Newsletter</h3>
          <p className="text-sm text-muted-foreground">Insights on AI, ITSM and technology leadership — no noise.</p>
          
          {subscribed ? (
            <div className="flex items-center gap-2 text-sm text-cyan-400 bg-cyan-400/10 p-3 rounded-xl border border-cyan-400/30">
              <Check className="h-4 w-4" /> Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex h-9 w-full border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-full text-foreground"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors h-9 w-9 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-glow hover:opacity-90"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" /> {PORTFOLIO_DATA.personal.location}
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Ashish Mishra. All rights reserved.</p>
          <div className="flex gap-5">
            <Link className="transition hover:text-primary" to="/privacy">Privacy Policy</Link>
            <Link className="transition hover:text-primary" to="/terms">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
