# BBBC Molino Web Application - Developer Guide

> **Developers:** Timothy Q. Villa & Ray Ann Sta. Cruz  
> **Tech Stack:** React 18, Vite 6, TypeScript, Tailwind CSS, shadcn/ui, Lucide Icons

This guide provides instructions for developers maintaining, extending, and deploying the BBBC Molino website.

---

## 🚀 1. Local Development Setup

### Prerequisites
- Node.js 18 or later
- npm (comes with Node.js)
- Git

### Commands
```bash
# Clone the repository
git clone https://github.com/howitdoit/bbbcmolino.git
cd bbbcmolino

# Install all dependencies
npm install

# Start the development server with HMR
npm run dev

# Check TypeScript & build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 🎨 2. Design System & Theme Colors

The styling system is built with **Tailwind CSS** with pre-configured color palettes for each ministry arm. You can use these classes anywhere in components:

### Church Palette (Gold & Navy)
- `bg-[#0f2042]` / `text-[#0f2042]` (Church Primary Navy)
- `bg-[#0a1329]` (Deepest Midnight Navy)
- `bg-amber-500` / `text-amber-500` (Church Gold Accent)
- `text-gold-gradient` (Linear gold gradient text)
- `bg-gold-gradient` (Gold gradient background)

### Berean Academy (Blue Theme)
- `bg-[#0c2340]` (Academy Navy)
- `bg-blue-600` / `text-blue-600` (Academy Blue)
- `bg-sky-50/40` (Light Academy Background)
- Button variant: `<Button variant="academy">`
- Badge variant: `<Badge variant="academy">`

### Bible College (Forest Green Theme)
- `bg-[#063326]` (College Dark Green)
- `bg-emerald-600` / `text-emerald-600` (College Green)
- `bg-emerald-50/30` (Light College Background)
- Button variant: `<Button variant="college">`
- Badge variant: `<Badge variant="college">`

---

## 🧩 3. Using shadcn/ui Components

All shadcn/ui components reside in `src/components/ui/`. They are lightweight, headless, and fully customizable.

### Button Component
```tsx
import { Button } from "@/components/ui/button";

// Standard variants: default, destructive, outline, secondary, ghost, link
// Custom ministry variants: gold, navy, academy, college
<Button variant="gold" size="lg">Plan Your Visit</Button>
<Button variant="academy">Apply to Academy</Button>
<Button variant="college">Bible College Programs</Button>
```

### Card Component
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card className="hover:shadow-md transition-shadow border-t-4 border-t-amber-500">
  <CardHeader>
    <CardTitle>Sunday Morning Worship</CardTitle>
    <CardDescription>7:45 AM - Main Sanctuary</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Expository preaching from the King James Bible.</p>
  </CardContent>
</Card>
```

### Dialog / Modal Component
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="gold">Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Inquiry Form</DialogTitle>
      <DialogDescription>Submit your question here.</DialogDescription>
    </DialogHeader>
    {/* Form elements */}
  </DialogContent>
</Dialog>
```

---

## 📄 4. How to Add a New Page / Route

1. **Create the Page Component:**
   Add a new file in `src/pages/MyNewPage.tsx`:
   ```tsx
   import React from "react";
   import { Badge } from "@/components/ui/badge";

   export const MyNewPage: React.FC = () => {
     return (
       <div className="max-w-7xl mx-auto px-4 py-16">
         <Badge variant="gold">New Section</Badge>
         <h1 className="text-3xl font-bold mt-2">New Page Title</h1>
       </div>
     );
   };
   ```

2. **Register the Route in `src/App.tsx`:**
   ```tsx
   import { MyNewPage } from "@/pages/MyNewPage";

   // Inside <Routes>:
   <Route path="/new-page" element={<MyNewPage />} />
   ```

3. **Add Navigation Link in `src/components/Navbar.tsx` and `src/components/Footer.tsx`:**
   ```tsx
   <Link to="/new-page" className="hover:text-amber-400">New Page</Link>
   ```

4. **Update `public/sitemap.xml`:**
   Add your new route so search engines index it immediately:
   ```xml
   <url>
     <loc>https://www.bbbcmolino.org/new-page</loc>
     <changefreq>monthly</changefreq>
     <priority>0.8</priority>
   </url>
   ```

---

## 🖼️ 5. Managing Static Assets (Images & Videos)

- All images and videos are stored in `public/`.
- In your React code, always reference assets starting with a slash:
  - `src="/images/logo/church-logo.png"`
  - `src="/videos/church-hero.mp4"`
  - `src="/academy/images/logo/acad-logo.png"`
- When Vite builds the project (`npm run build`), everything in `public/` is automatically copied directly into `dist/`.
