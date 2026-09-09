import { Download, Info, ShieldCheck } from 'lucide-react'
import { APK_URL } from '../config.js'
import useReveal from '../hooks/useReveal.js'
import Section from './Section.jsx'

const STEPS = [
  {
    title: 'Tap “Download for Android”',
    text: 'Grab the APK from this page and open the downloaded file when it finishes.',
    icon: Download,
    note: null,
  },
  {
    title: 'Allow “Install unknown apps”',
    text: 'If Android asks, allow installs from your browser. This is completely normal for apps distributed outside the Play Store — it just tells Android you trust the source.',
    icon: Info,
    note: 'Totally standard — thousands of apps ship this way.',
  },
  {
    title: 'If Play Protect asks, choose “Install anyway”',
    text: 'Play Protect shows a generic warning for any app it hasn’t scanned from the Play Store. DermaSync is signed and safe to install.',
    icon: ShieldCheck,
    note: 'The app is code-signed — the warning is routine, not a red flag.',
  },
]

export default function InstallGuide() {
  const [ref, visible] = useReveal()

  return (
    <Section id="install" className="pb-20 sm:pb-28">
      <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''}`}>
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">
          Getting started
        </p>
        <h2 className="text-center font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Install in three easy steps
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-ink-soft">
          No Play Store required — you'll be set up in about a minute.
        </p>

        <ol className="mx-auto mt-12 flex max-w-3xl flex-col gap-5">
          {STEPS.map((step, index) => (
            <li key={step.title} className="card-soft flex gap-5 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-300 font-serif text-lg font-semibold text-white shadow-soft">
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-ink">
                  {step.title}
                  <step.icon className="h-4 w-4 shrink-0 text-rose-400" aria-hidden="true" />
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{step.text}</p>
                {step.note && (
                  <p className="mt-3 inline-flex items-start gap-1.5 rounded-full bg-rose-50 px-3.5 py-1.5 text-xs font-medium text-rose-600">
                    <Info className="mt-px h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {step.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 text-center">
          <a
            className="btn-sheen inline-flex items-center gap-2 rounded-full bg-rose-300 px-8 py-4 text-base font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-rose-500 active:translate-y-0 active:bg-rose-600"
            href={APK_URL}
            download="dermasync-latest.apk"
          >
            <Download className="h-5 w-5" aria-hidden="true" />
            Download for Android
          </a>
        </div>
      </div>
    </Section>
  )
}
