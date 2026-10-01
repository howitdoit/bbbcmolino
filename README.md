# Berean Bible Baptist Church Molino - Official Website

Welcome to the official web application repository for **Berean Bible Baptist Church (BBBC) Molino**, located in Bacoor, Cavite, Philippines. 

This platform has been modernized into a fast, responsive, and lightweight web application built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**. It unites the church ministry, **Berean Academy**, and **Berean Bible College** into an integrated digital experience.

---

## 👨‍💻 Developers & Credits

Dedicatedly designed and developed for the glory of God by:
- **Timothy Q. Villa**
- **Ray Ann Sta. Cruz**

---

## 📚 Developer Documentation Hub

Comprehensive technical documentation is compiled in the [`docs/`](docs/) directory for all developers and future maintainers:

- 📑 [**docs/FILE-STRUCTURE.md**](docs/FILE-STRUCTURE.md) - Complete file hierarchy, component tree & routing map.
- 🛠️ [**docs/DEVELOPMENT-GUIDE.md**](docs/DEVELOPMENT-GUIDE.md) - Guide for local setup, creating routes, adding shadcn components & themes.
- 🔍 [**docs/SEO-AND-ROUTING.md**](docs/SEO-AND-ROUTING.md) - Schema.org JSON-LD, Cavite geotags, sitemap & Cloudflare redirects.
- 🔐 [**docs/ADMIN-PORTAL.md**](docs/ADMIN-PORTAL.md) - Admin portal features, storage keys, password management & publishing workflow.

---

## 🌐 Live Domain & Hosting Architecture

- **Main Domain:** [www.bbbcmolino.org](https://www.bbbcmolino.org)
- **DNS & Edge Network:** **Cloudflare** (Global CDN caching, DDoS protection & automated SSL)
- **Deployment Platform:** **Cloudflare Pages** / **GitHub Pages**
- **Build Output:** Static production bundle compiled into `dist/`

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component-based, modular reactive architecture |
| **Build Tool** | [Vite 6](https://vitejs.dev/) | Lightning-fast HMR and optimized static bundler |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safety, cleaner code maintenance & refactoring |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first responsive design system |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + Radix UI | Lightweight, accessible, unbloated headless components |
| **Icons** | [Lucide React](https://lucide.dev/) | Modern, clean vector icon set |
| **Routing** | [React Router v6](https://reactrouter.com/) | SPA client-side routing with clean URLs and redirect handlers |
| **Weather API** | [Open-Meteo](https://open-meteo.com/) | Free, real-time live weather for Bacoor, Cavite |

---

## 📁 Repository Structure

```
bbbcmolino/
├── public/                       # Static public assets
│   ├── images/                   # Church logos, building, galleries
│   ├── videos/                   # Church, Academy & College hero videos
│   ├── academy/                  # Academy logos and media
│   ├── college/                  # College logos and media
│   ├── CNAME                     # bbbcmolino.org domain configuration
│   ├── _redirects                # Cloudflare Pages 301 redirects & SPA fallback
│   ├── robots.txt                # Search engine crawler instructions
│   └── sitemap.xml               # Full XML sitemap for SEO
│
├── src/                          # Application source code
│   ├── components/               # Shared UI & Layout components
│   │   ├── ui/                   # shadcn primitives (Button, Card, Badge, Dialog, Tabs, etc.)
│   │   ├── TopBar.tsx            # Real-time Manila time, date & faith statement
│   │   ├── Navbar.tsx            # Sticky glassmorphic navbar with mobile drawer
│   │   ├── Footer.tsx            # Church info, developer credits & links
│   │   └── WeatherWidget.tsx     # Live Bacoor, Cavite weather widget
│   │
│   ├── pages/                    # Application routes/pages
│   │   ├── Home.tsx              # Homepage: Hero video, beliefs, visit info, live weather
│   │   ├── Ministries.tsx        # Local church ministries & missions directory
│   │   ├── ChurchLife.tsx        # Weekly schedules, Sunday School, prayer & photo spotlights
│   │   ├── TheWord.tsx           # Sermons library, Bible reading calendar, study notes
│   │   ├── Highlights.tsx        # Upcoming events calendar & ministry milestones
│   │   ├── DaughterChurches.tsx  # Network of 7 church plants & mission extensions
│   │   ├── Academy.tsx           # Berean Academy: K-12 tuition-free Christian school
│   │   ├── College.tsx           # Berean Bible College: Pastoral & theological training
│   │   ├── ViewPosts.tsx         # Searchable directory of articles & lesson materials
│   │   └── AdminBlog.tsx         # Authenticated admin panel to manage resources
│   │
│   ├── lib/
│   │   └── utils.ts              # ClassName utility merger (clsx + twMerge)
│   ├── App.tsx                   # Master router with scroll restoration & legacy redirects
│   ├── main.tsx                  # React DOM root entry
│   └── index.css                 # Tailwind CSS styles & HSL theme variables
│
├── legacy/                       # Original HTML/CSS/JS files preserved for archival
├── index.html                    # Root HTML entry point with rich Schema.org JSON-LD SEO
├── vite.config.ts                # Vite configuration with @ path aliases
├── tailwind.config.js            # Custom color palette (Gold, Navy, Academy Blue, College Green)
├── tsconfig.json                 # TypeScript compiler configuration
└── package.json                  # Dependencies & scripts
```

---

## 🎨 Theme Palette & Design System

The application features dedicated brand palettes for each ministry arm:

- **Church Theme:**
  - Gold Accent: `#f59e0b` / `#fbbf24` / `#ffd700`
  - Navy Primary: `#0f2042` / `#1e3c72`
  - Dark Slate: `#0a1329`
- **Berean Academy Theme:**
  - Deep Blue: `#1e3a8a` / `#2563eb`
  - Sky Tint: `#f0f9ff`
- **Bible College Theme:**
  - Forest Green: `#065f46` / `#10b981`
  - Mint Tint: `#f0fdf4`

---

## 🔍 SEO & Discoverability

- **Structured Data (JSON-LD):** Implements Google-recognized `Church` and `PlaceOfWorship` schemas detailing geolocation (Bacoor, Cavite), service schedules, contact emails, and educational departments.
- **Geographic Metatags:** Configured with `PH-CAV` tags and exact GPS coordinates for Bacoor local search dominance.
- **Open Graph & Twitter Cards:** Full rich previews when sharing links on Facebook, Messenger, Viber, and WhatsApp.
- **Legacy URL Preserved:** Existing links (`/ministries.html`, `/church-life.html`, etc.) are seamlessly forwarded to modern clean URLs via `public/_redirects` (HTTP 301) and in-app route fallbacks.

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation
```bash
# Clone the repository
git clone https://github.com/howitdoit/bbbcmolino.git

# Navigate into project directory
cd bbbcmolino

# Install dependencies
npm install
```

### Running Development Server
```bash
npm run dev
```
The site will start locally at `http://localhost:5173/` (or `http://localhost:3000/`).

### Building for Production
```bash
npm run build
```
The compiled, tree-shaken static assets will be generated in `dist/`.

---

## ☁️ Cloudflare Pages Deployment Guide

When deploying to **Cloudflare Pages**:

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select the `howitdoit/bbbcmolino` repository.
4. Set the Build Configuration:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Cloudflare will automatically build, deploy, and assign a global CDN URL (`*.pages.dev`) with automated preview builds for every pull request.
7. Under **Custom Domains**, connect `bbbcmolino.org` and `www.bbbcmolino.org`.

---

## 📜 License & Copyright

© 2026 **Berean Bible Baptist Church Molino**. All rights reserved.  
*Building lives. Strengthening faith. Serving community.*