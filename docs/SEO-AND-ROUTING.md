# BBBC Molino Web Application - SEO & Routing Guide

> **Developers:** Timothy Q. Villa & Ray Ann Sta. Cruz  
> **Domain:** https://www.bbbcmolino.org/

This guide documents the search engine optimization (SEO), metadata standards, and routing configurations implemented on the website.

---

## 🔍 1. Structured Data (JSON-LD)

To ensure high visibility in Google Search, Google Maps, and local Cavite search results, a comprehensive **Schema.org Church & PlaceOfWorship** structured data script is embedded in [index.html](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/index.html):

```json
{
  "@context": "https://schema.org",
  "@type": "Church",
  "name": "Berean Bible Baptist Church Molino",
  "alternateName": ["BBBC Molino", "Berean Baptist Molino"],
  "url": "https://www.bbbcmolino.org/",
  "logo": "https://www.bbbcmolino.org/images/logo/church-logo.png",
  "image": "https://www.bbbcmolino.org/images/building/church-building.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Magdiwang Road, Molino 2",
    "addressLocality": "Bacoor",
    "addressRegion": "Cavite",
    "postalCode": "4102",
    "addressCountry": "PH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 14.405474,
    "longitude": 120.982007
  }
}
```

### Benefits:
- Triggers Google Knowledge Panels with exact service times, church address, and map directions.
- Distinguishes *Berean Academy* and *Berean Bible College* as official departments of the church.

---

## 🗺️ 2. Sitemap & Robots Configuration

### Sitemap (`public/sitemap.xml`)
The sitemap notifies search engines of every indexable route:
- `https://www.bbbcmolino.org/` (priority: 1.0)
- `https://www.bbbcmolino.org/ministries` (priority: 0.9)
- `https://www.bbbcmolino.org/church-life` (priority: 0.9)
- `https://www.bbbcmolino.org/the-word` (priority: 0.9)
- `https://www.bbbcmolino.org/academy` (priority: 0.9)
- `https://www.bbbcmolino.org/college` (priority: 0.9)
- `https://www.bbbcmolino.org/highlights` (priority: 0.8)
- `https://www.bbbcmolino.org/daughter-churches` (priority: 0.8)
- `https://www.bbbcmolino.org/view-posts` (priority: 0.8)

### Robots (`public/robots.txt`)
- Allows public indexing of all content pages.
- Excludes `/admin-blog` from search engine crawlers for security and privacy.
- Declares the official sitemap URL: `Sitemap: https://www.bbbcmolino.org/sitemap.xml`.

---

## 🔄 3. Cloudflare Pages Routing & 301 Redirects

Cloudflare Pages automatically processes the [public/_redirects](file:///c:/Users/MIS/Desktop/repo/bbbcmolino/public/_redirects) file.

### Legacy URL Handling (HTTP 301 Permanent Redirect)
When existing visitors or search engines request older static pages, Cloudflare instantly redirects them to the clean modern URL:
```
/index.html            /                    301
/ministries.html       /ministries          301
/church-life.html      /church-life         301
/the-word.html         /the-word            301
/highlights.html       /highlights          301
/daughter-churches.html /daughter-churches   301
/academy/index.html    /academy             301
/college/index.html    /college             301
/admin-blog.html       /admin-blog          301
/view-posts.html       /view-posts          301
```

### SPA Fallback (Single Page Application)
```
/*                     /index.html          200
```
This ensures that when a user directly enters or refreshes a URL like `https://www.bbbcmolino.org/ministries`, Cloudflare serves `index.html` with HTTP 200, allowing `react-router-dom` to render the correct view without a 404 error.
