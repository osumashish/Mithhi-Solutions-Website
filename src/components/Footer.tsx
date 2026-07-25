import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { Logo } from './Logo'
import { CATEGORIES } from '@/types'

// lucide-react v1 no longer ships brand marks, so these two are inlined.
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21h-4V9Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
      <path d="M17.53 3h3.2l-6.99 7.99L21.75 21h-6.4l-4.2-5.5L6.3 21H3.1l7.28-8.32L2.5 3h6.55l3.9 5.15L17.53 3Zm-1.12 16h1.77L7.03 4.75H5.13L16.41 19Z" />
    </svg>
  )
}

const columns = [
  {
    title: 'For candidates',
    links: [
      { label: 'Browse jobs', to: '/jobs' },
      { label: 'Remote roles', to: '/jobs?mode=Remote' },
      { label: 'Internships', to: '/jobs?type=Internship' },
      { label: 'Companies', to: '/companies' },
    ],
  },
  {
    title: 'For employers',
    links: [
      { label: 'Post a job', to: '/post-a-job' },
      { label: 'Pricing', to: '/post-a-job' },
      { label: 'Hiring guides', to: '/about' },
      { label: 'Talk to us', to: '/about' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Mithhi', to: '/about' },
      { label: 'Careers', to: '/jobs' },
      { label: 'Privacy', to: '/about' },
      { label: 'Terms', to: '/about' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink-800 bg-ink-950 text-ink-400">
      <div className="container-page py-14 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-4 text-sm leading-relaxed">
              Mithhi Talent Connect is where ambitious people meet teams worth joining. Curated
              roles, honest listings, and no ghosting — we hold employers to it.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 shrink-0 text-brand-400" aria-hidden="true" />
                Bengaluru · Mumbai · Remote
              </span>
              <a
                href="mailto:hello@mithhi.example"
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-brand-400" aria-hidden="true" />
                hello@mithhi.example
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-800 pt-8">
          <h3 className="text-xs font-semibold tracking-[0.14em] text-ink-500 uppercase">
            Popular categories
          </h3>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link
                  to={`/jobs?category=${encodeURIComponent(category)}`}
                  className="transition-colors hover:text-white"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-5 border-t border-ink-800 pt-8 text-sm sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Mithhi Solutions. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Mithhi on LinkedIn"
              className="grid size-9 place-items-center rounded-lg ring-1 ring-ink-800 transition-colors hover:bg-ink-800 hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Mithhi on X"
              className="grid size-9 place-items-center rounded-lg ring-1 ring-ink-800 transition-colors hover:bg-ink-800 hover:text-white"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
