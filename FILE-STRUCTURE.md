# BBBC Molino Website - File Structure Guide

## 📂 Complete File Organization

```
bbbcmolino-website/
│
├── 📄 HTML PAGES (Root Directory)
│   ├── index.html              ✅ Created - Homepage
│   ├── beliefs.html            ✅ Created - What We Believe
│   ├── ministries.html         ✅ Created - Ministries
│   ├── academy.html            ⏳ To Create - Berean Academy
│   ├── college.html            ⏳ To Create - Bible College
│   ├── church-life.html        ⏳ To Create - Church Life
│   ├── the-word.html           ⏳ To Create - The Word
│   └── highlights.html         ⏳ To Create - Highlights
│
├── 📁 css/
│   ├── base.css                ✅ Created - Shared styles (header, footer, cards)
│   ├── homepage.css            ✅ Created - Homepage hero, map, weather
│   └── pages.css               ✅ Created - Internal page layouts
│
├── 📁 js/
│   ├── base.js                 ✅ Created - Navigation, time, protection
│   └── homepage.js             ✅ Created - Weather widget
│
├── 📁 images/
│   ├── logo/
│   │   └── church-logo.png     📸 Your logo here
│   ├── building/
│   │   └── church-building.jpg 📸 Church photos
│   ├── ministries/
│   │   └── *.jpg              📸 Ministry photos
│   ├── events/
│   │   └── *.jpg              📸 Event photos
│   └── gallery/
│       └── *.jpg              📸 Gallery photos
│
├── 📁 videos/
│   ├── church-hero.mp4        🎥 Main hero video
│   └── church-hero.webm       🎥 Fallback format
│
├── 📄 README.md               ✅ Created - Setup instructions
└── 📄 FILE-STRUCTURE.md       ✅ This file

```

## 🎯 What's Complete

### ✅ Fully Implemented
1. **Homepage** (`index.html`)
   - Hero with video background
   - Plan Your Visit with map & weather
   - Connect With Us section

2. **Base Components** (`css/base.css`, `js/base.js`)
   - Top bar with live time/date
   - Header/Navigation (reusable)
   - Footer (reusable)
   - Card designs
   - Mobile menu
   - Image/video protection

3. **Internal Pages Started**
   - `beliefs.html` - Complete with 6 belief cards
   - `ministries.html` - Complete with ministry listings

4. **Styling System**
   - `base.css` - ALL shared styles
   - `homepage.css` - Homepage-specific
   - `pages.css` - Internal page layouts

## 📋 Pages To Create

You need to create these 5 pages following the same pattern:

### 1. academy.html (Berean Academy)
**Suggested Content:**
- Page header: "Berean Academy"
- Cards for: Preschool, Elementary, Junior High, Senior High
- Info boxes: Curriculum, Admission, Tuition
- Content sections with images of students/facilities

### 2. college.html (Bible College)
**Suggested Content:**
- Page header: "Bible College"
- Cards for: Programs, Courses, Faculty
- Info boxes: Admission Requirements, Tuition Fees
- Content sections about theological training

### 3. church-life.html (Church Life)
**Suggested Content:**
- Page header: "Church Life"
- Cards for: Sunday Services, Bible Study, Fellowship
- Schedule table for weekly activities
- Photos of church gatherings

### 4. the-word.html (Sermons & Resources)
**Suggested Content:**
- Page header: "The Word"
- Sermon cards with: Title, Date, Speaker, Description
- Download/Listen buttons
- Bible study resources section

### 5. highlights.html (Events & News)
**Suggested Content:**
- Page header: "Highlights"
- Timeline layout for past events
- Photo gallery grid
- Upcoming events calendar

## 🔧 How to Create New Pages

### Quick Template (Copy this for each new page):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAGE TITLE - BBBC Molino</title>
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/pages.css">
</head>
<body>
    <!-- Copy Top Bar from beliefs.html -->
    <!-- Copy Header from beliefs.html (update active class) -->
    
    <!-- Page Header -->
    <div class="page-header">
        <h1>Your Page Title</h1>
        <p>Your page description</p>
    </div>

    <!-- Content Section -->
    <section class="section-padding">
        <!-- Your content here using .cards, .content-section, etc. -->
    </section>

    <!-- Copy Footer from beliefs.html -->
    
    <script src="js/base.js"></script>
</body>
</html>
```

### Steps:
1. Copy `beliefs.html` → rename to your new page
2. Update `<title>` tag
3. Update page header `<h1>` and `<p>`
4. Update the `active` class in navigation
5. Replace content section with your content
6. Use pre-styled components from `pages.css`:
   - `.cards` - Card grid
   - `.content-section` - Text + Image layout
   - `.info-box` - Information boxes
   - `.sermon-card` - Sermon listings
   - `.timeline` - Event timeline
   - `.gallery-grid` - Photo gallery

## 🎨 Available Design Components

### From `base.css`:
- `.cards` - Responsive card grid
- `.card` - Individual card with hover effect
- `.card-icon` - Large emoji/icon
- `.contact-link` - Styled links

### From `pages.css`:
- `.content-section` - 2-column layout (text + image)
- `.content-section.reverse` - Image on left
- `.info-box` - Information cards with left border
- `.sermon-card` - Sermon/message cards
- `.timeline` - Timeline layout for events
- `.gallery-grid` - Photo gallery
- `.schedule-table` - Table for schedules
- `.btn-primary` / `.btn-secondary` - Styled buttons

## 📸 Image Guidelines

- **Logo**: 50x50px PNG with transparent background
- **Hero Video**: 1920x1080, MP4 format, <10MB
- **Content Images**: 800-1200px wide, optimized JPG
- **Gallery**: 500x500px square, optimized JPG

## 🚀 Next Steps

1. Create the 5 missing HTML pages
2. Add your church logo to `images/logo/`
3. Add hero video to `videos/`
4. Add content images to appropriate folders
5. Test locally
6. Push to GitHub
7. Deploy to bbbcmolino.org

## 💡 Tips

- **Don't edit `base.css` or `base.js`** unless changing ALL pages
- **Use `pages.css`** for page-specific styling
- **Keep images optimized** (<500KB each) for fast loading
- **Test on mobile** after creating each page
- **Use consistent card heights** for better layouts

---

**Need help?** Check README.md for detailed instructions!