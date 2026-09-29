import { useId } from 'react'
import { cx } from '../lib/cx'

/**
 * Tradient mark: a "T" built as a data rail — a gradient crossbar,
 * a stem, and a glowing signal node at the terminal.
 */
export function LogoMark({ className }: { className?: string }) {
  const rawId = useId().replace(/:/g, '')
  const gradId = `tm-bar-${rawId}`

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cx('h-7 w-7', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} x1="6" y1="8" x2="26" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eef2f7" />
          <stop offset="1" stopColor="#3ce0bd" />
        </linearGradient>
      </defs>
      <path d="M6 8h20" stroke={`url(#${gradId})`} strokeWidth="3" strokeLinecap="round" />
      <path d="M16 8v13.5" stroke="#eef2f7" strokeWidth="3" strokeLinecap="round" opacity="0.92" />
      <circle cx="16" cy="24" r="2.6" fill="#3ce0bd" />
      <circle cx="16" cy="24" r="4.9" stroke="#3ce0bd" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cx('text-[1.05rem] font-semibold tracking-tight text-white', className)}>
      Tradient
    </span>
  )
}
