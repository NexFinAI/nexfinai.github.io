import { GITHUB_URL } from '../config/site'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { IconArrowRight, IconGithub } from '../components/icons'
import { HeroVisual } from './HeroVisual'

const META_ITEMS = ['Early stage', 'Open source', 'Solo founder → 2–5 contributors']

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-edge bg-panel/70 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog">
                <span className="relative flex h-1.5 w-1.5" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                Building in public — contributors welcome
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-balance text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-white sm:text-[3.25rem] lg:text-[3rem] xl:text-[3.5rem]">
                Autonomous Intelligence for{' '}
                <span className="glow-text text-signal">On-Chain Markets</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-pretty text-[1.08rem] leading-relaxed text-fog">
                AI agents that research on-chain markets, discover trading signals, and execute
                crypto strategies.
              </p>
              <p className="mt-3 max-w-lg text-pretty text-[0.95rem] leading-relaxed text-mist">
                Nexfin is an open-source research platform for autonomous, data-driven trading —
                built in public from day one.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="#product" size="lg" iconRight={<IconArrowRight className="h-4 w-4" />}>
                  Explore Nexfin
                </ButtonLink>
                <ButtonLink
                  href={GITHUB_URL}
                  size="lg"
                  variant="secondary"
                  icon={<IconGithub className="h-4 w-4" />}
                >
                  View on GitHub
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-edge/60 pt-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist">
                {META_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden className="h-1 w-1 bg-signal/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={150} className="lg:pl-4">
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
