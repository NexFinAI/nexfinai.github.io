/**
 * ------------------------------------------------------------------
 * Nexfin — central site configuration
 * ------------------------------------------------------------------
 */

/** GitHub organization or username that owns the repositories. */
export const GITHUB_ORG = 'NexFinAI'

/** Main product repository name. */
export const GITHUB_REPO = 'nexfin'

/** Main GitHub repository URL (navbar, hero, footer, CTAs). */
export const GITHUB_URL = `https://github.com/${GITHUB_ORG}/${GITHUB_REPO}`

/** Canonical site URL (GitHub Pages root site for the org). */
export const SITE_URL = `https://${GITHUB_ORG}.github.io`

/**
 * Documentation URL.
 * Until a dedicated docs site exists, point to the repository README —
 * an honest placeholder that never 404s.
 * TODO: replace with e.g. https://docs.<your-domain> when docs launch.
 */
export const DOCS_URL = `${GITHUB_URL}#readme`

/**
 * X / Twitter profile URL.
 * Leave as an empty string until the account exists — the footer will
 * render a disabled "coming soon" state instead of a dead link.
 * TODO: e.g. 'https://x.com/nexfin'
 */
export const X_URL = ''

/**
 * Contact URL.
 * Leave as an empty string until a contact address exists — the footer
 * renders a disabled "coming soon" state instead of a dead link.
 * TODO: e.g. 'mailto:hello@your-domain.com'
 */
export const CONTACT_URL = ''

/* ---------------- Branding ---------------- */

export const SITE_NAME = 'Nexfin'

export const SITE_TAGLINE = 'Autonomous Intelligence for On-Chain Markets'

export const SITE_DESCRIPTION =
  'AI agents that research on-chain markets, discover trading signals, and execute crypto strategies.'
