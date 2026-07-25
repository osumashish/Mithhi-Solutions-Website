import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { useId } from 'react'
import { cn } from '@/lib/utils'

const controlBase =
  'w-full rounded-xl bg-white text-ink-900 placeholder:text-ink-400 ring-1 transition-colors focus:ring-2 focus:outline-none'

const controlTone = (invalid: boolean) =>
  invalid
    ? 'ring-red-400 focus:ring-red-500'
    : 'ring-ink-200 hover:ring-ink-300 focus:ring-brand-600'

interface WrapperProps {
  label: string
  hint?: string
  error?: string
  required?: boolean
  children: (props: { id: string; describedBy: string | undefined; invalid: boolean }) => ReactNode
}

/** Label + control + hint/error, wired together with matching ids for a11y. */
function FieldWrapper({ label, hint, error, required, children }: WrapperProps) {
  const id = useId()
  const messageId = `${id}-message`
  const message = error ?? hint
  const invalid = Boolean(error)

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      {children({ id, describedBy: message ? messageId : undefined, invalid })}
      {message && (
        <p
          id={messageId}
          className={cn('mt-1.5 text-xs', invalid ? 'text-red-600' : 'text-ink-500')}
        >
          {message}
        </p>
      )}
    </div>
  )
}

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'id' | 'className'> & {
  label: string
  hint?: string
  error?: string
}

export function TextField({ label, hint, error, required, ...props }: InputProps) {
  return (
    <FieldWrapper label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid }) => (
        <input
          id={id}
          required={required}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(controlBase, controlTone(invalid), 'h-11 px-3.5 text-[0.9375rem]')}
          {...props}
        />
      )}
    </FieldWrapper>
  )
}

type TextAreaProps = Omit<ComponentPropsWithoutRef<'textarea'>, 'id' | 'className'> & {
  label: string
  hint?: string
  error?: string
}

export function TextAreaField({ label, hint, error, required, ...props }: TextAreaProps) {
  return (
    <FieldWrapper label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid }) => (
        <textarea
          id={id}
          required={required}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(controlBase, controlTone(invalid), 'min-h-32 p-3.5 text-[0.9375rem]')}
          {...props}
        />
      )}
    </FieldWrapper>
  )
}

type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, 'id' | 'className'> & {
  label: string
  hint?: string
  error?: string
}

export function SelectField({ label, hint, error, required, children, ...props }: SelectProps) {
  return (
    <FieldWrapper label={label} hint={hint} error={error} required={required}>
      {({ id, describedBy, invalid }) => (
        <select
          id={id}
          required={required}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(
            controlBase,
            controlTone(invalid),
            'h-11 cursor-pointer appearance-none bg-[length:1rem] bg-[right_0.875rem_center] bg-no-repeat px-3.5 text-[0.9375rem]',
          )}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b' stroke-width='2.5'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
          {...props}
        >
          {children}
        </select>
      )}
    </FieldWrapper>
  )
}
