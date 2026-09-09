/**
 * Reusable section shell: shared vertical rhythm + scroll-reveal animation.
 * `wide` opts out of the max-width cap for full-bleed sections.
 */
export default function Section({ id, className = '', wide = false, reveal = true, children, ...rest }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 w-full ${wide ? '' : 'mx-auto max-w-6xl px-5 sm:px-8'} ${className}`}
      {...rest}
    >
      {children}
    </section>
  )
}
