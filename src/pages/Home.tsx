import { useEffect, useRef, useState, type FormEvent } from 'react'
import {
  Users, Search, Briefcase, BarChart3, BookOpen, Award,
  CheckCircle2, ArrowRight, Star, Zap, Shield, Globe,
  HeartHandshake, TrendingUp, Phone, Mail, Upload,
  ChevronDown, Building2, GraduationCap, Factory,
  ShoppingBag, Stethoscope, Landmark, Truck, ChevronRight,
} from 'lucide-react'

/* ─── Tiny hook: fires a one-shot callback when element enters viewport ─── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

/* ─── Reusable animated section wrapper ─── */
function Section({ id, children, className = '', style }: { id?: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const { ref, visible } = useInView()
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      style={style}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  )
}

/* ─── Section heading helper ─── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
      <span className="size-1.5 rounded-full bg-brand-600 inline-block" />
      {children}
    </span>
  )
}

/* ─── DATA ─── */
const stats = [
  { value: '50+', label: 'Clients Served', icon: Building2 },
  { value: '500+', label: 'Successful Placements', icon: Users },
  { value: '10+', label: 'Industry Verticals', icon: BarChart3 },
  { value: '99%', label: 'Client Satisfaction', icon: Star },
]

const services = [
  {
    icon: Search,
    title: 'Executive Search',
    description: 'Senior leadership and C-suite recruitment with absolute confidentiality and precision.',
    color: 'bg-brand-600',
  },
  {
    icon: Users,
    title: 'Specialized Recruitment',
    description: 'Deep domain expertise across technical, finance, operations, and niche roles.',
    color: 'bg-blue-500',
  },
  {
    icon: Zap,
    title: 'Bulk / Mass Hiring',
    description: 'High-volume recruitment campaigns delivered on time without sacrificing quality.',
    color: 'bg-indigo-500',
  },
  {
    icon: Briefcase,
    title: 'Contract Staffing',
    description: 'Flexible short-term, project-based and contractual placement solutions.',
    color: 'bg-violet-500',
  },
  {
    icon: BookOpen,
    title: 'HR Consulting',
    description: 'Strategic HR advisory — policies, competency frameworks, and org design.',
    color: 'bg-sky-500',
  },
  {
    icon: GraduationCap,
    title: 'Campus Hiring',
    description: 'Fresh talent pipelines through structured campus engagement programs.',
    color: 'bg-teal-500',
  },
]

const whyUs = [
  { icon: Zap, title: 'Speed & Precision', desc: 'Fast turnarounds with quality intact — we present interview-ready candidates.' },
  { icon: Award, title: 'Deep Industry Expertise', desc: 'Sector-specific knowledge for precise matching across 10+ verticals.' },
  { icon: CheckCircle2, title: 'Quality Over Quantity', desc: 'Pre-screened, rigorously assessed profiles — only the best reach you.' },
  { icon: Shield, title: '360° Confidentiality', desc: 'Absolute discretion for sensitive and senior-level search mandates.' },
  { icon: Globe, title: 'Pan-India Reach', desc: 'Extensive talent network across metros, tier-2 and emerging cities.' },
  { icon: HeartHandshake, title: 'Post-Placement Support', desc: 'We stay invested beyond the offer letter — follow-up and retention support.' },
]

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Share Your Needs',
    desc: 'Tell us about the role, team culture, and must-haves. A quick call is all it takes.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Source & Screen',
    desc: 'Our team sources widely, evaluates rigorously, and shortlists only the strongest fits.',
  },
  {
    number: '03',
    icon: Users,
    title: 'You Interview',
    desc: 'Meet only the candidates who genuinely fit — no resume dumps, no wasted time.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Sealed with Success',
    desc: 'Offer, onboarding, and post-placement follow-up — we stay until you succeed.',
  },
]

const industries = [
  { icon: Building2, label: 'IT & Technology' },
  { icon: Landmark, label: 'Banking & Finance' },
  { icon: Stethoscope, label: 'Healthcare & Pharma' },
  { icon: Factory, label: 'Manufacturing' },
  { icon: ShoppingBag, label: 'Retail & FMCG' },
  { icon: GraduationCap, label: 'Education & EdTech' },
  { icon: Truck, label: 'Logistics & Supply Chain' },
  { icon: BarChart3, label: 'Consulting & Advisory' },
]

const testimonials = [
  {
    quote: 'Mitthi Solutions found us a VP of Engineering in 3 weeks — someone we had been struggling to find for 4 months. Exceptional quality and speed.',
    author: 'Rahul Mehta',
    role: 'CTO, TechCorp India',
    rating: 5,
  },
  {
    quote: 'Their understanding of our culture made all the difference. Every candidate they presented was a genuine fit — not just a resume match.',
    author: 'Priya Sharma',
    role: 'HR Director, FinServCo',
    rating: 5,
  },
  {
    quote: 'From bulk hiring for our new branch to senior leadership roles, Mitthi has been our go-to partner. Reliable, professional, and always responsive.',
    author: 'Ankit Joshi',
    role: 'Founder, GrowthStartup',
    rating: 5,
  },
]

/* ─── MAIN COMPONENT ─── */
export function Home() {
  const [hireForm, setHireForm] = useState({ name: '', company: '', phone: '', requirement: '' })
  const [jobForm, setJobForm] = useState({ name: '', email: '', role: '', fileName: '' })
  const [hireSubmitted, setHireSubmitted] = useState(false)
  const [jobSubmitted, setJobSubmitted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const submitHire = (e: FormEvent) => {
    e.preventDefault()
    setHireSubmitted(true)
  }
  const submitJob = (e: FormEvent) => {
    e.preventDefault()
    setJobSubmitted(true)
  }

  return (
    <>
      {/* ════════════════════════════════════════
          1. HERO
      ════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #162163 0%, #1e3a8a 40%, #1d4ed8 75%, #2563eb 100%)' }}
      >
        {/* Dot texture */}
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-600/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-400/15 blur-[100px]" />
        </div>

        <div className="container-page relative z-10 pt-48 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Label */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center gap-2.5 glass-card text-blue-200 text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
                <span className="size-2 rounded-full bg-brand-400 animate-pulse-slow" />
                Trusted Recruitment Partner · Surat, India
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up text-white font-display font-extrabold tracking-tight leading-[1.1]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', animationDelay: '0.2s' }}
            >
              Building Great Teams,
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #93c5fd, #60a5fa, #bfdbfe)' }}>
                Shaping Great Careers
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="animate-fade-up mt-7 text-blue-200/90 leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', animationDelay: '0.35s' }}
            >
              Mitthi Solutions connects exceptional talent with leading organisations
              across India — with speed, precision, and care that sets us apart.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ animationDelay: '0.5s' }}
            >
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2.5 bg-white text-brand-950 px-8 py-4 rounded-2xl text-base font-bold shadow-lift hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Briefcase className="size-5" />
                I'm Looking to Hire
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => document.querySelector('#contact-job')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-2.5 glass-card text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-white/15 transition-all duration-300"
              >
                <Search className="size-5" />
                I Need a Job
                <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Scroll cue */}
            <div className="animate-float mt-16 flex justify-center">
              <div className="flex flex-col items-center gap-2 text-white/40">
                <span className="text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown className="size-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats ribbon */}
        <div className="relative z-10 border-t border-white/10">
          <div className="container-page py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center px-6">
                  <p className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                    {value}
                  </p>
                  <div className="mt-1 flex items-center justify-center gap-1.5 text-blue-300 text-sm font-medium">
                    <Icon className="size-4" />
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          2. SERVICES
      ════════════════════════════════════════ */}
      <Section id="services" className="py-24 bg-ink-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-ink-900">
              End-to-End Recruitment Solutions
            </h2>
            <p className="mt-5 text-lg text-ink-500 leading-relaxed">
              From first-time hires to senior leadership, we have the expertise
              to find the right person for every role.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, color }) => (
              <div
                key={title}
                className="group relative bg-white rounded-3xl p-8 shadow-card ring-1 ring-ink-100 hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`${color} inline-grid size-12 place-items-center rounded-2xl text-white shadow-sm mb-5`}>
                  <Icon className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{description}</p>
                <div className="mt-6 flex items-center gap-1 text-brand-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="size-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          3. WHY CHOOSE US
      ════════════════════════════════════════ */}
      <Section id="why-us" className="py-24 bg-white">
        <div className="container-page">
          <div className="lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-20 items-center">
            {/* Left */}
            <div className="max-w-lg">
              <SectionLabel>Why Choose Mitthi</SectionLabel>
              <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-ink-900 leading-tight">
                Recruitment Done{' '}
                <span className="text-brand-600">Right.</span>
              </h2>
              <p className="mt-6 text-lg text-ink-500 leading-relaxed">
                We are not a resume-passing agency. We invest time to understand
                your culture, your goals, and your people — and then we deliver.
              </p>

              {/* Blue CTA card */}
              <div className="mt-10 rounded-3xl p-7 text-white"
                style={{ background: 'linear-gradient(135deg, #162163, #2563eb)' }}>
                <p className="text-xl font-bold leading-snug mb-4">
                  Ready to hire smarter?
                </p>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  Share your requirement and get curated profiles within 48 hours.
                </p>
                <button
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 bg-white text-brand-700 px-6 py-3 rounded-xl text-sm font-bold hover:bg-brand-50 transition-colors"
                >
                  Post a Requirement <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Right: feature grid */}
            <div className="mt-14 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 bg-ink-50 rounded-2xl p-5 hover:bg-brand-50 transition-colors duration-300 group"
                >
                  <div className="shrink-0 grid size-10 place-items-center rounded-xl bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-bold text-ink-900 text-sm mb-1">{title}</p>
                    <p className="text-xs leading-relaxed text-ink-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          4. HOW IT WORKS
      ════════════════════════════════════════ */}
      <Section id="process" className="py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #162163 0%, #1e3a8a 60%, #1d4ed8 100%)' } as React.CSSProperties}>
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />
        <div className="container-page relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-white">
              How It Works
            </h2>
            <p className="mt-5 text-lg text-blue-200 leading-relaxed">
              A clear, efficient process so you're never left wondering what happens next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ number, icon: Icon, title, desc }, idx) => (
              <div key={title} className="relative">
                {/* Connecting line (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-px bg-white/15" />
                )}
                <div className="glass-card rounded-3xl p-7 text-center hover:bg-white/12 transition-colors duration-300">
                  <div className="relative mx-auto mb-5 size-16 grid place-items-center rounded-2xl bg-white/15">
                    <Icon className="size-7 text-white" />
                    <span className="absolute -top-2 -right-2 grid size-7 place-items-center rounded-full bg-brand-600 text-white text-xs font-extrabold">
                      {number}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed text-blue-200">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          5. INDUSTRIES
      ════════════════════════════════════════ */}
      <Section id="industries" className="py-24 bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-ink-900">
              Expertise Across Every Sector
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Deep domain knowledge across the industries that matter most.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-ink-100 bg-ink-50 p-6 text-center hover:border-brand-300 hover:bg-brand-50 hover:shadow-card transition-all duration-300 cursor-default"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-white shadow-sm text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <Icon className="size-6" />
                </div>
                <span className="text-sm font-semibold text-ink-700 group-hover:text-brand-700 transition-colors">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Extra industry pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Real Estate', 'Hospitality', 'Media & Entertainment', 'Telecom', 'E-commerce', 'Insurance', 'Automotive', 'Agri & Food Tech'].map(tag => (
              <span
                key={tag}
                className="px-5 py-2 rounded-full bg-ink-100 text-sm font-medium text-ink-600 hover:bg-brand-100 hover:text-brand-700 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          6. TESTIMONIALS
      ════════════════════════════════════════ */}
      <Section id="testimonials" className="py-24 bg-ink-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-ink-900">
              What Our Clients Say
            </h2>
            <p className="mt-5 text-lg text-ink-500">
              Real results from real partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map(({ quote, author, role, rating }) => (
              <div
                key={author}
                className="relative bg-white rounded-3xl p-8 shadow-card ring-1 ring-ink-100 hover:shadow-lift hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Big quote mark */}
                <span className="absolute top-6 right-7 text-brand-100 font-display text-7xl font-extrabold leading-none select-none">
                  "
                </span>

                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-ink-700 italic mb-7">
                  "{quote}"
                </blockquote>

                <div className="flex items-center gap-3 border-t border-ink-100 pt-5">
                  <div className="grid size-10 place-items-center rounded-full bg-brand-600 text-white font-bold text-sm shrink-0">
                    {author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{author}</p>
                    <p className="text-xs text-ink-500">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          7. CONTACT — DUAL CTA
      ════════════════════════════════════════ */}
      <section id="contact" className="scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">

          {/* Left: Hire talent */}
          <div
            className="relative flex flex-col justify-center px-8 py-16 lg:px-16 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #162163 0%, #1e3a8a 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />
            <div className="relative z-10 max-w-md mx-auto lg:mx-0 w-full">
              <span className="inline-flex items-center gap-2 text-brand-300 text-xs font-bold tracking-widest uppercase mb-4">
                <Briefcase className="size-4" /> For Employers
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-white mb-3">
                Looking to Hire?
              </h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-8">
                Share your requirement and receive curated, interview-ready profiles within 48 hours.
              </p>

              {hireSubmitted ? (
                <div className="glass-card rounded-2xl p-8 text-center">
                  <CheckCircle2 className="size-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-bold text-lg">Request Received!</p>
                  <p className="text-blue-200 text-sm mt-2">We'll reach out within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={submitHire} className="space-y-4">
                  {[
                    { label: 'Your Name', key: 'name', placeholder: 'Rajesh Sharma', type: 'text' },
                    { label: 'Company', key: 'company', placeholder: 'Your Company Ltd.', type: 'text' },
                    { label: 'Phone Number', key: 'phone', placeholder: '+91 98765 43210', type: 'tel' },
                  ].map(({ label, key, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold text-blue-300 mb-1.5 uppercase tracking-wider">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={hireForm[key as keyof typeof hireForm]}
                        onChange={e => setHireForm(prev => ({ ...prev, [key]: e.target.value }))}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-blue-300 mb-1.5 uppercase tracking-wider">
                      Job Requirement
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Role title, department, number of openings..."
                      value={hireForm.requirement}
                      onChange={e => setHireForm(prev => ({ ...prev, requirement: e.target.value }))}
                      className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-brand-950 font-bold px-6 py-4 rounded-xl text-sm hover:bg-brand-50 transition-colors shadow-lift"
                  >
                    Submit Requirement →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Find a job */}
          <div
            id="contact-job"
            className="relative flex flex-col justify-center px-8 py-16 lg:px-16 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20" />
            <div className="relative z-10 max-w-md mx-auto lg:mx-0 w-full">
              <span className="inline-flex items-center gap-2 text-blue-200 text-xs font-bold tracking-widest uppercase mb-4">
                <Search className="size-4" /> For Candidates
              </span>
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-white mb-3">
                Accelerate Your Career
              </h2>
              <p className="text-blue-200 text-sm leading-relaxed mb-8">
                Share your resume and our team will match you with the right opportunities from our partner companies.
              </p>

              {jobSubmitted ? (
                <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                  <CheckCircle2 className="size-12 text-green-300 mx-auto mb-4" />
                  <p className="text-white font-bold text-lg">Profile Received!</p>
                  <p className="text-blue-200 text-sm mt-2">We'll be in touch with matching opportunities.</p>
                </div>
              ) : (
                <form onSubmit={submitJob} className="space-y-4">
                  {[
                    { label: 'Full Name', key: 'name', placeholder: 'Priya Patel', type: 'text' },
                    { label: 'Email Address', key: 'email', placeholder: 'you@example.com', type: 'email' },
                    { label: 'Current Role', key: 'role', placeholder: 'e.g. Software Engineer, Sales Manager', type: 'text' },
                  ].map(({ label, key, placeholder, type }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wider">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={jobForm[key as keyof typeof jobForm]}
                        onChange={e => setJobForm(prev => ({ ...prev, [key]: e.target.value }))}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-semibold text-blue-200 mb-1.5 uppercase tracking-wider">
                      Upload Resume
                    </label>
                    <label className="flex items-center gap-3 w-full bg-white/10 border border-dashed border-white/30 text-white rounded-xl px-4 py-3.5 text-sm cursor-pointer hover:bg-white/15 transition-colors">
                      <Upload className="size-4 text-blue-200" />
                      <span className="text-white/70">
                        {jobForm.fileName || 'Choose PDF or DOCX'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={e => setJobForm(prev => ({ ...prev, fileName: e.target.files?.[0]?.name ?? '' }))}
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-700 font-bold px-6 py-4 rounded-xl text-sm hover:bg-blue-50 transition-colors shadow-lift"
                  >
                    Submit My Profile →
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          8. FINAL CTA BAND
      ════════════════════════════════════════ */}
      <Section className="py-20 bg-white">
        <div className="container-page">
          <div className="rounded-4xl overflow-hidden relative"
            style={{ background: 'linear-gradient(135deg, #162163, #2563eb)' }}>
            <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-25" />
            <div className="relative z-10 text-center px-8 py-16 lg:py-20">
              <h2 className="text-3xl lg:text-4xl font-display font-extrabold text-white mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
                Whether you're scaling a team or searching for the next chapter in your career —
                Mitthi Solutions is your partner every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919545412385"
                  className="inline-flex items-center gap-2.5 bg-white text-brand-700 px-8 py-4 rounded-2xl text-base font-bold shadow-lift hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone className="size-5" />
                  Call Us Now
                </a>
                <a
                  href="mailto:info@mitthisolutions.com"
                  className="inline-flex items-center gap-2.5 glass-card text-white px-8 py-4 rounded-2xl text-base font-bold hover:bg-white/15 transition-all duration-300"
                >
                  <Mail className="size-5" />
                  Send an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
