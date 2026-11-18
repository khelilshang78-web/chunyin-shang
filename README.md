# ChunYin Shang — Profile & Writing

An English editorial portfolio for ChunYin Shang (Khelil), bringing together academic direction, research, student leadership, and personal essays. Built as a static site for GitHub Pages.

## Stack

- React 19 + TypeScript + Vite
- Hash-based routing for reliable project-subpath hosting
- Responsive editorial layout with no backend or runtime secrets

## Local development

```bash
npm ci
npm run dev
```

The Vite script accepts normal CLI arguments, for example `npm run dev -- --host 0.0.0.0 --port 7100`.

## Quality checks

```bash
npm run lint
npm run build
npm run test:ui
```

The browser check covers desktop and mobile layouts, navigation, archive filters, reading progress, pagination, console errors, and failed requests. It uses an installed Edge browser when available; otherwise install Playwright Chromium or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE`.

## Editing content

All profile facts, projects, leadership records, and essays are centralized in `src/content.ts`. Page components are in `src/pages/`, and the editorial design system is in `src/index.css`.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` runs lint and the production build, then deploys `dist/` through GitHub's official Pages actions. The Vite base is relative (`./`) and routing uses URL hashes, so the site works at a project subpath without rewrite rules.
