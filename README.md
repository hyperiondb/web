# HyperionDB — web

The HyperionDB marketing site, built with [Next.js](https://nextjs.org) (App Router). The home page is a "coming soon" landing page with an email-notify form.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Structure

- `app/page.tsx` — home page (Server Component).
- `app/signup-form.tsx` — email-notify form (Client Component).
- `app/layout.tsx` — root layout and page metadata.
- `app/globals.css` — global styles and the ported landing-page component CSS.
- `app/colors_and_type.css` — design tokens (colors, type scale, spacing, radii, shadows, motion).
- `app/icon.svg` — favicon.
- `public/orbit-motif.svg` — ambient background motif.

## Typography

Hanken Grotesk + JetBrains Mono are self-hosted via [`next/font`](https://nextjs.org/docs/app/getting-started/fonts) (no external requests, no layout shift). The loader is set up in `app/layout.tsx`, which exposes `--font-hanken` / `--font-jetbrains-mono`; `app/globals.css` maps the design tokens `--font-sans` / `--font-mono` onto them. `app/colors_and_type.css` is kept verbatim from the design source.

## Deploy

Deploy on any platform that supports Next.js. See the [Next.js deployment docs](https://nextjs.org/docs/app/getting-started/deploying).
