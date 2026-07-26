import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface LogoProps {
  /** `light` inverts the wordmark for use on dark backgrounds. */
  tone?: 'dark' | 'light'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Logo({ tone = 'dark', className, size = 'md' }: LogoProps) {
  const heightMap = {
    sm: 'h-8 md:h-9',
    md: 'h-10 md:h-12',
    lg: 'h-14 md:h-16',
  }

  return (
    <Link
      to="/"
      aria-label="Mithhi Solutions — home"
      className={cn('group inline-flex items-center transition-transform duration-200 hover:opacity-95', className)}
    >
      <img
        src="/logo-transparent.png"
        alt="Mithhi Solutions"
        className={cn(
          'w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]',
          heightMap[size],
          tone === 'light' ? 'brightness-0 invert drop-shadow-[0_1px_3px_rgba(255,255,255,0.2)]' : ''
        )}
      />
    </Link>
  )
}
