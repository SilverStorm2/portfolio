# Portfolio

Next.js 15 App Router portfolio with bilingual content (EN/PL), responsive design, and Formspree-backed contact form.

## Prerequisites

- Node.js 18+
- npm 9+
- Formspree project (or alternative email form endpoint)

## Environment Variables

| Variable                         | Purpose                                                           | Example                             |
| -------------------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Canonical origin used for metadata, sitemap, and structured data. | `https://your-portfolio.vercel.app` |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree endpoint that receives contact form submissions.        | `https://formspree.io/f/abcdefg`    |

Create a `.env.local` with both variables before running or deploying:

```bash
NEXT_PUBLIC_SITE_URL=https://localhost:3000
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdefg
```

On Vercel, `VERCEL_URL` is used as a fallback when `NEXT_PUBLIC_SITE_URL` is not set. For a stable canonical URL, keep `NEXT_PUBLIC_SITE_URL` configured in Production and Preview.

## Running Locally

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) while developing. The language switcher toggles EN ↔ PL copy globally.

## Quality Checks

```bash
npm run lint     # ESLint (lint-staged rules)
npm run test     # Node test runner placeholder (add integration/unit tests here)
npm run build    # Production build smoke test
```

## Deployment (Vercel)

1. Ensure the repository is connected to Vercel and the environment variables above are configured in the project settings (Production + Preview).
2. Push the latest changes to the default branch or run `vercel --prod` if you prefer the CLI.
3. After the build succeeds, run a Lighthouse check (Chrome DevTools or `lighthouse https://...`) aiming for ≥90 across categories.
4. Optional: add a custom domain inside Vercel once the project is stable.

All SEO metadata (Open Graph, Twitter cards, sitemap, robots, web manifest, structured data) automatically reference `NEXT_PUBLIC_SITE_URL`.

## Project Structure

- `src/app` – Next.js App Router routes, metadata, sitemap/robots/manifest.
- `src/components` – UI building blocks (hero, layout, projects, etc.).
- `src/content` – Centralised bilingual copy & datasets (about, projects, contact, navigation).
- `public` – Static assets (favicons, OG image, profile illustration).

Feel free to extend the dataset or copy files; the components read directly from `src/content` so non-developers can edit text safely.
