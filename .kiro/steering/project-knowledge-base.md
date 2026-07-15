---
inclusion: always
---

# ProVizient — Project Knowledge Base & Agent Guide

This file is the single source of truth for how this project is built.
Every AI agent, coding assistant, or new developer must read this before writing any code.

---

## 1. TECH STACK

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router, static export) | 16.2.9 |
| UI | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS v4 | ^4 |
| Animation | Framer Motion | ^12 |
| Icons | lucide-react (wrapped) | ^1.23 |
| Forms | react-hook-form + zod | ^7 / ^4 |
| UI Primitives | Radix UI | various |

**Build output:** `next build` → static HTML in `/out` (no server required)
**Dev server:** `npm run dev` (Turbopack)
**Preview static:** `npm start` = `npx serve out`

---

## 2. CRITICAL NEXT.JS RULES (v16 breaking changes)

- Output is **static export** (`output: "export"` in `next.config.ts`). No SSR, no API routes that run at runtime.
- `<Image>` requires `unoptimized: true` in config (already set). Always use `fill` + explicit `aspect-ratio` on the parent for reliable rendering.
- Use `assetPath()` from `@/lib/utils` for ALL image `src` values — never bare `/image.jpg`. This handles the `basePath` for GitHub Pages.
- No `useSearchParams()` without a Suspense boundary — it will break static export.
- `"use client"` is required on any component that uses hooks, framer-motion, or browser APIs.
- Server Components are the default. Keep them server-side unless interactivity is needed.

---

## 3. PROJECT STRUCTURE

```
src/
  app/
    (marketing)/          ← Route group — all public pages share layout.tsx here
      page.tsx            ← Home
      about/page.tsx
      services/page.tsx
      testimonials/page.tsx
      contact/page.tsx
      ... (one folder per route)
    layout.tsx            ← Root layout (fonts, body)
    globals.css           ← ALL global styles + design tokens
  components/
    home/                 ← Components only used on the home page
    about/                ← Components only used on the about page
    testimonials/         ← Components only used on the testimonials page
    marketing/            ← Shared across marketing pages (hero shell, section heading)
    layout/               ← Navbar, footer
    shared/               ← Used everywhere (SEO, JSON-LD, floating actions)
    forms/                ← Contact & consultation forms
    icons/                ← provizient-icons.tsx — ALL icons go here
  lib/
    constants.ts          ← Barrel re-export (import everything from here)
    data/
      site.ts             ← SITE_CONFIG, SOCIAL_LINKS, NAV_LINKS, ABOUT_VALUES
      stats.ts            ← STATS (home counters), COMPANY_STATS (all metrics)
      services.ts         ← DEV_SERVICES, TRAINING_PROGRAMS
      industries.ts       ← INDUSTRIES
    utils.ts              ← cn(), assetPath()
    seo.ts                ← generateSEO() helper
```

---

## 4. THE GOLDEN RULE — SINGLE SOURCE OF TRUTH

**NEVER hardcode content in a component.** Always use constants.

### Where to put what:

| Content type | File | Export name |
|---|---|---|
| Company metrics (founded, experts, countries, revenue, projects, satisfaction) | `src/lib/data/stats.ts` | `COMPANY_STATS` |
| Home page stat counters | `src/lib/data/stats.ts` | `STATS` |
| Contact info (email, phone, address) | `src/lib/data/site.ts` | `SITE_CONFIG` |
| Social media URLs (linkedin, twitter, youtube, github, whatsapp) | `src/lib/data/site.ts` | `SOCIAL_LINKS` |
| Navigation links | `src/lib/data/site.ts` | `NAV_LINKS` |
| Company values | `src/lib/data/site.ts` | `ABOUT_VALUES` |
| Services (consulting) | `src/lib/data/services.ts` | `DEV_SERVICES` |
| Training programs | `src/lib/data/services.ts` | `TRAINING_PROGRAMS` |
| Industries served | `src/lib/data/industries.ts` | `INDUSTRIES` |
| Case studies | `src/lib/data/stats.ts` | `CASE_STUDIES` |

### Always import from the barrel:
```typescript
// ✅ CORRECT
import { COMPANY_STATS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

// ❌ WRONG — never import directly from data/ files
import { COMPANY_STATS } from "@/lib/data/stats";
```

### COMPANY_STATS reference (update in stats.ts, propagates everywhere):
```typescript
export const COMPANY_STATS = {
  foundedYear: "2018",
  aiExperts: "200+",
  countries: "30+",
  valueCreated: "$2B+",
  projectsDone: "500+",
  clientSatisfaction: "98%",
  clientCount: "500+",
  reviewCount: "1,200+",
  facilitiesServed: "200+",
}
```

---

## 5. DESIGN SYSTEM

### Colors (CSS custom properties → Tailwind v4 theme)
```css
--background:  #0f172a   /* slate-900 — main background */
--foreground:  #f1f5f9   /* slate-100 — primary text (high contrast) */
--card:        #1e293b   /* slate-800 — card backgrounds */
--card-border: #334155   /* slate-700 — card borders */
--primary:     #3b82f6   /* blue-500 — buttons, links, accents */
--secondary:   #06b6d4   /* cyan-500 — gradients, secondary cta */
--accent:      #8b5cf6   /* violet-500 — highlights, badges */
--muted:       #94a3b8   /* slate-400 — secondary text */
--surface:     #1e293b   /* slate-800 — section backgrounds */
--surface-alt: #334155   /* slate-700 — alternate sections */
```

### Typography
- **Body font:** Inter (`font-sans` / `var(--font-inter)`)
- **Display font:** Space Grotesk (`font-display` / `var(--font-space-grotesk)`) — headings, cards, labels
- Heading scale: `text-[1.75rem]` mobile → `text-[3rem]` xl for H1
- Always use `font-display` for card labels, stat numbers, section headings

### Key utility classes
```css
.gradient-text      /* blue→teal gradient text fill */
.glass-card         /* white card with border + hover shadow lift */
.hex-grid-bg        /* hero section background pattern */
.perspective-deck   /* CSS perspective grid ceiling+floor effect */
.marquee-track-left / right  /* infinite scroll marquee */
.hero-visual-wrap / stage / scene / content  /* 3D hero card system */
.circuit-dot        /* pulsing SVG node animation */
.animate-float      /* gentle floating bob */
.animate-pulse-glow /* opacity pulse for glow elements */
```

### Gradient text usage:
```tsx
<span className="gradient-text">Highlighted Text</span>
```

---

## 6. HERO VISUAL CARD SYSTEM

Every page hero uses the same 3D card system. Use it for consistency.

### Structure (always this order):
```tsx
<HeroVisualShell glow="primary|secondary|accent">
  {/* 1. Top floating badge chips (2 chips, left+right) */}
  <div className="flex items-start justify-between gap-2">
    <motion.div animate={{ y: [0,-4,0] }} ...>
      <div className={`bg-gradient-to-br ${color} rounded-xl px-3 py-1.5 ...`}>
        <p className="text-[11px] font-bold text-white">{label}</p>
        <p className="text-[10px] text-white/75">{sub}</p>
      </div>
    </motion.div>
    {/* second chip */}
  </div>

  {/* 2. Main floating card */}
  <div style={{ transform: "translateZ(28px)" }} className="relative z-20 flex w-full flex-col gap-3">
    <motion.div animate={{ y: [0,-7,0] }} transition={{ duration: 5, repeat: Infinity }}>
      {/* mac-style titlebar */}
      <div className="flex items-center gap-2 bg-slate-950 px-4 py-2.5 border-b border-white/8">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-1 font-mono text-[10px] tracking-widest uppercase text-slate-400">
          Card Title
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          <span className="text-[10px] font-bold text-primary">STATUS</span>
        </div>
      </div>
      {/* card body */}
    </motion.div>
  </div>

  {/* 3. Bottom chips (2-col grid) */}
  <div className="mt-3 grid grid-cols-2 gap-3">
    <motion.div className="rounded-xl border border-card-border bg-white/95 p-2.5 shadow-lg">
      <div className={`inline-block rounded-full bg-gradient-to-br ${color} w-2 h-2 mb-1`} />
      <p className="font-display text-[10px] font-bold uppercase tracking-wider">{label}</p>
      <p className="text-[9px] text-muted">{sub}</p>
    </motion.div>
  </div>
</HeroVisualShell>
```

### Visibility rules:
- **Mobile (< 640px):** Visual column is `hidden`. Text content only.
- **Tablet (≥ 640px):** Visual shown — use `hidden sm:flex` on the wrapper.
- **Desktop (≥ 1024px):** Full 3D perspective.

### HeroVisualShell glow props:
- `glow="primary"` — blue glow (default, home)
- `glow="accent"` — indigo glow (about)
- `glow="secondary"` — teal glow (services)

---

## 7. ICONS

All icons live in `src/components/icons/provizient-icons.tsx`.
Wrapped from `lucide-react`. Two types:

**Badge icons** (colored, used in service/feature cards):
```tsx
export const SvcAIMLIcon = makeBadgeIcon(Brain, "blue");
// Usage: <SvcAIMLIcon size={24} />
```

**Plain icons** (utility — buttons, nav, inline text):
```tsx
export const ArrowRightIcon = plainIcon(ArrowRight);
// Usage: <ArrowRightIcon size={16} className="text-primary" />
```

**Never import from lucide-react directly.** Always use the wrapper.
To add a new icon: add it to `provizient-icons.tsx` and export it.

---

## 8. FORMS

All forms use `react-hook-form` + `zod` validation.
Form submissions hit Azure Static Web Apps API functions in `/api/`.

```typescript
// Pattern for every form
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});
type FormData = z.infer<typeof schema>;

const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
  resolver: zodResolver(schema),
});
```

---

## 9. SEO PATTERN

Every page uses `generateSEO()` from `@/lib/seo`:

```typescript
// In any page.tsx (Server Component)
export const metadata = generateSEO({
  title: "Page Title",
  description: "Page description.",
  path: "/page-path",
});
```

JSON-LD structured data is rendered via `<JsonLd />` in the root layout.
Social links in JSON-LD come from `SOCIAL_LINKS` in constants.

---

## 10. RESPONSIVE BREAKPOINTS

| Prefix | Min-width | Usage |
|---|---|---|
| (none) | 0px | Mobile-first base |
| `sm:` | 640px | Large phones / small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large monitors |

### Mobile rules:
- Hero visuals: always `hidden` on mobile, show from `sm:` up
- CTA buttons: `w-full` on mobile, `w-auto sm:w-auto` on sm+
- Grid: single column mobile → multi-column on md/lg
- Font sizes: always include mobile size first, then `sm:`, `lg:` variants
- Min touch target: `min-h-[44px]` on all interactive elements

---

## 11. ANIMATION PATTERNS

All animations use Framer Motion. Standard patterns:

```tsx
// Fade-in on mount (content columns)
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Scale-in on mount (visual columns)
initial={{ opacity: 0, scale: 0.96 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.65, delay: 0.1 }}

// Infinite float (cards, badges)
animate={{ y: [0, -7, 0] }}
transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}

// Infinite rotate (rings)
animate={{ rotate: 360 }}
transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
```

Always add `prefers-reduced-motion` support — handled globally in CSS for `.hero-visual-scene`.

---

## 12. ADDING A NEW PAGE — CHECKLIST

1. Create `src/app/(marketing)/your-page/page.tsx`
2. Add `export const metadata = generateSEO({...})` at the top
3. Create matching component(s) in `src/components/your-page/`
4. Add to `NAV_LINKS` in `src/lib/data/site.ts` if it needs navigation
5. Add to sitemap in `src/app/sitemap.ts`
6. Add robots rule in `src/app/robots.ts` if needed
7. If the page has a hero: use `MarketingPageHero` (generic) or build a custom hero following section 6 above
8. Hero visual: hidden on mobile (`hidden sm:flex`), visible from sm/lg

---

## 13. ADDING NEW CONTENT/STATS — CHECKLIST

1. **Company metric changed?** → Edit `COMPANY_STATS` in `src/lib/data/stats.ts`. Done.
2. **New service?** → Add to `DEV_SERVICES` in `src/lib/data/services.ts`
3. **New training program?** → Add to `TRAINING_PROGRAMS` in `src/lib/data/services.ts`
4. **New social platform?** → Add to `SOCIAL_LINKS` in `src/lib/data/site.ts`, then use it in footer/JSON-LD
5. **Contact info changed?** → Update `SITE_CONFIG` in `src/lib/data/site.ts`
6. **Hero badge text?** → Find in the specific hero component, move the text to constants if it'll change

---

## 14. COMMON MISTAKES TO AVOID

| Mistake | Correct approach |
|---|---|
| `<img src="/hero.jpg">` | `<Image src={assetPath("/hero.jpg")} fill ... />` with an explicit aspect-ratio parent |
| Hardcoding `"500+"` in a component | Use `COMPANY_STATS.projectsDone` |
| Hardcoding social URLs in footer/JSON-LD | Use `SOCIAL_LINKS.linkedin` etc. |
| Using `flex-1` inside `position: absolute` container | Give explicit height or use `aspectRatio` |
| Importing from lucide-react directly | Use the wrapper in `provizient-icons.tsx` |
| Importing from `@/lib/data/stats` | Import from `@/lib/constants` barrel |
| Adding `overflow-hidden` to hero section | Breaks 3D perspective cards — use `overflow-x-hidden` only |
| Using `aspect-ratio: 4/5` on visual stage | On tablet this makes it too tall — use `4/3` or `5/4` |
| `hidden lg:flex` on visual column | Shows too late — use `hidden sm:flex` for tablet visibility |

---

## 15. BUILD & DEPLOYMENT

```bash
# Development
npm run dev

# Production build
npm run build        # Creates /out static folder

# Preview built output
npm start            # npx serve out on localhost:3000

# Deploy
# Azure Static Web Apps: push to main → GitHub Actions auto-deploy
# GitHub Pages: push to main → github-pages.yml workflow
```

Build must produce 0 TypeScript errors and 0 ESLint errors before deploying.
Check with `get_diagnostics` tool after every file edit.
