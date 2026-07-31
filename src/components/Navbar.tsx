import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#industries', label: 'Industries' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-ink-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-36 lg:h-40">
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="group shrink-0 transition-transform duration-300 group-hover:scale-105"
            aria-label="Mitthi Solutions — home"
          >
            {/* Full logo on dark (hero) — original colours on white */}
            <img
              src="/mitthi-logo.png"
              alt="Mitthi Solutions"
              className={`h-36 w-auto object-contain transition-all duration-300 ${
                scrolled ? 'brightness-100' : 'brightness-0 invert'
              }`}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-[0.9rem] font-semibold transition-colors ${
                  scrolled
                    ? 'text-ink-700 hover:text-brand-600 hover:bg-brand-50'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919545412385"
              className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? 'text-ink-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="size-4" />
              +91-95454 12385
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-blue transition-all duration-200 active:scale-95"
            >
              Hire Talent
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className={`lg:hidden grid size-10 place-items-center rounded-xl transition-colors ${
              scrolled ? 'text-ink-700 hover:bg-ink-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden bg-white/97 backdrop-blur-xl border-t border-ink-100 shadow-lift">
          <div className="container-page py-5 space-y-1">
            {links.map(link => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-[0.95rem] font-semibold text-ink-800 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:+919545412385"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-ink-600"
              >
                <Phone className="size-4 text-brand-600" />
                +91-95454 12385
              </a>
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-brand-600 text-white px-5 py-3.5 rounded-xl text-sm font-bold"
              >
                Hire Talent Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
