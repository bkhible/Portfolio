# AGENTS.md — Portfolio Architecture

A minimalist visual merchandising portfolio built with TanStack Start (React SSR) and Tailwind CSS v4, deployed on Netlify.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript (strict mode) |
| Deployment | Netlify |

## Key Directories

```
src/routes/          # File-based routing (TanStack Router)
  __root.tsx         # Root layout — nav bar, HTML shell
  index.tsx          # Landing page (/)
  about.tsx          # About page (/about)
  work.tsx           # Work/portfolio grid (/work)
  contact.tsx        # Contact page (/contact)
public/images/       # Photo assets (user-uploaded)
src/styles.css       # Global styles + Tailwind imports + Google Fonts
```

## Routing

Uses TanStack Router file-based routing. Route tree is auto-generated at build time (`src/routeTree.gen.ts`). Each `src/routes/*.tsx` file becomes a route automatically.

## Adding / Updating Work Photos

Photos live in `public/images/`. The work grid is driven by a static `projects` array in `src/routes/work.tsx`. Add an entry to that array and drop the matching image into `public/images/`.

| Image filename | Page |
|----------------|------|
| `about-photo.jpg` | About page — tall portrait |
| `work-1.jpg` … `work-6.jpg` | Work page grid |

## Design Conventions

- **Palette**: white background, gray-900 text, gray-400/500 for secondary text
- **Typography**: Cormorant Garamond (serif) for the hero name; Inter for body copy
- **Spacing**: generous whitespace, no decorative borders or dividers
- **Nav**: fixed top, centered links in small uppercase `tracking-widest`
- Images use `aspect-[3/4]` (portrait) for the about photo and `aspect-[4/5]` for work cards; `bg-gray-100` placeholder when images are absent

## Non-Obvious Decisions

- `shellComponent` in `__root.tsx` (not `component`) is the TanStack Start pattern for the HTML document shell — it receives `children` as the outlet, so no explicit `<Outlet />` is needed.
- The `onError` handlers on `<img>` tags swap to a "photo coming soon" placeholder inline so the grid layout holds before real photos are uploaded.
- Unused template routes (`resume.tsx`, `projects.tsx`, `blog/`) remain on disk but are not linked in the nav — they can be deleted safely.
- Google Fonts are loaded via CSS `@import` in `styles.css`; no additional configuration is needed.
