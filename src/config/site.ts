/**
 * ------------------------------------------------------------------
 * NexfinAI — central site configuration
 * ------------------------------------------------------------------
 * This is the ONLY file you need to edit for links and branding.
 *
 * TODO(deploy): replace `your-org` with your GitHub organization or
 * username before deploying. Also update the matching placeholders in
 * index.html (canonical / Open Graph / JSON-LD URLs).
 */

/** GitHub organization or username that owns the repositories. */
export const GITHUB_ORG = 'nexfinai'

/** Main repository name. */
export const GITHUB_REPO = 'nexfinai'

/** Main GitHub repository URL (navbar, hero, footer, CTAs). */
export const GITHUB_URL = `https://github.com/${GITHUB_ORG}/`

/** Canonical site URL (GitHub Pages root site for the org). */
export const SITE_URL = `https://${GITHUB_ORG}.github.io`

/**
 * LinkedIn profile / page URL.
 * Leave as an empty string until the account exists — buttons render a
 * disabled "coming soon" state instead of a dead link.
 * TODO: e.g. 'https://www.linkedin.com/company/nexfinai'
 */
export const LINKEDIN_URL = 'https://www.linkedin.com/company/nexfinai'

/**
 * Contact email or form URL.
 * Leave as an empty string until it exists — buttons render a disabled
 * "coming soon" state instead of a dead link.
 * TODO: e.g. 'mailto:research@your-domain.com'
 */
export const CONTACT_URL = ''

/* ---------------- Branding ---------------- */

export const SITE_NAME = 'NexfinAI'

export const SITE_TAGLINE = 'Intelligence for the Next Era of Finance'

export const SITE_DESCRIPTION =
  'NexfinAI explores AI-powered quantitative research, crypto and DeFi analytics, and systematic trading systems through open-source engineering and reproducible experiments.'
