# BBBC Molino Web Application - Complete File Structure & Architecture Guide

> **Developers:** Timothy Q. Villa & Ray Ann Sta. Cruz  
> **Framework:** React 18 + Vite 6 + TypeScript + Tailwind CSS + shadcn/ui  
> **Production Target:** Cloudflare Pages / Static Edge Distribution (`dist/`)

---

## 📂 Complete Project Structure

```
bbbcmolino/
├── 📁 docs/                             # Developer System Documentation
│   ├── FILE-STRUCTURE.md               # Complete architecture & file map (This file)
│   ├── DEVELOPMENT-GUIDE.md            # Guide for extending components, pages & themes
│   ├── SEO-AND-ROUTING.md              # SEO, schema, sitemaps, and Cloudflare redirects
│   └── ADMIN-PORTAL.md                 # Admin blog system, storage keys & security
│
├── 📁 public/                           # Static assets served as-is at domain root
│   ├── 📁 images/
│   │   ├── 📁 logo/
│   │   │   ├── church-logo.png         # Main official church seal (used in Nav & Footer)
│   │   │   └── church-logo_150.png     # High-res seal variant
│   │   ├── 📁 building/
│   │   │   └── church-building.jpg     # Church sanctuary exterior photo
│   │   ├── 📁 church-life/             # Photos for Sunday School, Prayer Meetings, etc.
│   │   │   ├── sunday-school.png
│   │   │   ├── prayer-meeting.png
│   │   │   ├── small-group.jpg
│   │   │   ├── music-ministry.jpg
│   │   │   └── tribute.png
│   │   └── 📁 events/                  # Photos for event timeline & highlights
│   │       ├── thanksgiving-2025.jpg
│   │       ├── christmas-2024.jpg
│   │       ├── youth-revival-2024.jpg
│   │       └── music-camp-2024.jpg
│   ├── 📁 videos/
│   │   ├── church-hero.mp4             # High-quality MP4 church hero background
│   │   └── church-hero.webm            # WebM church hero video fallback
│   ├── 📁 academy/
│   │   ├── 📁 images/logo/acad-logo.png# Berean Academy emblem
│   │   └── 📁 videos/academy-hero.*    # Academy hero video
│   ├── 📁 college/
│   │   ├── 📁 images/logo/college-logo.png # Bible College emblem
│   │   └── 📁 videos/college-hero.*    # Bible College hero video
│   ├── CNAME                           # Custom domain binding (bbbcmolino.org)
│   ├── _redirects                      # Cloudflare Pages 301 legacy redirects & SPA routing
│   ├── robots.txt                      # Search engine bot instructions & sitemap link
│   └── sitemap.xml                     # Full XML sitemap for Google & Bing indexing
│
├── 📁 src/                              # Application Source Code
│   ├── 📁 components/                  # Reusable UI & Layout Components
│   │   ├── 📁 ui/                      # shadcn/ui Headless Primitives (Tailwind styled)
│   │   │   ├── button.tsx              # Button with Gold, Navy, Academy, College variants
│   │   │   ├── card.tsx                # Card, CardHeader, CardTitle, CardContent, CardFooter
│   │   │   ├── badge.tsx               # Badges with Gold, Navy, Academy, College variants
│   │   │   ├── tabs.tsx                # Tab navigation (Radix UI Primitive)
│   │   │   ├── dialog.tsx              # Modals and popups (Radix UI Primitive)
│   │   │   └── accordion.tsx           # Collapsible accordions (Radix UI Primitive)
│   │   ├── TopBar.tsx                  # Manila, PH real-time clock, date & faith statement
│   │   ├── Navbar.tsx                  # Responsive sticky navbar with desktop dropdowns & mobile drawer
│   │   ├── Footer.tsx                  # Church footer with actual logo, hours & developer credits
│   │   └── WeatherWidget.tsx           # Real-time Bacoor, Cavite weather (Open-Meteo API)
│   │
│   ├── 📁 pages/                       # Application Route Pages
│   │   ├── Home.tsx                    # Landing page with video hero, beliefs, visit & weather
│   │   ├── Ministries.tsx              # Local church ministries & local/foreign missionaries
│   │   ├── ChurchLife.tsx              # Weekly schedule, Sunday School, prayer & photo spotlights
│   │   ├── TheWord.tsx                 # Sermon library, Bible reading calendar, search
│   │   ├── Highlights.tsx              # Upcoming events calendar & historical milestones timeline
│   │   ├── DaughterChurches.tsx        # Network of 7 church plants & mission extensions
│   │   ├── Academy.tsx                 # Berean Academy: K-12 tuition-free Christian school & inquiry
│   │   ├── College.tsx                 # Berean Bible College: Pastoral training & application modal
│   │   ├── ViewPosts.tsx               # Searchable public directory of articles & lesson materials
│   │   └── AdminBlog.tsx               # Authenticated admin panel to manage resources & credentials
│   │
│   ├── 📁 lib/
│   │   └── utils.ts                    # ClassName helper merging clsx and tailwind-merge
│   ├── App.tsx                         # Primary routing table with scroll restoration & 301 fallbacks
│   ├── main.tsx                        # DOM mount root
│   └── index.css                       # Tailwind CSS directives, HSL color tokens & custom classes
│
├── 📁 legacy/                           # Full backup archive of original static HTML/CSS/JS site
│
├── index.html                          # Root HTML entry point with JSON-LD Church Schema & Cavite SEO
├── package.json                        # Project metadata, dependencies and build scripts
├── package-lock.json                   # Deterministic lockfile for npm dependencies
├── vite.config.ts                      # Vite 6 config with React plugin and @/ alias mapping
├── tailwind.config.js                  # Tailwind design tokens, brand palettes & animations
├── postcss.config.js                   # PostCSS configuration for Tailwind CSS and Autoprefixer
├── tsconfig.json                       # TypeScript configuration
├── components.json                     # shadcn/ui configuration file
├── .gitignore                          # Exclusions for node_modules, dist, caches, logs
└── README.md                           # Main repository overview and quickstart
```

---

## 🧭 Routing Map & Page Hierarchy

All application routes are managed via `react-router-dom` in [src/App.tsx](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/src/App.tsx):

| Route Path | Page Component | Description |
| :--- | :--- | :--- |
| `/` | `Home.tsx` | Main Church Landing, Hero Video Background, Beliefs, Plan Your Visit, Weather |
| `/ministries` | `Ministries.tsx` | Local Church Ministries, Local Missionaries, Foreign Missionaries, Missions Support |
| `/church-life` | `ChurchLife.tsx` | Weekly Schedule, Sunday School, Prayer Meetings, Annual Events Highlights |
| `/the-word` | `TheWord.tsx` | Expository Sermons, Daily Journal, Bible Reading Calendar, Search Filter |
| `/highlights` | `Highlights.tsx` | Upcoming Church Events, Timeline of Historical Milestones & Ministries |
| `/daughter-churches` | `DaughterChurches.tsx` | Church Planting Network of 7 autonomous churches in PH, USA, and UK |
| `/academy` | `Academy.tsx` | Berean Academy (Blue Theme), Tuition-Free K-12 Education, Online Inquiry Modal |
| `/college` | `College.tsx` | Berean Bible College (Green Theme), Certificate, Diploma, B.Th., Admission Modal |
| `/view-posts` | `ViewPosts.tsx` | Public searchable resource repository with categories and file downloads |
| `/admin-blog` | `AdminBlog.tsx` | Password-protected admin dashboard for publishing preachings, lessons & notes |

### Legacy URL Compatibility (301 Auto-Redirects)
To prevent broken incoming links and protect existing search rankings:
- `/index.html` → `/`
- `/ministries.html` → `/ministries`
- `/church-life.html` → `/church-life`
- `/the-word.html` → `/the-word`
- `/highlights.html` → `/highlights`
- `/daughter-churches.html` → `/daughter-churches`
- `/academy/index.html` → `/academy`
- `/college/index.html` → `/college`
- `/admin-blog.html` → `/admin-blog`
- `/view-posts.html` → `/view-posts`

---

## 🎨 Design Tokens & Branding

The design system is defined in [tailwind.config.js](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/tailwind.config.js) and [src/index.css](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/src/index.css):

### 1. Church Brand (Gold & Navy)
- **Primary Navy:** `#0f2042` / `hsl(var(--primary))`
- **Secondary Navy Light:** `#1e3c72`
- **Darkest Navy:** `#0a1329`
- **Gold Accent:** `#f59e0b` / `#fbbf24` / `#ffd700`

### 2. Berean Academy (Royal Blue)
- **Deep Blue:** `#1e3a8a`
- **Bright Blue:** `#3b82f6`
- **Light Blue:** `#60a5fa`
- **Background Tint:** `#f0f9ff`

### 3. Bible College (Forest Green)
- **Dark Forest Green:** `#065f46`
- **Emerald Green:** `#10b981`
- **Mint Green:** `#34d399`
- **Background Tint:** `#f0fdf4`

---

## 📦 Developer Scripts

Run these commands from the repository root:

```bash
# Start Vite local development server with hot-reload
npm run dev

# Run TypeScript type check and compile production bundle to dist/
npm run build

# Preview the production build locally before deploying
npm run preview
```
