/**
 * FIG. 01 — Autonomous Agent Mesh (conceptual).
 *
 * A pure-SVG, dependency-free visualization of Tradient's core idea:
 * on-chain data sources feed an agent core; research / signal / strategy
 * agents orbit it; discovered signals flow to an output panel; and the
 * (roadmap) execution layer is drawn in dashed amber — visually honest
 * about what exists today versus what is being built.
 *
 * All motion is CSS-driven and disabled under prefers-reduced-motion.
 */
export function HeroVisual() {
  return (
    <div className="relative rounded-2xl border border-edge bg-panel/60 p-2 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-sm">
      <svg
        viewBox="0 0 720 464"
        className="block h-auto w-full"
        role="img"
        aria-labelledby="hv-title hv-desc"
      >
        <title id="hv-title">Tradient agent mesh</title>
        <desc id="hv-desc">
          Conceptual diagram: on-chain data sources — chains, markets and events — flow into an
          agent core surrounded by research, signal and strategy agents. Discovered signals feed an
          output panel, and a dashed roadmap path leads to future autonomous execution.
        </desc>

        <defs>
          <pattern id="hv-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.3" cy="1.3" r="1.1" fill="rgba(150,163,184,0.10)" />
          </pattern>
          <radialGradient id="hv-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(60,224,189,0.5)" />
            <stop offset="100%" stopColor="rgba(60,224,189,0)" />
          </radialGradient>
          <linearGradient id="hv-spark-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(60,224,189,0.26)" />
            <stop offset="100%" stopColor="rgba(60,224,189,0)" />
          </linearGradient>
        </defs>

        {/* backdrop */}
        <rect width="720" height="464" fill="url(#hv-dots)" />

        {/* corner crosshairs */}
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="1">
          <path d="M12 18h12M18 12v12" />
          <path d="M696 18h12M702 12v12" />
          <path d="M12 446h12M18 440v12" />
          <path d="M696 446h12M702 440v12" />
        </g>

        {/* orbit rings around the core */}
        <circle cx="348" cy="232" r="150" fill="none" stroke="rgba(255,255,255,0.05)" />
        <circle
          cx="348"
          cy="232"
          r="150"
          fill="none"
          stroke="rgba(60,224,189,0.28)"
          strokeWidth="1.4"
          strokeDasharray="70 875"
          strokeLinecap="round"
          className="hv-orbit"
        />

        {/* data source flows → core */}
        <g fill="none" stroke="rgba(200,210,225,0.38)" strokeWidth="1.4" className="hv-flow-dotted">
          <path d="M66 108C150 108 212 152 298 200" />
          <path d="M66 232C140 232 222 232 296 232" />
          <path d="M66 356C150 356 220 310 299 264" />
        </g>

        {/* data source nodes */}
        <g>
          {[
            { y: 108, label: 'CHAINS' },
            { y: 232, label: 'MARKETS' },
            { y: 356, label: 'EVENTS' },
          ].map((s) => (
            <g key={s.label}>
              <rect
                x="45"
                y={s.y - 7}
                width="14"
                height="14"
                rx="3"
                fill="#0d131c"
                stroke="rgba(230,236,244,0.22)"
              />
              <circle cx="52" cy={s.y} r="2" fill="#3ce0bd" opacity="0.85" />
              <text x="52" y={s.y + 26} textAnchor="middle" className="hv-label">
                {s.label}
              </text>
            </g>
          ))}
        </g>

        {/* core ↔ agent links */}
        <g fill="none" stroke="rgba(60,224,189,0.55)" strokeWidth="1.4" className="hv-flow-teal">
          <path d="M348 178V113" />
          <path d="M303 264 254 359" />
          <path d="M392 262 406 351" />
        </g>

        {/* agent core — hexagon */}
        <g>
          <circle cx="348" cy="232" r="17" fill="url(#hv-core-glow)" className="hv-breathe" />
          <path
            d="M348 180 393 206v52l-45 26-45-26v-52l45-26Z"
            fill="rgba(60,224,189,0.045)"
            stroke="rgba(60,224,189,0.55)"
            strokeWidth="1.5"
          />
          <path
            d="M348 198 377 215v34l-29 17-29-17v-34l29-17Z"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <circle cx="348" cy="232" r="30" fill="none" stroke="rgba(60,224,189,0.18)" />
          <circle cx="348" cy="232" r="4.5" fill="#3ce0bd" />
          <circle
            cx="348"
            cy="232"
            r="7"
            fill="none"
            stroke="#3ce0bd"
            strokeWidth="1.2"
            className="hv-pulse-ring"
          />
          <text x="348" y="306" textAnchor="middle" className="hv-label" fill="#a9b4c2">
            AGENT CORE
          </text>
        </g>

        {/* agent chips */}
        <g>
          {[
            { x: 278, y: 75, label: 'RESEARCH AGENT' },
            { x: 130, y: 363, label: 'SIGNAL AGENT' },
            { x: 360, y: 355, label: 'STRATEGY AGENT' },
          ].map((chip) => (
            <g key={chip.label}>
              <rect
                x={chip.x}
                y={chip.y}
                width="140"
                height="34"
                rx="8"
                fill="#0b1017"
                stroke="rgba(255,255,255,0.13)"
              />
              <circle cx={chip.x + 16} cy={chip.y + 17} r="2.6" fill="#3ce0bd" />
              <text x={chip.x + 28} y={chip.y + 21} className="hv-chip">
                {chip.label}
              </text>
            </g>
          ))}
        </g>

        {/* signal agent → output panel */}
        <path
          d="M270 380C380 420 480 412 548 372"
          fill="none"
          stroke="rgba(60,224,189,0.45)"
          strokeWidth="1.4"
          className="hv-flow-dotted"
        />

        {/* signal output panel */}
        <g>
          <rect
            x="552"
            y="300"
            width="156"
            height="104"
            rx="10"
            fill="#0a0e15"
            stroke="rgba(255,255,255,0.11)"
          />
          <text x="568" y="322" className="hv-label">
            SIGNAL OUTPUT
          </text>
          <path d="M566 384h128" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
          <polygon
            points="566,374 584,366 602,370 620,356 638,360 656,346 674,340 692,330 692,384 566,384"
            fill="url(#hv-spark-fill)"
          />
          <polyline
            points="566,374 584,366 602,370 620,356 638,360 656,346 674,340 692,330"
            fill="none"
            stroke="#3ce0bd"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="692" cy="330" r="3" fill="#3ce0bd" />
          <circle
            cx="692"
            cy="330"
            r="4"
            fill="none"
            stroke="#3ce0bd"
            strokeWidth="1.1"
            className="hv-pulse-ring"
          />
        </g>

        {/* strategy agent → execution (roadmap) */}
        <path
          d="M498 366C540 330 556 210 560 143"
          fill="none"
          stroke="rgba(232,179,75,0.5)"
          strokeWidth="1.4"
          className="hv-flow-flag"
        />

        {/* execution chip (roadmap) */}
        <g>
          <rect
            x="538"
            y="103"
            width="140"
            height="34"
            rx="8"
            fill="rgba(232,179,75,0.035)"
            stroke="rgba(232,179,75,0.5)"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <circle cx="554" cy="120" r="2.6" fill="#e8b34b" />
          <circle
            cx="554"
            cy="120"
            r="4.5"
            fill="none"
            stroke="#e8b34b"
            strokeWidth="1"
            className="hv-pulse-ring"
          />
          <text x="566" y="124" className="hv-chip hv-chip-flag">
            EXECUTION
          </text>
          <text x="608" y="157" textAnchor="middle" className="hv-tag-flag">
            ROADMAP
          </text>
        </g>
      </svg>

      {/* figure caption */}
      <div className="flex items-center justify-between border-t border-edge/70 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
        <span>Fig. 01 — Autonomous agent mesh</span>
        <span className="text-mist/60">Conceptual</span>
      </div>
    </div>
  )
}
