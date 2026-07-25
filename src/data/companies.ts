import type { Company } from '@/types'

export const companies = {
  northwind: {
    name: 'Northwind Labs',
    initials: 'NL',
    tileClass: 'bg-brand-600 text-white',
    industry: 'Developer tooling',
    size: '120–250 people',
    about:
      'Northwind Labs builds the observability layer that engineering teams actually enjoy using. Backed by Series B funding and profitable since last year.',
  },
  saffron: {
    name: 'Saffron Health',
    initials: 'SH',
    tileClass: 'bg-rose-500 text-white',
    industry: 'Digital health',
    size: '300–600 people',
    about:
      'Saffron Health puts specialist care within reach of every family in India through a network of clinicians and a genuinely good app.',
  },
  quanta: {
    name: 'Quanta Freight',
    initials: 'QF',
    tileClass: 'bg-ink-900 text-white',
    industry: 'Logistics',
    size: '600–1,200 people',
    about:
      'Quanta Freight moves cargo across twelve countries and writes the routing software that decides how it gets there.',
  },
  lumen: {
    name: 'Lumen Studio',
    initials: 'LS',
    tileClass: 'bg-amber-400 text-ink-900',
    industry: 'Design consultancy',
    size: '25–50 people',
    about:
      'Lumen Studio is a small, senior product design practice. We take on four engagements a year and go deep on each one.',
  },
  keystone: {
    name: 'Keystone Financial',
    initials: 'KF',
    tileClass: 'bg-emerald-600 text-white',
    industry: 'Fintech',
    size: '1,000+ people',
    about:
      'Keystone Financial is the lending infrastructure behind a third of India’s neobanks. Regulated, boring on purpose, and growing quickly.',
  },
  verdant: {
    name: 'Verdant Energy',
    initials: 'VE',
    tileClass: 'bg-teal-600 text-white',
    industry: 'Clean energy',
    size: '80–150 people',
    about:
      'Verdant Energy designs and operates rooftop solar for industrial campuses, with a software platform that squeezes out every last kilowatt-hour.',
  },
  atlas: {
    name: 'Atlas Learning',
    initials: 'AL',
    tileClass: 'bg-indigo-500 text-white',
    industry: 'Education',
    size: '150–300 people',
    about:
      'Atlas Learning helps two million students prepare for competitive exams, with a tutoring model that adapts to each learner.',
  },
  cobalt: {
    name: 'Cobalt Retail',
    initials: 'CR',
    tileClass: 'bg-sky-600 text-white',
    industry: 'Commerce',
    size: '400–800 people',
    about:
      'Cobalt Retail runs the commerce stack for 4,000 independent storefronts — inventory, payments, delivery and the dashboards that tie them together.',
  },
} satisfies Record<string, Company>
