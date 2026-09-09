import { ShieldCheck, Zap, Unlink, Wallet } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import Section from './Section.jsx'

const WALLETS = ['Phantom', 'Solflare', 'Backpack', 'Glow', 'Exodus', 'Trust Wallet']

const ASSURANCES = [
  {
    icon: ShieldCheck,
    title: 'Your wallet, your payment',
    text: 'Pay directly from any Solana wallet — no cards, no middleman.',
  },
  {
    icon: Zap,
    title: 'Instant access',
    text: 'Premium unlocks the moment your transaction confirms on Solana.',
  },
  {
    icon: Unlink,
    title: 'No lock-in',
    text: 'No app-store subscription to wrestle with — start and stop on your terms.',
  },
]

const PLANS = [
  {
    name: 'Weekly',
    price: '$5.99',
    caption: 'per week',
    note: 'paid in SOL at the current rate',
    featured: false,
  },
  {
    name: 'Monthly',
    price: '$17.99',
    caption: 'per month',
    note: 'paid in SOL at the current rate',
    badge: 'Best value',
    featured: true,
  },
]

export default function CryptoPayments() {
  const [ref, visible] = useReveal()

  return (
    <Section id="payments" wide className="bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${visible ? 'reveal-visible' : ''} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
          Payments
        </p>
        <h2 className="text-balance text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Pay Your Way — <em className="font-medium italic text-rose-400">Crypto Native</em>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft">
          We built premium around Solana from day one. Unlock everything with SOL, paid straight
          from your own wallet — no subscription lock-in via app stores, no card needed, instant
          access after the transaction confirms.
        </p>

        {/* Wallet chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft">
            <Wallet className="h-4 w-4 text-rose-400" aria-hidden="true" />
            Works with:
          </span>
          {WALLETS.map((wallet) => (
            <span
              key={wallet}
              className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-300 hover:bg-rose-100 hover:shadow-card"
            >
              {wallet}
            </span>
          ))}
          <span className="rounded-full border border-ink-soft/20 bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
            …and any Solana wallet
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-12 grid max-w-2xl gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col items-center gap-2 overflow-visible rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'border border-rose-300 bg-rose-50 shadow-soft'
                  : 'card-soft'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 rounded-full bg-rose-300 px-4 py-1 text-xs font-semibold text-white shadow-soft">
                  {plan.badge}
                </span>
              )}
              <h3 className="font-serif text-lg font-semibold text-ink">{plan.name}</h3>
              <p className="font-serif text-5xl font-semibold tracking-tight text-ink">
                {plan.price}
              </p>
              <p className="-mt-1 text-xs font-medium uppercase tracking-[0.14em] text-rose-400">
                {plan.caption}
              </p>
              <p className="mt-2 text-xs text-ink-soft">{plan.note}</p>
            </div>
          ))}
        </div>

        {/* Reassurance bullets */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {ASSURANCES.map((item) => (
            <div key={item.title} className="flex items-start gap-3 rounded-2xl bg-rose-50 p-5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-rose-500 shadow-card">
                <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
