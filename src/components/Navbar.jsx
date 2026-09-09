import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { APK_URL } from '../config.js'

const NAV_LINKS = [
  { href: '#features', label: 'Features' },
  { href: '#payments', label: 'Crypto Payments' },
  { href: '#install', label: 'Install' },
  { href: '#faq', label: 'FAQ' },
]

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <img
        src="/logo.jpg"
        alt="DermaSync logo"
        className="h-9 w-9 rounded-xl shadow-card"
        width="36"
        height="36"
      />
      <span className="font-serif text-xl font-semibold tracking-tight text-ink">DermaSync</span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm font-medium text-ink-soft transition-colors hover:text-rose-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={APK_URL}
            download="dermasync-latest.apk"
            className="btn-sheen hidden items-center gap-2 rounded-full bg-rose-300 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-rose-500 active:translate-y-0 active:bg-rose-600 sm:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-rose-100 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-rose-200 bg-cream/95 px-5 pb-5 pt-3 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-rose-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={APK_URL}
            download="dermasync-latest.apk"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-rose-300 px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-rose-500 active:bg-rose-600"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download for Android
          </a>
        </div>
      )}
    </header>
  )
}
