# ProVizient — Technical Documentation & Setup Guide

**Company:** ProVizient  
**Tagline:** Transforming Businesses Through Intelligent AI Solutions.  
**Document Version:** 1.0  
**Project Location:** `D:\provizient`

---

## 1. Project Overview

ProVizient is a premium enterprise AI consulting website built as a lead-generation and consultancy advertisement platform. It is **not** an AI SaaS product and does not require AI microservices.

The application includes:

- A public marketing website (11 pages)
- Contact and consultation lead-capture forms
- An authenticated admin dashboard for content and inquiry management
- SEO, analytics, and email notification integrations

---

## 2. Technology Stack

### 2.1 Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x (App Router) | Full-stack React framework, routing, API routes, SSR/SSG |
| React | 19.x | UI library |
| TypeScript | 5.x | Type-safe development |

### 2.2 Styling & UI

| Technology | Purpose |
|------------|---------|
| Tailwind CSS v4 | Utility-first CSS framework |
| shadcn/ui | Reusable UI components (built on Radix UI) |
| Radix UI | Accessible headless UI primitives (Dialog, Toast, Label, etc.) |
| Framer Motion | Page and section animations |
| Lucide React | Icon library |
| class-variance-authority (CVA) | Component variant styling |
| clsx + tailwind-merge | Conditional class name utilities |

### 2.3 Backend & Database

| Technology | Version | Purpose |
|------------|---------|---------|
| PostgreSQL | 18+ (or cloud) | Relational database |
| Prisma ORM | 5.x | Database schema, migrations, client |
| NextAuth.js | v5 (beta) | Admin authentication |
| bcryptjs | 3.x | Password hashing |

### 2.4 Forms & Validation

| Technology | Purpose |
|------------|---------|
| React Hook Form | Form state management |
| Zod | Schema validation |
| @hookform/resolvers | Zod + React Hook Form integration |

### 2.5 Third-Party Services

| Service | Purpose | Required? |
|---------|---------|-----------|
| Resend | Transactional email (contact & consultation notifications) | Optional |
| Cloudinary | Image uploads (blog cover images) | Optional |
| Google Analytics | Website traffic tracking | Optional |

### 2.6 Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting |
| tsx | Run TypeScript seed scripts |
| PostCSS | CSS processing for Tailwind |

---

## 3. Prerequisites

Before starting, ensure the following are installed:

1. **Node.js 18 or higher** — Download from https://nodejs.org  
2. **npm** — Included with Node.js  
3. **PostgreSQL** — Download from https://www.postgresql.org/download/windows/  
   - Or use a free cloud database: Neon (https://neon.tech) or Supabase (https://supabase.com)  
4. **pgAdmin 4** — Usually installed with PostgreSQL (optional but recommended)  
5. **Git** — For version control (optional)

---

## 4. Project Structure

```
provizient/
├── prisma/
│   ├── schema.prisma      # Database models
│   └── seed.ts            # Initial admin user & sample data
├── src/
│   ├── app/
│   │   ├── (marketing)/   # Public website pages
│   │   ├── admin/         # Admin dashboard
│   │   └── api/           # REST API routes
│   ├── components/
│   │   ├── home/          # Homepage sections
│   │   ├── layout/        # Header, Footer
│   │   ├── forms/         # Contact & consultation forms
│   │   ├── shared/        # Shared components
│   │   └── ui/            # shadcn/ui components
│   └── lib/               # Auth, Prisma, email, SEO utilities
├── .env                   # Environment variables (not committed)
├── .env.example           # Environment template
└── package.json           # Dependencies and scripts
```

---

## 5. Installation Steps

### Step 1: Navigate to Project Folder

Open PowerShell or Command Prompt and run:

```
cd D:\provizient
```

### Step 2: Install Dependencies

```
npm install
```

This installs all packages listed in `package.json` and automatically runs `prisma generate`.

### Step 3: Create Environment File

Copy the example environment file:

```
copy .env.example .env
```

Then edit `.env` with a text editor (VS Code, Notepad++, etc.).

---

## 6. Environment Configuration (.env)

### 6.1 Database (REQUIRED)

```
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5433/provizient?schema=public"
```

| Part | Description |
|------|-------------|
| postgres | Default PostgreSQL username |
| YOUR_PASSWORD | Password set during PostgreSQL installation |
| localhost | Database runs on your local machine |
| 5433 | Port number (PostgreSQL 18 on Windows often uses 5433, not 5432) |
| provizient | Database name (must be created in pgAdmin) |

**How to find your port:** Open PowerShell and run:

```
netstat -ano | findstr "543"
```

Look for the port where PostgreSQL is LISTENING (e.g., 5433).

**How to create the database in pgAdmin:**

1. Open pgAdmin 4  
2. Connect to PostgreSQL server (enter your postgres password)  
3. Right-click **Databases** → **Create** → **Database**  
4. Name: `provizient` → Save  

### 6.2 Authentication (REQUIRED)

```
AUTH_SECRET="your-random-secret-string"
AUTH_URL="http://localhost:3000"
```

Generate a secure AUTH_SECRET:

```
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 6.3 Admin Credentials (REQUIRED for seed)

```
ADMIN_EMAIL="admin@provizient.com"
ADMIN_PASSWORD="Provizient@2026"
```

These credentials are used when running `npm run db:seed` to create the admin user.

### 6.4 Email — Resend (OPTIONAL)

```
RESEND_API_KEY="re_xxxxxxxxxxxx"
RESEND_FROM_EMAIL="ProVizient <onboarding@resend.dev>"
NOTIFICATION_EMAIL="your-email@gmail.com"
```

Sign up at https://resend.com to obtain an API key. Without this, forms still save to the database but emails are not sent.

### 6.5 Cloudinary (OPTIONAL)

```
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

Sign up at https://cloudinary.com for image upload support in the admin blog section.

### 6.6 Google Analytics (OPTIONAL)

```
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### 6.7 Site Configuration

```
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_NAME="ProVizient"
```

---

## 7. Database Setup

After configuring `DATABASE_URL` in `.env`, run:

```
npm run db:setup
```

This command does two things:

1. **prisma db push** — Creates all database tables (User, BlogPost, Testimonial, ContactInquiry, Consultation)  
2. **prisma/seed.ts** — Creates the admin user and sample blog posts/testimonials  

**Expected success output:**

```
Seed completed successfully
Admin login: admin@provizient.com / Provizient@2026
```

### Troubleshooting Database Errors

| Error | Solution |
|-------|----------|
| Can't reach database server at localhost:5432 | Change port to 5433 in DATABASE_URL |
| Authentication failed | Use the correct postgres password from pgAdmin |
| database "provizient" already exists | Normal — skip CREATE DATABASE, run db:setup only |
| database "provizient" does not exist | Create it in pgAdmin first |

---

## 8. Running the Application

### Development Mode

```
npm run dev
```

Open in browser: **http://localhost:3000**

### Production Build (optional test)

```
npm run build
npm run start
```

---

## 9. Website Pages

| Page | URL |
|------|-----|
| Home | http://localhost:3000/ |
| About Us | http://localhost:3000/about |
| Services | http://localhost:3000/services |
| AI Solutions | http://localhost:3000/ai-solutions |
| Industries | http://localhost:3000/industries |
| Case Studies | http://localhost:3000/case-studies |
| Blog | http://localhost:3000/blog |
| Contact Us | http://localhost:3000/contact |
| Book Consultation | http://localhost:3000/book-consultation |
| Privacy Policy | http://localhost:3000/privacy-policy |
| Terms & Conditions | http://localhost:3000/terms-and-conditions |

---

## 10. Admin Dashboard

### Login URL

**http://localhost:3000/admin/login**

### Default Credentials (after db:seed)

| Field | Value |
|-------|-------|
| Email | admin@provizient.com |
| Password | Value set in ADMIN_PASSWORD in .env |

### Admin Features

- **Dashboard** — Overview counts (blog posts, testimonials, inquiries, consultations)  
- **Blog** — Create, list, and delete blog posts  
- **Testimonials** — Add and manage client testimonials  
- **Contacts** — View contact form submissions, mark as resolved  
- **Consultations** — View consultation requests, confirm appointments  

---

## 11. Services Offered (Website Content)

1. AI Strategy Consulting  
2. Custom AI Applications  
3. Intelligent Automation  
4. AI Agent Solutions  
5. Generative AI Solutions  
6. AI Integration Services  

---

## 12. NPM Scripts Reference

| Command | Description |
|---------|-------------|
| npm run dev | Start development server |
| npm run build | Generate Prisma client and build for production |
| npm run start | Start production server |
| npm run lint | Run ESLint |
| npm run db:generate | Generate Prisma client |
| npm run db:push | Push schema to database |
| npm run db:seed | Seed admin user and sample data |
| npm run db:setup | Push schema + seed (full database setup) |

---

## 13. Features

- Dark theme with glassmorphism design  
- Framer Motion animations  
- Fully responsive (mobile, tablet, desktop)  
- SEO optimization (Metadata API, Open Graph, Twitter cards)  
- Automatic sitemap at `/sitemap.xml`  
- Robots.txt at `/robots.txt`  
- JSON-LD structured data for search engines  
- Google Analytics integration  
- Contact and consultation forms with validation  
- Email notifications via Resend  
- Loading skeletons and error boundaries  
- WCAG accessibility support  

---

## 14. Deployment (Production)

### Recommended: Vercel + Cloud PostgreSQL

1. Push project to GitHub  
2. Import project at https://vercel.com  
3. Add all environment variables from `.env`  
4. Use Neon or Supabase for production `DATABASE_URL`  
5. Deploy  

### Post-Deploy Database Setup

```
npx prisma db push
npx tsx prisma/seed.ts
```

### Production Environment Changes

- Set `AUTH_URL` to your production domain (e.g., https://provizient.com)  
- Set `NEXT_PUBLIC_SITE_URL` to your production domain  
- Generate a new `AUTH_SECRET` for production  
- Configure Resend with a verified domain  

---

## 15. Quick Start Checklist

- [ ] Node.js 18+ installed  
- [ ] PostgreSQL installed and running  
- [ ] Database `provizient` created in pgAdmin  
- [ ] `cd D:\provizient`  
- [ ] `npm install`  
- [ ] `.env` file configured with correct DATABASE_URL (port 5433 if using PostgreSQL 18)  
- [ ] `npm run db:setup` completed successfully  
- [ ] `npm run dev` running  
- [ ] Website opens at http://localhost:3000  
- [ ] Admin login works at http://localhost:3000/admin/login  

---

## 16. Support & Contact

**Project:** ProVizient Enterprise AI Consulting Website  
**Default Admin Email:** admin@provizient.com  
**Site Email:** contact@provizient.com  

---

*Document generated for ProVizient project setup and technical reference.*
