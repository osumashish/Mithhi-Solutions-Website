import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Users } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { companies } from '@/data/companies'
import { jobs } from '@/data/jobs'

export function Companies() {
  const list = Object.values(companies).map((company) => ({
    company,
    openRoles: jobs.filter((job) => job.company.name === company.name),
  }))

  return (
    <>
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="container-page py-10 lg:py-14">
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            Teams hiring on Mitthi Solutions
          </h1>
          <p className="mt-2.5 max-w-2xl text-base leading-relaxed text-ink-600">
            Every company here has been verified — we confirm the role is real, the budget is
            approved and someone is actually reading applications.
          </p>
        </div>
      </section>

      <section className="container-page py-10 lg:py-14">
        <ul className="grid gap-5 md:grid-cols-2">
          {list.map(({ company, openRoles }) => (
            <li
              key={company.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className={`grid size-13 shrink-0 place-items-center rounded-xl font-display text-sm font-bold ${company.tileClass}`}
                >
                  {company.initials}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="truncate font-display text-lg font-bold text-ink-900">
                        {company.name}
                      </h2>
                      <p className="truncate text-sm text-ink-500">{company.industry}</p>
                    </div>
                    <Badge
                      tone="mint"
                      icon={<BadgeCheck className="size-3" aria-hidden="true" />}
                    >
                      Verified
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-600">{company.about}</p>

              <div className="mt-5 flex items-center gap-4 text-sm text-ink-600">
                <span className="flex items-center gap-1.5">
                  <Users className="size-4 text-ink-400" aria-hidden="true" />
                  {company.size}
                </span>
              </div>

              {openRoles.length > 0 && (
                <ul className="mt-5 space-y-1.5 border-t border-ink-100 pt-4">
                  {openRoles.map((job) => (
                    <li key={job.id}>
                      <Link
                        to={`/jobs/${job.slug}`}
                        className="group flex items-center justify-between gap-3 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-ink-50"
                      >
                        <span className="min-w-0 truncate font-medium text-ink-800">
                          {job.title}
                        </span>
                        <span className="flex shrink-0 items-center gap-1.5 text-xs text-ink-500">
                          {job.workMode}
                          <ArrowRight
                            className="size-3.5 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <Link
                to={`/jobs?q=${encodeURIComponent(company.name)}`}
                className="mt-auto pt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                {openRoles.length} open{' '}
                {openRoles.length === 1 ? 'role' : 'roles'} at {company.name} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
