import { Reveal } from '../components/Reveal'

export function Vision() {
  return (
    <section id="vision" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-none border border-edge bg-panel/60 px-6 py-14 md:px-16 md:py-20">
            <div aria-hidden className="bg-grid-soft absolute inset-0" />
            <div
              aria-hidden
              className="absolute left-1/2 top-0 h-[280px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.08] blur-[110px]"
            />

            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="flex items-center justify-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
                <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-signal/80" />
                Vision
              </p>
              <h2 className="mt-4 text-balance text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.12]">
                From Financial Research to Intelligent Trading Systems
              </h2>

              <div className="mt-8 space-y-5 text-pretty text-center text-[0.98rem] leading-relaxed text-fog">
                <p>
                  We envision a future in which financial research becomes increasingly systematic,
                  collaborative, and computationally scalable.
                </p>
                <p className="text-mist">
                  AI can help researchers explore a broader space of hypotheses, connect ideas
                  across disciplines, and automate parts of the experimental process. Quantitative
                  methods and rigorous validation remain essential for determining which ideas hold
                  up to empirical scrutiny.
                </p>
                <p className="text-mist">
                  NexfinAI aims to contribute to this future by developing research systems that
                  connect scientific investigation, software engineering, and practical applications
                  in digital asset markets.
                </p>
                <p className="text-mist">
                  Our long-term direction is to bridge fundamental research and systematic trading
                  through intelligent, transparent, and robust technology.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
