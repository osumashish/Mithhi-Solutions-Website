export const EMPLOYMENT_TYPES = [
  'Full-time',
  'Part-time',
  'Contract',
  'Internship',
] as const

export type EmploymentType = (typeof EMPLOYMENT_TYPES)[number]

export const WORK_MODES = ['Remote', 'Hybrid', 'On-site'] as const

export type WorkMode = (typeof WORK_MODES)[number]

export const EXPERIENCE_LEVELS = ['Entry', 'Mid', 'Senior', 'Lead'] as const

export type ExperienceLevel = (typeof EXPERIENCE_LEVELS)[number]

export const CATEGORIES = [
  'Engineering',
  'Design',
  'Data & AI',
  'Product',
  'Marketing',
  'Customer Success',
  'Finance',
  'People',
] as const

export type Category = (typeof CATEGORIES)[number]

export interface Company {
  name: string
  /** Two-letter monogram rendered in the logo tile. */
  initials: string
  /** Tailwind classes for the logo tile so each brand reads distinctly. */
  tileClass: string
  industry: string
  size: string
  about: string
}

export interface Job {
  id: string
  slug: string
  title: string
  company: Company
  category: Category
  employmentType: EmploymentType
  workMode: WorkMode
  experience: ExperienceLevel
  location: string
  salaryMin: number
  salaryMax: number
  /** Currency-per-year unit label, e.g. "₹ LPA". */
  salaryUnit: string
  /** Days since the role was posted — drives "3d ago" and recency sorting. */
  postedDaysAgo: number
  applicants: number
  featured: boolean
  summary: string
  description: string[]
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  skills: string[]
}
