import { useId } from 'react'
import { cx } from '../lib/cx'

/**
 * Nexfin mark: an "N" drawn as a signal path — two vertical rails joined
 * by a gradient diagonal that terminates in a glowing signal node.
 */
export function LogoMark({ className }: { className?: string }) {
  const rawId = useId().replace(/:/g, '')
  const gradId = `nx-bar-${rawId}`

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={cx('h-7 w-7', className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradId} x1="8" y1="7" x2="24" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eef2f7" />
          <stop offset="1" stopColor="#3ce0bd" />
        </linearGradient>
      </defs>
      <path d="M8 25V7" stroke="#eef2f7" strokeWidth="3" strokeLinecap="round" opacity="0.92" />
      <path d="M8 7l16 18" stroke={`url(#${gradId})`} strokeWidth="3" strokeLinecap="round" />
      <path d="M24 25V7" stroke="#eef2f7" strokeWidth="3" strokeLinecap="round" opacity="0.92" />
      <circle cx="24" cy="25" r="2.6" fill="#3ce0bd" />
      <circle cx="24" cy="25" r="4.9" stroke="#3ce0bd" strokeOpacity="0.35" strokeWidth="1" />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cx('text-[1.05rem] font-semibold tracking-tight text-white', className)}>
      Nexfin
    </span>
  )
}
