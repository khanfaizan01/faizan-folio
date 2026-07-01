# Project Knowledge Document
## Mohd Faizan Khan — Personal Portfolio Website

**Last updated:** 2026-07-01
**Purpose:** Complete project knowledge base for agent handoff, maintenance, and extension.

---

## 1. Project Identity

| Field | Value |
|-------|-------|
| Owner | Mohd Faizan Khan |
| Type | Personal portfolio — static single-page app |
| Current role | Lead Software Engineer, ZS Associates, Gurugram, India |
| Email | khanfaizan1196@gmail.com |
| LinkedIn | https://www.linkedin.com/in/faizan~khan |
| Experience | 7+ years across pharma tech, telecom, enterprise IT |

---

## 2. Technology Stack

| Layer | Choice | Version |
|-------|--------|---------|
| Framework | React | 18.3.x |
| Language | TypeScript | 5.5.x |
| Build tool | Vite | 5.4.x |
| Styling | Tailwind CSS | 3.4.x |
| Icons | Lucide React | 0.344.x |
| Icons (tech stack) | Devicon | latest (CDN, not npm) |
| Fonts | Inter + JetBrains Mono | Google Fonts CDN |
| Database | None — fully static |
| Backend | None |

> **Why React, not Angular:** The Bolt hosting environment runs a Vite dev server that is incompatible with Angular CLI's build pipeline. Angular was originally planned but React + Vite is used instead.

---

## 3. File & Directory Structure

```
project/
├── index.html                        # Entry HTML — includes Google Fonts + Devicon CDN
├── tailwind.config.js                # Full design token extension (colors, shadows, animations)
├── src/
│   ├── main.tsx                      # React entry point
│   ├── App.tsx                       # Root — page loader + section assembly
│   ├── index.css                     # Tailwind layers + all custom CSS utilities
│   ├── vite-env.d.ts
│   ├── assets/
│   │   ├── avatar.png                # Original avatar asset (unused)
│   │   └── avatar2.png               # Active avatar image used in Hero section
│   ├── data/
│   │   └── portfolio.ts              # ALL content data — single source of truth
│   ├── hooks/
│   │   ├── useScrollReveal.ts        # Intersection Observer animation hooks
│   │   ├── useTypewriter.ts          # Cycling typewriter text hook
│   │   └── useCounter.ts             # Animated number counter hook
│   └── components/
│       ├── Navigation.tsx            # Fixed top nav — active section highlight + mobile menu
│       ├── Hero.tsx                  # Full-viewport hero — avatar, typewriter, CTA
│       ├── About.tsx                 # Summary, stat counters, competency chips
│       ├── Experience.tsx            # Expandable timeline cards per role
│       ├── Projects.tsx              # Product cards grid with tech icons
│       ├── Skills.tsx                # Tabbed tech stack + architecture competencies
│       ├── Education.tsx             # Education history cards
│       ├── Contact.tsx               # Email + LinkedIn CTAs only (no form)
│       └── Footer.tsx                # Minimal footer + scroll-to-top FAB
├── README.md                         # Local dev setup and deployment guide
├── APP_CONTEXT.md                    # Design system, section map, maintenance guide
└── KNOWLEDGE.md                      # This file — agent-readable full project knowledge
```

---

## 4. Design System

### 4.1 Color Palette (Tailwind tokens)

All colors are defined in `tailwind.config.js` under `theme.extend.colors`.

```
bg.primary    = #121212   Main page background
bg.secondary  = #1A1A1A   Alternate section backgrounds (even/odd rhythm)
bg.card       = #1E1E1E   Card backgrounds
bg.elevated   = #252525   Elevated micro-elements (badges, chips)

text.primary   = #E0E0E0  Body text
text.secondary = #9E9E9E  Secondary / descriptive text
text.muted     = #616161  Captions, labels, timestamps

accent.cobalt       = #00B4FF  Primary accent — Neon Cobalt
accent.cobaltDim    = #0090CC
accent.cobaltGlow   = rgba(0,180,255,0.15)  Used for glowing backgrounds
accent.mint         = #00E5CC  Secondary accent — Mint Green
accent.mintDim      = #00B8A3
accent.mintGlow     = rgba(0,229,204,0.15)

border.subtle   = #2A2A2A
border.DEFAULT  = #333333
border.strong   = #444444
```

### 4.2 Typography

```
font-sans  = Inter (Google Fonts)  — weights 300, 400, 500, 600, 700
font-mono  = JetBrains Mono (Google Fonts)  — weights 400, 500, 700
```

Usage:
- UI labels, nav, chips → `font-mono`
- Body, headings, descriptions → `font-sans` (default)

### 4.3 Custom CSS Utilities (defined in `src/index.css`)

| Class | Purpose |
|-------|---------|
| `.section-container` | `max-w-6xl mx-auto px-6 lg:px-8` — wraps all section content |
| `.section-title` | `text-3xl lg:text-4xl font-bold text-text-primary mb-3` |
| `.accent-line` | `h-1 w-16 bg-gradient-to-r from-cobalt to-mint rounded-full mb-8` |
| `.glass-card` | Dark card with `bg-bg-card border border-border-subtle rounded-2xl shadow-card` |
| `.tech-badge` | Small mono font tag — border turns cobalt on hover |
| `.btn-primary` | Cobalt-filled button with glow hover |
| `.btn-outline` | Cobalt-bordered transparent button with glow hover |
| `.reveal` | Scroll-triggered fade + slide-up (opacity 0 → 1, translateY 30px → 0) |
| `.reveal-left` | Scroll-triggered slide from left |
| `.reveal-right` | Scroll-triggered slide from right |
| `.revealed` | Applied by JS when element enters viewport — triggers transition |
| `.stagger-1` ... `.stagger-8` | `transition-delay: 100ms` increments for sequenced reveals |
| `.glow-text` | `text-shadow: 0 0 20px rgba(0,180,255,0.5)` |
| `.grid-bg` | Circuit-board dot-grid background pattern |
| `.text-gradient-cobalt` | `background-clip: text` gradient from cobalt to mint |
| `.timeline-card` | `glass-card` + left border accent gradient |
| `.project-card` | `glass-card` + hover lift + top accent bar |
| `.skill-icon-card` | Flex column card with hover border + lift |
| `.arch-card` | `glass-card` flex row — hover mint glow |
| `.nav-link` | Underline reveal on hover/active |

### 4.4 Tailwind Shadow Tokens

```
shadow-glow-cobalt    = 0 0 20px rgba(0,180,255,0.3)
shadow-glow-mint      = 0 0 20px rgba(0,229,204,0.3)
shadow-glow-cobalt-lg = 0 0 40px rgba(0,180,255,0.2)
shadow-card           = 0 4px 24px rgba(0,0,0,0.4)
shadow-card-hover     = 0 8px 40px rgba(0,0,0,0.6)
```

### 4.5 Tailwind Animation Tokens

```
animate-float        = float 6s ease-in-out infinite (vertical bob ±12px)
animate-pulse-glow   = box-shadow oscillation between 0.2 and 0.5 opacity
animate-blink        = 1s step-end cursor blink
animate-spin-slow    = spin 8s linear infinite
```

---

## 5. Content Data (`src/data/portfolio.ts`)

This file is the **single source of truth** for all content. No text content exists elsewhere.

### 5.1 `personal` object

```typescript
{
  name: 'Mohd Faizan Khan',
  initials: 'FK',
  title: 'Lead Software Engineer',
  taglines: string[],    // cycled by typewriter — 5 entries
  location: 'Gurugram, Haryana, India',
  email: 'khanfaizan1196@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faizan~khan',
  summary: string,       // used in About section
  shortBio: string,
}
```

### 5.2 `stats` array (4 items)

```typescript
{ value: number, suffix: string, label: string }
// e.g. { value: 7, suffix: '+', label: 'Years Experience' }
```

Displayed as animated counters in the About section.

### 5.3 `experience` array (5 items)

```typescript
{
  id: string,
  company: string,          // short: 'ZS', 'Amdocs', 'Infosys'
  companyFull: string,      // full: 'ZS Associates'
  role: string,
  period: string,           // 'July 2025 – Present'
  duration: string,         // '1 year'
  location: string,
  accentColor: string,      // hex — per-company color
  description: string,
  highlights: string[],     // 3-4 bullet points
  techStack: string[],      // plain strings (not icon objects)
}
```

**All 5 experience entries:**

| id | company | role | period |
|----|---------|------|--------|
| `zs-lead` | ZS Associates | Lead Software Engineer | July 2025 – Present |
| `zs-senior` | ZS Associates | Senior Software Engineer | Oct 2022 – June 2025 |
| `amdocs` | Amdocs | Software Developer | July 2021 – Oct 2022 |
| `infosys-senior` | Infosys | Senior System Engineer | Oct 2020 – June 2021 |
| `infosys-engineer` | Infosys | System Engineer | Sept 2018 – Sept 2020 |

### 5.4 `projects` array (5 items)

```typescript
{
  id: string,
  name: string,
  company: string,
  domain: string,           // e.g. 'Pharma Tech / Low-Code'
  accentColor: string,      // hex
  tagColor: 'cobalt' | 'mint',
  description: string,
  role: string,             // role title on this project
  highlights: string[],
  techStack: Array<{
    name: string,
    icon: string,           // Devicon class e.g. 'devicon-java-plain'
    color: string,          // hex — Devicon brand color
  }>,
}
```

**All 5 projects (in display order):**

| id | name | company | domain |
|----|------|---------|--------|
| `zas` | ZAS — Zaidyn Application Studio | ZS Associates | Pharma Tech / Low-Code |
| `zaidyn` | ZAIDYN Field Deployment | ZS Associates | Life Sciences / AI Platform |
| `rtb` | RTB — Real Time Billing | Amdocs | Telecom / Cloud-Native |
| `intap` | InTAP — Talent Acquisition Platform | Infosys | HR Tech / Enterprise |
| `jantacart` | JantaCart | Personal Project | E-Commerce / Full Stack |

Grid layout: first two projects span a 2-col row; last three share a 3-col row on desktop.

### 5.5 `skills` object

```typescript
{
  backend:   SkillItem[],   // Java, Spring Boot, Python, Flask, REST APIs, JPA
  frontend:  SkillItem[],   // Angular, TypeScript, HTML5, CSS3
  databases: SkillItem[],   // PostgreSQL, Oracle SQL, Couchbase
  devops:    SkillItem[],   // Kubernetes, Docker, AWS Lambda, Git, Linux
}
// SkillItem: { name, icon (devicon class), color (hex), level (0-100) }
```

The tab switcher in `Skills.tsx` uses `activeCategory` state keyed to these four keys.

### 5.6 `architecture` array (8 items)

```typescript
{
  icon: string,        // maps to Lucide icon name in archIconMap
  title: string,
  description: string,
  accent: string,      // hex — alternates cobalt / mint
}
```

Icons map: `layers`, `git-branch`, `shield`, `zap`, `cloud`, `users`, `lock`, `box` → Lucide components in `Skills.tsx`.

### 5.7 `education` array (3 items)

```typescript
{
  institution: string,
  degree: string,
  field: string,
  period: string,
  type: 'university' | 'school',
}
```

---

## 6. Component Reference

### 6.1 `App.tsx`

- Renders `<PageLoader>` on first load (1.2s display, 1.8s unmount via `setTimeout`)
- `loaded` state gates the main content with opacity transition
- Section order: `Navigation → Hero → About → Experience → Projects → Skills → Education → Contact → Footer`

### 6.2 `Navigation.tsx`

- Fixed position, `z-50`
- Background: transparent at top, `bg-bg-primary/95 backdrop-blur-md` when `scrollY > 20`
- Active section detection: iterates sections in reverse to find first one whose `offsetTop <= scrollY + 120`
- Mobile: hamburger at `< md` breakpoint — full-screen overlay with nav links
- Logo: FK monogram gradient badge + name (hidden on mobile)
- Right: LinkedIn button (desktop), hamburger (mobile)

### 6.3 `Hero.tsx`

- Full-viewport (`min-h-screen`) with grid-bg + gradient orbs + floating dots background
- Left column: status badge → name (`h1`) → typewriter → summary → competency chips → CTA buttons → location
- Right column: avatar container with floating tech label badges
- **Avatar:** `src/assets/avatar2.png` displayed via `<img>` tag (imported as `avatarUrl`). `AvatarSVG` component is still defined in the file but commented out.
- Typewriter cycles: `personal.taglines` at 70ms type / 35ms delete / 2200ms pause
- Mount animation: `mounted` state with 100ms delay — drives opacity + translateY on both columns
- Scroll button: bouncing arrow linking to `#about`

### 6.4 `About.tsx`

- 4 `<StatCard>` components — each uses `useCounter` hook for animated number on scroll into view
- Left column: bio paragraphs + current-status callout box (pulsing mint dot)
- Right column: competency chip grid (10 chips, alternating cobalt/mint) + domain experience table
- Uses `useScrollRevealAll` on container

### 6.5 `Experience.tsx`

- Two-column layout (`lg:grid-cols-3`): sticky sidebar (1 col) + cards (2 col)
- Sidebar: career timeline with vertical gradient line + company dots
- Cards: `<ExperienceCard>` — first card (`index === 0`) expanded by default, rest collapsed
- Click to expand/collapse with `max-h` CSS transition
- Expanded content: description → highlights bullets → tech badges
- `bg-bg-secondary` section background

### 6.6 `Projects.tsx`

- Two grid rows: `md:grid-cols-2` (first 2) then `md:grid-cols-2 lg:grid-cols-3` (last 3)
- `<ProjectCard>`: hover lift, top accent bar fades in, tech icons via `<TechIcon>` using Devicon `<i>` tags
- `hovered` local state drives accent bar opacity and icon scale

### 6.7 `Skills.tsx`

- Top: "Technology Stack" with category tab switcher (`activeCategory` state) → skill icon grid
- `<SkillCard>`: hover drives Devicon icon color + proficiency bar width expansion
- Bottom: "All skills at a glance" strip showing every skill across all categories
- Then: "Solution Architecture & System Design" section — 8 arch cards in `sm:grid-cols-2 lg:grid-cols-4`
- Engineering philosophy quote callout at the bottom
- `bg-bg-secondary` section background

### 6.8 `Education.tsx`

- 3-card grid (`md:grid-cols-3`), max-width `max-w-4xl`
- `GraduationCap` icon for university, `School` icon for school entries
- Accent color: `#00B4FF` for university, `#00E5CC` for school entries
- Corner radial gradient decoration

### 6.9 `Contact.tsx`

- Two contact cards: email (`mailto:`) + LinkedIn (external link) — no contact form
- Both cards have hover glow effect
- CTA button row: LinkedIn + email buttons
- Location row with map pin icon
- `bg-bg-secondary` section background

### 6.10 `Footer.tsx`

- FK monogram + name + copyright + LinkedIn/email links in a single row
- Scroll-to-top FAB (bottom-right, `fixed`, `z-50`) — fades in when `scrollY > 400`

---

## 7. Custom Hooks

### `useScrollReveal(threshold = 0.15)` → `ref`

Attaches to a single `<div>` ref. When the element enters the viewport, adds `.revealed` class.

### `useScrollRevealAll(threshold = 0.1)` → `containerRef`

Attaches to a container. Observes all children matching `.reveal`, `.reveal-left`, `.reveal-right` and adds `.revealed` on intersection. Used in every section component.

### `useTypewriter(texts, typingSpeed, deletingSpeed, pauseTime)` → `displayText: string`

- Types forward at `typingSpeed` ms/char
- Pauses for `pauseTime` ms at full length
- Deletes at `deletingSpeed` ms/char
- Cycles through `texts` array indefinitely
- Returns current display string (append a blinking `|` cursor in JSX)

### `useCounter(target, duration = 2000, startOnView = true)` → `{ count, ref }`

- Returns a `ref` to attach to the trigger element
- When `startOnView=true`: starts counting when element enters viewport (IntersectionObserver, threshold 0.5)
- Easing: cubic ease-out (`1 - (1-progress)^3`)
- Attach `ref` to the wrapping element to trigger

---

## 8. External CDN Dependencies

Loaded in `index.html` — require internet connection at runtime:

| Resource | URL |
|----------|-----|
| Google Fonts (Inter + JetBrains Mono) | `fonts.googleapis.com` / `fonts.gstatic.com` |
| Devicon icons | `cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css` |

Devicon usage: `<i className="devicon-java-plain colored" />` — `colored` variant uses brand colors; omit for monochrome.

---

## 9. Section Layout & Background Rhythm

| Section | ID | Number | BG | Notes |
|---------|----|--------|----|-------|
| Hero | `#hero` | — | `bg-primary` | Grid overlay, full-viewport |
| About | `#about` | 01 | `bg-primary` | — |
| Experience | `#experience` | 02 | `bg-secondary` | Sticky sidebar on desktop |
| Projects | `#projects` | 03 | `bg-primary` | — |
| Skills | `#skills` | 04 | `bg-secondary` | — |
| Education | `#education` | 05 | `bg-primary` | — |
| Contact | `#contact` | 06 | `bg-secondary` | — |

Alternating `bg-primary` / `bg-secondary` creates visual rhythm without explicit dividers.
Top/bottom separator lines (`h-px` gradient) are used on some sections.

---

## 10. Scroll Animation Pattern

Every section uses this pattern:

```tsx
const containerRef = useScrollRevealAll();

return (
  <section>
    <div ref={containerRef}>
      <div className="reveal">...</div>
      <div className="reveal stagger-2">...</div>
      <div className="reveal-left stagger-3">...</div>
      <div className="reveal-right stagger-4">...</div>
    </div>
  </section>
);
```

The `.reveal*` classes start with `opacity: 0` and a translate offset. The hook adds `.revealed` which triggers the CSS transition to `opacity: 1` / `translate(0)`. Stagger classes add `transition-delay`.

---

## 11. Avatar

The avatar displayed in the Hero section (`src/assets/avatar2.png`) is an image asset located at `src/assets/avatar2.png`. It is imported at the top of `Hero.tsx`:

```typescript
import avatarUrl from '../assets/avatar2.png';
```

And rendered as:

```tsx
<img src={avatarUrl} alt="Avatar" className="w-full h-full" />
```

The `AvatarSVG` function (an inline SVG portrait) is still defined in `Hero.tsx` but is commented out. It can be re-enabled by swapping the `<img>` back to `<AvatarSVG />`.

---

## 12. Navigation Active State

The active section in the nav is determined in `Navigation.tsx` by the scroll handler:

```typescript
const sections = navLinks.map((l) => l.href.slice(1));  // ['about', 'experience', ...]
for (const id of [...sections].reverse()) {
  const el = document.getElementById(id);
  if (el && window.scrollY >= el.offsetTop - 120) {
    setActiveSection(id);
    break;
  }
}
```

Offset `120px` accounts for the fixed nav height.

---

## 13. Page Loader

Defined inside `App.tsx` as `<PageLoader onDone={() => setLoaded(true)}>`.

- Phase 1 (0–1200ms): FK monogram with `animate-pulse-glow` + 3 bouncing dots
- Phase 2 (1200ms): `opacity-0 pointer-events-none` (fade out)
- Phase 3 (1800ms): `onDone()` called — `loaded` state set to true — main content fades in

---

## 14. How to Make Common Changes

### Update personal info / contact
Edit `personal` object in `src/data/portfolio.ts`.

### Add or edit a work experience entry
Edit `experience` array in `src/data/portfolio.ts`. Fields: `id`, `company`, `companyFull`, `role`, `period`, `duration`, `location`, `accentColor`, `description`, `highlights[]`, `techStack[]` (plain strings).

### Add or edit a project
Edit `projects` array in `src/data/portfolio.ts`. `techStack` items need `name`, `icon` (Devicon class), `color` (hex). Browse icons at https://devicon.dev/.

### Change the avatar image
Replace `src/assets/avatar2.png` with a new image. The `import avatarUrl from '../assets/avatar2.png'` line in `Hero.tsx` will pick it up automatically after rebuild.

### Revert to SVG avatar
In `Hero.tsx`, uncomment `<div className="absolute inset-4"><AvatarSVG /></div>` and remove or comment out the `<img>` version.

### Add a new section
1. Create `src/components/NewSection.tsx`
2. Use `const containerRef = useScrollRevealAll()` + `ref={containerRef}` on the section wrapper
3. Add content data to `src/data/portfolio.ts`
4. Import and mount in `src/App.tsx`
5. Add `{ label: 'Label', href: '#new-section-id' }` to `navLinks` in `Navigation.tsx`

### Add a new skill category
In `src/data/portfolio.ts`, add a new key to the `skills` object. In `Skills.tsx`, add it to the `skillCategories` array.

### Change accent colors
Edit `accent.cobalt` and `accent.mint` in `tailwind.config.js`. The `cobaltGlow` and `mintGlow` rgba values should also be updated to match.

---

## 15. Build & Run Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:5173 (HMR enabled)
npm run build        # Production build → dist/
npm run preview      # Preview production build at localhost:4173
npm run typecheck    # TypeScript type check (no emit)
npm run lint         # ESLint
```

---

## 16. Deployment Notes

- Outputs to `dist/` — fully static assets, no server required
- Compatible with: Netlify, Vercel, GitHub Pages, any CDN/static host
- No environment variables required
- No backend, no database, no authentication
- The `dist/_redirects` file exists (created during a prior build) and is suitable for Netlify SPA routing

---

## 17. Key Design Decisions & Constraints

| Decision | Reason |
|----------|--------|
| React instead of Angular | Bolt/Vite environment incompatible with Angular CLI build system |
| No database (Supabase not used) | Explicitly requested by owner — fully static content |
| No contact form | Owner preference — direct email/LinkedIn links only |
| Certifications not shown | Owner preference — excluded as not significant |
| System design / architecture emphasized | Owner is a solution architect — this is a key differentiator |
| Devicon via CDN (not npm) | Simplest integration; Vite bundles fine; icons render with `<i>` tags |
| Avatar as image asset | Owner replaced the SVG avatar with a custom PNG (`avatar2.png`) |
| Dark theme only | Owner specified `#121212` dark-first design — no light mode toggle |
| No comments in code | Project follows zero-comment convention unless WHY is non-obvious |
