import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** `light` inverts the wordmark for use on dark backgrounds. */
  tone?: 'dark' | 'light'
  className?: string
}

export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Mithhi Talent Connect — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      <span className="relative grid size-9 shrink-0 place-items-center rounded-xl bg-brand-600 shadow-sm transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-5 text-white" aria-hidden="true">
          <path
            d="M5 17V9.5L12 5l7 4.5V17"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="13.2" r="2.1" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[0.9375rem] font-extrabold tracking-tight',
            tone === 'light' ? 'text-white' : 'text-ink-900',
          )}
        >
          Mithhi
        </span>
        <span
          className={cn(
            'text-[0.6875rem] font-semibold tracking-[0.14em] uppercase',
            tone === 'light' ? 'text-brand-200' : 'text-brand-600',
          )}
        >
          Talent Connect
        </span>
      </span>
    </Link>
  )
}
