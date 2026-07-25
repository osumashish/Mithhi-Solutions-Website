import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, Search, SlidersHorizontal, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { JobCard } from '@/components/JobCard'
import { jobs } from '@/data/jobs'
import { CATEGORIES, EMPLOYMENT_TYPES, EXPERIENCE_LEVELS, WORK_MODES } from '@/types'
import type { Job } from '@/types'
import { cn, formatCount } from '@/lib/utils'

type SortKey = 'recent' | 'salary-desc' | 'applicants-asc'

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'recent', label: 'Most recent' },
  { value: 'salary-desc', label: 'Highest salary' },
  { value: 'applicants-asc', label: 'Fewest applicants' },
]

/** Multi-value params live in the URL as `key=A,B` so filters survive a refresh or share. */
function parseList(params: URLSearchParams, key: string): string[] {
  const raw = params.get(key)
  return raw ? raw.split(',').filter(Boolean) : []
}

function matches(job: Job, query: string, location: string): boolean {
  if (location) {
    const needle = location.toLowerCase()
    const inLocation = job.location.toLowerCase().includes(needle)
    const remoteMatch = needle === 'remote' && job.workMode === 'Remote'
    if (!inLocation && !remoteMatch) return false
  }

  if (!query) return true
  const haystack = [
    job.title,
    job.company.name,
    job.company.industry,
    job.category,
    job.summary,
    job.workMode,
    job.employmentType,
    ...job.skills,
  ]
    .join(' ')
    .toLowerCase()

  // Every term must appear somewhere, so "react remote" narrows rather than widens.
  return query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term))
}

interface CheckGroupProps {
  legend: string
  options: readonly string[]
  selected: string[]
  onToggle: (value: string) => void
}

function CheckGroup({ legend, options, selected, onToggle }: CheckGroupProps) {
  return (
    <fieldset>
      <legend className="text-xs font-bold tracking-[0.12em] text-ink-500 uppercase">
        {legend}
      </legend>
      <div className="mt-3 space-y-1">
        {options.map((option) => {
          const checked = selected.includes(option)
          return (
            <label
              key={option}
              className={cn(
                'flex cursor-pointer items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition-colors',
                checked ? 'text-ink-900' : 'text-ink-600 hover:bg-ink-50',
              )}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(option)}
                className="size-4 shrink-0 cursor-pointer rounded border-ink-300 text-brand-600 accent-brand-600"
              />
              {option}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export function Jobs() {
  const [params, setParams] = useSearchParams()
  const [filtersOpen, setFiltersOpen] = useState(false)

  const query = params.get('q') ?? ''
  const location = params.get('location') ?? ''
  const sort = (params.get('sort') as SortKey | null) ?? 'recent'
  const selectedCategories = parseList(params, 'category')
  const selectedTypes = parseList(params, 'type')
  const selectedModes = parseList(params, 'mode')
  const selectedLevels = parseList(params, 'level')

  const activeCount =
    selectedCategories.length + selectedTypes.length + selectedModes.length + selectedLevels.length

  const update = (key: string, value: string | null) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const toggleIn = (key: string, current: string[]) => (value: string) => {
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value]
    update(key, next.length ? next.join(',') : null)
  }

  const clearAll = () => setParams(new URLSearchParams(), { replace: true })

  const results = useMemo(() => {
    const filtered = jobs.filter((job) => {
      if (!matches(job, query, location)) return false
      if (selectedCategories.length && !selectedCategories.includes(job.category)) return false
      if (selectedTypes.length && !selectedTypes.includes(job.employmentType)) return false
      if (selectedModes.length && !selectedModes.includes(job.workMode)) return false
      if (selectedLevels.length && !selectedLevels.includes(job.experience)) return false
      return true
    })

    const sorted = [...filtered]
    if (sort === 'salary-desc') sorted.sort((a, b) => b.salaryMax - a.salaryMax)
    else if (sort === 'applicants-asc') sorted.sort((a, b) => a.applicants - b.applicants)
    else sorted.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo)

    return sorted
  }, [query, location, sort, selectedCategories, selectedTypes, selectedModes, selectedLevels])

  const filterPanel = (
    <div className="space-y-7">
      <CheckGroup
        legend="Function"
        options={CATEGORIES}
        selected={selectedCategories}
        onToggle={toggleIn('category', selectedCategories)}
      />
      <CheckGroup
        legend="Work mode"
        options={WORK_MODES}
        selected={selectedModes}
        onToggle={toggleIn('mode', selectedModes)}
      />
      <CheckGroup
        legend="Employment type"
        options={EMPLOYMENT_TYPES}
        selected={selectedTypes}
        onToggle={toggleIn('type', selectedTypes)}
      />
      <CheckGroup
        legend="Experience"
        options={EXPERIENCE_LEVELS}
        selected={selectedLevels}
        onToggle={toggleIn('level', selectedLevels)}
      />
    </div>
  )

  return (
    <>
      {/* Search header */}
      <section className="border-b border-ink-200 bg-ink-50">
        <div className="container-page py-10 lg:py-14">
          <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">Browse jobs</h1>
          <p className="mt-2.5 max-w-2xl text-base text-ink-600">
            Every role below publishes its salary band. Filter down to what fits, then apply to the
            two or three that genuinely do.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-2.5 rounded-xl bg-white px-3.5 shadow-sm ring-1 ring-ink-200 focus-within:ring-2 focus-within:ring-brand-600">
              <Search className="size-5 shrink-0 text-ink-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => update('q', e.target.value || null)}
                placeholder="Role, skill or company"
                aria-label="Search by role, skill or company"
                className="h-12 w-full min-w-0 bg-transparent text-[0.9375rem] text-ink-900 placeholder:text-ink-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 shadow-sm ring-1 ring-ink-200 focus-within:ring-2 focus-within:ring-brand-600 sm:w-60">
              <input
                type="text"
                value={location}
                onChange={(e) => update('location', e.target.value || null)}
                placeholder="City or remote"
                aria-label="Filter by location"
                className="h-12 w-full min-w-0 bg-transparent text-[0.9375rem] text-ink-900 placeholder:text-ink-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10 lg:py-14">
        <div className="lg:grid lg:grid-cols-[16rem_1fr] lg:gap-10">
          {/* Desktop filters */}
          <aside aria-label="Filters" className="hidden lg:block">
            <div className="sticky top-24">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold text-ink-900">
                  <SlidersHorizontal className="size-4" aria-hidden="true" />
                  Filters
                </h2>
                {activeCount > 0 && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="text-xs font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Clear all
                  </button>
                )}
              </div>
              <div className="mt-6 max-h-[calc(100svh-11rem)] overflow-y-auto pr-1 pb-4">
                {filterPanel}
              </div>
            </div>
          </aside>

          <div className="min-w-0">
            {/* Results toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-ink-600">
                <span className="font-bold text-ink-900">{formatCount(results.length)}</span>{' '}
                {results.length === 1 ? 'role' : 'roles'} found
              </p>

              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setFiltersOpen(true)}
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-white px-3.5 text-sm font-semibold text-ink-800 ring-1 ring-ink-200 hover:bg-ink-50 lg:hidden"
                >
                  <Filter className="size-4" aria-hidden="true" />
                  Filters
                  {activeCount > 0 && (
                    <span className="grid size-5 place-items-center rounded-full bg-brand-600 text-[0.6875rem] font-bold text-white">
                      {activeCount}
                    </span>
                  )}
                </button>

                <label className="flex items-center gap-2 text-sm text-ink-600">
                  <span className="hidden sm:inline">Sort</span>
                  <select
                    value={sort}
                    onChange={(e) => update('sort', e.target.value === 'recent' ? null : e.target.value)}
                    className="h-10 cursor-pointer rounded-xl bg-white px-3 text-sm font-medium text-ink-800 ring-1 ring-ink-200 focus:ring-2 focus:ring-brand-600 focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {/* Active filter chips */}
            {activeCount > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {[
                  ...selectedCategories.map((v) => ['category', v, selectedCategories] as const),
                  ...selectedModes.map((v) => ['mode', v, selectedModes] as const),
                  ...selectedTypes.map((v) => ['type', v, selectedTypes] as const),
                  ...selectedLevels.map((v) => ['level', v, selectedLevels] as const),
                ].map(([key, value, list]) => (
                  <li key={`${key}-${value}`}>
                    <button
                      type="button"
                      onClick={() => toggleIn(key, list as string[])(value)}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 transition-colors hover:bg-brand-100"
                    >
                      {value}
                      <X className="size-3" aria-hidden="true" />
                      <span className="sr-only">Remove filter</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {/* Results */}
            {results.length > 0 ? (
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {results.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-dashed border-ink-300 bg-ink-50 px-6 py-16 text-center">
                <span className="mx-auto grid size-12 place-items-center rounded-xl bg-white text-ink-400 ring-1 ring-ink-200">
                  <Search className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-bold">No roles match that yet</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-600">
                  Try loosening a filter or searching a broader term. New roles land every weekday
                  morning, so it is worth checking back.
                </p>
                <Button variant="secondary" onClick={clearAll} className="mt-6">
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filter sheet */}
      {filtersOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setFiltersOpen(false)}
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Filters"
            className="animate-fade-up absolute inset-x-0 bottom-0 max-h-[85svh] overflow-y-auto rounded-t-3xl bg-white p-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">Filters</h2>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
                className="grid size-9 place-items-center rounded-lg text-ink-600 hover:bg-ink-100"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">{filterPanel}</div>
            <div className="mt-8 flex gap-3">
              <Button variant="secondary" onClick={clearAll} className="flex-1">
                Clear all
              </Button>
              <Button onClick={() => setFiltersOpen(false)} className="flex-1">
                Show {formatCount(results.length)} {results.length === 1 ? 'role' : 'roles'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
