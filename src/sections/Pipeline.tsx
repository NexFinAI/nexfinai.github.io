import { Fragment } from 'react'
import { cx } from '../lib/cx'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag } from '../components/Tag'

/** The core Nexfin workflow, exactly as the product is conceived. */
const FLOW = ['On-Chain Data', 'AI Agents', 'Signal Discovery', 'Strategy', 'Execution']

interface Step {
  title: string
  body: string
  roadmap?: boolean
}

const STEPS: Step[] = [
  {
    title: 'On-Chain Data',
    body: 'Blockchain-native inputs: transactions, events, tokens, liquidity, and wallet activity.',
  },
  {
    title: 'AI Agents',
    body: 'Autonomous agents gather context, form hypotheses, and investigate markets around the clock.',
  },
  {
    title: 'Signal Discovery',
    body: 'Agents surface quantitative signals hidden in market behavior and on-chain activity.',
  },
  {
    title: 'Strategy',
    body: 'Signals are composed into testable strategies and evaluated with systematic research.',
  },
  {
    title: 'Execution',
    body: 'Validated strategies move toward automated execution via trading infrastructure.',
    roadmap: true,
  },
]

export function Pipeline() {
  return (
    <section id="product" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Product Concept"
            title="From raw on-chain data to autonomous execution"
            description="Nexfin connects autonomous agents across the full research-to-trading loop. Every stage is modular and inspectable — designed so contributors can extend any layer of the pipeline."
          />
        </Reveal>

        {/* Mono flow strip */}
        <Reveal delay={80}>
          <p className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.2em]">
            {FLOW.map((stage, i) => (
              <Fragment key={stage}>
                {i > 0 ? (
                  <span aria-hidden className="text-signal/70">
                    →
                  </span>
                ) : null}
                <span className={i === FLOW.length - 1 ? 'text-flag/90' : 'text-fog'}>{stage}</span>
              </Fragment>
            ))}
          </p>
        </Reveal>

        {/* Animated rail (desktop) */}
        <div aria-hidden className="relative mb-10 mt-14 hidden h-px lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-edge via-signal/40 to-edge" />
          <div className="rail-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_12px_2px_rgba(60,224,189,0.7)]" />
          {[10, 30, 50, 70, 90].map((p) => (
            <span
              key={p}
              className="absolute -top-[3.5px] h-2 w-px bg-edge"
              style={{ left: `${p}%` }}
            />
          ))}
        </div>

        {/* Step cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:mt-0 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 70}
              className={cx(i === STEPS.length - 1 && 'sm:col-span-2 lg:col-span-1')}
            >
              <article
                className={cx(
                  'relative h-full rounded-xl border bg-panel/50 p-5 transition-colors duration-300 hover:bg-panel-2/60',
                  step.roadmap
                    ? 'border-dashed border-flag/30 hover:border-flag/50'
                    : 'border-edge hover:border-signal/25',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-mist">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {step.roadmap ? <Tag tone="flag">Roadmap</Tag> : null}
                </div>
                <h3 className="mt-4 text-[0.98rem] font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-mist">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
