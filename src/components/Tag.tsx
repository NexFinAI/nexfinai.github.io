import type { ReactNode } from 'react'
import { cx } from '../lib/cx'

export type TagTone = 'signal' | 'flag' | 'mist'

const tones: Record<TagTone, string> = {
  signal: 'border-signal/30 bg-signal/[0.07] text-signal',
  flag: 'border-flag/30 bg-flag/[0.07] text-flag',
  mist: 'border-white/12 bg-white/[0.04] text-mist',
}

/** Small mono status label, e.g. CORE / ROADMAP / COMMUNITY. */
export function Tag({ tone = 'mist', children }: { tone?: TagTone; children: ReactNode }) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.18em]',
        tones[tone],
      )}
    >
      {children}
    </span>
  )
}
