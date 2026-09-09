import { BarChart3, ScanLine, MessagesSquare, TrendingUp } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import Section from './Section.jsx'

const FEATURES = [
  {
    icon: BarChart3,
    title: 'Skin Score',
    text: 'Your face, read from 4 angles — hydration, texture, tone and more, distilled into one clear score you can actually track.',
  },
  {
    icon: ScanLine,
    title: 'INCI Scanner',
    text: 'Scan any product label and see how its ingredients get along with YOUR skin — before you buy, not after.',
  },
  {
    icon: MessagesSquare,
    title: 'Skin Coach',
    text: 'A skincare advisor that quietly knows your skin type, routine and history. On call 24/7, never tired, never pushy.',
  },
  {
    icon: TrendingUp,
    title: 'Progress',
    text: 'Compare skin photos week by week and watch your score climb. Small wins, made visible.',
  },
]

export default function Features() {
  const [ref, visible] = useReveal()

  return (
    <Section id="features" className="pb-20 sm:pb-28">
      <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''}`}>
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
          What's inside
        </p>
        <h2 className="text-balance text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Everything your skin needs,{' '}
          <em className="font-medium italic text-rose-400">in one calm place</em>
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className="card-soft group relative flex flex-col gap-4 overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-rose-300 hover:shadow-soft"
            >
              {/* Ghost numeral */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-5 font-serif text-7xl font-semibold italic text-rose-100 transition-colors duration-500 group-hover:text-rose-200"
              >
                0{index + 1}
              </span>

              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-500 transition-colors duration-300 group-hover:bg-rose-300 group-hover:text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative font-serif text-xl font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-ink-soft">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
