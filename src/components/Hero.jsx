import { ArrowDown, Download, Star } from 'lucide-react'
import { APK_URL, APP_VERSION, APK_SIZE, MIN_ANDROID } from '../config.js'
import useReveal from '../hooks/useReveal.js'
import Section from './Section.jsx'

const SKIN_TYPES = [
  'Oily',
  'Dry',
  'Combination',
  'Sensitive',
  'Normal',
  'Acne-prone',
  'Mature',
  'Balanced',
]

/* ------------------------------------------------------------------ */
/* PLACEHOLDER: PHONE SCREENSHOTS                                      */
/* Replace the three <PhoneScore /> / <PhoneCoach /> / <PhoneProgress />*/
/* inner screens with real screenshots: put files in /public/screenshots/ */
/* and swap the mock content for                                       */
/* <img src="/screenshots/xxx.png" className="h-full w-full object-cover" /> */
/* Recommended export: 9:19.5 ratio, ~750 x 1620 px PNG/WebP.          */
/* ------------------------------------------------------------------ */

function PhoneFrame({ children, label, delay = false }) {
  return (
    <div
      className={`relative aspect-[9/19] w-full rounded-[2.2rem] border border-rose-200 bg-white p-2 shadow-phone ${
        delay ? 'animate-float-soft-delayed' : 'animate-float-soft'
      }`}
    >
      <div className="flex h-full w-full flex-col overflow-hidden rounded-[1.8rem]">
        {children}
      </div>
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-rose-200 bg-cream px-3 py-1 text-[10px] font-medium text-ink-soft shadow-card">
        {label}
      </span>
    </div>
  )
}

function PhoneScore() {
  return (
    <PhoneFrame label="Skin Score">
      <div className="flex h-full w-full flex-col bg-rose-50">
        <div className="mx-auto mt-2.5 h-1.5 w-10 rounded-full bg-ink/15" />
        <div className="px-3 pt-3">
          <div className="h-2 w-16 rounded-full bg-ink/10" />
          <div className="mt-1.5 h-2 w-10 rounded-full bg-ink/10" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="relative flex h-20 w-20 items-center justify-center">
            <div className="absolute inset-0 rounded-full border-[3px] border-ink/10" />
            <div className="absolute inset-0 -rotate-90 rounded-full border-[3px] border-rose-300 border-b-transparent border-l-transparent" />
            <div className="absolute inset-2 rounded-full bg-white shadow-card" />
            <span className="relative font-serif text-2xl font-semibold text-ink">82</span>
          </div>
        </div>
        <div className="space-y-1.5 px-3 pb-4">
          <div className="h-1.5 w-full rounded-full bg-ink/10" />
          <div className="h-1.5 w-4/5 rounded-full bg-ink/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-ink/10" />
        </div>
      </div>
    </PhoneFrame>
  )
}

function PhoneCoach() {
  return (
    <PhoneFrame label="Skin Coach" delay>
      <div className="flex h-full w-full flex-col bg-white">
        <div className="mx-auto mt-2.5 h-1.5 w-10 rounded-full bg-ink/15" />
        <div className="px-3 pt-3">
          <div className="h-2 w-12 rounded-full bg-ink/10" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-2 px-3">
          <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-rose-100 px-2.5 py-2">
            <div className="h-1.5 w-4/5 rounded-full bg-ink/15" />
            <div className="mt-1 h-1.5 w-3/5 rounded-full bg-ink/15" />
          </div>
          <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-rose-300 px-2.5 py-2">
            <div className="h-1.5 w-16 rounded-full bg-white/60" />
          </div>
          <div className="flex w-10 items-center justify-center gap-0.5 rounded-2xl rounded-bl-md bg-rose-100 px-2 py-2">
            <span className="h-1 w-1 rounded-full bg-ink/25" />
            <span className="h-1 w-1 rounded-full bg-ink/25" />
            <span className="h-1 w-1 rounded-full bg-ink/25" />
          </div>
        </div>
        <div className="px-3 pb-4">
          <div className="h-6 w-full rounded-full border border-ink/10 bg-cream" />
        </div>
      </div>
    </PhoneFrame>
  )
}

function PhoneProgress() {
  return (
    <PhoneFrame label="Progress">
      <div className="flex h-full w-full flex-col bg-rose-100/70">
        <div className="mx-auto mt-2.5 h-1.5 w-10 rounded-full bg-ink/15" />
        <div className="px-3 pt-3">
          <div className="h-2 w-14 rounded-full bg-ink/10" />
        </div>
        <div className="flex flex-1 items-center justify-center gap-2 px-3">
          <div className="flex h-20 flex-1 flex-col items-center justify-center rounded-xl bg-white shadow-card">
            <div className="h-8 w-8 rounded-full border-[3px] border-ink/10" />
            <span className="mt-1 text-[8px] font-medium text-ink-soft">Week 4</span>
          </div>
          <ArrowDown className="h-3 w-3 -rotate-90 text-rose-400" aria-hidden="true" />
          <div className="flex h-20 flex-1 flex-col items-center justify-center rounded-xl bg-white shadow-card">
            <div className="h-8 w-8 rounded-full border-[3px] border-rose-300 border-b-transparent border-l-transparent" />
            <span className="mt-1 text-[8px] font-medium text-ink-soft">Week 8</span>
          </div>
        </div>
        <div className="space-y-1.5 px-3 pb-4">
          <div className="h-1.5 w-full rounded-full bg-ink/10" />
          <div className="h-1.5 w-2/3 rounded-full bg-ink/10" />
        </div>
      </div>
    </PhoneFrame>
  )
}

function HaloBadge({ children, className = '' }) {
  return (
    <div
      className={`absolute z-10 hidden items-center gap-2 rounded-full border border-rose-200 bg-white/90 px-4 py-2 text-xs font-medium text-ink shadow-lift backdrop-blur sm:flex ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-halo absolute inline-flex h-full w-full rounded-full bg-rose-300" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-400" />
      </span>
      {children}
    </div>
  )
}

export default function Hero() {
  const [ref, visible] = useReveal(0.05)

  return (
    <Section id="top" className="relative bg-blush-wash pb-16 pt-28 sm:pb-24 sm:pt-36" wide>
      {/* Decorative soft blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-rose-100 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 left-[-12%] h-64 w-64 rounded-full bg-rose-200/60 blur-3xl"
      />

      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} relative mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy + CTAs */}
          <div className="text-center lg:text-left">
            <h1 className="text-balance font-serif text-[2.75rem] font-semibold leading-[1.05] text-ink sm:text-7xl lg:text-[4.6rem]">
              Your skin,
              <br />
              finally <em className="font-medium italic text-rose-500">understood.</em>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg lg:mx-0">
              Answer 7 questions. Scan your face from 4 angles. Get your personal skin score — and
              a skin coach who knows your skin, on call day and night.
            </p>

            {/* CTA row */}
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={APK_URL}
                download="dermasync-latest.apk"
                className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-300 px-8 py-4 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-rose-500 hover:shadow-lg active:translate-y-0 active:bg-rose-600 sm:w-auto"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download for Android
              </a>

              <span className="inline-flex items-center rounded-full border border-ink-soft/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-ink-soft">
                iOS — Coming Soon
              </span>
            </div>

            <p className="mt-4 text-xs text-ink-soft">
              {APP_VERSION} · {APK_SIZE} · {MIN_ANDROID}
            </p>

            {/* Social proof */}
            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              <div className="flex -space-x-2.5">
                {['A', 'M', 'Z'].map((initial, i) => (
                  <span
                    key={initial}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-cream font-serif text-xs font-semibold text-white ${
                      i === 0 ? 'bg-rose-300' : i === 1 ? 'bg-rose-400' : 'bg-rose-500'
                    }`}
                  >
                    {initial}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-rose-400 text-rose-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-ink-soft">
                  Loved by 2,400+ skin-obsessed early users
                </p>
              </div>
            </div>
          </div>

          {/* Screenshot slot — see PLACEHOLDER note above */}
          <div className="relative" data-screenshots>
            {/* Floating micro-badges */}
            <HaloBadge className="-top-5 right-2">
              Your score this week <span className="font-serif font-semibold text-rose-500">↑ 90</span>
            </HaloBadge>
            <HaloBadge className="bottom-12 left-0">
              AM routine <span className="font-serif italic text-rose-500">done</span>
            </HaloBadge>

            <div className="grid grid-cols-3 items-center gap-3 sm:gap-4">
              <div className="translate-y-6">
                <PhoneScore />
              </div>
              <PhoneCoach />
              <div className="translate-y-6">
                <PhoneProgress />
              </div>
            </div>
          </div>
        </div>

        {/* Editorial marquee */}
        <div
          aria-hidden="true"
          className="marquee-fade mt-20 overflow-hidden border-y border-rose-200 py-3.5 sm:mt-24"
        >
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
                {SKIN_TYPES.map((type) => (
                  <span
                    key={`${copy}-${type}`}
                    className="mx-5 flex items-center gap-5 font-serif text-lg italic text-ink-soft/80 sm:text-xl"
                  >
                    {type}
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
