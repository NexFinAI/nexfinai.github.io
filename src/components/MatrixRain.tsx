import { useEffect, useRef } from 'react'

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉ0123456789ABCDEFXZ$#*+'
const FONT = 14

/**
 * Full-viewport matrix glyph rain on a canvas.
 * Decorative only: aria-hidden, pointer-events-none, and it renders a
 * single static frame when the user prefers reduced motion.
 */
export function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let cols = 0
    let drops: number[] = []
    let raf = 0
    let last = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(window.innerWidth / FONT)
      drops = Array.from({ length: cols }, () => Math.random() * -80)
      ctx.fillStyle = '#020604'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    }

    const staticFrame = () => {
      ctx.fillStyle = '#020604'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.font = `${FONT}px "JetBrains Mono", monospace`
      ctx.fillStyle = 'rgba(0,255,136,0.35)'
      for (let i = 0; i < cols; i += 2) {
        const len = 6 + ((Math.random() * 14) | 0)
        const startY = Math.random() * window.innerHeight
        for (let j = 0; j < len; j++) {
          const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0]
          ctx.fillText(ch, i * FONT, startY + j * FONT)
        }
      }
    }

    const draw = (t: number) => {
      raf = requestAnimationFrame(draw)
      if (t - last < 55) return
      last = t
      if (document.hidden) return

      ctx.fillStyle = 'rgba(2, 6, 4, 0.09)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.font = `${FONT}px "JetBrains Mono", monospace`

      for (let i = 0; i < cols; i++) {
        const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0]
        const x = i * FONT
        const y = drops[i] * FONT
        ctx.fillStyle =
          Math.random() < 0.05 ? 'rgba(214,255,232,0.9)' : 'rgba(0,255,136,0.4)'
        ctx.fillText(ch, x, y)
        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    resize()
    if (reduce) {
      staticFrame()
    } else {
      raf = requestAnimationFrame(draw)
    }

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 opacity-[0.17]"
    />
  )
}
