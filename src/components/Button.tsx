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

const base =
  'group/btn inline-flex select-none items-center justify-center gap-2 rounded-lg font-medium tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal'

const variants: Record<Variant, string> = {
  primary:
    'bg-signal text-[#04211b] hover:bg-[#5cead0] hover:shadow-[0_10px_36px_-10px_rgba(60,224,189,0.65)] active:translate-y-px',
  secondary:
    'border border-white/12 bg-white/[0.035] text-white hover:border-white/25 hover:bg-white/[0.07] active:translate-y-px',
  ghost: 'text-mist hover:text-white',
}

const sizes: Record<Size, string> = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
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
