# https://ajgoldenwings.github.io

Personal website built with Vite, Tailwind CSS 4, and DaisyUI 5. Uses a hash-based SPA router with vanilla JavaScript.

## Prerequisites

- [Node.js](https://nodejs.org/) v22+
- npm (included with Node.js)

## Project Structure

```
docs/
├── index.html          # Entry HTML
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite + Tailwind CSS plugin config
└── src/
    ├── main.js         # SPA router and app shell
    ├── style.css       # Global styles (Tailwind)
    ├── components/     # Shared UI (navbar, footer)
    └── pages/          # Route pages (home, about, tools)
```

## Getting Started

Install dependencies from the `docs/` directory:

```sh
npm run install:docs
```

## Development

Start the local dev server with hot-reload:

```sh
npm run dev
```

The site will be available at `http://localhost:5173` by default.

## Build

Create a production build:

```sh
npm run build
```

Output is written to `docs/dist/`.

## Preview Production Build

Serve the production build locally to verify it before deploying:

```sh
npm run preview
```

## Deployment

Deployment is automated via GitHub Actions. Pushing to the `master` branch triggers the workflow at `.github/workflows/deploy.yml`, which:

1. Installs dependencies
2. Runs `npm run build`
3. Deploys `docs/dist/` to GitHub Pages

To deploy manually, push your changes to `master`:

```sh
git add .
git commit -m "your message"
git push origin master
```

The site will be live at https://ajgoldenwings.github.io within a couple of minutes.

## Tech Stack

- [Vite](https://vite.dev/) — build tool and dev server
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first CSS
- [DaisyUI 5](https://daisyui.com/) — Tailwind component library
