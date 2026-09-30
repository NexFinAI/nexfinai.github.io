import { useEffect, useState } from 'react'
import { cx } from '../lib/cx'
import { DOCS_URL, GITHUB_URL } from '../config/site'
import { LogoMark, Wordmark } from '../components/Logo'
import { ButtonLink } from '../components/Button'
import { IconClose, IconExternal, IconGithub, IconMenu } from '../components/icons'

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Research', href: '#research' },
  { label: 'Open Source', href: '#open-source' },
] as const

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  /* Translucent bar once the page scrolls. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll-spy: highlight the nav item for the section in view. */
  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (els.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* Close the mobile menu on Escape. */
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-edge/70 bg-base/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:h-[72px] md:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Nexfin — back to top">
          <LogoMark className="h-7 w-7" />
          <Wordmark />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cx(
                'rounded-md px-3 py-2 text-[0.86rem] font-medium transition-colors',
                active === link.href.slice(1) ? 'text-white' : 'text-mist hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}

          <span aria-hidden className="mx-2 h-4 w-px bg-edge" />

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[0.86rem] font-medium text-mist transition-colors hover:text-white"
          >
            <IconGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-[0.86rem] font-medium text-mist transition-colors hover:text-white"
          >
            Docs
            <IconExternal className="h-3.5 w-3.5 opacity-70" />
          </a>
        </div>

        <div className="hidden md:block">
          <ButtonLink href="#open-source">Join the Project</ButtonLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-edge text-fog transition-colors hover:text-white md:hidden"
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-b border-edge bg-base/95 backdrop-blur-xl md:hidden"
        >
          <div className="space-y-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-[0.95rem] font-medium text-fog transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="my-2 h-px bg-edge/70" />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-[0.95rem] font-medium text-fog transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-[0.95rem] font-medium text-fog transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              Docs
              <IconExternal className="h-3.5 w-3.5 opacity-70" />
            </a>
            <ButtonLink
              href="#open-source"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Join the Project
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}
