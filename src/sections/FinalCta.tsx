import { GITHUB_URL } from '../config/site'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { IconArrowRight, IconGithub } from '../components/icons'

export function FinalCta() {
  return (
    <section id="join" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-edge bg-panel/60 px-6 py-16 text-center md:px-16 md:py-24">
            <div aria-hidden className="bg-grid-soft absolute inset-0" />
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-[300px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.09] blur-[110px]"
            />

            <div className="relative z-10 mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-edge bg-base/60 px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.18em] text-fog">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-signal" />
                Contributors welcome
              </span>

              <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.9rem] md:leading-[1.08]">
                Build the Future of On-Chain Trading Intelligence
              </h2>

              <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-fog">
                Research markets. Discover signals. Build autonomous trading systems.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <ButtonLink
                  href="#open-source"
                  size="lg"
                  iconRight={<IconArrowRight className="h-4 w-4" />}
                >
                  Join Tradient
                </ButtonLink>
                <ButtonLink
                  href={GITHUB_URL}
                  size="lg"
                  variant="secondary"
                  icon={<IconGithub className="h-4 w-4" />}
                >
                  GitHub
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
