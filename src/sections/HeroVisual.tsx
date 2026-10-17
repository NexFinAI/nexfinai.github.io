/**
 * FIG. 01 — Signals in the noise (conceptual).
 *
 * A generic, atmospheric view of AI watching crypto markets:
 *  - a candlestick stream (no axes, no numbers — pure shape),
 *  - a neural lattice above it, firing and casting "attention" beams
 *    onto the candles it finds interesting,
 *  - matrix glyph rain falling through the scene,
 *  - a symbol ticker tape drifting along the bottom,
 *  - cryptic code comments as annotations.
 *
 * Pure SVG + CSS, dependency-free, reduced-motion safe.
 */

type Candle = [x: number, high: number, low: number, open: number, close: number]

const CANDLES: Candle[] = [
  [70, 300, 340, 332, 310],
  [94, 296, 330, 310, 300],
  [118, 305, 345, 300, 336],
  [142, 310, 352, 336, 344],
  [166, 318, 350, 344, 322],
  [190, 300, 336, 322, 306],
  [214, 282, 318, 306, 288],
  [238, 290, 326, 288, 318],
  [262, 296, 334, 318, 326],
  [286, 302, 338, 326, 308],
  [310, 284, 320, 308, 290],
  [334, 268, 302, 290, 272],
  [358, 276, 310, 272, 302],
  [382, 282, 318, 302, 310],
  [406, 288, 322, 310, 294],
  [430, 270, 306, 294, 276],
  [454, 252, 288, 276, 258],
  [478, 260, 296, 258, 288],
  [502, 266, 300, 288, 294],
  [526, 272, 306, 294, 278],
  [550, 254, 290, 278, 260],
  [574, 238, 272, 260, 244],
  [598, 246, 280, 244, 272],
  [622, 252, 286, 272, 278],
  [646, 258, 292, 278, 262],
  [670, 240, 276, 262, 246],
]

/** candles the lattice is "watching" (index into CANDLES) */
const ATTENTION = [11, 16, 21]

const LAYERS: Array<{ x: number; ys: number[] }> = [
  { x: 150, ys: [80, 112, 144, 176] },
  { x: 300, ys: [70, 104, 138, 172] },
  { x: 450, ys: [70, 104, 138, 172] },
  { x: 600, ys: [92, 132, 172] },
]

const FIRING = ['300-104', '450-138', '600-132']

const RAIN_COLS: Array<{ x: number; chars: string; group: 'a' | 'b' }> = [
  { x: 36, chars: 'ｱ3ﾊXｼ#9ﾛC*ﾘ6', group: 'a' },
  { x: 246, chars: 'ﾐ7*ｾ0Kﾀ#ﾑ4ｼ1', group: 'b' },
  { x: 470, chars: 'ﾛB#9ｱ*ｼ3X6ﾑC', group: 'a' },
  { x: 688, chars: 'K4#ｼ8ﾛ*2ｱXﾑ9', group: 'b' },
]

const TICKER = 'BTC · ETH · SOL · LINK · ATOM · AVAX · DOT · ARB · OP · INJ · '

export function HeroVisual() {
  return (
    <div className="relative rounded-none border border-edge bg-panel/70 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.95)] backdrop-blur-sm">
      {/* terminal header */}
      <div className="flex items-center justify-between border-b border-edge/80 bg-white/[0.02] px-4 py-2.5">
        <span className="font-mono text-[11px] text-mist">
          <span className="text-signal">nexfinai@core</span>:~$ tail -f /dev/market
          <span aria-hidden className="ml-1 inline-block h-[11px] w-[6px] translate-y-[2px] animate-blink bg-signal/80" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mist/60">
          pid 4211 · tty0
        </span>
      </div>

      <svg
        viewBox="0 0 720 464"
        className="block h-auto w-full"
        role="img"
        aria-labelledby="hv-title hv-desc"
      >
        <title id="hv-title">AI watching crypto markets</title>
        <desc id="hv-desc">
          Conceptual illustration: a candlestick market stream under a firing neural lattice that
          casts attention beams onto selected candles, with falling matrix glyphs and a drifting
          symbol ticker tape.
        </desc>

        <defs>
          <clipPath id="hv-ticker-clip">
            <rect x="60" y="438" width="600" height="22" />
          </clipPath>
        </defs>

        {/* HUD corner brackets */}
        <g stroke="rgba(0,255,136,0.45)" strokeWidth="1.2" fill="none">
          <path d="M12 30V12h18" />
          <path d="M690 12h18v18" />
          <path d="M708 434v18h-18" />
          <path d="M30 452H12v-18" />
        </g>

        {/* glyph rain */}
        <g opacity="0.3">
          {RAIN_COLS.map((col) => (
            <g key={col.x} className={col.group === 'a' ? 'hv-rain-a' : 'hv-rain-b'}>
              <text className="hv-glyph">
                {col.chars.split('').map((ch, i) => (
                  <tspan key={i} x={col.x} dy={i === 0 ? 0 : 18}>
                    {ch}
                  </tspan>
                ))}
              </text>
            </g>
          ))}
        </g>

        {/* neural lattice edges */}
        <g stroke="rgba(0,255,136,0.10)" strokeWidth="1">
          {LAYERS.slice(0, -1).map((layer, li) =>
            layer.ys.map((y) =>
              LAYERS[li + 1].ys.map((y2) => (
                <line key={`${layer.x}-${y}-${y2}`} x1={layer.x} y1={y} x2={LAYERS[li + 1].x} y2={y2} />
              )),
            ),
          )}
        </g>

        {/* neural lattice nodes */}
        <g>
          {LAYERS.map((layer) =>
            layer.ys.map((y) => {
              const firing = FIRING.includes(`${layer.x}-${y}`)
              return (
                <g key={`${layer.x}-${y}`}>
                  {firing ? (
                    <circle
                      cx={layer.x}
                      cy={y}
                      r="4"
                      fill="none"
                      stroke="#00ff88"
                      strokeWidth="1"
                      className="hv-pulse-ring"
                    />
                  ) : null}
                  <circle
                    cx={layer.x}
                    cy={y}
                    r="3"
                    fill={firing ? '#00ff88' : '#061009'}
                    stroke="rgba(0,255,136,0.5)"
                    strokeWidth="1"
                  />
                </g>
              )
            }),
          )}
        </g>

        {/* attention beams → candles */}
        <g fill="none" stroke="rgba(0,255,136,0.5)" strokeWidth="1.3" className="hv-flow-teal">
          <path d="M300 176C316 212 328 240 334 266" />
          <path d="M450 176C452 202 454 226 454 250" />
          <path d="M600 176C592 198 582 216 574 236" />
        </g>

        {/* candlestick stream */}
        <g>
          {CANDLES.map(([x, h, l, o, c], i) => {
            const up = c < o
            const watched = ATTENTION.includes(i)
            const bodyTop = Math.min(o, c)
            const bodyH = Math.max(3, Math.abs(o - c))
            return (
              <g key={x}>
                <line
                  x1={x}
                  y1={h}
                  x2={x}
                  y2={l}
                  stroke={watched ? 'rgba(0,255,136,0.8)' : 'rgba(0,255,136,0.28)'}
                  strokeWidth="1"
                />
                <rect
                  x={x - 5}
                  y={bodyTop}
                  width="10"
                  height={bodyH}
                  fill={
                    watched
                      ? 'rgba(0,255,136,0.85)'
                      : up
                        ? 'rgba(0,255,136,0.45)'
                        : '#061009'
                  }
                  stroke={up || watched ? 'none' : 'rgba(0,255,136,0.35)'}
                  strokeWidth="1"
                />
                {watched ? (
                  <circle
                    cx={x}
                    cy={bodyTop}
                    r="4"
                    fill="none"
                    stroke="#00ff88"
                    strokeWidth="1"
                    className="hv-pulse-ring"
                  />
                ) : null}
              </g>
            )
          })}
        </g>

        {/* cryptic comments */}
        <text x="96" y="236" className="hv-comment">
          // noise is where signals hide
        </text>
        <text x="470" y="56" className="hv-comment">
          // patterns emerge in the dark
        </text>
        <text x="60" y="428" className="hv-comment">
          // follow the flow
        </text>

        {/* ticker tape */}
        <path d="M60 436h600" stroke="rgba(255,255,255,0.08)" />
        <g clipPath="url(#hv-ticker-clip)">
          <g transform="translate(60,0)">
            <g className="hv-ticker">
              <text
                x="0"
                y="452"
                className="hv-label"
                fill="rgba(127,154,141,0.8)"
                textLength="560"
                lengthAdjust="spacingAndGlyphs"
              >
                {TICKER}
              </text>
              <text
                x="560"
                y="452"
                className="hv-label"
                fill="rgba(127,154,141,0.8)"
                textLength="560"
                lengthAdjust="spacingAndGlyphs"
              >
                {TICKER}
              </text>
            </g>
          </g>
        </g>
      </svg>

      {/* figure caption */}
      <div className="flex items-center justify-between border-t border-edge/70 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.22em] text-mist">
        <span>Fig. 01 — Signals in the noise</span>
        <span className="text-mist/60">Conceptual</span>
      </div>
    </div>
  )
}
