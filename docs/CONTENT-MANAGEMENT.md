# Content Management — Single Source of Truth

All reusable company data and content is centralized in `src/lib/data/` and re-exported through `src/lib/constants.ts`.

## Where to Update Content

### Company Stats & Metrics
**File:** `src/lib/data/stats.ts` → `COMPANY_STATS` object

Update these values once and they propagate everywhere automatically:

```typescript
export const COMPANY_STATS = {
  foundedYear: "2018",            // EST. year in hero cards
  aiExperts: "200+",              // AI Experts count
  countries: "30+",               // Countries served
  valueCreated: "$2B+",           // Total value created
  projectsDone: "500+",           // Projects completed
  clientSatisfaction: "98%",      // Client satisfaction rate
  clientCount: "500+",            // Total client count
  reviewCount: "1,200+",          // Total reviews count
  facilitiesServed: "200+",       // Healthcare facilities served
}
```

**Used in:**
- About hero visual card (company profile)
- About enterprise visual (old version)
- Testimonials hero visual (reviews card)
- Case study descriptions

---

### Site Config (Contact Info, URLs, Metadata)
**File:** `src/lib/data/site.ts` → `SITE_CONFIG` object

```typescript
export const SITE_CONFIG = {
  name: "Provizient Solutions",
  tagline: "Empowering Innovation Through Artificial Intelligence",
  subtitle: "AI • ML • Generative AI • Agentic AI",
  description: "...",
  url: "https://www.provizient.com",
  email: "info@provizient.com",
  phone: "+1 (214) 907-0925",
  phoneTel: "+12149070925",      // Without spaces/dashes for tel: links
  address: "Dallas–Fort Worth, Texas, USA",
}
```

**Used in:**
- Footer contact details
- Contact page
- WhatsApp floating action
- SEO metadata
- JSON-LD structured data

---

### Social Media Links
**File:** `src/lib/data/site.ts` → `SOCIAL_LINKS` object

```typescript
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/provizient",
  twitter: "https://twitter.com/provizient",
  youtube: "https://youtube.com/@provizient",
  github: "https://github.com/logeshOfficial/provizient",
  whatsapp: "https://wa.me/12149070925?text=...",
}
```

**Used in:**
- Footer social icons
- JSON-LD `sameAs` array
- WhatsApp floating action button
- Share links

---

### Home Page Stats (Hero Section)
**File:** `src/lib/data/stats.ts` → `STATS` array

```typescript
export const STATS = [
  { value: 20, suffix: "+", label: "AI Technologies Mastered" },
  { value: 9, suffix: "+", label: "Specialized Training Tracks" },
  { value: 10, suffix: "+", label: "Industries We Serve" },
  { value: 100, suffix: "%", label: "Post-Training Support" },
]
```

---

### Navigation & Other Constants
- **Navigation links:** `src/lib/data/site.ts` → `NAV_LINKS`
- **Services:** `src/lib/data/services.ts` → `DEV_SERVICES`, `TRAINING_PROGRAMS`
- **Industries:** `src/lib/data/industries.ts` → `INDUSTRIES`
- **About values:** `src/lib/data/site.ts` → `ABOUT_VALUES`
- **Platform partners:** `src/lib/data/site.ts` → `PLATFORM_PARTNERS`

---

## How to Import

All constants are re-exported through the barrel file:

```typescript
// ✅ Good — use the barrel
import { COMPANY_STATS, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";

// ❌ Bad — don't import directly from data/
import { COMPANY_STATS } from "@/lib/data/stats";
```

---

## Examples

### Update Projects Done from "500+" to "1,000+"

1. Open `src/lib/data/stats.ts`
2. Change `projectsDone: "500+"` to `projectsDone: "1,000+"`
3. Save — all hero cards and visuals update automatically

### Update WhatsApp Number

1. Open `src/lib/data/site.ts`
2. Update `phoneTel` in `SITE_CONFIG` to the new number (digits only, no spaces)
3. The `SOCIAL_LINKS.whatsapp` URL is auto-generated from it
4. Save — floating WhatsApp button updates everywhere

### Add a New Social Platform

1. Open `src/lib/data/site.ts`
2. Add `instagram: "https://instagram.com/provizient"` to `SOCIAL_LINKS`
3. Update footer (`src/components/layout/footer.tsx`) to render the new link
4. Update JSON-LD (`src/components/shared/json-ld.tsx`) if needed

---

## Files Updated in This Refactor

**Data sources (single source of truth):**
- `src/lib/data/stats.ts` — added `COMPANY_STATS`
- `src/lib/data/site.ts` — added `SOCIAL_LINKS`, fixed `phoneTel`

**Components updated to use centralized data:**
- `src/components/about/about-enterprise-visual.tsx`
- `src/components/about/about-hero-visual.tsx`
- `src/components/testimonials/testimonials-hero-visual.tsx`
- `src/components/shared/floating-actions.tsx`
- `src/components/shared/json-ld.tsx`
- `src/components/layout/footer.tsx`

All hardcoded values have been eliminated — everything now pulls from the data files.
