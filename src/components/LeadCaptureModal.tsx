/**
 * LeadCaptureModal
 *
 * Shared modal used by two CTAs:
 *   - "Post a Requirement" → employers describe what they need to hire.
 *   - "Submit Your Resume"  → candidates upload their CV to be considered.
 *
 * Email delivery is handled by Formspree (https://formspree.io).
 * TODO: Create a free Formspree account, add two forms (one per type), and
 *       replace the FORMSPREE_* constants below with the real endpoint IDs.
 *       Both forms should be configured to forward to leena@mitthisolutions.com.
 */

import { useEffect, useRef, useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { CheckCircle2, Loader2, Paperclip, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// ---------------------------------------------------------------------------
// TODO: Replace with your Formspree endpoint IDs.
// After creating your Formspree account and connecting to leena@mitthisolutions.com:
//   1. Create a form for "Post a Requirement" → copy its ID here.
//   2. Create a form for "Submit Your Resume"  → copy its ID here.
// Both endpoint URLs look like: https://formspree.io/f/<YOUR_ID>
// ---------------------------------------------------------------------------
const FORMSPREE_REQUIREMENT_ID = 'YOUR_REQUIREMENT_FORM_ID'
const FORMSPREE_RESUME_ID = 'YOUR_RESUME_FORM_ID'

const MAX_FILE_BYTES = 5 * 1024 * 1024 // 5 MB
const ACCEPTED_TYPES = '.pdf,.doc,.docx'
const ACCEPTED_MIME = ['application/pdf', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document']

export type ModalType = 'requirement' | 'resume'

interface Props {
  type: ModalType
  onClose: () => void
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formspreeUrl(type: ModalType) {
  const id = type === 'requirement' ? FORMSPREE_REQUIREMENT_ID : FORMSPREE_RESUME_ID
  return `https://formspree.io/f/${id}`
}

const FIELD_LABELS: Record<string, string> = {
  fullName: 'Full name',
  email: 'Email address',
  phone: 'Phone number',
  message: 'Message / Details',
  resume: 'CV / Résumé',
}

interface Fields {
  fullName: string
  email: string
  phone: string
  message: string
}

const empty: Fields = { fullName: '', email: '', phone: '', message: '' }

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function LeadCaptureModal({ type, onClose }: Props) {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Fields & { resume: string }>>({})
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const overlayRef = useRef<HTMLDivElement>(null)

  const isResume = type === 'resume'

  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Close on backdrop click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const set = (key: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields(prev => ({ ...prev, [key]: e.target.value }))
    setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const chosen = e.target.files?.[0] ?? null
    setErrors(prev => ({ ...prev, resume: undefined }))

    if (!chosen) { setFile(null); return }

    if (!ACCEPTED_MIME.includes(chosen.type)) {
      setErrors(prev => ({ ...prev, resume: 'Please upload a PDF, DOC or DOCX file.' }))
      setFile(null)
      return
    }
    if (chosen.size > MAX_FILE_BYTES) {
      setErrors(prev => ({ ...prev, resume: 'File must be 5 MB or smaller.' }))
      setFile(null)
      return
    }
    setFile(chosen)
  }

  // Client-side validation
  function validate(): boolean {
    const errs: typeof errors = {}

    if (!fields.fullName.trim()) errs.fullName = 'Please enter your full name.'
    if (!fields.email.trim()) errs.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim()))
      errs.email = 'That email does not look right.'
    if (!fields.phone.trim()) errs.phone = 'Phone number is required.'
    else if (fields.phone.replace(/\D/g, '').length < 10)
      errs.phone = 'Please enter at least 10 digits.'
    if (!fields.message.trim()) errs.message = 'Please add some details.'
    else if (fields.message.trim().length < 20) errs.message = 'A few more words would help.'
    if (isResume && !file) errs.resume = 'Please attach your CV / résumé.'

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')

    try {
      const body = new FormData()
      body.append('_subject', isResume ? 'New Resume Submission – Mitthi Solutions' : 'New Hiring Requirement – Mitthi Solutions')
      body.append('_replyto', fields.email.trim())
      body.append('Form Type', isResume ? 'Submit Your Resume' : 'Post a Requirement')
      Object.entries(fields).forEach(([k, v]) => body.append(FIELD_LABELS[k] ?? k, v))
      if (isResume && file) body.append('CV / Résumé', file, file.name)

      const res = await fetch(formspreeUrl(type), {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        console.error('Formspree error:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Network error:', err)
      setStatus('error')
    }
  }

  const title = isResume ? 'Submit Your Resume' : 'Post a Requirement'
  const subtitle = isResume
    ? 'Send us your CV and our team will match you with relevant openings.'
    : 'Tell us about your hiring need and we will get back to you within one working day.'

  return (
    /* Overlay */
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink-950/60 backdrop-blur-sm sm:items-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
    >
      {/* Panel */}
      <div className="animate-fade-up relative w-full max-w-lg max-h-[95svh] overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-ink-100 bg-white/95 px-6 py-5 backdrop-blur-sm">
          <div>
            <p className="text-xs font-bold tracking-[0.14em] text-brand-600 uppercase">
              {isResume ? 'Candidates' : 'Employers'}
            </p>
            <h2 id="modal-title" className="mt-0.5 font-display text-xl font-extrabold text-ink-900">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="ml-4 grid size-9 shrink-0 place-items-center rounded-xl text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="px-6 pb-8 pt-5">
          {/* Success state */}
          {status === 'success' && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <span className="grid size-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 className="size-8" aria-hidden="true" />
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight">
                {isResume ? 'Resume received!' : 'Requirement submitted!'}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-ink-600">
                {isResume
                  ? 'Our team will review your profile and reach out when we find a great match.'
                  : 'Our team will review your requirement and reply within one working day.'}
              </p>
              <Button onClick={onClose} className="mt-2">Close</Button>
            </div>
          )}

          {/* Error state */}
          {status === 'error' && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm leading-relaxed text-red-700">
              Something went wrong — please try again or email us directly at{' '}
              <a href="mailto:leena@mitthisolutions.com" className="font-semibold underline underline-offset-2">
                leena@mitthisolutions.com
              </a>.
            </div>
          )}

          {/* Form — hidden after success */}
          {status !== 'success' && (
            <form onSubmit={onSubmit} noValidate encType="multipart/form-data" className="space-y-5">
              <p className="text-sm leading-relaxed text-ink-600">{subtitle}</p>

              {/* Full Name */}
              <FormField label="Full Name" required error={errors.fullName}>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Priya Sharma"
                  value={fields.fullName}
                  onChange={set('fullName')}
                  className={inputClass(!!errors.fullName)}
                />
              </FormField>

              {/* Email */}
              <FormField label="Email Address" required error={errors.email}>
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={fields.email}
                  onChange={set('email')}
                  className={inputClass(!!errors.email)}
                />
              </FormField>

              {/* Phone */}
              <FormField label="Phone Number" required error={errors.phone}>
                <input
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={fields.phone}
                  onChange={set('phone')}
                  className={inputClass(!!errors.phone)}
                />
              </FormField>

              {/* CV Upload — resume mode only */}
              {isResume && (
                <FormField label="CV / Résumé" required error={errors.resume}>
                  <label className={`flex cursor-pointer items-center gap-3 rounded-xl border border-dashed px-4 py-4 transition-colors ${
                    errors.resume
                      ? 'border-red-400 bg-red-50/50'
                      : 'border-ink-300 bg-ink-50 hover:border-brand-400 hover:bg-brand-50/40'
                  }`}>
                    <Paperclip className="size-5 shrink-0 text-ink-400" aria-hidden="true" />
                    <span className="min-w-0 flex-1 text-sm">
                      {file ? (
                        <span className="font-medium text-ink-900">{file.name}</span>
                      ) : (
                        <>
                          <span className="font-medium text-ink-800">Choose file</span>
                          <span className="ml-1 text-ink-500">— PDF, DOC or DOCX, up to 5 MB</span>
                        </>
                      )}
                    </span>
                    <input
                      type="file"
                      accept={ACCEPTED_TYPES}
                      className="sr-only"
                      onChange={handleFile}
                    />
                  </label>
                </FormField>
              )}

              {/* Message */}
              <FormField
                label={isResume ? 'Tell us about yourself' : 'Requirement details'}
                required
                error={errors.message}
              >
                <textarea
                  required
                  rows={4}
                  placeholder={
                    isResume
                      ? 'Your experience, skills, preferred roles and location…'
                      : 'Role, team size, skills required, timeline and any other context…'
                  }
                  value={fields.message}
                  onChange={set('message')}
                  className={`${inputClass(!!errors.message)} resize-y`}
                />
              </FormField>

              {/* Disclaimer */}
              <p className="text-xs leading-relaxed text-ink-500">
                By submitting this form you agree that your details will be used to process your
                request and that we may contact you. We never sell your data to third parties.
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 justify-center"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" aria-hidden="true" />
                      Sending…
                    </>
                  ) : (
                    title
                  )}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  size="lg"
                  onClick={onClose}
                  className="flex-1 justify-center"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Mini form-field wrapper
// ---------------------------------------------------------------------------

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-sm font-medium text-ink-800">
        {label}
        {required && <span className="ml-0.5 text-brand-600" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  )
}

function inputClass(hasError: boolean) {
  return [
    'w-full rounded-xl border px-3.5 py-2.5 text-sm text-ink-900 outline-none transition-all',
    'placeholder:text-ink-400',
    hasError
      ? 'border-red-400 bg-red-50/50 focus:border-red-500 focus:ring-2 focus:ring-red-200'
      : 'border-ink-300 bg-white focus:border-brand-600 focus:ring-2 focus:ring-brand-200',
  ].join(' ')
}
