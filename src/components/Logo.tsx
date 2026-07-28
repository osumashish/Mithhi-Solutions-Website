import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** `light` inverts the wordmark for use on dark backgrounds. */
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * Mitthi Solutions logo
 *
 * Uses the official MS monogram image mark as-is, paired with the
 * "mitthi solutions · SERVING EXCELLENCE" wordmark in the brand colours.
 */
export function Logo({ tone = 'dark', className }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="Mitthi Solutions — home"
      className={cn('group inline-flex items-center gap-2.5', className)}
    >
      {/* Official MS monogram image mark */}
      <span className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src="/mitthi-logo-mark.jpg"
          alt=""
          aria-hidden="true"
          className={cn(
            'h-10 w-10 object-contain',
            /* On dark backgrounds the white JPG background is visible — add a
               subtle rounded white tile so it always sits cleanly. */
            tone === 'light'
              ? 'rounded-lg bg-white/10 p-0.5'
              : 'rounded-lg',
          )}
        />
      </span>

      {/* Wordmark — "mitthi" in dark navy, "solutions" in vivid blue */}
      <span className="flex flex-col leading-none">
        <span className="flex items-baseline gap-1">
          <span
            className={cn(
              'font-display text-[1rem] font-extrabold tracking-tight',
              tone === 'light' ? 'text-white' : 'text-[#162163]',
            )}
          >
            mitthi
          </span>
          <span
            className={cn(
              'font-display text-[1rem] font-extrabold tracking-tight',
              tone === 'light' ? 'text-brand-300' : 'text-brand-600',
            )}
          >
            solutions
          </span>
        </span>

        {/* "SERVING EXCELLENCE" tagline with decorative dashes */}
        <span
          className={cn(
            'flex items-center gap-1 text-[0.5rem] font-semibold tracking-[0.22em] uppercase',
            tone === 'light' ? 'text-brand-200/80' : 'text-ink-400',
          )}
        >
          <span aria-hidden="true" className="h-px w-3 bg-current inline-block" />
          Serving Excellence
          <span aria-hidden="true" className="h-px w-3 bg-current inline-block" />
        </span>
      </span>
    </Link>
  )
}
