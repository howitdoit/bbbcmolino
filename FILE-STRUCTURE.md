# BBBC Molino Web Application - Complete File Structure Guide

> **Developers:** Timothy Q. Villa & Ray Ann Sta. Cruz  
> **Framework:** React 18 + Vite 6 + TypeScript + Tailwind CSS + shadcn/ui  
> **Documentation Hub:** See the [docs/](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/docs/) folder for complete system guides.

---

## 📂 Quick File Map

```
bbbcmolino/
├── 📁 docs/                             # System Documentation Hub
│   ├── FILE-STRUCTURE.md               # Detailed architecture, routing & component breakdown
│   ├── DEVELOPMENT-GUIDE.md            # Developer workflows, components & themes
│   ├── SEO-AND-ROUTING.md              # SEO, schema, sitemaps, and Cloudflare redirects
│   └── ADMIN-PORTAL.md                 # Admin blog system, storage keys & security
│
├── 📁 public/                           # Static assets served at domain root
│   ├── 📁 images/                      # Church logo, building exterior, galleries
│   ├── 📁 videos/                      # Church, Academy & College video backgrounds
│   ├── 📁 academy/                     # Berean Academy logo and assets
│   ├── 📁 college/                     # Bible College logo and assets
│   ├── CNAME                           # bbbcmolino.org domain configuration
│   ├── _redirects                      # Cloudflare Pages 301 legacy redirects & SPA routing
│   ├── robots.txt                      # Search engine bot instructions & sitemap link
│   └── sitemap.xml                     # Full XML sitemap for Google & Bing indexing
│
├── 📁 src/                              # Modern React Application Source
│   ├── 📁 components/                  # Reusable UI & Layout Components
│   │   ├── 📁 ui/                      # shadcn primitives (Button, Card, Badge, Dialog, Tabs)
│   │   ├── TopBar.tsx                  # Manila, PH real-time clock & faith statement
│   │   ├── Navbar.tsx                  # Glassmorphic header with dropdowns & mobile drawer
│   │   ├── Footer.tsx                  # Church seal logo, service times & developer credits
│   │   └── WeatherWidget.tsx           # Real-time Bacoor, Cavite weather (Open-Meteo)
│   │
│   ├── 📁 pages/                       # Application Routes
│   │   ├── Home.tsx                    # Video hero, beliefs, visit guide & weather
│   │   ├── Ministries.tsx              # Local church ministries & missions directory
│   │   ├── ChurchLife.tsx              # Weekly schedule, Sunday School, prayer meetings
│   │   ├── TheWord.tsx                 # Expository sermons & reading materials
│   │   ├── Highlights.tsx              # Upcoming events & historical milestones
│   │   ├── DaughterChurches.tsx        # Network of 7 church plants & missions
│   │   ├── Academy.tsx                 # Berean Academy: K-12 Christian school & inquiry
│   │   ├── College.tsx                 # Berean Bible College: Pastoral training & application
│   │   ├── ViewPosts.tsx               # Public searchable resource repository
│   │   └── AdminBlog.tsx               # Password-protected admin dashboard
│   │
│   ├── 📁 lib/utils.ts                 # ClassName merger (clsx + twMerge)
│   ├── App.tsx                         # Router with scroll restoration & 301 fallbacks
│   ├── main.tsx                        # DOM mount root
│   └── index.css                       # Tailwind CSS directives & brand tokens
│
├── 📁 legacy/                           # Archival backup of original static HTML files
├── index.html                          # Root HTML entry point with JSON-LD Church Schema
├── vite.config.ts                      # Vite 6 config with @/ path alias
├── tailwind.config.js                  # Tailwind configuration with brand colors
└── README.md                           # Main repository overview and quickstart
```

For the comprehensive guide, please refer to:
- [docs/FILE-STRUCTURE.md](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/docs/FILE-STRUCTURE.md)
- [docs/DEVELOPMENT-GUIDE.md](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/docs/DEVELOPMENT-GUIDE.md)
- [docs/SEO-AND-ROUTING.md](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/docs/SEO-AND-ROUTING.md)
- [docs/ADMIN-PORTAL.md](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/docs/ADMIN-PORTAL.md)
