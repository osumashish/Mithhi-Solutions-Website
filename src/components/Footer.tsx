import { Mail, Phone, MapPin, Globe, MessageCircle, Share2, Camera } from 'lucide-react'

const services = [
  'Executive Search', 'Specialized Recruitment', 'Bulk Hiring',
  'Contract Staffing', 'HR Consulting', 'Campus Hiring',
]

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Our Process', href: '#process' },
  { label: 'Industries', href: '#industries' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

const socials = [
  { Icon: Globe, href: '#', label: 'LinkedIn' },
  { Icon: MessageCircle, href: '#', label: 'Twitter' },
  { Icon: Share2, href: '#', label: 'Facebook' },
  { Icon: Camera, href: '#', label: 'Instagram' },
]

export function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-brand-950 text-white">
      {/* Main grid */}
      <div className="container-page pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a
              href="#"
              onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="group inline-block transition-transform duration-300 hover:scale-105"
            >
              {/* Full logo — inverted to white for dark navy footer */}
              <img
                src="/mitthi-logo.png"
                alt="Mitthi Solutions"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-5 text-sm leading-relaxed text-white/65 max-w-xs">
              Your trusted recruitment partner — connecting exceptional talent with
              leading organisations across India with speed, precision, and care.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-lg bg-white/8 text-white/60 hover:bg-brand-600 hover:text-white transition-all duration-200"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/65 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map(service => (
                <li key={service}>
                  <span className="text-sm text-white/65">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.12em] uppercase text-white/40 mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919545412385"
                  className="flex items-start gap-3 group"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-600/30 text-brand-300 mt-0.5">
                    <Phone className="size-4" />
                  </span>
                  <span className="text-sm text-white/65 group-hover:text-white transition-colors">
                    +91-95454 12385
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@mitthisolutions.com"
                  className="flex items-start gap-3 group"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-600/30 text-brand-300 mt-0.5">
                    <Mail className="size-4" />
                  </span>
                  <span className="text-sm text-white/65 group-hover:text-white transition-colors break-all">
                    info@mitthisolutions.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-600/30 text-brand-300 mt-0.5">
                    <MapPin className="size-4" />
                  </span>
                  <span className="text-sm text-white/65">
                    Surat, Gujarat, India
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Mitthi Solutions Pvt Ltd. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Serving Excellence | Surat, India
          </p>
        </div>
      </div>
    </footer>
  )
}
