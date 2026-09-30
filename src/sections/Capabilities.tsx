import type { ComponentType } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Tag, type TagTone } from '../components/Tag'
import {
  IconBolt,
  IconFork,
  IconHex,
  IconRadar,
  IconSigma,
  IconWave,
  type IconProps,
} from '../components/icons'

type CapabilityTag = 'core' | 'roadmap' | 'community'

interface Capability {
  title: string
  body: string
  tag: CapabilityTag
  icon: ComponentType<IconProps>
}

const TAG_META: Record<CapabilityTag, { label: string; tone: TagTone }> = {
  core: { label: 'Core', tone: 'signal' },
  roadmap: { label: 'Roadmap', tone: 'flag' },
  community: { label: 'Community', tone: 'mist' },
}

/**
 * Honest capability map: what Nexfin is built to do today (core),
 * what is being built next (roadmap), and how it is built (community).
 */
const CAPABILITIES: Capability[] = [
  {
    title: 'Autonomous Market Research',
    body: 'AI agents continuously analyze blockchain and market data to identify relevant information, anomalies, and opportunities worth investigating.',
    tag: 'core',
    icon: IconRadar,
  },
  {
    title: 'Signal Discovery',
    body: 'Agents investigate market behavior and discover quantitative trading signals from price, volume, and on-chain activity.',
    tag: 'core',
    icon: IconWave,
  },
  {
    title: 'Strategy Research',
    body: 'Discovered signals are transformed into testable quantitative strategies and evaluated systematically — before any capital is at risk.',
    tag: 'core',
    icon: IconSigma,
  },
  {
    title: 'On-Chain Intelligence',
    body: 'Blockchain-native data — wallets, flows, events, and market structure — treated as first-class research input, not an afterthought.',
    tag: 'core',
    icon: IconHex,
  },
  {
    title: 'Autonomous Execution',
    body: 'The bridge from research and strategy discovery toward automated trading execution, built as the research stack matures.',
    tag: 'roadmap',
    icon: IconBolt,
  },
  {
    title: 'Open by Default',
    body: 'The agent framework, research tooling, and documentation are designed for contributors from day one. Nexfin is built in public.',
    tag: 'community',
    icon: IconFork,
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="What Nexfin is built to do"
            description="A research-first platform: agents do the reading, measuring, and hypothesizing, so strategies are grounded in evidence rather than noise."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon
            const meta = TAG_META[cap.tag]
            return (
              <Reveal key={cap.title} delay={(i % 3) * 80}>
                <article className="group relative h-full overflow-hidden rounded-xl border border-edge bg-panel/50 p-6 transition-colors duration-300 hover:border-signal/25 hover:bg-panel-2/60">
                  {/* top glow line on hover */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-edge bg-white/[0.03] text-signal">
                      <Icon className="h-[19px] w-[19px]" />
                    </span>
                    <Tag tone={meta.tone}>{meta.label}</Tag>
                  </div>

                  <h3 className="mt-5 text-[1.02rem] font-semibold tracking-tight text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-mist">{cap.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
