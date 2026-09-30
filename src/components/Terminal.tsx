import { GITHUB_ORG, GITHUB_REPO } from '../config/site'
import { cx } from '../lib/cx'

type Line =
  | { kind: 'comment'; text: string }
  | { kind: 'cmd'; text: string }
  | { kind: 'out'; text: string }
  | { kind: 'blank' }

const LINES: Line[] = [
  { kind: 'comment', text: '# 1 — find something to build' },
  { kind: 'cmd', text: `gh repo view ${GITHUB_ORG}/${GITHUB_REPO}` },
  { kind: 'cmd', text: 'gh issue list --label "good first issue"' },
  { kind: 'blank' },
  { kind: 'comment', text: '# 2 — clone the project' },
  { kind: 'cmd', text: `git clone https://github.com/${GITHUB_ORG}/${GITHUB_REPO}.git` },
  { kind: 'cmd', text: `cd ${GITHUB_REPO}` },
  { kind: 'blank' },
  { kind: 'comment', text: '# 3 — ship your first contribution' },
  { kind: 'cmd', text: 'git checkout -b feat/signal-agent' },
  { kind: 'cmd', text: 'git push -u origin feat/signal-agent' },
  { kind: 'out', text: '# open a pull request — that’s it' },
]

/**
 * Illustrative "getting started" terminal for contributors.
 * Commands update automatically from src/config/site.ts.
 */
export function Terminal() {
  return (
    <div className="overflow-hidden rounded-xl border border-edge bg-[#060910] shadow-[0_24px_80px_-32px_rgba(0,0,0,0.9)]">
      <div className="flex items-center gap-2 border-b border-edge/80 bg-white/[0.02] px-4 py-2.5">
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="ml-2 font-mono text-[11px] text-mist">
          contributor@nexfin — getting started
        </span>
      </div>

      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-[2.1]">
        {LINES.map((line, i) => {
          if (line.kind === 'blank') {
            return <div key={i} aria-hidden className="h-3" />
          }
          if (line.kind === 'comment') {
            return (
              <div key={i} className="text-[#5d6a7c]">
                {line.text}
              </div>
            )
          }
          if (line.kind === 'cmd') {
            return (
              <div key={i}>
                <span className="select-none text-signal">$&nbsp;</span>
                <span className="text-fog">{line.text}</span>
              </div>
            )
          }
          return (
            <div key={i} className="text-mist">
              {line.text}
            </div>
          )
        })}
        <div>
          <span className="select-none text-signal">$&nbsp;</span>
          <span
            aria-hidden
            className={cx(
              'inline-block h-[15px] w-[8px] translate-y-[3px]',
              'animate-blink bg-signal/80',
            )}
          />
        </div>
      </pre>
    </div>
  )
}
