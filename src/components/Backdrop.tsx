import { MatrixRain } from './MatrixRain'

/**
 * Fixed, page-wide background: green-black base, matrix glyph rain,
 * CRT scanlines, vignette, and a faint phosphor glow. Decorative only.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <MatrixRain />
      <div className="scanlines absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(0,0,0,0.6)_100%)]" />
      <div className="absolute -top-[200px] left-1/2 h-[460px] w-[880px] -translate-x-1/2 rounded-full bg-signal/[0.05] blur-[130px]" />
    </div>
  )
}
