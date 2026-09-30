import type { ComponentType } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { IconChart, IconLayers, IconUsers, type IconProps } from '../components/icons'

interface TrackItem {
  code: string
  label: string
}

interface Track {
  id: string
  title: string
  blurb: string
  icon: ComponentType<IconProps>
  items: TrackItem[]
}

/**
 * Directional roadmap — backlog-style identifiers, no dates, no promises.
 * Edit the arrays below; everything else renders automatically.
 */
const TRACKS: Track[] = [
  {
    id: 'R',
    title: 'Research',
    blurb: 'Teaching agents to read markets.',
    icon: IconChart,
    items: [
      { code: 'RS-01', label: 'Agent-based market research' },
      { code: 'RS-02', label: 'Signal discovery' },
      { code: 'RS-03', label: 'Quantitative evaluation' },
    ],
  },
  {
    id: 'I',
    title: 'Infrastructure',
    blurb: 'The pipes everything runs on.',
    icon: IconLayers,
    items: [
      { code: 'IN-01', label: 'On-chain data pipelines' },
      { code: 'IN-02', label: 'Agent orchestration' },
      { code: 'IN-03', label: 'Trading infrastructure' },
    ],
  },
  {
    id: 'O',
    title: 'Open Source',
    blurb: 'Built in public, with contributors.',
    icon: IconUsers,
    items: [
      { code: 'OS-01', label: 'Public repositories' },
      { code: 'OS-02', label: 'Documentation' },
      { code: 'OS-03', label: 'Contributor ecosystem' },
    ],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Roadmap"
            title="Where Nexfin is headed"
            description="Directional areas of work — not dated commitments. The roadmap evolves in the open as contributors join and the research matures."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {TRACKS.map((track, i) => {
            const Icon = track.icon
            return (
              <Reveal key={track.id} delay={i * 80}>
                <article className="group h-full rounded-xl border border-edge bg-panel/50 p-6 transition-colors duration-300 hover:border-signal/25 hover:bg-panel-2/60">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-edge bg-white/[0.03] text-signal">
                      <Icon className="h-[18px] w-[18px]" />
                    </span>
                    <div>
                      <h3 className="text-[1rem] font-semibold tracking-tight text-white">
                        {track.title}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
                        Track {track.id}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-[0.86rem] leading-relaxed text-mist">{track.blurb}</p>

                  <ul className="mt-5 border-t border-edge/60">
                    {track.items.map((item) => (
                      <li
                        key={item.code}
                        className="flex items-center justify-between gap-4 border-b border-edge/60 py-3 text-[0.875rem] text-fog transition-colors last:border-b-0 hover:text-white"
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-[10.5px] tracking-[0.14em] text-mist transition-colors group-hover:text-signal/70">
                          {item.code}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-[0.92rem] text-mist">
            Every item above is an invitation to contribute — pick one, open an issue, and build it
            with us.{' '}
            <a
              href="#open-source"
              className="font-medium text-signal underline decoration-signal/40 underline-offset-4 transition-colors hover:decoration-signal"
            >
              See how to join&nbsp;→
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
