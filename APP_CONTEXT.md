# Application Context — Faizan Khan Portfolio

This document captures the full context, design decisions, and maintenance guide for this portfolio website. It is the single source of truth for anyone maintaining or extending this application.

---

## Owner

**Mohd Faizan Khan**
Lead Software Engineer | ZS Associates | Amdocs | Infosys
Gurugram, Haryana, India
Email: khanfaizan1196@gmail.com
LinkedIn: https://www.linkedin.com/in/faizan~khan

---

## Purpose

A single-page personal portfolio showcasing:
- Professional experience (7+ years, 4 companies)
- Key enterprise products built (ZAS, ZAIDYN, RTB, InTAP, JantaCart)
- Technology skills with animated icons
- Solution Architecture and System Design competencies
- Education background
- Contact information (email + LinkedIn only — no contact form)

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `bg-primary` | `#121212` | Main background |
| `bg-secondary` | `#1A1A1A` | Alternate section background |
| `bg-card` | `#1E1E1E` | Card backgrounds |
| `bg-elevated` | `#252525` | Elevated elements (badges, inputs) |
| `text-primary` | `#E0E0E0` | Main text |
| `text-secondary` | `#9E9E9E` | Secondary/descriptive text |
| `text-muted` | `#616161` | Captions, labels, metadata |
| `accent-cobalt` | `#00B4FF` | Primary accent — Neon Cobalt |
| `accent-mint` | `#00E5CC` | Secondary accent — Mint Green |
| `border-subtle` | `#2A2A2A` | Subtle borders |
| `border-DEFAULT` | `#333333` | Default borders |

### Typography

- **Body / UI**: Inter (weights: 400, 500, 600, 700)
- **Code / Mono**: JetBrains Mono (weights: 400, 500, 700)
- **Line height**: 1.5× body, 1.2× headings
- **Base size**: 16px

### Spacing System

8px base grid. All padding/margin values are multiples of 8px via Tailwind's default scale.

### Animations

All section animations use the Intersection Observer API via `useScrollReveal` hook. Classes:
- `.reveal` — fade-in + slide up (default for most elements)
- `.reveal-left` — slide in from left
- `.reveal-right` — slide in from right
- `.stagger-1` through `.stagger-8` — transition-delay increments of 100ms

Hero animations are CSS-only on mount (opacity + translateY transition).

---

## Section Map

| Section | ID | Section Number | Background |
|---------|----|----------------|------------|
| Hero | `#hero` | — | `bg-primary` + grid overlay |
| About | `#about` | 01 | `bg-primary` |
| Experience | `#experience` | 02 | `bg-secondary` |
| Projects | `#projects` | 03 | `bg-primary` |
| Skills | `#skills` | 04 | `bg-secondary` |
| Education | `#education` | 05 | `bg-primary` |
| Contact | `#contact` | 06 | `bg-secondary` |

Alternating backgrounds create a visual rhythm without explicit dividers.

---

## Content Data

All content lives in `src/data/portfolio.ts`. This is intentional — it is the single source of truth for all text, links, and structured data.

### Data Exports

| Export | Type | Purpose |
|--------|------|---------|
| `personal` | Object | Name, email, LinkedIn, location, summary, taglines |
| `stats` | Array | Hero stat counters (years, products, companies, domains) |
| `experience` | Array | Work history with descriptions and tech stacks |
| `projects` | Array | Products built with tech icon definitions |
| `skills` | Object | Tech skills grouped by category (backend, frontend, databases, devops) |
| `architecture` | Array | System design competency cards |
| `education` | Array | Academic history |

### Tech Icon Format

Tech icons in `projects` and `skills` use Devicon class names loaded from CDN:

```typescript
{ name: 'Java', icon: 'devicon-java-plain', color: '#007396' }
```

Browse available icons at: https://devicon.dev/

---

## Component Architecture

```
App
├── PageLoader          (mount animation, 1.2s → fade out)
├── Navigation          (fixed, scroll-aware, mobile hamburger)
├── Hero                (SVG avatar, typewriter, CTA buttons)
├── About               (stat counters, bio, competency chips)
├── Experience          (expandable cards, career sidebar)
├── Projects            (2-row grid: 2 featured + 3 standard)
├── Skills              (tabbed tech stack + architecture cards)
├── Education           (3 cards)
├── Contact             (email + LinkedIn links only)
└── Footer              (minimal + scroll-to-top FAB)
```

### Custom Hooks

| Hook | File | Purpose |
|------|------|---------|
| `useScrollReveal` | `hooks/useScrollReveal.ts` | Attach reveal animation to a single element |
| `useScrollRevealAll` | `hooks/useScrollReveal.ts` | Observe all `.reveal*` children in a container |
| `useTypewriter` | `hooks/useTypewriter.ts` | Cycling typewriter text with configurable speeds |
| `useCounter` | `hooks/useCounter.ts` | Animated number counter triggered on scroll into view |

---

## Avatar

The avatar in the Hero section is a custom SVG illustration (not a photo) representing the owner's likeness — dark styled hair, short beard, South Asian skin tone, blue shirt. It is defined inline inside `Hero.tsx` as `<AvatarSVG />`.

To update the avatar, edit the SVG paths in the `AvatarSVG` function in `src/components/Hero.tsx`.

---

## Navigation Behavior

- **Active section detection**: Uses scroll position vs. `offsetTop` of each section.
- **Scroll targets**: `element.scrollIntoView({ behavior: 'smooth', block: 'start' })`.
- **Mobile**: Hamburger menu at `< md` breakpoint. Menu closes on link click or backdrop click.
- **Background**: Transparent at top, `bg-primary/95 + backdrop-blur` once scrolled > 20px.

---

## Page Loader

`<PageLoader>` renders on first load with:
1. FK monogram logo with glow animation
2. Bouncing dots
3. Fades out after 1200ms, unmounts after 1800ms

The main content fades in as the loader fades out.

---

## Adding a New Section

1. Add content data to `src/data/portfolio.ts`.
2. Create `src/components/NewSection.tsx`.
3. Wrap the container with `const containerRef = useScrollRevealAll()` and apply `ref={containerRef}`.
4. Add `.reveal` (or `.reveal-left` / `.reveal-right`) class to elements that should animate in.
5. Import and add `<NewSection />` in `src/App.tsx`.
6. Add nav link in `Navigation.tsx`'s `navLinks` array.

---

## Adding a New Project

In `src/data/portfolio.ts`, add an object to the `projects` array:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  company: 'Company',
  domain: 'Domain / Category',
  accentColor: '#00B4FF',       // hex color for accent
  tagColor: 'cobalt',           // 'cobalt' | 'mint'
  description: '...',
  role: 'Your role title',
  highlights: ['highlight 1', 'highlight 2'],
  techStack: [
    { name: 'Java', icon: 'devicon-java-plain', color: '#007396' },
  ],
}
```

---

## External Services Used

| Service | What for | Required for offline? |
|---------|----------|-----------------------|
| Google Fonts | Inter + JetBrains Mono fonts | No — falls back to system fonts |
| Devicon CDN | Tech stack icons | No — icons won't render, layout intact |
| LinkedIn | Profile link | No — just an anchor tag |

No backend, no database, no authentication. This is a fully static application.

---

## Known Constraints

- **No Angular**: The Bolt hosting environment uses a Vite dev server that is incompatible with Angular CLI's build system. React + Vite is used instead.
- **No database**: Content is entirely static, defined in `portfolio.ts`. No Supabase or any backend is used.
- **No contact form**: Contact section links directly to email and LinkedIn only.
- **CDN fonts / icons**: Require internet connection. First load may be slower on slow connections.
