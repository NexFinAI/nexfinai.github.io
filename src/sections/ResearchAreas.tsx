import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

interface Area {
  index: string
  title: string
  tagline: string
  paragraphs: string[]
  interests: string[]
  closing: string
}

const AREAS: Area[] = [
  {
    index: '01',
    title: 'AI-Powered Quantitative Research',
    tagline: 'Making financial discovery more systematic and scalable.',
    paragraphs: [
      'We investigate how artificial intelligence and quantitative methods can improve the discovery, development, and evaluation of trading strategies.',
    ],
    interests: [
      'AI agents for financial research and experimentation',
      'Knowledge-guided alpha discovery',
      'Quantitative signal and factor research',
      'Automated hypothesis generation and evaluation',
      'Statistical validation and robustness analysis',
      'Reproducible quantitative research workflows',
    ],
    closing:
      'Our objective is to investigate whether AI can help researchers explore financial hypotheses more efficiently without compromising empirical rigor.',
  },
  {
    index: '02',
    title: 'Crypto, DeFi & On-Chain Intelligence',
    tagline: 'Understanding the mechanisms behind digital asset markets.',
    paragraphs: [
      'Blockchain networks and decentralized financial protocols create new sources of data for studying market behavior, liquidity, and financial activity.',
      'We explore quantitative approaches to analyzing these systems and investigating potential market signals.',
    ],
    interests: [
      'Digital asset market microstructure',
      'On-chain activity and transaction flows',
      'Liquidity dynamics and decentralized exchanges',
      'DeFi protocol activity and market structure',
      'Data-driven analysis of digital asset markets',
      'Empirical evaluation of on-chain trading hypotheses',
    ],
    closing: 'We aim to turn complex blockchain and market data into structured, testable research questions.',
  },
  {
    index: '03',
    title: 'Systematic Trading Systems',
    tagline: 'Connecting research with practical trading infrastructure.',
    paragraphs: [
      'We are interested in translating validated quantitative research into systematic strategies and robust trading systems.',
      'This direction connects signal discovery with portfolio construction, execution constraints, and risk evaluation.',
    ],
    interests: [
      'Research-to-strategy pipelines',
      'Backtesting and out-of-sample evaluation',
      'Execution-aware simulation',
      'Transaction cost and slippage modeling',
      'Portfolio construction and risk management',
      'Automated trading infrastructure',
    ],
    closing:
      'Our long-term goal is to develop systems in which research, validation, and execution are connected through transparent and measurable processes.',
  },
]

export function ResearchAreas() {
  return (
    <section id="research" className="relative border-t border-edge/50 py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Research"
            title="Research Areas"
            description="Three connected directions — from intelligent discovery, through digital-asset market science, to the engineering of systematic trading systems."
          />
        </Reveal>

        <div className="mt-12 space-y-5">
          {AREAS.map((area, i) => (
            <Reveal key={area.index} delay={i * 90}>
              <article className="group rounded-none border border-edge bg-panel/50 p-6 transition-colors duration-300 hover:border-signal/25 hover:bg-panel-2/60 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
                  {/* Left: identity + narrative */}
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[13px] tracking-[0.2em] text-signal/80">
                        {area.index}
                      </span>
                      <h3 className="text-balance text-[1.3rem] font-semibold tracking-tight text-white">
                        {area.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[0.95rem] font-medium text-fog">{area.tagline}</p>
                    <div className="mt-4 space-y-3">
                      {area.paragraphs.map((p) => (
                        <p key={p.slice(0, 24)} className="text-[0.89rem] leading-relaxed text-mist">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right: research interests */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">
                      Research interests
                    </p>
                    <ul className="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                      {area.interests.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            aria-hidden
                            className="mt-[7px] h-1 w-1 shrink-0 rotate-45 bg-signal/70"
                          />
                          <span className="text-[0.85rem] leading-relaxed text-fog">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 border-t border-edge/60 pt-4 text-[0.85rem] leading-relaxed text-mist">
                      {area.closing}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
