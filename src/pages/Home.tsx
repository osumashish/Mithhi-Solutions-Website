import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Briefcase,
  Building2,
  Code2,
  FileText,
  HeartHandshake,
  LineChart,
  MapPin,
  Megaphone,
  MessageSquare,
  PenTool,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { JobCard } from '@/components/JobCard'
import { jobs } from '@/data/jobs'
import { companies } from '@/data/companies'
import { CATEGORIES } from '@/types'

const stats = [
  { value: '2,400+', label: 'Open roles', icon: Briefcase },
  { value: '680', label: 'Hiring teams', icon: Building2 },
  { value: '91%', label: 'Get a reply', icon: MessageSquare },
  { value: '18 days', label: 'Median time to offer', icon: LineChart },
]

const categoryIcons = {
  Engineering: Code2,
  Design: PenTool,
  'Data & AI': BarChart3,
  Product: Briefcase,
  Marketing: Megaphone,
  'Customer Success': HeartHandshake,
  Finance: LineChart,
  People: Users,
} as const

const categoryCounts: Record<string, string> = {
  Engineering: '840 roles',
  Design: '210 roles',
  'Data & AI': '395 roles',
  Product: '176 roles',
  Marketing: '243 roles',
  'Customer Success': '188 roles',
  Finance: '132 roles',
  People: '96 roles',
}

const steps = [
  {
    icon: FileText,
    title: 'Build one honest profile',
    body: 'Tell us what you actually want to work on and what you need to be paid. No résumé keyword games — hiring teams see the real thing.',
  },
  {
    icon: Search,
    title: 'See only roles that fit',
    body: 'Every listing carries a real salary band, work mode and team size up front. If it is not a fit, you will know before you apply.',
  },
  {
    icon: Send,
    title: 'Apply and hear back',
    body: 'Employers on Mithhi commit to responding within seven days. We track it publicly, and we remove the ones who do not.',
  },
]

const promises = [
  {
    icon: BadgeCheck,
    title: 'Salary bands, always',
    body: 'No listing goes live without a published range. It is the first thing you want to know, so it is the first thing we show.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified employers only',
    body: 'We check every hiring team before their first post — real company, real role, real budget approved.',
  },
  {
    icon: MessageSquare,
    title: 'A reply within seven days',
    body: 'Ghosting is the worst part of job hunting. Employers here agree to a response deadline, and we hold them to it.',
  },
]

const testimonials = [
  {
    quote:
      'I had been applying through the usual boards for four months with almost no replies. Three applications here, two interviews, one offer at a real raise.',
    name: 'Ananya R.',
    role: 'Backend Engineer → Keystone Financial',
    initials: 'AR',
    tile: 'bg-brand-600 text-white',
  },
  {
    quote:
      'Seeing the salary band before applying saved me weeks. I stopped wasting time on roles that were never going to work financially.',
    name: 'Devansh M.',
    role: 'Data Analyst → Cobalt Retail',
    initials: 'DM',
    tile: 'bg-emerald-600 text-white',
  },
  {
    quote:
      'We filled two senior design roles in five weeks. The candidates arrived already understanding what the job was, which never happens.',
    name: 'Priya S.',
    role: 'Head of Design, Lumen Studio',
    initials: 'PS',
    tile: 'bg-amber-400 text-ink-900',
  },
]

function Hero() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (location.trim()) params.set('location', location.trim())
    navigate(`/jobs${params.toString() ? `?${params}` : ''}`)
  }

  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      {/* Layered gradient + dot texture backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_15%_0%,#3723b2_0%,transparent_55%),radial-gradient(90%_80%_at_100%_10%,#4f39f6_0%,transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dotted text-white/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-96 rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="container-page relative py-18 lg:py-26">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold ring-1 ring-white/20 backdrop-blur-sm">
              <Sparkles className="size-3.5 text-brand-200" aria-hidden="true" />
              412 new roles added this week
            </span>

            <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Find work worth
              <br />
              <span className="bg-gradient-to-r from-brand-200 via-white to-brand-200 bg-clip-text text-transparent">
                doing.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-300">
              Mithhi Talent Connect lists roles with the salary band, work mode and team size
              published up front — and employers who commit to replying inside a week.
            </p>

            <form
              onSubmit={onSubmit}
              className="mt-9 rounded-2xl bg-white/95 p-2.5 shadow-lift backdrop-blur sm:rounded-full"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex flex-1 items-center gap-2.5 px-3">
                  <Search className="size-5 shrink-0 text-ink-400" aria-hidden="true" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Role, skill or company"
                    aria-label="Role, skill or company"
                    className="h-11 w-full min-w-0 bg-transparent text-[0.9375rem] text-ink-900 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
                <span aria-hidden="true" className="hidden h-7 w-px bg-ink-200 sm:block" />
                <div className="flex flex-1 items-center gap-2.5 px-3 sm:max-w-56">
                  <MapPin className="size-5 shrink-0 text-ink-400" aria-hidden="true" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City or remote"
                    aria-label="City or remote"
                    className="h-11 w-full min-w-0 bg-transparent text-[0.9375rem] text-ink-900 placeholder:text-ink-400 focus:outline-none"
                  />
                </div>
                <Button type="submit" size="lg" className="sm:rounded-full">
                  Search jobs
                </Button>
              </div>
            </form>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-ink-400">Popular:</span>
              {['React', 'Product Manager', 'Remote', 'Internship'].map((term) => (
                <Link
                  key={term}
                  to={`/jobs?q=${encodeURIComponent(term)}`}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15 transition-colors hover:bg-white/20"
                >
                  {term}
                </Link>
              ))}
            </div>
          </div>

          {/* Floating preview card — signals what a listing looks like */}
          <div className="animate-fade-up lg:animate-fade-in relative hidden lg:block">
            <div className="relative rounded-4xl bg-white/[0.06] p-2 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="rounded-3xl bg-white p-6 shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.14em] text-ink-400 uppercase">
                    Live listing
                  </span>
                  <Badge tone="mint">Verified employer</Badge>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white"
                  >
                    NL
                  </span>
                  <div>
                    <h2 className="text-lg font-bold">Senior Frontend Engineer</h2>
                    <p className="text-sm text-ink-500">Northwind Labs · Remote, India</p>
                  </div>
                </div>

                <dl className="mt-5 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Salary band', value: '₹38–52 LPA' },
                    { label: 'Work mode', value: 'Fully remote' },
                    { label: 'Team size', value: '9 engineers' },
                    { label: 'Reply within', value: '4 days' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-ink-50 px-3.5 py-2.5">
                      <dt className="text-[0.6875rem] font-medium tracking-wide text-ink-500 uppercase">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-ink-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                  <Button as="link" to="/jobs/senior-frontend-engineer-northwind-labs" size="sm">
                    View role
                  </Button>
                  <span className="text-xs text-ink-500">47 people applied</span>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-8 rounded-2xl bg-white px-5 py-4 shadow-lift"
            >
              <p className="font-display text-2xl font-extrabold text-ink-900">18 days</p>
              <p className="text-xs font-medium text-ink-500">median time to offer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section aria-label="Platform statistics" className="border-b border-ink-200 bg-white">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-9 py-12 lg:grid-cols-4 lg:py-14">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-start gap-3.5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <stat.icon className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold text-ink-900 lg:text-3xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-sm text-ink-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({
  eyebrow,
  title,
  body,
  action,
}: {
  eyebrow: string
  title: string
  body?: string
  action?: { to: string; label: string }
}) {
  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">{eyebrow}</p>
        <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight lg:text-4xl">{title}</h2>
        {body && <p className="mt-3.5 text-base leading-relaxed text-ink-600">{body}</p>}
      </div>
      {action && (
        <Link
          to={action.to}
          className="group inline-flex shrink-0 items-center gap-1.5 text-[0.9375rem] font-semibold text-brand-700 hover:text-brand-800"
        >
          {action.label}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  )
}

function Categories() {
  return (
    <section className="bg-ink-50 py-18 lg:py-22">
      <div className="container-page">
        <SectionHeading
          eyebrow="Browse by function"
          title="Where do you want to work?"
          body="Eight functions, each with roles from teams we have actually vetted."
        />
        <ul className="mt-10 grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {CATEGORIES.map((category) => {
            const Icon = categoryIcons[category]
            return (
              <li key={category}>
                <Link
                  to={`/jobs?category=${encodeURIComponent(category)}`}
                  className="group flex h-full flex-col gap-3 rounded-2xl bg-white p-5 ring-1 ring-ink-200/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift hover:ring-brand-300"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-[0.9375rem] font-bold text-ink-900">
                    {category}
                  </span>
                  <span className="mt-auto text-xs font-medium text-ink-500">
                    {categoryCounts[category]}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function FeaturedJobs() {
  const featured = jobs.filter((job) => job.featured)
  const recent = jobs.filter((job) => !job.featured).slice(0, 3)

  return (
    <section className="py-18 lg:py-22">
      <div className="container-page">
        <SectionHeading
          eyebrow="Handpicked this week"
          title="Featured roles"
          body="Chosen because the team is strong, the band is fair and the hiring process is quick."
          action={{ to: '/jobs', label: 'Browse all 2,400 roles' }}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <h3 className="mt-16 font-display text-xl font-bold">Recently posted</h3>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {recent.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-ink-50 py-18 lg:py-22">
      <div className="container-page">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, no busywork"
          body="You should spend your energy on the two roles that matter, not on forty applications that go nowhere."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl bg-white p-6 ring-1 ring-ink-200/80"
            >
              <span
                aria-hidden="true"
                className="absolute top-6 right-6 font-display text-4xl font-extrabold text-ink-100"
              >
                0{index + 1}
              </span>
              <span className="grid size-12 place-items-center rounded-xl bg-brand-600 text-white">
                <step.icon className="size-5.5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Promises() {
  return (
    <section className="py-18 lg:py-22">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
            Why Mithhi
          </p>
          <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight lg:text-4xl">
            Three promises we can actually keep
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600">
            Job boards are usually built for the employer, and it shows. We wrote our rules from
            the candidate's side and then asked employers to agree to them.
          </p>
          <Button as="link" to="/about" variant="secondary" className="mt-7">
            Read our hiring standards
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <ul className="grid gap-4">
          {promises.map((promise) => (
            <li
              key={promise.title}
              className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-ink-200/80 transition-shadow hover:shadow-card sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <promise.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold">{promise.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{promise.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Employers() {
  return (
    <section className="border-y border-ink-200 bg-ink-50 py-14">
      <div className="container-page">
        <p className="text-center text-sm font-medium text-ink-500">
          Teams hiring on Mithhi right now
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {Object.values(companies).map((company) => (
            <li key={company.name} className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className={`grid size-8 place-items-center rounded-lg font-display text-[0.6875rem] font-bold ${company.tileClass}`}
              >
                {company.initials}
              </span>
              <span className="font-display text-sm font-bold text-ink-700">{company.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-18 lg:py-22">
      <div className="container-page">
        <SectionHeading
          eyebrow="From both sides"
          title="What people tell us afterwards"
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <li
              key={item.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80"
            >
              <blockquote className="flex-1 text-[0.9375rem] leading-relaxed text-ink-700">
                <p>“{item.quote}”</p>
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
                <span
                  aria-hidden="true"
                  className={`grid size-10 shrink-0 place-items-center rounded-full font-display text-xs font-bold ${item.tile}`}
                >
                  {item.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-ink-900">{item.name}</span>
                  <span className="block text-xs text-ink-500">{item.role}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="container-page pb-18 lg:pb-22">
      <div className="relative overflow-hidden rounded-4xl bg-ink-950 px-6 py-14 text-center sm:px-12 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_0%,#4229dd_0%,transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dotted text-white/[0.06]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
            Your next role is on here somewhere
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300 lg:text-lg">
            Two thousand four hundred open roles with published salary bands. Start with a search,
            or let hiring teams come to you.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="link" to="/jobs" size="lg">
              Browse jobs
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button as="link" to="/post-a-job" size="lg" variant="outline-light">
              I'm hiring
            </Button>
          </div>
          <p className="mt-6 text-sm text-ink-400">
            Free for candidates, always. No recruiter spam.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <FeaturedJobs />
      <HowItWorks />
      <Promises />
      <Employers />
      <Testimonials />
      <CallToAction />
    </>
  )
}
