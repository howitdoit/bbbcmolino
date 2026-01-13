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
│   ├── highlights.html         ✅ Events, News, Testimonies & Gallery
│   ├── daughter-churches.html  ✅ Daughter Churches Directory
│   ├── admin-blog.html         ✅ Blog/Content Admin Panel (Password Protected)
│   └── view-posts.html         ✅ Bible Study Resources Hub (Public View)
│
├── 📁 css/
│   ├── base.css                ✅ Shared styles (header, footer, cards, nav, mobile responsive)
│   ├── homepage.css            ✅ Church homepage (hero, map, weather)
│   └── pages.css               ✅ Internal pages (timeline, gallery, sermons)
│
├── 📁 js/
│   ├── base.js                 ✅ Shared scripts (nav, time/date, mobile menu, image fallback)
│   ├── homepage.js             ✅ Weather widget for homepage
│   ├── blogger-feed.js         ✅ Blog feed loader (Blogger API integration)
│   ├── blog-admin.js           ✅ Admin panel logic (CRUD operations, LocalStorage)
│   └── view-posts.js           ✅ Resource viewer (preachings, calendars, lessons, journals)
│
├── 📁 images/
│   ├── logo/
│   │   ├── church-logo.png     📸 Main church logo (70x70px desktop, 50x50px mobile)
│   │   └── church-logo_150.png 📸 Larger logo variant
│   ├── building/
│   │   └── church-building.jpg 📸 Church exterior photo
│   └── church-life/
│       ├── sunday-school.png   📸 Sunday School photo
│       ├── prayer-meeting.png  📸 Prayer meeting photo
│       ├── small-group.jpg     📸 Small group photo
│       ├── music-ministry.jpg  📸 Music ministry photo
│       ├── tribute.png         📸 Tribute image
│       └── Screenshot 2025-12-03 103902.png 📸 Screenshot image
│
├── 📁 videos/
│   └── church-hero.webm        🎥 Homepage hero video
│
├── 📁 academy/                  🔵 BEREAN ACADEMY (BLUE THEME)
│   ├── index.html              ✅ Academy Landing Page
│   ├── about.html              ✅ About Academy Page
│   ├── programs.html           ✅ Programs Overview
│   ├── admissions.html         ✅ Admissions Information
│   ├── faculty.html            ✅ Faculty Directory
│   ├── contact.html            ✅ Contact Page
│   │
│   ├── css/
│   │   └── academy.css         ✅ Blue theme styles
│   │
│   └── images/
│       └── logo/
│           └── acad-logo.png    📸 Academy logo (blue)
│
├── 📁 college/                  🟢 BIBLE COLLEGE (GREEN THEME)
│   ├── index.html              ✅ College Landing Page
│   ├── about.html              ✅ About College Page
│   ├── programs.html           ✅ Programs Overview
│   ├── admissions.html         ✅ Admissions Information
│   ├── faculty.html            ✅ Faculty Directory
│   ├── contact.html            ✅ Contact Page
│   │
│   ├── css/
│   │   └── college.css         ✅ Green theme styles
│   │
│   └── images/
│       └── logo/
│           └── college-logo.png 📸 College logo (green)
│
└── 📄 DOCUMENTATION
    ├── README.md               ✅ Main documentation
    ├── FILE-STRUCTURE.md       ✅ This file
    └── CNAME                   ✅ GitHub Pages domain configuration
```

## 📋 Pages Breakdown

### ✅ COMPLETED PAGES

#### Church Website (8 pages)
1. **index.html** - Homepage
   - Hero with video background
   - What We Believe (3 cards)
   - Plan Your Visit (map + weather)
   - Connect With Us (3 cards)
   - Blog feed integration (Blogger API)

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
   - Recent sermon cards (from Blogger feed)
   - "Read More" links to view-posts.html
   - Bible study resources
   - Daily devotions section
   - Sunday School materials
   - Sermon archive
   - Recommended resources

5. **highlights.html** - Events & News
   - 3 upcoming event cards
   - Recent events timeline (4 events)
   - 3 ministry update cards
   - 3 testimony cards
   - Photo gallery (8 photos)
   - 4 announcement boxes

6. **daughter-churches.html** - Daughter Churches
   - Directory of affiliated churches
   - Church information and locations

7. **admin-blog.html** - Blog/Content Admin Panel ⚙️
   - Password-protected admin interface
   - Add/Edit/Delete blog posts (preachings)
   - Upload Bible Reading Calendar files
   - Upload Discipleship Lesson files
   - Upload Berean Daily Journal files
   - Upload Sunday School Materials files
   - Pagination for posts (5 per page)
   - SweetAlert2 modals for enhanced UX
   - Mobile responsive with touch-friendly inputs
   - LocalStorage-based content management

8. **view-posts.html** - Bible Study Resources Hub 📚
   - Recent Preachings section (6 per page with pagination)
   - Bible Reading Calendar section
   - Discipleship Lesson section
   - Berean Daily Journal section
   - Sunday School Materials section
   - Modern card-based layout
   - Responsive design
   - File download functionality

#### Academy Website (6 pages) ✅ COMPLETE
1. **academy/index.html** - Landing Page
   - Hero with video background
   - Welcome section
   - 4 program cards (Preschool to Senior High)
   - 6 feature boxes (Why Choose)
   - Admissions CTA

2. **academy/about.html** - About Academy
   - History, vision, mission

3. **academy/programs.html** - Programs
   - Detailed program info per level

4. **academy/admissions.html** - Admissions
   - Requirements, process, fees

5. **academy/faculty.html** - Faculty
   - Meet the teachers

6. **academy/contact.html** - Contact
   - Contact form, office hours

#### College Website (6 pages) ✅ COMPLETE
1. **college/index.html** - Landing Page
   - Hero with video background
   - Mission statement
   - 3 program cards (Certificate, Diploma, Bachelor)
   - 6 feature boxes (Why Study Here)
   - 6 course area boxes
   - Admissions CTA

2. **college/about.html** - About College
   - Statement of faith, history

3. **college/programs.html** - Programs
   - Detailed curriculum

4. **college/admissions.html** - Admissions
   - Requirements, application

5. **college/faculty.html** - Faculty
   - Faculty profiles

6. **college/contact.html** - Contact
   - Inquiries, campus visit

## 🎨 Design Components Used

### From base.css (Shared)
- `.top-bar` - Live time/date bar (mobile responsive)
- `.header` - Navigation header (sticky, mobile menu)
- `.nav-links` - Navigation menu (desktop hover, mobile slide-in)
- `.mobile-menu` - Hamburger menu (animated to X)
- `.dropdown` - Dropdown menus (desktop hover, mobile click)
- `.page-header` - Page title sections
- `.cards` - Card grid layout
- `.card` - Individual card
- `.contact-link` - Text links
- `.btn-contact` - Email button
- `footer` - Footer layout
- Mobile responsive breakpoints (768px, 480px)
- Default image fallback (church-logo.png)

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
- `.post-item` - Blog post cards
- `.pagination` - Pagination controls

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

## 🔧 JavaScript Functionality

### base.js
- Mobile menu toggle with overlay
- Dropdown menu handling (desktop hover, mobile click)
- Dynamic date/time updates
- Header scroll effects
- Image fallback system (defaults to church-logo.png)
- Mobile menu position calculation
- Touch event handling

### homepage.js
- Weather widget (OpenWeatherMap API)
- Date/time formatting

### blogger-feed.js
- Blogger API integration
- Fetches recent posts from Blogger
- Displays sermon cards on homepage and the-word.html
- Redirects "Read More" to view-posts.html

### blog-admin.js
- Password authentication
- LocalStorage management for:
  - Blog posts (BLOG_POSTS_KEY)
  - Bible Reading Calendar (BIBLE_CALENDAR_KEY)
  - Discipleship Lessons (DISCIPLESHIP_KEY)
  - Daily Journal (DAILY_JOURNAL_KEY)
  - Sunday School Materials (SUNDAY_SCHOOL_KEY)
- CRUD operations (Create, Read, Update, Delete)
- File upload handling (Base64 encoding)
- Image preview functionality
- SweetAlert2 integration for modals
- Pagination (5 posts per page)
- Form validation
- Mobile-responsive form handling

### view-posts.js
- Loads content from LocalStorage
- Displays preachings with pagination (6 per page)
- Displays resource files (calendar, lessons, journal, materials)
- Card-based layout rendering
- Pagination controls
- URL parameter handling for page state

## 📸 Image Requirements

### Dimensions & Optimization
- **Logos**: 50-70px, PNG with transparency
- **Hero Videos**: 1920x1080, WebM/MP4, <10MB, compressed
- **Content Images**: 800-1200px wide, JPG/PNG, optimized
- **Sermon Thumbnails**: 200x150px, JPG
- **Gallery Photos**: 500x500px square, JPG, optimized
- **Event Photos**: 800x600px, JPG

### Image Locations

#### Church Website
```
images/logo/
  ├── church-logo.png              [Main logo - 70px desktop, 50px mobile]
  └── church-logo_150.png          [Larger variant]

images/building/
  └── church-building.jpg          [Church exterior]

images/church-life/
  ├── sunday-school.png
  ├── prayer-meeting.png
  ├── small-group.jpg
  ├── music-ministry.jpg
  ├── tribute.png
  └── Screenshot 2025-12-03 103902.png
```

#### Academy
```
academy/images/logo/
  └── acad-logo.png                [Academy logo - blue theme]
```

#### College
```
college/images/logo/
  └── college-logo.png             [College logo - green theme]
```

### Default Image Fallback
- All images without a valid `src` automatically default to `images/logo/church-logo.png`
- Implemented via CSS and JavaScript (MutationObserver)
- Excludes logo images from fallback

## 🎯 Page Sections Quick Reference

### index.html
- Hero → Beliefs → Visit (Map + Weather) → Connect → Blog Feed

### ministries.html
- Page Header → Ministries Grid (6) → Special Programs (2)

### church-life.html
- Page Header → Schedule → Experience (3) → Sunday School → Prayer → Special Programs (9) → Small Groups → Music → Get Connected (2)

### the-word.html
- Page Header → Recent Sermons (Blogger feed) → Bible Resources → Daily Devotions → Sunday School Materials → Sermon Archive → Recommended

### highlights.html
- Page Header → Upcoming Events (3) → Timeline (4) → Ministry Updates (3) → Testimonies (3) → Gallery (8) → Announcements (4)

### daughter-churches.html
- Page Header → Daughter Churches Directory

### admin-blog.html ⚙️
- Login Form → Admin Dashboard:
  - Add New Post Form → Existing Posts List (5 per page, pagination)
  - Bible Reading Calendar Form → Files List
  - Discipleship Lesson Form → Files List
  - Daily Journal Form → Files List
  - Sunday School Materials Form → Files List

### view-posts.html 📚
- Page Header → Recent Preachings (6 per page, pagination) → Bible Reading Calendar → Discipleship Lessons → Daily Journal → Sunday School Materials

### academy/index.html
- Hero → Welcome → Programs (4) → Why Choose (6) → CTA

### college/index.html
- Hero → Mission → Programs (3) → Why Study (6) → Courses (6) → CTA

## 💾 Data Storage

### LocalStorage Keys
- `BLOG_POSTS_KEY` - Blog posts/preachings
- `BIBLE_CALENDAR_KEY` - Bible Reading Calendar files
- `DISCIPLESHIP_KEY` - Discipleship Lesson files
- `DAILY_JOURNAL_KEY` - Berean Daily Journal files
- `SUNDAY_SCHOOL_KEY` - Sunday School Materials files
- `ADMIN_AUTHENTICATED` - Admin authentication state

### Data Structure
- **Blog Posts**: `{ id, title, content, image, file, date, timestamp }`
- **Resource Files**: `{ id, title, description, file, date, timestamp }`

## 💡 Development Tips

### Adding New Content

**Add a new sermon via Blogger:**
1. Post on Blogger with title, content, and image
2. Automatically appears on homepage and the-word.html via API
3. "Read More" links to view-posts.html

**Add a new post via Admin:**
1. Go to admin-blog.html
2. Enter password
3. Fill out "Add New Post" form
4. Upload image or paste URL
5. Optionally attach file
6. Click "Add Post"
7. Appears in view-posts.html under "Recent Preachings"

**Add a resource file:**
1. Go to admin-blog.html
2. Navigate to appropriate section (Bible Calendar, Discipleship, etc.)
3. Fill out form with title and description
4. Upload file or paste Google Drive link
5. Click submit
6. Appears in view-posts.html in corresponding section

**Add a new event:**
1. Add photo to `images/events/` (if needed)
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

### Mobile Responsiveness
- All pages are mobile responsive
- Breakpoints: 768px (tablet), 480px (mobile)
- Touch-friendly inputs (min 44px height)
- Mobile menu with hamburger animation
- Font-size: 16px on inputs (prevents iOS zoom)
- Proper z-index layering for overlays

### Testing Checklist
- [ ] All images load correctly (with fallback)
- [ ] Videos play automatically
- [ ] Map displays properly
- [ ] Weather widget loads
- [ ] All links work (internal & external)
- [ ] Mobile menu functions (hamburger animation)
- [ ] Dropdown menus work (desktop hover, mobile click)
- [ ] Smooth scrolling works
- [ ] Time/date updates
- [ ] Right-click protection works
- [ ] Admin panel login works
- [ ] Blog posts can be added/edited/deleted
- [ ] Resource files can be uploaded/deleted
- [ ] Pagination works correctly
- [ ] Mobile inputs are clickable and typeable
- [ ] SweetAlert2 modals display correctly
- [ ] All three sites (church/academy/college) accessible
- [ ] Blogger feed loads correctly
- [ ] view-posts.html displays all content types

## 🚀 Deployment Priority

### Phase 1: Church Website (Priority) ✅
1. ✅ Upload all church HTML files
2. ✅ Upload css/ and js/ folders
3. ✅ Upload images/ folder
4. ✅ Upload videos/ folder
5. ✅ Test thoroughly
6. ✅ Launch main site

### Phase 2: Academy & College ✅
1. ✅ Upload academy/ folder
2. ✅ Upload college/ folder  
3. ✅ Test linking from church site
4. ✅ All pages complete

### Phase 3: Content Management ✅
1. ✅ Admin panel functional
2. ✅ LocalStorage working
3. ✅ File uploads working
4. ✅ Public view page working
5. ✅ Pagination implemented

### Phase 4: Future Enhancements
1. Backend API integration (replace LocalStorage)
2. User authentication system
3. File storage service integration
4. Analytics integration
5. SEO optimization

---

## 📊 Current Statistics

**Total HTML Files:** 20
- Church: 8 pages
- Academy: 6 pages
- College: 6 pages

**Total CSS Files:** 5
- base.css (shared)
- homepage.css
- pages.css
- academy.css
- college.css

**Total JavaScript Files:** 5
- base.js (shared)
- homepage.js
- blogger-feed.js
- blog-admin.js
- view-posts.js

**Total Core Files:** 30

**Features:**
- ✅ Mobile responsive (all pages)
- ✅ Admin content management
- ✅ Blogger API integration
- ✅ LocalStorage data persistence
- ✅ File upload/download
- ✅ Pagination
- ✅ SweetAlert2 modals
- ✅ Image fallback system
- ✅ Touch-friendly mobile interface

**Ready for production deployment! 🎉**
