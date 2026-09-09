import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import Section from './Section.jsx'

const FAQS = [
  {
    question: 'Why isn’t DermaSync on the Play Store?',
    answer:
      'Our premium payments use crypto (SOL on Solana), which app store policies don’t support. Rather than remove the payment option you actually want, we distribute the app directly — it’s the same app, the same updates, just installed from our site.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Yes. Your photos and profile stay on your device, inside your private profile. We don’t upload your face scans to a public cloud or sell your data.',
  },
  {
    question: 'Which wallets can I pay with?',
    answer:
      'Any Solana wallet works: Phantom, Solflare, Backpack, Glow, Exodus, Trust Wallet and more. If it can send SOL, it can unlock premium.',
  },
  {
    question: 'Do I need a card?',
    answer:
      'No — premium is paid in SOL only. No card details, no app-store billing, no recurring charges you have to chase down.',
  },
]

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="card-soft overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-serif text-base font-semibold text-ink sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-rose-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft sm:text-base">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [ref, visible] = useReveal()
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <Section id="faq" wide className="bg-cream-deep/50 py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} mx-auto max-w-3xl px-5 sm:px-8`}
      >
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
          Questions
        </p>
        <h2 className="text-balance text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Frequently asked,{' '}
          <em className="font-medium italic text-rose-400">honestly answered</em>
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {FAQS.map((item, index) => (
            <FaqItem
              key={item.question}
              item={item}
              open={openIndex === index}
              onToggle={() => setOpenIndex((current) => (current === index ? -1 : index))}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
