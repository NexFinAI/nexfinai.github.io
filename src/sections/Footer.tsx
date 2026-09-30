import { CONTACT_URL, DOCS_URL, GITHUB_URL, X_URL } from '../config/site'
import { LogoMark, Wordmark } from '../components/Logo'
import { IconGithub, IconMail, IconX } from '../components/icons'

interface FooterLink {
  label: string
  /** Empty string renders a disabled "coming soon" placeholder. */
  href: string
  external?: boolean
}

const PROJECT_LINKS: FooterLink[] = [
  { label: 'Product', href: '#product' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Architecture', href: '#research' },
  { label: 'Roadmap', href: '#roadmap' },
]

const COMMUNITY_LINKS: FooterLink[] = [
  { label: 'GitHub', href: GITHUB_URL, external: true },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Become a Contributor', href: GITHUB_URL, external: true },
  { label: 'X / Twitter', href: X_URL, external: true },
]

const RESOURCES_LINKS: FooterLink[] = [
  { label: 'Documentation', href: DOCS_URL, external: true },
  { label: 'Contact', href: CONTACT_URL, external: true },
  { label: 'Back to top', href: '#top' },
]

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-mist">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a
                href={link.href}
                className="text-[0.86rem] text-mist transition-colors hover:text-white"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            ) : (
              <span
                className="cursor-default text-[0.86rem] text-mist/50"
                title="Coming soon"
              >
                {link.label}{' '}
                <span className="ml-1 font-mono text-[9px] uppercase tracking-[0.18em] text-mist/50">
                  soon
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function SocialIcon({
  label,
  href,
  children,
}: {
  label: string
  href: string
  children: React.ReactNode
}) {
  const cls =
    'inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors'
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={`${cls} border-edge text-mist hover:border-signal/40 hover:text-white`}
      >
        {children}
      </a>
    )
  }
  return (
    <span
      role="img"
      aria-label={`${label} — coming soon`}
      title="Coming soon"
      className={`${cls} cursor-default border-edge/60 text-mist opacity-45`}
    >
      {children}
    </span>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-edge/60 bg-[#040609]">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Nexfin — back to top">
              <LogoMark className="h-7 w-7" />
              <Wordmark />
            </a>
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-mist">
              Autonomous AI agents for on-chain market research, signal discovery, and trading.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialIcon label="GitHub" href={GITHUB_URL}>
                <IconGithub className="h-[17px] w-[17px]" />
              </SocialIcon>
              <SocialIcon label="X / Twitter" href={X_URL}>
                <IconX className="h-[15px] w-[15px]" />
              </SocialIcon>
              <SocialIcon label="Contact" href={CONTACT_URL}>
                <IconMail className="h-[17px] w-[17px]" />
              </SocialIcon>
            </div>
          </div>

          <FooterColumn title="Project" links={PROJECT_LINKS} />
          <FooterColumn title="Community" links={COMMUNITY_LINKS} />
          <FooterColumn title="Resources" links={RESOURCES_LINKS} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-edge/60 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11.5px] text-mist">© {year} Nexfin. Built in the open.</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist/70">
            Early-stage project · Not financial advice · No performance claims
          </p>
        </div>
      </div>
    </footer>
  )
}
