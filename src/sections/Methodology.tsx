import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const STEPS = [
  {
    index: '01',
    title: 'Observe',
    body: 'Study market behavior, existing research, and relevant financial mechanisms to identify meaningful research questions.',
  },
  {
    index: '02',
    title: 'Formulate',
    body: 'Translate observations into explicit hypotheses, measurable signals, and testable assumptions.',
  },
  {
    index: '03',
    title: 'Experiment',
    body: 'Build reproducible experiments using appropriate datasets, baselines, and evaluation methods.',
  },
  {
    index: '04',
    title: 'Validate',
    body: 'Evaluate results using out-of-sample testing, robustness checks, realistic transaction costs, and risk-aware metrics.',
  },
  {
    index: '05',
    title: 'Document',
    body: 'Publish methods, implementation details, findings, and limitations so results can be independently examined and reproduced.',
  },
]

export function Methodology() {
  return (
    <section id="methodology" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Methodology"
            title="From Hypothesis to Evidence"
            description="We believe that credible quantitative research requires a disciplined process."
          />
        </Reveal>

        {/* Animated rail (desktop) */}
        <div aria-hidden className="relative mb-10 mt-14 hidden h-px lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-edge via-signal/40 to-edge" />
          <div className="rail-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_12px_2px_rgba(0,255,136,0.7)]" />
          {[10, 30, 50, 70, 90].map((p) => (
            <span key={p} className="absolute -top-[3.5px] h-2 w-px bg-edge" style={{ left: `${p}%` }} />
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 70}>
              <article className="relative h-full rounded-none border border-edge bg-panel/50 p-5 transition-colors duration-300 hover:border-signal/25 hover:bg-panel-2/60">
                <span className="font-mono text-[11px] tracking-[0.2em] text-mist">
                  {step.index}
                </span>
                <h3 className="mt-4 text-[0.98rem] font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-mist">{step.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <blockquote className="mt-10 rounded-none border border-edge bg-panel/50 p-6 md:p-8">
            <p className="text-pretty text-[1.02rem] leading-relaxed text-fog">
              &ldquo;We do not consider a promising backtest sufficient evidence of a reliable
              trading strategy. We aim to distinguish exploratory findings from validated results
              and acknowledge uncertainty wherever it exists.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
