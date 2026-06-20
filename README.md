# Bethany Hible — Visual Merchandising Portfolio

A minimalist personal portfolio site for Bethany Hible, a visual merchandiser. The site showcases her work through a clean, editorial aesthetic.

## Pages

- **Home** (`/`) — Full-screen landing with name and title
- **About** (`/about`) — Portrait photo alongside a short bio
- **Work** (`/work`) — Photo grid of visual merchandising projects with captions
- **Contact** (`/contact`) — Email address only

## Tech Stack

- [TanStack Start](https://tanstack.com/start) — React SSR framework
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [Vite](https://vitejs.dev/) — Build tool
- Deployed on [Netlify](https://netlify.com)

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`.

## Adding Photos

Place images in the `public/images/` folder:

| File | Used on |
|------|---------|
| `about-photo.jpg` | About page — tall portrait |
| `work-1.jpg` … `work-6.jpg` | Work page grid |

To add more work photos, edit the `projects` array in `src/routes/work.tsx` and add the corresponding image files.
