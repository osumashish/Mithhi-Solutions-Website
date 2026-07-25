# Mithhi Talent Connect

A job board for Mithhi Solutions, built with **React 19 + TypeScript + Tailwind CSS v4** on Vite.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script              | What it does                                |
| ------------------- | ------------------------------------------- |
| `npm run dev`       | Vite dev server with HMR                    |
| `npm run build`     | Typecheck, then build to `dist/`            |
| `npm run typecheck` | TypeScript only, no emit                    |
| `npm run lint`      | oxlint                                      |
| `npm run preview`   | Serve the production build locally          |

## Routes

| Path                | Page                                                     |
| ------------------- | -------------------------------------------------------- |
| `/`                 | Home — hero search, stats, categories, featured roles     |
| `/jobs`             | Listing with search, filters and sorting                  |
| `/jobs/:slug`       | Role detail with company sidebar and similar roles        |
| `/jobs/:slug/apply` | Application form with validation and a success state      |
| `/companies`        | Verified hiring teams and their open roles                |
| `/about`            | Hiring standards, timeline, contact                       |
| `/post-a-job`       | Employer pricing and a listing-submission form            |
| `*`                 | 404                                                       |

## Structure

```
src/
  components/       Navbar, Footer, Layout, Logo, JobCard
    ui/             Button, Badge, Field (text / textarea / select)
  data/             companies.ts, jobs.ts — the mock dataset
  lib/utils.ts      cn() plus salary / date / number formatting
  pages/            One file per route
  types.ts          Domain types and the filter option unions
  index.css         Tailwind import, design tokens, base layer
```

`@/*` is aliased to `src/*` in both `vite.config.ts` and `tsconfig.app.json` — keep them in sync.

## Design system

Tokens live in the `@theme` block in [src/index.css](src/index.css), so they are available as
ordinary Tailwind utilities (`bg-brand-600`, `text-ink-500`, `shadow-lift`).

- **brand** — indigo/violet ramp, 50–950
- **ink** — cool slate neutrals, 50–950
- **Fonts** — Plus Jakarta Sans for headings (`font-display`), Inter for body
- **Utilities** — `container-page` for the shared page gutter, `bg-dotted` for the hero texture

## Notes

- Listing data is a static array in [src/data/jobs.ts](src/data/jobs.ts). Swap the two helpers at
  the bottom of that file (`getJobBySlug`, `getRelatedJobs`) for API calls when a backend exists.
- Filters on `/jobs` are stored in the URL (`?q=&category=A,B&mode=Remote&sort=`), so results are
  shareable and survive a refresh.
- Both forms validate client-side and render a success state. Nothing is transmitted — the résumé
  input records only the filename.
- Deep links are handled in production by `not_found_handling: "single-page-application"` in
  [wrangler.jsonc](wrangler.jsonc). Vite's dev server and `npm run preview` do the same locally.

## Deployment (Cloudflare Workers)

Deployed as a static-assets-only Worker — no `main` entry, Cloudflare just serves `dist/`.

| Cloudflare field | Value              |
| ---------------- | ------------------ |
| Build command    | `npm run build`    |
| Deploy command   | `npx wrangler deploy` |

### Do not remove the `@emnapi/*` devDependencies

`@emnapi/core`, `@emnapi/runtime` and `@emnapi/wasi-threads` are listed as devDependencies but
nothing imports them. They are there to work around an npm bug: `@tailwindcss/oxide-wasm32-wasi`
declares them as dependencies, but npm prunes them from `package-lock.json` on some platforms.
That leaves the lockfile internally inconsistent, and `npm ci` — which is what Cloudflare runs —
fails with `Missing: @emnapi/runtime@… from lock file`.

Declaring them directly forces proper top-level lockfile entries. If you remove them, regenerate
the lockfile and confirm `npm ci` still exits 0 before pushing.
