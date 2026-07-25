import { Link } from 'react-router-dom'
import { ArrowUpRight, Banknote, Clock, MapPin, Sparkles, Users } from 'lucide-react'
import { Badge } from './ui/Badge'
import type { Job } from '@/types'
import { cn, formatCount, formatPosted, formatSalary } from '@/lib/utils'

const modeTone = {
  Remote: 'mint',
  Hybrid: 'sky',
  'On-site': 'neutral',
} as const

interface JobCardProps {
  job: Job
  className?: string
}

export function JobCard({ job, className }: JobCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-200 sm:p-6',
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className={cn(
            'grid size-12 shrink-0 place-items-center rounded-xl font-display text-sm font-bold',
            job.company.tileClass,
          )}
        >
          {job.company.initials}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="truncate text-base font-bold sm:text-[1.0625rem]">
                {/* Stretched link keeps the whole card clickable without nesting anchors */}
                <Link to={`/jobs/${job.slug}`} className="after:absolute after:inset-0">
                  {job.title}
                </Link>
              </h3>
              <p className="mt-0.5 truncate text-sm text-ink-500">
                {job.company.name} · {job.company.industry}
              </p>
            </div>
            {job.featured && (
              <Badge tone="brand" icon={<Sparkles className="size-3" aria-hidden="true" />}>
                Featured
              </Badge>
            )}
          </div>
        </div>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-ink-600">{job.summary}</p>

      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-600">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Location</dt>
          <MapPin className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
          <dd>{job.location}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Salary</dt>
          <Banknote className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
          <dd className="font-medium text-ink-800">
            {formatSalary(job.salaryMin, job.salaryMax, job.salaryUnit)}
          </dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">Applicants</dt>
          <Users className="size-4 shrink-0 text-ink-400" aria-hidden="true" />
          <dd>{formatCount(job.applicants)} applied</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-4">
        <Badge tone={modeTone[job.workMode]}>{job.workMode}</Badge>
        <Badge tone="outline">{job.employmentType}</Badge>
        <Badge tone="outline">{job.experience}</Badge>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-ink-500">
          <Clock className="size-3.5" aria-hidden="true" />
          {formatPosted(job.postedDaysAgo)}
        </span>
        <ArrowUpRight
          className="size-4 shrink-0 text-ink-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-600"
          aria-hidden="true"
        />
      </div>
    </article>
  )
}
