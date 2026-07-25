import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Info, Paperclip, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SelectField, TextAreaField, TextField } from '@/components/ui/Field'
import { getJobBySlug } from '@/data/jobs'
import { NotFound } from './NotFound'
import { formatSalary } from '@/lib/utils'
import { EXPERIENCE_LEVELS } from '@/types'

interface FormState {
  fullName: string
  email: string
  phone: string
  linkedin: string
  portfolio: string
  experience: string
  noticePeriod: string
  expectedSalary: string
  coverNote: string
  resumeName: string
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  portfolio: '',
  experience: '',
  noticePeriod: '',
  expectedSalary: '',
  coverNote: '',
  resumeName: '',
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): Errors {
  const errors: Errors = {}

  if (!values.fullName.trim()) errors.fullName = 'Please tell us your name.'
  else if (values.fullName.trim().length < 2) errors.fullName = 'That looks a little short.'

  if (!values.email.trim()) errors.email = 'We need an email to reply to.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email does not look right.'

  if (!values.phone.trim()) errors.phone = 'A phone number helps us reach you quickly.'
  else if (values.phone.replace(/\D/g, '').length < 10)
    errors.phone = 'Please enter at least 10 digits.'

  if (!values.experience) errors.experience = 'Pick the level that fits you best.'
  if (!values.noticePeriod.trim()) errors.noticePeriod = 'Let the team know your availability.'
  if (!values.resumeName) errors.resumeName = 'Please attach a résumé.'

  if (!values.coverNote.trim()) errors.coverNote = 'A short note makes a real difference here.'
  else if (values.coverNote.trim().length < 40)
    errors.coverNote = 'Two or three sentences at minimum, please.'

  return errors
}

export function Apply() {
  const { slug } = useParams<{ slug: string }>()
  const job = slug ? getJobBySlug(slug) : undefined

  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  if (!job) return <NotFound />

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    // Clear the error as soon as the field is touched again.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so keyboard and screen-reader users land on it.
      const firstKey = Object.keys(found)[0]
      document.querySelector<HTMLElement>(`[data-field="${firstKey}"]`)?.focus()
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="container-page flex min-h-[70svh] items-center justify-center py-16">
        <div className="animate-fade-up w-full max-w-lg text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="size-8" aria-hidden="true" />
          </span>
          <h1 className="mt-7 text-3xl font-extrabold tracking-tight">Application sent</h1>
          <p className="mt-3.5 text-base leading-relaxed text-ink-600">
            Your application for <span className="font-semibold text-ink-900">{job.title}</span> at{' '}
            {job.company.name} is in. They have committed to replying within seven days — we will
            nudge them if they do not.
          </p>

          <div className="mt-8 rounded-2xl bg-ink-50 p-5 text-left ring-1 ring-ink-200">
            <h2 className="font-display text-sm font-bold text-ink-900">What happens next</h2>
            <ol className="mt-3 space-y-2.5 text-sm text-ink-600">
              <li className="flex gap-2.5">
                <span className="font-bold text-brand-600">1.</span>
                A confirmation email is on its way to {values.email}.
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-brand-600">2.</span>
                {job.company.name} reviews applications twice a week.
              </li>
              <li className="flex gap-2.5">
                <span className="font-bold text-brand-600">3.</span>
                You will hear either way — a decline still comes with a reason.
              </li>
            </ol>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="link" to="/jobs">
              Keep browsing jobs
            </Button>
            <Button as="link" to={`/jobs/${job.slug}`} variant="secondary">
              Back to the role
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-ink-50 py-10 lg:py-14">
      <div className="container-page">
        <Link
          to={`/jobs/${job.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-600 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to the role
        </Link>

        <div className="mt-6 lg:grid lg:grid-cols-[1fr_19rem] lg:gap-10">
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
              Apply for {job.title}
            </h1>
            <p className="mt-2.5 text-base text-ink-600">
              At {job.company.name}. Takes about four minutes — no account needed.
            </p>

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-8 space-y-8 rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80 sm:p-8"
            >
              <fieldset className="space-y-5">
                <legend className="font-display text-lg font-bold text-ink-900">
                  About you
                </legend>

                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    label="Full name"
                    required
                    autoComplete="name"
                    placeholder="Ananya Ramesh"
                    data-field="fullName"
                    value={values.fullName}
                    error={errors.fullName}
                    onChange={(e) => set('fullName', e.target.value)}
                  />
                  <TextField
                    label="Email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    data-field="email"
                    value={values.email}
                    error={errors.email}
                    onChange={(e) => set('email', e.target.value)}
                  />
                  <TextField
                    label="Phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    data-field="phone"
                    value={values.phone}
                    error={errors.phone}
                    onChange={(e) => set('phone', e.target.value)}
                  />
                  <TextField
                    label="LinkedIn"
                    type="url"
                    autoComplete="url"
                    placeholder="linkedin.com/in/you"
                    hint="Optional"
                    data-field="linkedin"
                    value={values.linkedin}
                    onChange={(e) => set('linkedin', e.target.value)}
                  />
                </div>

                <TextField
                  label="Portfolio or GitHub"
                  type="url"
                  placeholder="github.com/you"
                  hint="Optional, but it usually helps."
                  data-field="portfolio"
                  value={values.portfolio}
                  onChange={(e) => set('portfolio', e.target.value)}
                />
              </fieldset>

              <fieldset className="space-y-5 border-t border-ink-100 pt-8">
                <legend className="font-display text-lg font-bold text-ink-900">
                  Role details
                </legend>

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Experience level"
                    required
                    data-field="experience"
                    value={values.experience}
                    error={errors.experience}
                    onChange={(e) => set('experience', e.target.value)}
                  >
                    <option value="">Select a level</option>
                    {EXPERIENCE_LEVELS.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </SelectField>
                  <TextField
                    label="Notice period"
                    required
                    placeholder="e.g. 30 days"
                    data-field="noticePeriod"
                    value={values.noticePeriod}
                    error={errors.noticePeriod}
                    onChange={(e) => set('noticePeriod', e.target.value)}
                  />
                </div>

                <TextField
                  label="Expected salary"
                  placeholder={`e.g. ${job.salaryUnit} ${job.salaryMax}`}
                  hint={`This role is budgeted at ${formatSalary(job.salaryMin, job.salaryMax, job.salaryUnit)}.`}
                  data-field="expectedSalary"
                  value={values.expectedSalary}
                  onChange={(e) => set('expectedSalary', e.target.value)}
                />

                {/* Résumé upload — filename only, nothing is transmitted in this demo */}
                <div>
                  <span className="mb-1.5 block text-sm font-medium text-ink-800">
                    Résumé<span className="ml-0.5 text-brand-600">*</span>
                  </span>
                  <label
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border border-dashed px-4 py-4 transition-colors ${
                      errors.resumeName
                        ? 'border-red-400 bg-red-50/50'
                        : 'border-ink-300 bg-ink-50 hover:border-brand-400 hover:bg-brand-50/40'
                    }`}
                  >
                    <Paperclip className="size-5 shrink-0 text-ink-400" aria-hidden="true" />
                    <span className="min-w-0 flex-1 text-sm">
                      {values.resumeName ? (
                        <span className="font-medium text-ink-900">{values.resumeName}</span>
                      ) : (
                        <>
                          <span className="font-medium text-ink-800">Choose a file</span>
                          <span className="ml-1 text-ink-500">— PDF or DOCX, up to 5 MB</span>
                        </>
                      )}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      data-field="resumeName"
                      className="sr-only"
                      onChange={(e) => set('resumeName', e.target.files?.[0]?.name ?? '')}
                    />
                  </label>
                  {errors.resumeName && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.resumeName}</p>
                  )}
                </div>

                <TextAreaField
                  label="Why this role?"
                  required
                  rows={5}
                  placeholder="Two or three sentences on why this role interests you and what you would bring to it."
                  hint="Hiring managers read this first. Specifics beat enthusiasm."
                  data-field="coverNote"
                  value={values.coverNote}
                  error={errors.coverNote}
                  onChange={(e) => set('coverNote', e.target.value)}
                />
              </fieldset>

              <div className="flex flex-col gap-4 border-t border-ink-100 pt-8">
                <p className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-500">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                  Your details go only to {job.company.name}. We never sell candidate data or pass
                  it to recruiters.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" size="lg">
                    Submit application
                  </Button>
                  <Button as="link" to={`/jobs/${job.slug}`} variant="secondary" size="lg">
                    Cancel
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Summary sidebar */}
          <aside className="mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-24 lg:space-y-5">
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80">
                <h2 className="font-display text-sm font-bold tracking-wide text-ink-900 uppercase">
                  You're applying for
                </h2>
                <div className="mt-4 flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={`grid size-11 shrink-0 place-items-center rounded-xl font-display text-sm font-bold ${job.company.tileClass}`}
                  >
                    {job.company.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-ink-900">{job.title}</p>
                    <p className="text-xs text-ink-500">{job.company.name}</p>
                  </div>
                </div>
                <dl className="mt-5 space-y-3 border-t border-ink-100 pt-4 text-sm">
                  {[
                    ['Salary band', formatSalary(job.salaryMin, job.salaryMax, job.salaryUnit)],
                    ['Location', job.location],
                    ['Work mode', job.workMode],
                    ['Type', job.employmentType],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-3">
                      <dt className="text-ink-500">{label}</dt>
                      <dd className="text-right font-semibold text-ink-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-5 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100 lg:mt-0">
                <h2 className="flex items-center gap-2 font-display text-sm font-bold text-brand-900">
                  <Info className="size-4" aria-hidden="true" />
                  Worth knowing
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-900/80">
                  {job.company.name} responds to every applicant within seven days. Applications
                  are reviewed by the hiring manager, not a keyword filter.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
