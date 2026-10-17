import type { ComponentType } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { IconChart, IconCpu, IconHex, type IconProps } from '../components/icons'

interface Pillar {
  title: string
  body: string
  icon: ComponentType<IconProps>
}

const PILLARS: Pillar[] = [
  {
    title: 'AI Quant Research',
    body: 'Making financial discovery more systematic and scalable.',
    icon: IconCpu,
  },
  {
    title: 'DeFi & On-Chain',
    body: 'Understanding the mechanisms behind digital asset markets.',
    icon: IconHex,
  },
  {
    title: 'Trading Systems',
    body: 'Connecting research with practical trading infrastructure.',
    icon: IconChart,
  },
]

export function About() {
  return (
    <section id="about" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Research at the Intersection of AI and Finance"
          />
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <Reveal delay={80}>
            <div className="space-y-5 text-pretty text-[1rem] leading-relaxed text-fog">
              <p>
                NexfinAI is an independent research and engineering initiative at the intersection
                of artificial intelligence, quantitative finance, and digital asset markets.
              </p>
              <p>
                We aim to make financial research more systematic, reproducible, and scalable by
                combining quantitative methods, AI-powered research workflows, and data-driven
                experimentation.
              </p>
              <p>
                We share our work through open-source software, technical reports, research
                implementations, and experimental findings — with a long-term direction of bridging
                fundamental research and practical trading systems.
              </p>
            </div>

            <p className="mt-8 border-l-2 border-signal/50 pl-5 text-pretty text-[0.95rem] leading-relaxed text-mist">
              Our approach is grounded in a simple principle: meaningful financial intelligence
              requires more than generating ideas. It requires rigorous testing, transparent
              methodology, reproducible experiments, and an honest assessment of uncertainty and
              risk.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <ul className="space-y-4">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <li
                    key={pillar.title}
                    className="flex gap-4 rounded-none border border-edge bg-panel/50 p-5 transition-colors duration-300 hover:border-signal/25 hover:bg-panel-2/60"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-none border border-edge bg-white/[0.03] text-signal">
                      <Icon className="h-[19px] w-[19px]" />
                    </span>
                    <div>
                      <p className="text-[0.98rem] font-semibold tracking-tight text-white">
                        {pillar.title}
                      </p>
                      <p className="mt-1 text-[0.86rem] leading-relaxed text-mist">{pillar.body}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
