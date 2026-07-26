import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X, FileText, Tv, Shield, Scale } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on path change
  useEffect(() => {
    setIsMoreOpen(false);
    setIsMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  const moreLinks = [
    { name: 'Resources', path: '/resources', icon: FileText, desc: 'Downloadable templates & frameworks' },
    { name: 'Media', path: '/media', icon: Tv, desc: 'Press, speaking & mentions' },
    { name: 'Privacy Policy', path: '/privacy', icon: Shield, desc: 'Data handling guidelines' },
    { name: 'Terms of Use', path: '/terms', icon: Scale, desc: 'Legal terms & disclaimers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-border/60 shadow-md'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        {/* Brand Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 font-heading text-sm font-extrabold text-white shadow-glow">
            AM
          </span>
          <span className="hidden font-heading text-base font-extrabold tracking-tight sm:block text-foreground">
            Ashish <span className="text-gradient">Mishra</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(link.path)
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground outline-none transition hover:bg-accent hover:text-foreground"
              aria-expanded={isMoreOpen}
            >
              More <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMoreOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsMoreOpen(false)}
                />
                <div className="absolute right-0 top-full z-20 mt-2 w-64 rounded-2xl border border-border/80 bg-slate-900/95 p-2 shadow-2xl backdrop-blur-xl animate-fade-in">
                  {moreLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-accent/60 ${
                          isActive(item.path) ? 'bg-primary/10 text-primary' : 'text-foreground'
                        }`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary mt-0.5">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right CTA & Theme Toggle */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Link
            to="/contact"
            className="hidden items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors h-9 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 text-white shadow-glow hover:opacity-90 md:inline-flex"
          >
            Book a Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 lg:hidden text-foreground"
          >
            {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobileOpen && (
        <div className="border-b border-border bg-slate-950/95 backdrop-blur-2xl p-6 lg:hidden animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`rounded-xl px-4 py-3 text-base font-medium transition ${
                  isActive(link.path)
                    ? 'bg-primary/15 text-primary font-semibold'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="my-2 border-t border-border/60 pt-3">
              <p className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">More</p>
              {moreLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition ${
                    isActive(item.path) ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center text-sm font-semibold text-white shadow-glow"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
