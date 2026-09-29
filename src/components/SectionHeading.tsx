import { cx } from '../lib/cx'

export interface SectionHeadingProps {
  /** Small mono kicker above the title, e.g. "Product Concept". */
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cx('max-w-3xl', className)}>
      <p className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
        <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-signal/80" />
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
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
