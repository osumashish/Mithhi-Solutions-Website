import { ArrowRight, BadgeCheck, Ban, Clock, Eye, Scale, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const standards = [
  {
    icon: BadgeCheck,
    title: 'Publish the salary band',
    body: 'A real range, narrow enough to be useful. "Competitive" is not a number and we will not run it.',
  },
  {
    icon: Clock,
    title: 'Reply within seven days',
    body: 'Every applicant hears something — an interview invitation or a decline with a reason. Silence is not an option.',
  },
  {
    icon: Eye,
    title: 'Describe the job honestly',
    body: 'Team size, reporting line, work mode and what the first ninety days actually look like.',
  },
  {
    icon: Scale,
    title: 'Keep the process proportionate',
    body: 'No five-round marathons for a mid-level role, and no unpaid take-home longer than four hours.',
  },
  {
    icon: Ban,
    title: 'No bait listings',
    body: 'The role exists, the budget is approved and someone is empowered to make an offer. We check.',
  },
  {
    icon: ShieldCheck,
    title: 'Respect candidate data',
    body: 'Applications go to the hiring team and nowhere else. We do not sell data or resell profiles to recruiters.',
  },
]

const timeline = [
  {
    year: '2021',
    title: 'A spreadsheet and a grudge',
    body: 'Mithhi Solutions started as a small consulting team. We kept a spreadsheet of good candidates our clients had ghosted, and it got embarrassing how long it grew.',
  },
  {
    year: '2023',
    title: 'The first version',
    body: 'We built Talent Connect for our own clients, with one rule: publish the band or you do not get a listing. Eleven companies agreed. Four did not.',
  },
  {
    year: '2025',
    title: 'Opened to everyone',
    body: 'Six hundred and eighty hiring teams, all of them signed up to the same standards. We have removed nineteen for breaking them.',
  },
  {
    year: 'Today',
    title: 'Still deliberately picky',
    body: 'We turn down roughly a third of employers who apply to list with us. It keeps the board worth reading.',
  },
]

const numbers = [
  { value: '91%', label: 'of applicants get a reply' },
  { value: '18 days', label: 'median time to offer' },
  { value: '19', label: 'employers removed for ghosting' },
  { value: '100%', label: 'of listings show a salary band' },
]

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_20%_0%,#3723b2_0%,transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dotted text-white/[0.07]"
        />
        <div className="container-page relative py-16 lg:py-22">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.14em] text-brand-300 uppercase">
              About us
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight font-extrabold tracking-tight text-white lg:text-5xl">
              Hiring is broken in small, fixable ways
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-300">
              Not in some grand systemic sense — in ordinary ones. Listings that hide the salary.
              Applications that vanish. Five interview rounds for a role that pays twelve lakh.
              None of that is inevitable. It is just what happens when nobody insists otherwise.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-300">
              Mithhi Talent Connect is us insisting otherwise.
            </p>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section aria-label="Key numbers" className="border-b border-ink-200 bg-white">
        <div className="container-page grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {numbers.map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl font-extrabold text-brand-600 lg:text-4xl">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm text-ink-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="py-18 lg:py-22">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
              Our hiring standards
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight lg:text-4xl">
              Six rules every employer agrees to
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              These are not aspirations. They are conditions of listing, and we have removed
              nineteen companies for breaking them.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {standards.map((standard) => (
              <li
                key={standard.title}
                className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <standard.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold">{standard.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{standard.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ink-50 py-18 lg:py-22">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
              How we got here
            </p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight lg:text-4xl">
              Four years, one stubborn idea
            </h2>
          </div>

          <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((entry) => (
              <li key={entry.year} className="rounded-2xl bg-white p-6 ring-1 ring-ink-200/80">
                <p className="font-display text-sm font-extrabold text-brand-600">{entry.year}</p>
                <h3 className="mt-2.5 text-base font-bold">{entry.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{entry.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container-page py-18 lg:py-22">
        <div className="grid items-center gap-10 rounded-4xl bg-white p-8 shadow-card ring-1 ring-ink-200/80 lg:grid-cols-2 lg:p-12">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
              Questions, or a listing to discuss?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              We read everything that comes in and reply within two working days — it would be a
              poor look if we did not.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="mailto:hello@mithhi.example">
                Email the team
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button as="link" to="/post-a-job" variant="secondary">
                Post a job
              </Button>
            </div>
          </div>

          <dl className="grid gap-5 sm:grid-cols-2">
            {[
              ['General', 'hello@mithhi.example'],
              ['Employers', 'hiring@mithhi.example'],
              ['Candidate support', 'support@mithhi.example'],
              ['Press', 'press@mithhi.example'],
            ].map(([label, email]) => (
              <div key={label} className="rounded-xl bg-ink-50 p-4">
                <dt className="text-xs font-semibold tracking-wide text-ink-500 uppercase">
                  {label}
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-semibold break-all text-brand-700 hover:text-brand-800"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
