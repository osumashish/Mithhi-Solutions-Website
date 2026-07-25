import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-55'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white shadow-sm hover:bg-brand-700 hover:shadow-glow active:translate-y-px',
  secondary:
    'bg-white text-ink-800 ring-1 ring-ink-200 shadow-sm hover:bg-ink-50 hover:ring-ink-300 active:translate-y-px',
  ghost: 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
  'outline-light':
    'bg-white/10 text-white ring-1 ring-white/30 backdrop-blur-sm hover:bg-white/20 active:translate-y-px',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5 text-[0.9375rem]',
  lg: 'h-13 px-7 text-base',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof CommonProps> & {
    as?: 'button'
  }

type AnchorProps = CommonProps &
  Omit<ComponentPropsWithoutRef<'a'>, keyof CommonProps> & {
    as: 'a'
  }

type RouterLinkProps = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps> & {
    as: 'link'
  }

export type ButtonComponentProps = ButtonProps | AnchorProps | RouterLinkProps

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonComponentProps) {
  const classes = cn(base, variants[variant], sizes[size], className)
  const { as = 'button', ...props } = rest as { as?: 'button' | 'a' | 'link' } & Record<
    string,
    unknown
  >

  const Component = (as === 'link' ? Link : as) as ElementType

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}
