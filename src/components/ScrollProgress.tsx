import { useEffect, useRef } from 'react'

/** Hairline reading-progress bar pinned above the navbar. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      bar.style.width = max > 0 ? `${(doc.scrollTop / max) * 100}%` : '0%'
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[2px]">
      <div
        ref={barRef}
        className="h-full w-0 bg-gradient-to-r from-signal/30 via-signal to-signal/60 shadow-[0_0_10px_rgba(60,224,189,0.8)]"
      />
    </div>
  )
}
