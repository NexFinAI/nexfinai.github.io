import { Fragment, type ComponentType } from 'react'
import { cx } from '../lib/cx'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'
import {
  IconBolt,
  IconChart,
  IconCpu,
  IconDatabase,
  type IconProps,
} from '../components/icons'

interface Tier {
  layer: string
  name: string
  icon: ComponentType<IconProps>
  items: string[]
  roadmap?: boolean
}

/** Target architecture — data in, agents reasoning, research validating, execution acting. */
const TIERS: Tier[] = [
  {
    layer: 'Layer 01',
    name: 'Data Sources',
    icon: IconDatabase,
    items: ['On-Chain Data', 'Market Data', 'Blockchain Events'],
  },
  {
    layer: 'Layer 02',
    name: 'AI Agent Layer',
    icon: IconCpu,
    items: ['Research Agents', 'Signal Agents', 'Strategy Agents'],
  },
  {
    layer: 'Layer 03',
    name: 'Quant Research',
    icon: IconChart,
    items: ['Backtesting', 'Evaluation'],
  },
  {
    layer: 'Layer 04',
    name: 'Execution',
    icon: IconBolt,
    items: ['Trading Infrastructure'],
    roadmap: true,
  },
]

const PRINCIPLES = [
  {
    title: 'Research before execution',
    body: 'Nothing trades before it survives systematic evaluation.',
  },
  {
    title: 'Modular layers',
    body: 'Each layer is independently developable, testable, and replaceable.',
  },
  {
    title: 'Reproducible by design',
    body: 'Pipelines and evaluations are versioned so results can be re-examined.',
  },
  {
    title: 'Open core',
    body: 'The framework and tooling are built in the open for contributors.',
  },
]

function Connector({ flag = false, delay = 0 }: { flag?: boolean; delay?: number }) {
  return (
    <div aria-hidden className="relative mx-auto h-9 w-px bg-edge/80">
      <span
        className={cx(
          'conn-dot absolute left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full',
          flag
            ? 'bg-flag shadow-[0_0_10px_1px_rgba(232,179,75,0.8)]'
            : 'bg-signal shadow-[0_0_10px_1px_rgba(60,224,189,0.8)]',
        )}
        style={{ animationDelay: `${delay}s` }}
      />
      <svg
        viewBox="0 0 12 8"
        className={cx(
          'absolute -bottom-0.5 left-1/2 h-2 w-3 -translate-x-1/2',
          flag ? 'text-flag/60' : 'text-signal/60',
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 1.5 6 6.5 11 1.5" />
      </svg>
    </div>
  )
}

export function Architecture() {
  return (
    <section id="research" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Architecture"
            title="The research stack, layer by layer"
            description="Data flows in, agents reason over it, research validates it, and execution acts on it. The target architecture below is modular, testable, and open to extension at every layer."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.82fr)] lg:items-start">
          {/* Stack diagram */}
          <div>
            {TIERS.map((tier, i) => {
              const Icon = tier.icon
              return (
                <Fragment key={tier.name}>
                  <Reveal delay={i * 70}>
                    <div
                      className={cx(
                        'rounded-xl border px-5 py-4 md:px-6',
                        tier.roadmap
                          ? 'border-dashed border-flag/35 bg-flag/[0.02]'
                          : 'border-edge bg-panel/55',
                      )}
                    >
                      <div className="grid gap-3 md:grid-cols-[220px_minmax(0,1fr)] md:items-center md:gap-6">
                        <div className="flex items-center gap-3">
                          <span
                            className={cx(
                              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white/[0.03]',
                              tier.roadmap ? 'border-flag/30 text-flag' : 'border-edge text-signal',
                            )}
                          >
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                          <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                              {tier.layer}
                            </p>
                            <p className="mt-0.5 flex flex-wrap items-center gap-2 text-[0.95rem] font-semibold text-white">
                              {tier.name}
                              {tier.roadmap ? <Tag tone="flag">Roadmap</Tag> : null}
                            </p>
                          </div>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                          {tier.items.map((item) => (
                            <li
                              key={item}
                              className={cx(
                                'rounded-md border px-3 py-1.5 font-mono text-[11px] tracking-wide',
                                tier.roadmap
                                  ? 'border-flag/25 bg-flag/[0.04] text-flag/90'
                                  : 'border-white/8 bg-white/[0.03] text-fog',
                              )}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>

                  {i < TIERS.length - 1 ? (
                    <Connector flag={TIERS[i + 1].roadmap} delay={i * 0.35} />
                  ) : null}
                </Fragment>
              )
            })}
          </div>

          {/* Design principles */}
          <Reveal delay={120}>
            <aside className="rounded-xl border border-edge bg-panel/55 p-6">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-mist">
                Design principles
              </p>
              <ol className="mt-5 space-y-5">
                {PRINCIPLES.map((p, i) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="mt-0.5 font-mono text-[11px] text-signal/80">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-[0.92rem] font-semibold text-white">{p.title}</p>
                      <p className="mt-1 text-[0.84rem] leading-relaxed text-mist">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-edge/70 pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-mist/70">
                Fig. 02 — Target stack · evolving in the open
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
