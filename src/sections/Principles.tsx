import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const PRINCIPLES = [
  {
    title: 'Scientific Rigor',
    body: 'We value explicit hypotheses, appropriate baselines, and careful empirical evaluation.',
  },
  {
    title: 'Reproducibility',
    body: 'We aim to make experiments understandable, traceable, and repeatable.',
  },
  {
    title: 'Engineering Discipline',
    body: 'We prioritize maintainable software, reliable data pipelines, and clear technical documentation.',
  },
  {
    title: 'Transparency',
    body: 'We document assumptions, limitations, and negative findings rather than presenting results without context.',
  },
  {
    title: 'Responsible Evaluation',
    body: 'We recognize uncertainty, market risk, and the limitations of historical performance.',
  },
]

export function Principles() {
  return (
    <section id="principles" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="Principles" title="Our Principles" />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={(i % 3) * 80}
              className={i === PRINCIPLES.length - 1 ? 'sm:col-span-2 lg:col-span-1' : undefined}
            >
              <article className="h-full rounded-none border border-edge bg-panel/50 p-6 transition-colors duration-300 hover:border-signal/25 hover:bg-panel-2/60">
                <span className="font-mono text-[11px] tracking-[0.2em] text-signal/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-[1rem] font-semibold tracking-tight text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[0.87rem] leading-relaxed text-mist">{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
