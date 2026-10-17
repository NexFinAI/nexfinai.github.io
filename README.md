# NexfinAI — Website

Static one-page website for **NexfinAI** — an independent research and engineering initiative at
the intersection of artificial intelligence, quantitative finance, and digital asset markets.

> **Intelligence for the Next Era of Finance**

Built for deployment to **GitHub Pages** at `https://<github-org>.github.io/` — no backend,
no database, no auth, no environment variables required.

---

## Tech stack

| Layer      | Choice                                            |
| ---------- | ------------------------------------------------- |
| Framework  | [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) (strict) |
| Build tool | [Vite](https://vite.dev)                          |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com) (CSS-first theme — no `tailwind.config.*` needed) |
| Fonts      | Inter + JetBrains Mono (Google Fonts, with system fallbacks) |
| Animations | CSS keyframes + IntersectionObserver (respects `prefers-reduced-motion`) |
| Deploy     | GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`) |

---

## Quick start

Prerequisites: **Node.js ≥ 20.19** (Node 22 recommended, see `.nvmrc`).

```bash
# 1. Install dependencies
npm install

# 2. Run locally (hot reload) — http://localhost:5173
npm run dev

# 3. Production build — outputs to ./dist
npm run build

# 4. Preview the production build locally — http://localhost:4173
npm run preview

# Type-check only
npm run typecheck
```

---

## Deploying to GitHub Pages

The site is configured for an **organization/user root site**:
repository `<github-org>.github.io` → served at `https://<github-org>.github.io/`
(Vite `base` is `/`, nothing else to change).

### 1. Replace the placeholders

Search-and-replace `your-org` in **two files** (marked with `TODO(deploy)` comments):

- `src/config/site.ts` — set `GITHUB_ORG` (and optionally `GITHUB_REPO`, `LINKEDIN_URL`, `CONTACT_URL`)
- `index.html` — canonical URL, Open Graph / Twitter URLs, JSON-LD

### 2. Create the repository and push

```bash
# from the project root
git init -b main
git add .
git commit -m "NexfinAI website"

# create an EMPTY repo named <github-org>.github.io on GitHub first, then:
git remote add origin https://github.com/<github-org>/<github-org>.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages (one-time)

In the repository on GitHub:

**Settings → Pages → Build and deployment → Source: `GitHub Actions`**

### 4. Done — deploys are automatic

Every push to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm ci && npm run build` and publishes `./dist` to GitHub Pages.
You can also re-deploy manually via **Actions → Deploy to GitHub Pages → Run workflow**.

> **Project site instead?** If you deploy from a repo that is *not*
> `<github-org>.github.io` (served at `https://<github-org>.github.io/<repo>/`),
> set the base path at build time — the workflow includes a commented line for this:
>
> ```bash
> BASE_PATH=/<repo>/ npm run build
> ```

---

## Page structure (single page, anchored sections)

| # | Section        | Anchor          | Content |
| - | -------------- | --------------- | ------- |
| 01 | Hero          | `#top`          | Tagline, positioning, topic chips, CTAs, conceptual figure (candle stream + neural lattice, "signals in the noise") |
| 02 | About         | `#about`        | Mission in three paragraphs + three research pillars |
| 03 | Research      | `#research`     | Three research areas with interests and objectives |
| 04 | Methodology   | `#methodology`  | Observe → Formulate → Experiment → Validate → Document + rigor statement |
| 05 | Projects      | `#projects`     | Open-source work + publications, honestly labeled “Research in progress” |
| 06 | Vision        | `#vision`       | Long-term direction statement |
| 07 | Principles    | `#principles`   | Five working principles |
| 08 | Contact       | `#contact`      | Collaboration invitation + GitHub / LinkedIn / email |
| —  | Footer        | —               | Links, full disclaimer, copyright |

---

## Customizing

Everything is plain, typed, and commented.

| What                          | Where                                   |
| ----------------------------- | --------------------------------------- |
| Links, GitHub org, branding   | `src/config/site.ts`                    |
| SEO / OG / JSON-LD metadata   | `index.html`                            |
| Colors, fonts, animations     | `src/index.css` (`@theme` tokens: `--color-signal`, `--color-edge`, …) |
| Hero copy + visual            | `src/sections/Hero.tsx`, `src/sections/HeroVisual.tsx` |
| About pillars                 | `src/sections/About.tsx` (`PILLARS`)    |
| Research areas                | `src/sections/ResearchAreas.tsx` (`AREAS`) |
| Methodology steps             | `src/sections/Methodology.tsx` (`STEPS`) |
| Open source / publications    | `src/sections/Projects.tsx`             |
| Vision / principles / contact | `src/sections/Vision.tsx`, `Principles.tsx`, `Contact.tsx` |
| Footer links + disclaimer     | `src/sections/Footer.tsx`               |
| Favicon                       | `public/favicon.svg`                    |
| OG image / Apple touch icon   | `public/og-image.png`, `public/apple-touch-icon.png` — regenerate with `python3 scripts/generate-og-image.py` (requires `pip install pillow`) |

### Design system in one paragraph

Near-black base (`--color-base`), hairline borders (`--color-edge`), one restrained teal
accent (`--color-signal`) for active/core semantics, and amber (`--color-flag`) reserved for
**future / in-progress** semantics (dashed borders, “Research in progress”, long-term
direction). Mono type (JetBrains Mono) is used for eyebrows, labels, and status lines;
Inter for everything else.

---

## Project structure

```text
nexfin-landing/
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages on push to main
├── public/
│   ├── favicon.svg                # NexfinAI mark (vector)
│   ├── apple-touch-icon.png       # 180×180 iOS icon
│   ├── og-image.png               # 1200×630 social share card
│   └── robots.txt
├── scripts/
│   └── generate-og-image.py       # regenerates og-image.png + apple-touch-icon.png
├── src/
│   ├── components/                # Logo, Button, Tag, Reveal, SectionHeading, icons, …
│   ├── sections/                  # Navbar, Hero, HeroVisual, About, ResearchAreas,
│   │                              # Methodology, Projects, Vision, Principles, Contact, Footer
│   ├── config/site.ts             # ALL links + branding (edit this first)
│   ├── lib/cx.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                  # Tailwind v4 theme tokens + animations
├── index.html                     # SEO / OG / JSON-LD metadata
├── package.json
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── vite.config.ts                 # base path + dev/preview server config
├── .nvmrc
└── README.md
```

---

## Content policy (honesty)

The copy reflects NexfinAI's real stage as an independent research initiative and contains
**no fabricated** products, clients, team claims, publications, repositories, or performance
results:

- The publications/projects panel is explicitly labeled **“Research in progress”** with a
  current-status note instead of invented work.
- Systematic trading is consistently framed as a **long-term direction** (amber, dashed).
- LinkedIn and Contact render as disabled “soon” placeholders until real URLs are set in
  `src/config/site.ts` — no dead links.
- The footer carries the full three-paragraph disclaimer (informational purposes only,
  not investment advice, backtest limitations).

Please keep it that way when editing.

---

## Notes

- **License:** none included yet — add one (e.g. MIT) before making the repo public.
- **Fonts:** loaded from Google Fonts at runtime; if they fail (offline/preview
  environments), the site falls back to system UI/mono fonts with no layout breakage.
- **Accessibility:** semantic landmarks, skip link, focus-visible rings, ARIA labels on
  icon-only controls, `prefers-reduced-motion` support, decorative SVGs marked `aria-hidden`.
