import { cx } from '../lib/cx'

/**
 * Minimal stroke-icon set drawn for Nexfin.
 * All icons inherit color via `currentColor` and size via className.
 */

export interface IconProps {
  className?: string
}

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cx('h-5 w-5', className)}
      aria-hidden="true"
      focusable="false"
      {...strokeProps}
    >
      {children}
    </svg>
  )
}

/* ---------------- Capability / concept icons ---------------- */

/** Autonomous market research — radar sweep. */
export function IconRadar({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.6" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="M12 12 18.4 7.9" />
      <path d="M12 3v2.1M21 12h-2.1" />
    </Svg>
  )
}

/** Signal discovery — waveform. */
export function IconWave({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M2.5 12.5h2.9l2.1-6.4 3.3 12.6 2.6-9 1.7 4.4 1.3-1.6h5.1" />
    </Svg>
  )
}

/** Strategy research — sigma. */
export function IconSigma({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M17.5 5H7l5.4 7L7 19h10.5" />
    </Svg>
  )
}

/** On-chain intelligence — nested hexagons (chain / block). */
export function IconHex({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 2.9 20 7.45v9.1L12 21.1l-8-4.55v-9.1L12 2.9Z" />
      <path d="M12 8.2 16 10.5v4L12 16.8 8 14.5v-4L12 8.2Z" />
    </Svg>
  )
}

/** Autonomous execution — bolt. */
export function IconBolt({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M13.6 2.5 5.2 13.4h5.3l-.6 8.1 8.9-11.4h-5.8l.6-7.6Z" />
    </Svg>
  )
}

/** Open source — git fork. */
export function IconFork({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="6" cy="5.5" r="2.4" />
      <circle cx="18" cy="5.5" r="2.4" />
      <circle cx="12" cy="18.5" r="2.4" />
      <path d="M6 7.9v.7a3.4 3.4 0 0 0 3.4 3.4h5.2a3.4 3.4 0 0 0 3.4-3.4v-.7" />
      <path d="M12 12v4.1" />
    </Svg>
  )
}

/* ---------------- Architecture icons ---------------- */

/** Data sources — database. */
export function IconDatabase({ className }: IconProps) {
  return (
    <Svg className={className}>
      <ellipse cx="12" cy="5.6" rx="7.8" ry="2.9" />
      <path d="M4.2 5.6v12.8c0 1.6 3.5 2.9 7.8 2.9s7.8-1.3 7.8-2.9V5.6" />
      <path d="M4.2 12c0 1.6 3.5 2.9 7.8 2.9s7.8-1.3 7.8-2.9" />
    </Svg>
  )
}

/** Agent layer — processor. */
export function IconCpu({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
      <rect x="10" y="10" width="4" height="4" rx="1" />
      <path d="M9.5 3v3.5M14.5 3v3.5M9.5 17.5V21M14.5 17.5V21M3 9.5h3.5M3 14.5h3.5M17.5 9.5H21M17.5 14.5H21" />
    </Svg>
  )
}

/** Quant research — bar analysis. */
export function IconChart({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 4v16h16" />
      <path d="M8 16v-4M12.5 16V7.5M17 16v-6.5" />
    </Svg>
  )
}

/** Infrastructure — layers. */
export function IconLayers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3.2 21 8l-9 4.8L3 8l9-4.8Z" />
      <path d="m3 12.4 9 4.8 9-4.8" />
      <path d="m3 16.6 9 4.8 9-4.6" />
    </Svg>
  )
}

/** Community — people. */
export function IconUsers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.8 5.8 0 0 1 11 0" />
      <path d="M15.6 5.3a3.2 3.2 0 0 1 0 5.8" />
      <path d="M17.6 14.5a5.8 5.8 0 0 1 2.9 5" />
    </Svg>
  )
}

/* ---------------- UI icons ---------------- */

export function IconArrowRight({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.5 12h14M13 6.5l5.5 5.5-5.5 5.5" />
    </Svg>
  )
}

export function IconExternal({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18 14.5V19A1.5 1.5 0 0 1 16.5 20.5h-11A1.5 1.5 0 0 1 4 19V8a1.5 1.5 0 0 1 1.5-1.5H10" />
    </Svg>
  )
}

export function IconMenu({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7.5h16M4 16.5h16" />
    </Svg>
  )
}

export function IconClose({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  )
}

export function IconMail({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.8 6.6 7.1 5.3a2 2 0 0 0 2.2 0l7.1-5.3" />
    </Svg>
  )
}

/* ---------------- Brand icons (solid) ---------------- */

export function IconGithub({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cx('h-5 w-5', className)}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 2.88-.39c.98 0 1.96.13 2.88.39 2.2-1.49 3.16-1.18 3.16-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.09 0 4.41-2.7 5.38-5.26 5.67.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

export function IconX({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cx('h-5 w-5', className)}
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}
