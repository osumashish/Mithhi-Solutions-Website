import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

const links = [
  { to: '/', label: 'Home' },
  { to: '/jobs', label: 'Browse jobs' },
  { to: '/companies', label: 'Companies' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile sheet on navigation.
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-ink-200/80 bg-white/85 backdrop-blur-lg'
          : 'border-transparent bg-white',
      )}
    >
      <div className="container-page flex h-17 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3.5 py-2 text-[0.9375rem] font-medium transition-colors',
                  isActive
                    ? 'text-brand-700 bg-brand-50'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as="link" to="/jobs" variant="ghost" size="sm">
            Sign in
          </Button>
          <Button as="link" to="/post-a-job" size="sm">
            Post a job
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid size-10 place-items-center rounded-lg text-ink-700 hover:bg-ink-100 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="animate-fade-in border-t border-ink-200 bg-white md:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-3 text-base font-medium',
                    isActive ? 'text-brand-700 bg-brand-50' : 'text-ink-700',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-ink-200 pt-4 pb-2">
              <Link
                to="/jobs"
                className="rounded-xl px-3 py-2 text-center text-[0.9375rem] font-semibold text-ink-700 ring-1 ring-ink-200"
              >
                Sign in
              </Link>
              <Button as="link" to="/post-a-job">
                Post a job
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
