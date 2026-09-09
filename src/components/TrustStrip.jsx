import useReveal from '../hooks/useReveal.js'
import Section from './Section.jsx'

const FACTS = [
  { strong: '7 questions', light: 'to your skin type' },
  { strong: '4 photos', light: 'to your skin score' },
  { strong: '24/7', light: 'skin coach on call' },
  { strong: 'Weekly', light: 'photos to track progress' },
]

export default function TrustStrip() {
  const [ref, visible] = useReveal()

  return (
    <Section id="why" className="pb-20 sm:pb-28">
      <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''}`}>
        {/* Editorial sentence on desktop */}
        <p className="hidden max-w-4xl text-center font-serif text-2xl font-medium leading-relaxed text-ink lg:block">
          {FACTS.map((fact, i) => (
            <span key={fact.strong}>
              <span className="text-rose-500">{fact.strong}</span>{' '}
              <span className="text-ink-soft">{fact.light}</span>
              {i < FACTS.length - 1 && <span className="mx-3 text-rose-300">·</span>}
            </span>
          ))}
        </p>

        {/* Cards on mobile / tablet */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          {FACTS.map((fact) => (
            <div
              key={fact.strong}
              className="card-soft flex flex-col items-center gap-1 px-4 py-6 text-center"
            >
              <span className="font-serif text-2xl font-semibold text-rose-500">
                {fact.strong}
              </span>
              <span className="text-xs leading-snug text-ink-soft">{fact.light}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
