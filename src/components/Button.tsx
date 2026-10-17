import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

export interface ButtonLinkProps {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  /** Force external-link behavior (auto-detected for http(s) hrefs). */
  external?: boolean
  className?: string
  icon?: ReactNode
  iconRight?: ReactNode
  ariaLabel?: string
  onClick?: () => void
}

/* Terminal-style buttons: mono, uppercase, sharp corners, phosphor glow. */
const base =
  'group/btn inline-flex select-none items-center justify-center gap-2 rounded-none font-mono font-medium uppercase tracking-[0.14em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal'

const variants: Record<Variant, string> = {
  primary:
    'bg-signal text-[#021a10] hover:bg-[#66ffae] hover:shadow-[0_0_32px_rgba(0,255,136,0.45)] active:translate-y-px',
  secondary:
    'border border-signal/35 bg-signal/[0.04] text-signal hover:border-signal/70 hover:bg-signal/10 active:translate-y-px',
  ghost: 'text-mist hover:text-signal',
}

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-[11.5px]',
  lg: 'h-12 px-6 text-[12.5px]',
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external,
  className,
  icon,
  iconRight,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  const isExternal = external ?? href.startsWith('http')

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cx(base, variants[variant], sizes[size], className)}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span aria-hidden className="opacity-60">
        &gt;
      </span>
      {icon}
      {children}
      {iconRight ? (
        <span className="transition-transform duration-200 group-hover/btn:translate-x-0.5">
          {iconRight}
        </span>
      ) : null}
    </a>
  )
}
