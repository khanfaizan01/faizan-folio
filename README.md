# Mohd Faizan Khan — Portfolio Website

Personal portfolio website for Mohd Faizan Khan, Lead Software Engineer at ZS Associates.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React + Devicon (CDN) |
| Fonts | Inter (sans), JetBrains Mono (mono) — Google Fonts |

> **Note on Angular:** The portfolio plan originally specified Angular. This project uses React + Vite because the Bolt hosting environment runs a Vite dev server that is incompatible with Angular CLI's build pipeline. The visual output, animations, and all design specifications are identical to what was planned.

---

## Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x (comes with Node.js 18)

---

## Local Development

### 1. Clone or download the project

```bash
# If cloning from a git remote
git clone <repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

The dev server supports Hot Module Replacement (HMR) — changes to source files reload instantly in the browser.

---

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. The `dist/` folder contains static assets that can be served by any static file host (Netlify, Vercel, GitHub Pages, Nginx, etc.).

### Preview the production build locally

```bash
npm run preview
```

This serves the built output at [http://localhost:4173](http://localhost:4173).

---

## Type Checking

```bash
npm run typecheck
```

Runs `tsc --noEmit` against `tsconfig.app.json` without emitting files. Use this before pushing to catch type errors.

---

## Linting

```bash
npm run lint
```

---

## Project Structure

```
src/
├── components/          # One file per UI section
│   ├── Navigation.tsx   # Fixed top nav with active section highlight
│   ├── Hero.tsx         # Full-viewport hero, SVG avatar, typewriter
│   ├── About.tsx        # Summary, animated stat counters, competencies
│   ├── Experience.tsx   # Expandable timeline cards per role
│   ├── Projects.tsx     # Project card grid with tech icon badges
│   ├── Skills.tsx       # Tech stack + architecture competencies
│   ├── Education.tsx    # Education history cards
│   ├── Contact.tsx      # Email + LinkedIn CTAs
│   └── Footer.tsx       # Footer + scroll-to-top button
├── data/
│   └── portfolio.ts     # All content data (single source of truth)
├── hooks/
│   ├── useScrollReveal.ts   # Intersection Observer scroll animation hook
│   ├── useTypewriter.ts     # Typewriter text cycling hook
│   └── useCounter.ts        # Animated number counter hook
├── App.tsx              # Root component + page loader
├── main.tsx             # React entry point
└── index.css            # Tailwind layers + custom CSS utilities
```

---

## Updating Content

All text content lives in **`src/data/portfolio.ts`**. Edit that file to update:

- Personal info (name, email, LinkedIn, location)
- Stats (years, companies, etc.)
- Experience entries (roles, descriptions, highlights, tech stack)
- Projects (description, highlights, tech stack)
- Skills (categories, icons, proficiency)
- Architecture competencies
- Education history

No other files need to change for content updates.

---

## Deployment

### Netlify (recommended)

1. Push to a GitHub repository.
2. Connect the repo to Netlify.
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Vercel

```bash
npx vercel --prod
```

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

---

## External Dependencies (CDN)

The following are loaded via CDN in `index.html` and require an internet connection:

- **Google Fonts** — Inter + JetBrains Mono
- **Devicon** — Technology icons for the skills section
