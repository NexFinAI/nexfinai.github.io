import { cx } from '../lib/cx'

export interface SectionHeadingProps {
  /** Small mono kicker above the title, rendered as a code comment. */
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cx('max-w-3xl', className)}>
      <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
        <span aria-hidden className="opacity-60">
          //
        </span>
        {eyebrow}
      </p>
      <h2 className="glow-soft mt-4 font-mono text-[1.5rem] font-semibold leading-[1.25] tracking-tight text-white sm:text-[1.85rem] md:text-[2.1rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-pretty text-[1.02rem] leading-relaxed text-mist">
          {description}
        </p>
      ) : null}
    </div>
  )
}
