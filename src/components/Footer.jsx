const LINKS = [
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
  { href: '#', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-rose-200 bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 sm:px-8">
        <img
          src="/logo.jpg"
          alt="DermaSync logo"
          className="h-12 w-12 rounded-2xl shadow-card"
          width="48"
          height="48"
        />
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-rose-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="max-w-xl text-center text-xs leading-relaxed text-ink-soft">
          DermaSync is not medical advice. Consult a dermatologist for medical concerns.
        </p>

        <p className="font-serif text-sm italic text-ink-soft/80">
          © {new Date().getFullYear()} DermaSync
        </p>
      </div>
    </footer>
  )
}
