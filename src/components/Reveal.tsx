import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cx } from '../lib/cx'

export interface RevealProps {
  children: ReactNode
  /** Stagger delay in milliseconds. */
  delay?: number
  className?: string
}

/**
 * Fades + lifts its children into view once, on scroll.
 * Falls back to fully visible when IntersectionObserver is unavailable
 * or the user prefers reduced motion (handled in CSS).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cx('reveal', visible && 'is-visible', className)}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
