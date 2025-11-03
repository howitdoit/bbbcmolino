# BBBC Molino Website - Complete File Structure Guide

## 📂 Complete File Organization

```
bbbcmolino-website/
│
├── 📄 CHURCH HTML PAGES (Root Directory)
│   ├── index.html              ✅ Homepage (Hero, Beliefs, Visit, Connect)
│   ├── ministries.html         ✅ Church Ministries Overview
│   ├── church-life.html        ✅ Church Life & Weekly Activities
│   ├── the-word.html           ✅ Sermons, Bible Studies & Resources
│   └── highlights.html         ✅ Events, News, Testimonies & Gallery
│
├── 📁 css/
│   ├── base.css                ✅ Shared styles (header, footer, cards, nav)
│   ├── homepage.css            ✅ Church homepage (hero, map, weather)
│   └── pages.css               ✅ Internal pages (timeline, gallery, sermons)
│
├── 📁 js/
│   ├── base.js                 ✅ Shared scripts (nav, time/date, protection)
│   └── homepage.js             ✅ Weather widget for homepage
│
├── 📁 images/
│   ├── logo/
│   │   └── church-logo.png     📸 Main church logo (50x50px)
│   ├── building/
│   │   └── church-building.jpg 📸 Church exterior photo
│   ├── church-life/
│   │   ├── sunday-school.png   📸 Sunday School photo
│   │   ├── prayer-meeting.png  📸 Prayer meeting photo
│   │   ├── small-group.jpg     📸 Small group photo
│   │   └── music-ministry.jpg  📸 Music ministry photo
│   ├── sermons/
│   │   ├── sermon-1.jpg        📸 Sermon thumbnail 1
│   │   ├── sermon-2.jpg        📸 Sermon thumbnail 2
│   │   └── sermon-3.jpg        📸 Sermon thumbnail 3
│   ├── word/
│   │   ├── devotions.jpg       📸 Daily devotions image
│   │   └── sunday-school-materials.jpg 📸 Materials image
│   ├── events/
│   │   ├── thanksgiving-2025.jpg 📸 Event photo
│   │   ├── christmas-2024.jpg   📸 Event photo
│   │   ├── youth-revival-2024.jpg 📸 Event photo
│   │   └── music-camp-2024.jpg  📸 Event photo
│   ├── gallery/
│   │   ├── worship-service.jpg  📸 Gallery photo
│   │   ├── baptism.jpg          📸 Gallery photo
│   │   ├── youth-group.jpg      📸 Gallery photo
│   │   ├── fellowship-meal.jpg  📸 Gallery photo
│   │   ├── sunday-school.jpg    📸 Gallery photo
│   │   ├── choir.jpg            📸 Gallery photo
│   │   ├── outreach.jpg         📸 Gallery photo
│   │   └── prayer-meeting.jpg   📸 Gallery photo
│   └── ministries/
│       └── *.jpg               📸 Ministry photos (optional)
│
├── 📁 videos/
│   ├── church-hero.mp4         🎥 Homepage hero video
│   └── church-hero.webm        🎥 Fallback format
│
├── 📁 academy/                  🔵 BEREAN ACADEMY (BLUE THEME)
│   ├── index.html              ✅ Academy Landing Page
│   ├── about.html              ⏳ To create
│   ├── programs.html           ⏳ To create
│   ├── admissions.html         ⏳ To create
│   ├── faculty.html            ⏳ To create
│   ├── contact.html            ⏳ To create
│   │
│   ├── css/
│   │   └── academy.css         ✅ Blue theme styles
│   │
│   ├── images/
│   │   ├── logo/
│   │   │   └── academy-logo.png 📸 Academy logo (blue)
│   │   ├── campus/
│   │   │   └── *.jpg           📸 Campus photos
│   │   ├── students/
│   │   │   └── *.jpg           📸 Student photos
│   │   └── activities/
│   │       └── *.jpg           📸 Activity photos
│   │
│   └── videos/
│       ├── academy-hero.mp4    🎥 Academy hero video
│       └── academy-hero.webm   🎥 Fallback format
│
├── 📁 college/                  🟢 BIBLE COLLEGE (GREEN THEME)
│   ├── index.html              ✅ College Landing Page
│   ├── about.html              ⏳ To create
│   ├── programs.html           ⏳ To create
│   ├── admissions.html         ⏳ To create
│   ├── faculty.html            ⏳ To create
│   ├── contact.html            ⏳ To create
│   │
│   ├── css/
│   │   └── college.css         ✅ Green theme styles
│   │
│   ├── images/
│   │   ├── logo/
│   │   │   └── college-logo.png 📸 College logo (green)
│   │   ├── campus/
│   │   │   └── *.jpg           📸 Campus photos
│   │   ├── students/
│   │   │   └── *.jpg           📸 Student photos
│   │   └── graduation/
│   │       └── *.jpg           📸 Graduation photos
│   │
│   └── videos/
│       ├── college-hero.mp4    🎥 College hero video
│       └── college-hero.webm   🎥 Fallback format
│
└── 📄 DOCUMENTATION
    ├── README.md               ✅ Main documentation
    ├── FILE-STRUCTURE.md       ✅ This file
    └── ACADEMY-COLLEGE-STRUCTURE.md ✅ Academy/College guide
```

## 📋 Pages Breakdown

### ✅ COMPLETED PAGES

#### Church Website (5 pages)
1. **index.html** - Homepage
   - Hero with video background
   - What We Believe (3 cards)
   - Plan Your Visit (map + weather)
   - Connect With Us (3 cards)

2. **ministries.html** - Ministries
   - 6 ministry cards
   - Featured: Barnabas, Children's, Youth, Music, Prayer, Outreach
   - Links to Academy & College

3. **church-life.html** - Church Life
   - Weekly schedule table
   - 3 experience cards
   - Sunday School programs
   - Prayer meetings
   - Special programs (9 events)
   - Small groups & discipleship
   - Music & worship
   - Get connected section

4. **the-word.html** - Sermons & Resources
   - 3 recent sermon cards (expandable)
   - Bible study resources (3 cards)
   - Daily devotions section
   - Sunday School materials
   - Sermon archive (4 categories)
   - Recommended resources (3 cards)

5. **highlights.html** - Events & News
   - 3 upcoming event cards
   - Recent events timeline (4 events)
   - 3 ministry update cards
   - 3 testimony cards
   - Photo gallery (8 photos)
   - 4 announcement boxes

#### Academy Website (1 page)
1. **academy/index.html** - Landing Page
   - Hero with video background
   - Welcome section
   - 4 program cards (Preschool to Senior High)
   - 6 feature boxes (Why Choose)
   - Admissions CTA

#### College Website (1 page)
1. **college/index.html** - Landing Page
   - Hero with video background
   - Mission statement
   - 3 program cards (Certificate, Diploma, Bachelor)
   - 6 feature boxes (Why Study Here)
   - 6 course area boxes
   - Admissions CTA

### ⏳ PAGES TO CREATE

#### Academy (5 pages needed)
- about.html - History, vision, mission
- programs.html - Detailed program info per level
- admissions.html - Requirements, process, fees
- faculty.html - Meet the teachers
- contact.html - Contact form, office hours

#### College (5 pages needed)
- about.html - Statement of faith, history
- programs.html - Detailed curriculum
- admissions.html - Requirements, application
- faculty.html - Faculty profiles
- contact.html - Inquiries, campus visit

## 🎨 Design Components Used

### From base.css (Shared)
- `.top-bar` - Live time/date bar
- `.header` - Navigation header
- `.nav-links` - Navigation menu
- `.dropdown` - Dropdown menus
- `.page-header` - Page title sections
- `.cards` - Card grid layout
- `.card` - Individual card
- `.contact-link` - Text links
- `.btn-contact` - Email button
- `footer` - Footer layout

### From homepage.css (Church Homepage)
- `.hero` - Video background hero
- `.hero-video` - Video element
- `.hero-overlay` - Color overlay
- `.cta-button` - Call-to-action buttons
- `.visit-container` - Visit section layout
- `.map-container` - Google Maps embed
- `.weather-widget` - Live weather display
- `.belief-container` - Beliefs section

### From pages.css (Church Internal Pages)
- `.ministry-highlight` - Highlighted sections
- `.content-section` - Text + image layouts
- `.content-section.reverse` - Reversed layout
- `.schedule-table` - Schedule table
- `.sermon-card` - Sermon listings
- `.timeline` - Event timeline
- `.timeline-item` - Timeline entries
- `.gallery-grid` - Photo gallery
- `.event-card` - Event cards with dates
- `.testimony-card` - Testimony boxes
- `.info-box` - Information boxes
- `.feature-box` - Feature highlights

### From academy.css (Blue Theme)
- `.academy-hero` - Academy hero section
- `.program-card` - Program cards
- `.features-grid` - Features layout
- `.cta-section` - Call-to-action section

### From college.css (Green Theme)
- `.college-hero` - College hero section
- `.program-highlights` - Program lists
- `.courses-section` - Course areas
- `.info-grid` - Information grid

## 📸 Image Requirements

### Dimensions & Optimization
- **Logos**: 50x50px, PNG with transparency
- **Hero Videos**: 1920x1080, MP4, <10MB, compressed
- **Content Images**: 800-1200px wide, JPG, optimized
- **Sermon Thumbnails**: 200x150px, JPG
- **Gallery Photos**: 500x500px square, JPG, optimized
- **Event Photos**: 800x600px, JPG

### Image Locations

#### Church Website
```
images/logo/church-logo.png              [1 file]
images/building/church-building.jpg      [1 file]
images/church-life/                      [4 files]
images/sermons/                          [3+ files]
images/word/                             [2 files]
images/events/                           [4+ files]
images/gallery/                          [8+ files]
```

#### Academy
```
academy/images/logo/academy-logo.png     [1 file]
academy/images/campus/                   [photos]
academy/images/students/                 [photos]
academy/images/activities/               [photos]
```

#### College
```
college/images/logo/college-logo.png     [1 file]
college/images/campus/                   [photos]
college/images/students/                 [photos]
college/images/graduation/               [photos]
```

## 🎯 Page Sections Quick Reference

### index.html
- Hero → Beliefs → Visit (Map + Weather) → Connect

### ministries.html
- Page Header → Ministries Grid (6) → Special Programs (2)

### church-life.html
- Page Header → Schedule → Experience (3) → Sunday School → Prayer → Special Programs (9) → Small Groups → Music → Get Connected (2)

### the-word.html
- Page Header → Recent Sermons (3) → Bible Resources (3) → Daily Devotions → Sunday School Materials → Sermon Archive (4) → Recommended (3)

### highlights.html
- Page Header → Upcoming Events (3) → Timeline (4) → Ministry Updates (3) → Testimonies (3) → Gallery (8) → Announcements (4)

### academy/index.html
- Hero → Welcome → Programs (4) → Why Choose (6) → CTA

### college/index.html
- Hero → Mission → Programs (3) → Why Study (6) → Courses (6) → CTA

## 💡 Development Tips

### Adding New Content

**Add a new sermon:**
1. Add thumbnail to `images/sermons/`
2. Copy sermon-card block in `the-word.html`
3. Update title, date, speaker, verse, description

**Add a new event:**
1. Add photo to `images/events/`
2. Copy event card in `highlights.html`
3. Update date, title, location, description

**Add gallery photo:**
1. Add photo to `images/gallery/`
2. Add gallery-item in `highlights.html`
3. Image automatically sized

### File Naming Conventions
- Use lowercase with hyphens: `youth-revival-2024.jpg`
- Be descriptive: `sermon-walking-by-faith.jpg`
- Include dates when relevant: `christmas-2024.jpg`
- Keep names short but clear

### Testing Checklist
- [ ] All images load correctly
- [ ] Videos play automatically
- [ ] Map displays properly
- [ ] Weather widget loads
- [ ] All links work (internal & external)
- [ ] Mobile menu functions
- [ ] Dropdown menus work
- [ ] Smooth scrolling works
- [ ] Time/date updates
- [ ] Right-click protection works
- [ ] All three sites (church/academy/college) accessible

## 🚀 Deployment Priority

### Phase 1: Church Website (Priority)
1. Upload all church HTML files
2. Upload css/ and js/ folders
3. Upload images/ folder
4. Upload videos/ folder
5. Test thoroughly
6. Launch main site

### Phase 2: Academy & College
1. Upload academy/ folder
2. Upload college/ folder  
3. Test linking from church site
4. Prepare for subdomain migration

### Phase 3: Subdomains (Future)
1. Set up DNS records
2. Migrate folders to subdomains
3. Update file paths
4. Test all cross-links

---

**Total Files Created: 7 HTML + 5 CSS + 2 JS = 14 core files**

**Ready for production deployment! 🎉**