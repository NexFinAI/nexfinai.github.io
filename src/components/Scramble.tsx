import { useEffect, useRef, useState } from 'react'

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ0123456789ABCDEF#$*+'

/**
 * Decode-scramble text effect: glyphs churn, then lock left-to-right
 * into the real string. Renders plain text under prefers-reduced-motion.
 * The final text is exposed to assistive tech via aria-label.
 */
export function Scramble({
  text,
  delay = 0,
  className,
}: {
  text: string
  delay?: number
  className?: string
}) {
  const [out, setOut] = useState(text)
  const done = useRef(false)

  useEffect(() => {
    if (done.current) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setOut(text)
      done.current = true
      return
    }

    let frame = 0
    let raf = 0
    let timer = 0

    const tick = () => {
      frame++
      const locked = Math.floor((frame - 8) / 2.4)
      if (locked > text.length) {
        setOut(text)
        done.current = true
        return
      }
      setOut(
        text
          .split('')
          .map((ch, i) =>
            ch === ' ' || i < locked
              ? ch
              : GLYPHS[(Math.random() * GLYPHS.length) | 0],
          )
          .join(''),
      )
      raf = requestAnimationFrame(tick)
    }

    timer = window.setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, delay)

    return () => {
      window.clearTimeout(timer)
      cancelAnimationFrame(raf)
    }
  }, [text, delay])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{out}</span>
    </span>
  )
}
