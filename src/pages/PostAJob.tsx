/**
 * PostAJob — renamed to "Post a Requirement" in Mitthi Solutions branding.
 * The underlying route /post-a-job is preserved to avoid broken links.
 */
import { useState } from 'react'
import type { FormEvent } from 'react'
import { CheckCircle2, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SelectField, TextAreaField, TextField } from '@/components/ui/Field'
import { CATEGORIES, EMPLOYMENT_TYPES, WORK_MODES } from '@/types'
import { cn } from '@/lib/utils'

const plans = [
  {
    name: 'Single role',
    price: '₹9,000',
    unit: 'per listing',
    body: 'One role, live for 45 days. Good for occasional hiring.',
    features: ['45-day listing', 'Verified employer badge', 'Applicant dashboard', 'Email support'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '₹34,000',
    unit: 'per month',
    body: 'Up to five live roles at any time, plus placement in featured slots.',
    features: [
      'Five concurrent roles',
      'Featured placement rotation',
      'Candidate search access',
      'Dedicated hiring advisor',
      'Structured interview templates',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    price: 'Let’s talk',
    unit: 'annual',
    body: 'Unlimited roles, ATS integration and quarterly hiring reviews.',
    features: [
      'Unlimited listings',
      'ATS and API integration',
      'Employer brand page',
      'Quarterly hiring review',
      'Priority support',
    ],
    featured: false,
  },
]

const commitments = [
  'Publish a real salary band on every listing',
  'Reply to every applicant within seven days',
  'Keep the interview process proportionate to the role',
  'Only post roles with approved budget',
]

interface FormState {
  company: string
  contactName: string
  workEmail: string
  title: string
  category: string
  employmentType: string
  workMode: string
  location: string
  salaryMin: string
  salaryMax: string
  summary: string
  agreed: boolean
}

const initialState: FormState = {
  company: '',
  contactName: '',
  workEmail: '',
  title: '',
  category: '',
  employmentType: '',
  workMode: '',
  location: '',
  salaryMin: '',
  salaryMax: '',
  summary: '',
  agreed: false,
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(values: FormState): Errors {
  const errors: Errors = {}

  if (!values.company.trim()) errors.company = 'Company name is required.'
  if (!values.contactName.trim()) errors.contactName = 'Who should we speak to?'

  if (!values.workEmail.trim()) errors.workEmail = 'A work email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.workEmail.trim()))
    errors.workEmail = 'That email does not look right.'

  if (!values.title.trim()) errors.title = 'Give the role a clear title.'
  if (!values.category) errors.category = 'Pick a function.'
  if (!values.employmentType) errors.employmentType = 'Pick an employment type.'
  if (!values.workMode) errors.workMode = 'Pick a work mode.'
  if (!values.location.trim()) errors.location = 'Where is this role based?'

  const min = Number(values.salaryMin)
  const max = Number(values.salaryMax)

  if (!values.salaryMin.trim()) errors.salaryMin = 'Required — no listing goes live without it.'
  else if (!Number.isFinite(min) || min <= 0) errors.salaryMin = 'Enter a number in LPA.'

  if (!values.salaryMax.trim()) errors.salaryMax = 'Required — the top of the band.'
  else if (!Number.isFinite(max) || max <= 0) errors.salaryMax = 'Enter a number in LPA.'
  else if (Number.isFinite(min) && max < min) errors.salaryMax = 'Must be at least the minimum.'

  if (!values.summary.trim()) errors.summary = 'A short summary is required.'
  else if (values.summary.trim().length < 40) errors.summary = 'Two or three sentences, please.'

  if (!values.agreed) errors.agreed = 'Please accept the hiring standards to continue.'

  return errors
}

export function PostAJob() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev))
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const found = validate(values)
    setErrors(found)

    if (Object.keys(found).length > 0) {
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
          <h1 className="mt-7 text-3xl font-extrabold tracking-tight">Listing submitted</h1>
          <p className="mt-3.5 text-base leading-relaxed text-ink-600">
            Thanks — <span className="font-semibold text-ink-900">{values.title}</span> at{' '}
            {values.company} is in our review queue. We verify every employer before the first
            listing goes live, which usually takes one working day.
          </p>
          <p className="mt-3.5 text-sm text-ink-500">
            We will confirm at {values.workEmail} once it is approved.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as="link" to="/jobs">
              See the live board
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setValues(initialState)
                setSubmitted(false)
              }}
            >
              Post another role
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_80%_0%,#1d4ed8_0%,transparent_55%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dotted text-white/[0.07]"
        />
        <div className="container-page relative py-16 lg:py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold ring-1 ring-white/20">
              <Sparkles className="size-3.5 text-brand-200" aria-hidden="true" />
              50+ clients served · 680 teams hire here
            </span>
            <h1 className="mt-6 font-display text-4xl leading-tight font-extrabold tracking-tight text-white lg:text-5xl">
              Post a requirement, meet candidates who already want it
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-300">
              Because every listing shows its salary band and honest detail, the people who apply
              have self-selected. Fewer applications, far better ones.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-18 lg:py-22">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">Pricing</p>
            <h2 className="mt-2.5 text-3xl font-extrabold tracking-tight lg:text-4xl">
              Straightforward, like the listings
            </h2>
          </div>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <li
                key={plan.name}
                className={cn(
                  'relative flex flex-col rounded-2xl p-6 sm:p-7',
                  plan.featured
                    ? 'bg-ink-950 text-ink-300 shadow-lift ring-2 ring-brand-600'
                    : 'bg-white shadow-card ring-1 ring-ink-200/80',
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-600 px-3 py-1 text-[0.6875rem] font-bold tracking-wide text-white uppercase">
                    Most popular
                  </span>
                )}
                <h3
                  className={cn(
                    'font-display text-lg font-bold',
                    plan.featured && 'text-white',
                  )}
                >
                  {plan.name}
                </h3>
                <p className="mt-3 flex items-baseline gap-1.5">
                  <span
                    className={cn(
                      'font-display text-3xl font-extrabold',
                      plan.featured ? 'text-white' : 'text-ink-900',
                    )}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm">{plan.unit}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed">{plan.body}</p>
                <ul className="mt-5 flex-1 space-y-2.5 border-t pt-5 text-sm"
                  style={{ borderColor: plan.featured ? 'rgb(30 41 59)' : 'rgb(241 245 249)' }}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <CheckCircle2
                        className={cn(
                          'mt-0.5 size-4 shrink-0',
                          plan.featured ? 'text-brand-400' : 'text-brand-600',
                        )}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  as="a"
                  href="#post-form"
                  variant={plan.featured ? 'primary' : 'secondary'}
                  className="mt-7"
                >
                  Get started
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Form */}
      <section id="post-form" className="scroll-mt-24 bg-ink-50 py-18 lg:py-22">
        <div className="container-page lg:grid lg:grid-cols-[1fr_18rem] lg:gap-10">
          <div className="min-w-0">
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
              Tell us about the role
            </h2>
            <p className="mt-2.5 text-base text-ink-600">
              We verify every employer before the first listing goes live — usually within a
              working day.
            </p>

            <form
              onSubmit={onSubmit}
              noValidate
              className="mt-8 space-y-8 rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80 sm:p-8"
            >
              <fieldset className="space-y-5">
                <legend className="font-display text-lg font-bold text-ink-900">Your team</legend>
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    label="Company name"
                    required
                    data-field="company"
                    placeholder="Northwind Labs"
                    value={values.company}
                    error={errors.company}
                    onChange={(e) => set('company', e.target.value)}
                  />
                  <TextField
                    label="Your name"
                    required
                    autoComplete="name"
                    data-field="contactName"
                    placeholder="Priya Sharma"
                    value={values.contactName}
                    error={errors.contactName}
                    onChange={(e) => set('contactName', e.target.value)}
                  />
                </div>
                <TextField
                  label="Work email"
                  type="email"
                  required
                  autoComplete="email"
                  data-field="workEmail"
                  placeholder="you@company.com"
                  hint="We verify against your company domain."
                  value={values.workEmail}
                  error={errors.workEmail}
                  onChange={(e) => set('workEmail', e.target.value)}
                />
              </fieldset>

              <fieldset className="space-y-5 border-t border-ink-100 pt-8">
                <legend className="font-display text-lg font-bold text-ink-900">The role</legend>

                <TextField
                  label="Role title"
                  required
                  data-field="title"
                  placeholder="Senior Frontend Engineer"
                  value={values.title}
                  error={errors.title}
                  onChange={(e) => set('title', e.target.value)}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <SelectField
                    label="Function"
                    required
                    data-field="category"
                    value={values.category}
                    error={errors.category}
                    onChange={(e) => set('category', e.target.value)}
                  >
                    <option value="">Select a function</option>
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </SelectField>
                  <SelectField
                    label="Employment type"
                    required
                    data-field="employmentType"
                    value={values.employmentType}
                    error={errors.employmentType}
                    onChange={(e) => set('employmentType', e.target.value)}
                  >
                    <option value="">Select a type</option>
                    {EMPLOYMENT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </SelectField>
                  <SelectField
                    label="Work mode"
                    required
                    data-field="workMode"
                    value={values.workMode}
                    error={errors.workMode}
                    onChange={(e) => set('workMode', e.target.value)}
                  >
                    <option value="">Select a mode</option>
                    {WORK_MODES.map((mode) => (
                      <option key={mode} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </SelectField>
                  <TextField
                    label="Location"
                    required
                    data-field="location"
                    placeholder="Bengaluru, KA or Remote — India"
                    value={values.location}
                    error={errors.location}
                    onChange={(e) => set('location', e.target.value)}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <TextField
                    label="Salary band — minimum"
                    type="number"
                    min={1}
                    required
                    data-field="salaryMin"
                    placeholder="38"
                    hint="In ₹ LPA"
                    value={values.salaryMin}
                    error={errors.salaryMin}
                    onChange={(e) => set('salaryMin', e.target.value)}
                  />
                  <TextField
                    label="Salary band — maximum"
                    type="number"
                    min={1}
                    required
                    data-field="salaryMax"
                    placeholder="52"
                    hint="In ₹ LPA"
                    value={values.salaryMax}
                    error={errors.salaryMax}
                    onChange={(e) => set('salaryMax', e.target.value)}
                  />
                </div>

                <TextAreaField
                  label="Role summary"
                  required
                  rows={4}
                  data-field="summary"
                  placeholder="What will this person own, and why is the role open?"
                  hint="This is the first thing candidates read. Be specific."
                  value={values.summary}
                  error={errors.summary}
                  onChange={(e) => set('summary', e.target.value)}
                />
              </fieldset>

              <div className="border-t border-ink-100 pt-8">
                <label className="flex cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    data-field="agreed"
                    checked={values.agreed}
                    onChange={(e) => set('agreed', e.target.checked)}
                    className="mt-0.5 size-4.5 shrink-0 cursor-pointer rounded border-ink-300 accent-brand-600"
                  />
                  <span className="text-sm leading-relaxed text-ink-700">
                    We agree to Mitthi Solutions' four hiring commitments, and understand our listing
                    can be removed if we break them.
                  </span>
                </label>
                {errors.agreed && <p className="mt-2 text-xs text-red-600">{errors.agreed}</p>}

                <Button type="submit" size="lg" className="mt-6">
                  Submit for review
                </Button>
              </div>
            </form>
          </div>

          <aside className="mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-200/80">
                <h2 className="font-display text-sm font-bold tracking-wide text-ink-900 uppercase">
                  What you're agreeing to
                </h2>
                <ul className="mt-4 space-y-3 text-sm text-ink-600">
                  {commitments.map((item) => (
                    <li key={item} className="flex gap-2.5 leading-relaxed">
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-ink-100 pt-4 text-xs leading-relaxed text-ink-500">
                  We have removed nineteen employers for breaking these. It is not a formality.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
