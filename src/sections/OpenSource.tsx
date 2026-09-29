import { GITHUB_URL } from '../config/site'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { Terminal } from '../components/Terminal'
import { IconArrowRight } from '../components/icons'

const ROLES = [
  {
    title: 'AI & Agent Engineers',
    body: 'Build autonomous agents that research markets, reason over data, and coordinate with each other.',
  },
  {
    title: 'Quantitative Researchers',
    body: 'Discover and evaluate trading signals; shape rigorous backtesting and evaluation methodology.',
  },
  {
    title: 'Data & Backend Engineers',
    body: 'Build on-chain data pipelines, storage, and agent orchestration infrastructure.',
  },
  {
    title: 'Crypto Infrastructure Developers',
    body: 'Work on chain integrations, market data connectivity, and execution tooling.',
  },
]

const FACTS = [
  { k: 'Today', v: 'Solo founder' },
  { k: 'Target team', v: '2–5 contributors' },
  { k: 'Model', v: 'Open source' },
]

export function OpenSource() {
  return (
    <section id="open-source" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {/* Left: the ask */}
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Open Source"
                title="Build Tradient With Us"
                description="Tradient is currently led by a solo founder and is growing toward a small open-source team of 2–5 contributors."
              />
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-5 max-w-xl text-pretty text-[0.98rem] leading-relaxed text-fog">
                We&rsquo;re looking for developers and researchers interested in AI agents, on-chain
                data, quantitative trading, and crypto infrastructure.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-10 font-mono text-[10.5px] uppercase tracking-[0.24em] text-mist">
                Who we&rsquo;re looking for
              </p>
              <ul className="mt-4 border-t border-edge/60">
                {ROLES.map((role, i) => (
                  <li
                    key={role.title}
                    className="group flex gap-4 border-b border-edge/60 py-4 transition-colors"
                  >
                    <span className="mt-0.5 font-mono text-[11px] text-signal/70 transition-colors group-hover:text-signal">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-[0.95rem] font-semibold text-white">{role.title}</p>
                      <p className="mt-1 text-[0.85rem] leading-relaxed text-mist">{role.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid grid-cols-3 divide-x divide-edge/70 rounded-xl border border-edge bg-panel/50">
                {FACTS.map((f) => (
                  <div key={f.k} className="px-4 py-4">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-mist">
                      {f.k}
                    </p>
                    <p className="mt-1.5 text-[0.86rem] font-semibold text-white">{f.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href={GITHUB_URL}
                  size="lg"
                  iconRight={<IconArrowRight className="h-4 w-4" />}
                >
                  Become a Contributor
                </ButtonLink>
                <ButtonLink href="#roadmap" size="lg" variant="secondary">
                  See the roadmap
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          {/* Right: getting-started terminal */}
          <Reveal delay={120}>
            <div className="lg:pt-4">
              <Terminal />
              <p className="mt-4 text-[12.5px] leading-relaxed text-mist/85">
                Repositories, issues, and contributor docs are being prepared — follow the project
                on GitHub for updates as they land.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
