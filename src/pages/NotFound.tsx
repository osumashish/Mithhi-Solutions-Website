import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <section className="container-page flex min-h-[70svh] items-center justify-center py-16">
      <div className="max-w-md text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
          <Compass className="size-8" aria-hidden="true" />
        </span>
        <p className="mt-7 font-display text-sm font-bold tracking-[0.14em] text-brand-600 uppercase">
          404
        </p>
        <h1 className="mt-2.5 text-3xl font-extrabold tracking-tight lg:text-4xl">
          This page has moved on
        </h1>
        <p className="mt-3.5 text-base leading-relaxed text-ink-600">
          The link may be old, or the role might have been filled. Either way, there are plenty
          more worth a look.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button as="link" to="/jobs">
            Browse all jobs
          </Button>
          <Button as="link" to="/" variant="secondary">
            Back home
          </Button>
        </div>
        <p className="mt-8 text-sm text-ink-500">
          Think something is broken?{' '}
          <Link to="/about" className="font-semibold text-brand-700 hover:text-brand-800">
            Tell us about it
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
