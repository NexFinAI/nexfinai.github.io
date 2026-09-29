/**
 * Fixed, page-wide background: near-black base, masked technical grid,
 * faint noise, and restrained accent glows. Purely decorative.
 */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-base" />
      <div className="bg-grid absolute inset-0" />
      <div className="bg-noise absolute inset-0" />
      <div className="absolute -top-[220px] left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-signal/[0.06] blur-[130px]" />
      <div className="absolute top-[45%] -left-[220px] h-[420px] w-[420px] rounded-full bg-signal/[0.03] blur-[120px]" />
      <div className="absolute -right-[160px] bottom-[-160px] h-[400px] w-[400px] rounded-full bg-[#1c3a5e]/10 blur-[130px]" />
    </div>
  )
}
