type ClassValue = string | number | false | null | undefined

/**
 * Tiny class joiner. Intentionally not a tailwind-merge — components here take
 * `className` as an additive override, so last-wins conflicts are not a concern.
 */
export function cn(...values: ClassValue[]): string {
  return values.filter(Boolean).join(' ')
}

export function formatSalary(min: number, max: number, unit: string): string {
  return `${unit} ${min}–${max}`
}

export function formatPosted(daysAgo: number): string {
  if (daysAgo === 0) return 'Today'
  if (daysAgo === 1) return 'Yesterday'
  if (daysAgo < 7) return `${daysAgo}d ago`
  if (daysAgo < 14) return '1w ago'
  if (daysAgo < 30) return `${Math.floor(daysAgo / 7)}w ago`
  return `${Math.floor(daysAgo / 30)}mo ago`
}

export function formatCount(value: number): string {
  return new Intl.NumberFormat('en-IN').format(value)
}
