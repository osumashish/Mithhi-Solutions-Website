import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Banknote,
  Bookmark,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  Clock,
  Gift,
  ListChecks,
  MapPin,
  Share2,
  Sparkles,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { JobCard } from '@/components/JobCard'
import { getJobBySlug, getRelatedJobs } from '@/data/jobs'
import { NotFound } from './NotFound'
import { formatCount, formatPosted, formatSalary } from '@/lib/utils'

function BulletList({
  title,
  items,
  icon: Icon,
}: {
  title: string
  items: string[]
  icon: typeof Check
}) {
  return (
    <section>
      <h2 className="flex items-center gap-2.5 font-display text-xl font-bold">
        <Icon className="size-5 text-brand-600" aria-hidden="true" />
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-700">
            <Check className="mt-1 size-4 shrink-0 text-brand-600" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function JobDetail() {
  const { slug } = useParams<{ slug: string }>()
  const job = slug ? getJobBySlug(slug) : undefined

  if (!job) return <NotFound />

  const related = getRelatedJobs(job)

  const facts = [
    { label: 'Salary band', value: formatSalary(job.salaryMin, job.salaryMax, job.salaryUnit), icon: Banknote },
    { label: 'Location', value: job.location, icon: MapPin },
    { label: 'Work mode', value: job.workMode, icon: Building2 },
    { label: 'Employment', value: job.employmentType, icon: Briefcase },
    { label: 'Experience', value: `${job.experience} level`, icon: Users },
    { label: 'Posted', value: formatPosted(job.postedDaysAgo), icon: CalendarDays },
  ]

  return (
    <>
      {/* Header band */}
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="container-page py-8 lg:py-12">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-600 transition-colors hover:text-brand-700"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to all jobs
          </Link>

          <div className="mt-6 flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex gap-4 sm:gap-5">
              <span
                aria-hidden="true"
                className={`grid size-14 shrink-0 place-items-center rounded-2xl font-display text-base font-bold sm:size-16 ${job.company.tileClass}`}
              >
                {job.company.initials}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  {job.featured && (
                    <Badge tone="brand" icon={<Sparkles className="size-3" aria-hidden="true" />}>
                      Featured
                    </Badge>
                  )}
                  <Badge tone="mint">Verified employer</Badge>
                </div>
                <h1 className="mt-2.5 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                  {job.title}
                </h1>
                <p className="mt-2 text-base text-ink-600">
                  <span className="font-semibold text-ink-800">{job.company.name}</span> ·{' '}
                  {job.company.industry} · {job.location}
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-4" aria-hidden="true" />
                    Posted {formatPosted(job.postedDaysAgo).toLowerCase()}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="size-4" aria-hidden="true" />
                    {formatCount(job.applicants)} applicants
                  </span>
                </p>
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-2.5 sm:flex-row lg:flex-col">
              <Button as="link" to={`/jobs/${job.slug}/apply`} size="lg">
                Apply now
              </Button>
              <div className="flex gap-2.5">
                <Button variant="secondary" className="flex-1">
                  <Bookmark className="size-4" aria-hidden="true" />
                  Save
                </Button>
                <Button variant="secondary" className="flex-1">
                  <Share2 className="size-4" aria-hidden="true" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[1fr_20rem] lg:gap-12">
          {/* Main content */}
          <div className="min-w-0 space-y-11">
            <div>
              <h2 className="font-display text-xl font-bold">About the role</h2>
              <div className="mt-4 space-y-4">
                {job.description.map((paragraph) => (
                  <p key={paragraph} className="text-[0.9375rem] leading-relaxed text-ink-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <BulletList title="What you'll do" items={job.responsibilities} icon={ListChecks} />
            <BulletList title="What we're looking for" items={job.requirements} icon={Check} />
            <BulletList title="Benefits" items={job.benefits} icon={Gift} />

            <div>
              <h2 className="font-display text-xl font-bold">Skills</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <li key={skill}>
                    <Link to={`/jobs?q=${encodeURIComponent(skill)}`}>
                      <Badge tone="neutral" className="transition-colors hover:bg-brand-50 hover:text-brand-700">
                        {skill}
                      </Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inline apply prompt for readers who got this far */}
            <div className="rounded-2xl bg-brand-600 px-6 py-8 text-center sm:px-10">
              <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                Still reading? That's a good sign.
              </h2>
              <p className="mx-auto mt-2.5 max-w-md text-sm leading-relaxed text-brand-100">
                The application takes about four minutes. {job.company.name} replies to every
                candidate within seven days.
              </p>
              <Button
                as="link"
                to={`/jobs/${job.slug}/apply`}
                variant="secondary"
                size="lg"
                className="mt-6"
              >
                Apply for this role
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="mt-12 space-y-5 lg:mt-0">
            <div className="lg:sticky lg:top-24 lg:space-y-5">
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80">
                <h2 className="font-display text-sm font-bold tracking-wide text-ink-900 uppercase">
                  Role at a glance
                </h2>
                <dl className="mt-5 space-y-4">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex gap-3">
                      <fact.icon className="mt-0.5 size-4.5 shrink-0 text-ink-400" aria-hidden="true" />
                      <div className="min-w-0">
                        <dt className="text-xs font-medium text-ink-500">{fact.label}</dt>
                        <dd className="text-sm font-semibold text-ink-900">{fact.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80">
                <h2 className="font-display text-sm font-bold tracking-wide text-ink-900 uppercase">
                  About {job.company.name}
                </h2>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className={`grid size-11 shrink-0 place-items-center rounded-xl font-display text-sm font-bold ${job.company.tileClass}`}
                  >
                    {job.company.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink-900">{job.company.name}</p>
                    <p className="truncate text-xs text-ink-500">{job.company.size}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-600">{job.company.about}</p>
                <Link
                  to="/companies"
                  className="mt-4 inline-block text-sm font-semibold text-brand-700 hover:text-brand-800"
                >
                  See all their roles →
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Related roles */}
        <div className="mt-18 border-t border-ink-200 pt-12">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">Similar roles</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <JobCard key={item.id} job={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
