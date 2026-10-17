import { Reveal } from '../components/Reveal'
import { ButtonLink } from '../components/Button'
import { Scramble } from '../components/Scramble'
import { IconArrowRight, IconLayers } from '../components/icons'
import { HeroVisual } from './HeroVisual'

const TOPICS = ['AI Research', 'Quant Finance', 'Digital Assets']

const ETHOS = ['Research-driven', 'Engineering-focused', 'Evidence-based']

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
                Independent research &amp; engineering initiative
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-mono text-[1.85rem] font-semibold leading-[1.18] tracking-tight text-white sm:text-[2.4rem] lg:text-[2.15rem] xl:text-[2.55rem]">
                <span className="block">
                  <Scramble text="Intelligence for the" />
                </span>
                <span className="glow-text block text-signal">
                  <Scramble text="Next Era of Finance" delay={450} />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-5 text-pretty text-[1.12rem] font-medium leading-relaxed text-fog">
                Building Intelligent Systems for Quantitative Financial Research
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 max-w-lg text-pretty text-[0.95rem] leading-relaxed text-mist">
                We explore how artificial intelligence, quantitative methods, and on-chain data can
                advance financial research and systematic trading.
              </p>
              <p className="mt-3 max-w-lg text-pretty text-[0.95rem] leading-relaxed text-mist">
                Our work focuses on discovering quantitative signals, investigating digital asset
                markets, and developing intelligent research systems through rigorous
                experimentation and open-source engineering.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-7 flex flex-wrap gap-2">
                {TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-none border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.16em] text-fog"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href="#research"
                  size="lg"
                  iconRight={<IconArrowRight className="h-4 w-4" />}
                >
                  Explore Our Research
                </ButtonLink>
                <ButtonLink
                  href="#projects"
                  size="lg"
                  variant="secondary"
                  icon={<IconLayers className="h-4 w-4" />}
                >
                  View Our Projects
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-edge/60 pt-6 font-mono text-[10.5px] uppercase tracking-[0.18em] text-mist">
                {ETHOS.map((item) => (
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
