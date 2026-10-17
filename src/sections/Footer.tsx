import { CONTACT_URL, GITHUB_URL, LINKEDIN_URL, SITE_TAGLINE } from '../config/site'
import { LogoMark, Wordmark } from '../components/Logo'
import { IconGithub, IconLinkedin, IconMail } from '../components/icons'

interface FooterLink {
  label: string
  /** Empty string renders a disabled "coming soon" placeholder. */
  href: string
  external?: boolean
}

const RESEARCH_LINKS: FooterLink[] = [
  { label: 'Research Areas', href: '#research' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Vision', href: '#vision' },
  { label: 'Principles', href: '#principles' },
]

const PROJECT_LINKS: FooterLink[] = [
  { label: 'Open Source', href: '#projects' },
  { label: 'Publications', href: '#projects' },
  { label: 'GitHub', href: GITHUB_URL, external: true },
]

const CONNECT_LINKS: FooterLink[] = [
  { label: 'Contact', href: '#contact' },
  { label: 'LinkedIn', href: LINKEDIN_URL, external: true },
  { label: 'Contact Email', href: CONTACT_URL, external: true },
]

const DISCLAIMER = [
  "NexfinAI's research and publications are provided for informational, educational, and research purposes only. Unless explicitly stated otherwise, they do not constitute investment advice, financial advice, or a recommendation to buy or sell any asset.",
  'Backtested and simulated results have limitations and do not guarantee future performance. Digital asset markets involve substantial risk, and research findings should not be interpreted as evidence of guaranteed profitability.',
  "The nature and scope of NexfinAI's activities will be described accurately as its research and engineering work develops.",
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
              <span className="cursor-default text-[0.86rem] text-mist/50" title="Coming soon">
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

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-edge/60 bg-[#040609]">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="NexfinAI — back to top">
              <LogoMark className="h-7 w-7" />
              <Wordmark />
            </a>
            <p className="mt-4 max-w-xs text-[0.875rem] leading-relaxed text-mist">
              {SITE_TAGLINE}. Independent research at the intersection of AI, quantitative finance,
              and digital asset markets.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-edge text-mist transition-colors hover:border-signal/40 hover:text-white"
              >
                <IconGithub className="h-[17px] w-[17px]" />
              </a>
              {LINKEDIN_URL ? (
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-edge text-mist transition-colors hover:border-signal/40 hover:text-white"
                >
                  <IconLinkedin className="h-[16px] w-[16px]" />
                </a>
              ) : (
                <span
                  role="img"
                  aria-label="LinkedIn — coming soon"
                  title="Coming soon"
                  className="inline-flex h-9 w-9 cursor-default items-center justify-center rounded-none border border-edge/60 text-mist opacity-45"
                >
                  <IconLinkedin className="h-[16px] w-[16px]" />
                </span>
              )}
              {CONTACT_URL ? (
                <a
                  href={CONTACT_URL}
                  aria-label="Contact email"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-edge text-mist transition-colors hover:border-signal/40 hover:text-white"
                >
                  <IconMail className="h-[17px] w-[17px]" />
                </a>
              ) : (
                <span
                  role="img"
                  aria-label="Contact email — coming soon"
                  title="Coming soon"
                  className="inline-flex h-9 w-9 cursor-default items-center justify-center rounded-none border border-edge/60 text-mist opacity-45"
                >
                  <IconMail className="h-[17px] w-[17px]" />
                </span>
              )}
            </div>
          </div>

          <FooterColumn title="Research" links={RESEARCH_LINKS} />
          <FooterColumn title="Projects" links={PROJECT_LINKS} />
          <FooterColumn title="Connect" links={CONNECT_LINKS} />
        </div>

        {/* Disclaimer */}
        <div className="mt-12 space-y-2.5 border-t border-edge/60 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-mist">Disclaimer</p>
          {DISCLAIMER.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="max-w-4xl text-[11.5px] leading-relaxed text-mist/70">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-edge/60 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[11.5px] text-mist">
            © {year} NexfinAI. Independent research &amp; engineering initiative.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist/70">
            Research &amp; informational purposes only · Not investment advice
          </p>
        </div>
      </div>
    </footer>
  )
}
