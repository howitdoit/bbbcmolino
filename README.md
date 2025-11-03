# Berean Bible Baptist Church Molino - Official Website

Welcome to the official website repository for Berean Bible Baptist Church (BBBC) Molino. This is a modern, responsive multi-site project with separate websites for the church, Berean Academy, and Bible College.

## 🌐 Live Websites

**Main Domain:** [www.bbbcmolino.org](https://www.bbbcmolino.org)

**Future Subdomains:**
- Church: `www.bbbcmolino.org`
- Academy: `academy.bbbcmolino.org`
- College: `college.bbbcmolino.org`

## 📁 Complete Project Structure

```
bbbcmolino-website/
│
├── 🏛️ CHURCH WEBSITE (Root - Yellow/Gold Theme)
│   ├── index.html                 ✅ Homepage (Hero, Beliefs, Visit, Connect)
│   ├── ministries.html            ✅ Church Ministries
│   ├── church-life.html           ✅ Church Life & Activities
│   ├── the-word.html              ✅ Sermons & Bible Studies
│   ├── highlights.html            ✅ Events, News & Testimonies
│   │
│   ├── css/
│   │   ├── base.css               ✅ Shared styles (header, footer, cards)
│   │   ├── homepage.css           ✅ Church homepage specific
│   │   └── pages.css              ✅ Internal pages layouts
│   │
│   ├── js/
│   │   ├── base.js                ✅ Shared scripts (nav, time, protection)
│   │   └── homepage.js            ✅ Weather widget for homepage
│   │
│   └── images/
│       ├── logo/
│       │   └── church-logo.png
│       ├── building/
│       │   └── church-building.jpg
│       ├── church-life/
│       │   ├── sunday-school.png
│       │   ├── prayer-meeting.png
│       │   ├── small-group.jpg
│       │   └── music-ministry.jpg
│       ├── sermons/
│       │   ├── sermon-1.jpg
│       │   ├── sermon-2.jpg
│       │   └── sermon-3.jpg
│       ├── word/
│       │   ├── devotions.jpg
│       │   └── sunday-school-materials.jpg
│       ├── events/
│       │   ├── thanksgiving-2025.jpg
│       │   ├── christmas-2024.jpg
│       │   ├── youth-revival-2024.jpg
│       │   └── music-camp-2024.jpg
│       └── gallery/
│           ├── worship-service.jpg
│           ├── baptism.jpg
│           ├── youth-group.jpg
│           ├── fellowship-meal.jpg
│           ├── sunday-school.jpg
│           ├── choir.jpg
│           ├── outreach.jpg
│           └── prayer-meeting.jpg
│
├── 🎓 BEREAN ACADEMY (Blue Theme)
│   ├── academy/
│   │   ├── index.html             ✅ Academy Landing Page
│   │   ├── about.html             ⏳ To create
│   │   ├── programs.html          ⏳ To create
│   │   ├── admissions.html        ⏳ To create
│   │   ├── faculty.html           ⏳ To create
│   │   ├── contact.html           ⏳ To create
│   │   │
│   │   ├── css/
│   │   │   └── academy.css        ✅ Blue theme styles
│   │   │
│   │   ├── images/
│   │   │   ├── logo/
│   │   │   │   └── academy-logo.png
│   │   │   ├── campus/
│   │   │   ├── students/
│   │   │   └── activities/
│   │   │
│   │   └── videos/
│   │       ├── academy-hero.mp4
│   │       └── academy-hero.webm
│
├── 📚 BIBLE COLLEGE (Green Theme)
│   └── college/
│       ├── index.html             ✅ College Landing Page
│       ├── about.html             ⏳ To create
│       ├── programs.html          ⏳ To create
│       ├── admissions.html        ⏳ To create
│       ├── faculty.html           ⏳ To create
│       ├── contact.html           ⏳ To create
│       │
│       ├── css/
│       │   └── college.css        ✅ Green theme styles
│       │
│       ├── images/
│       │   ├── logo/
│       │   │   └── college-logo.png
│       │   ├── campus/
│       │   ├── students/
│       │   └── graduation/
│       │
│       └── videos/
│           ├── college-hero.mp4
│           └── college-hero.webm
│
├── 🎥 VIDEOS (Root level)
│   └── videos/
│       ├── church-hero.mp4
│       └── church-hero.webm
│
└── 📄 DOCUMENTATION
    ├── README.md                  ✅ This file
    ├── FILE-STRUCTURE.md          ✅ Development guide
    └── ACADEMY-COLLEGE-STRUCTURE.md ✅ Academy/College guide
```

## 🎨 Color Themes

### Church Website (Yellow/Gold)
- **Primary:** `#ffd700` (Gold)
- **Secondary:** `#1e3c72` (Navy Blue)
- **Accent:** `#6495ED` (Cornflower Blue)
- **Background:** `#dad3d3` (Light Gray)

### Berean Academy (Blue)
- **Primary:** `#1e3a8a` (Deep Blue)
- **Secondary:** `#3b82f6` (Bright Blue)
- **Accent:** `#60a5fa` (Light Blue)
- **Background:** `#f0f9ff` (Very Light Blue)

### Bible College (Green)
- **Primary:** `#065f46` (Dark Green)
- **Secondary:** `#10b981` (Bright Green)
- **Accent:** `#34d399` (Light Green)
- **Background:** `#f0fdf4` (Very Light Green)

## 🚀 Deployment Setup (GitHub Pages)

### Prerequisites
- GitHub account
- Git installed on your computer
- Domain `bbbcmolino.org` already owned

### Step 1: Initial Repository Setup

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `bbbcmolino-website`
   - Keep it Public
   - Click "Create Repository"

2. **Push your code to GitHub:**
   ```bash
   # Navigate to your project folder
   cd /path/to/your/project

   # Initialize git
   git init

   # Add all files
   git add .

   # Commit files
   git commit -m "Initial commit - BBBC Molino complete website"

   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR-USERNAME/bbbcmolino-website.git

   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top navigation)
3. Scroll down and click on **Pages** (left sidebar)
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click **Save**
5. Wait a few minutes for GitHub to build your site

### Step 3: Configure Custom Domain

#### On GitHub:
1. Still in the **Pages** settings
2. Under "Custom domain", enter: `bbbcmolino.org`
3. Click **Save**
4. Check the box "Enforce HTTPS" (after DNS propagates)

#### On Your Domain Registrar:

Add the following DNS records:

**For Root Domain (@):**
```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153
```

**For WWW subdomain:**
```
Type: CNAME
Host: www
Value: YOUR-GITHUB-USERNAME.github.io
```

**Future: For Academy and College Subdomains (when ready):**
```
Type: CNAME
Host: academy
Value: YOUR-GITHUB-USERNAME.github.io

Type: CNAME
Host: college
Value: YOUR-GITHUB-USERNAME.github.io
```

**Note:** DNS changes can take 24-48 hours to propagate.

### Step 4: Verify Setup

1. Wait 10-15 minutes after DNS configuration
2. Visit `https://bbbcmolino.org`
3. Your website should now be live!

## 🔄 Automatic Updates

Once set up, your website will automatically update whenever you push changes:

```bash
# Make your changes to any HTML, CSS, or JS files

# Stage changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub (triggers automatic deployment)
git push origin main
```

**The website will automatically update within 1-2 minutes!**

## 📝 Website Pages Overview

### Church Website (Root)
1. **index.html** - Homepage
   - Hero with video background
   - What We Believe section
   - Plan Your Visit (with map & weather)
   - Connect With Us

2. **ministries.html** - Church Ministries
   - Barnabas Ministry, Children's, Youth
   - Music, Prayer, Outreach
   - Links to Academy & College

3. **church-life.html** - Church Life
   - Weekly schedule table
   - Sunday School programs
   - Prayer meetings
   - Special programs & events
   - Music & worship
   - Small groups

4. **the-word.html** - Sermons & Resources
   - Recent sermons with audio/download
   - Bible study resources
   - Daily devotions
   - Sunday School materials
   - Sermon archive
   - Recommended resources

5. **highlights.html** - Events & News
   - Upcoming events calendar
   - Recent events timeline
   - Ministry updates
   - Testimonies
   - Photo gallery
   - Church announcements

### Berean Academy (academy/)
- **index.html** - Landing page with programs overview
- Programs: Preschool, Elementary, Junior High, Senior High
- Blue theme throughout

### Bible College (college/)
- **index.html** - Landing page with academic programs
- Programs: Certificate, Diploma, Bachelor of Theology
- Green theme throughout

## 📝 Making Changes

### Editing Content

**Homepage:**
- Edit `index.html` for hero, beliefs, visit, connect
- Weather widget updates automatically

**Church Pages:**
- `ministries.html` - Update ministry information
- `church-life.html` - Update schedules, programs
- `the-word.html` - Add new sermons, resources
- `highlights.html` - Add events, testimonies, photos

**Styling:**
- `css/base.css` - Changes affect ALL pages
- `css/homepage.css` - Homepage only
- `css/pages.css` - Church internal pages
- `academy/css/academy.css` - Academy only
- `college/css/college.css` - College only

### Common Updates:

**Change service times:**
```html
<!-- Update in index.html, footer, and church-life.html -->
<p>Sunday: 7:45 AM & 4:45 PM<br>Wednesday: 5:45 PM</p>
```

**Add new sermon:**
```html
<!-- In the-word.html, copy existing sermon-card and update -->
<div class="sermon-card">
    <div class="sermon-thumbnail">
        <img src="images/sermons/new-sermon.jpg" alt="Sermon">
    </div>
    <div class="sermon-info">
        <h4>Sermon Title</h4>
        <!-- ... rest of content -->
    </div>
</div>
```

**Add new event:**
```html
<!-- In highlights.html, add to upcoming events -->
<div class="card event-card">
    <div class="event-date">
        <div class="month">MAR</div>
        <div class="day">15</div>
    </div>
    <h3>Event Name</h3>
    <p><strong>📍 Location</strong></p>
    <p>Description</p>
</div>
```

## 🎨 Features

### All Websites Share:
- ✅ Live Manila time and date in top bar
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dropdown navigation menus
- ✅ Image and video protection (no right-click, no download)
- ✅ Smooth scrolling
- ✅ Modern card-based layouts
- ✅ Professional animations

### Church Website Specific:
- ✅ Video background hero
- ✅ Google Maps integration
- ✅ Live weather widget
- ✅ Sermon audio player
- ✅ Photo gallery
- ✅ Event timeline
- ✅ Testimonials section

### Academy & College:
- ✅ Separate color themes (Blue/Green)
- ✅ Back to church links
- ✅ Program showcases
- ✅ Ready for subdomain deployment

## 🔒 Security Features

- Right-click disabled on images and videos
- Drag-and-drop protection
- Keyboard shortcut blocking (Ctrl+S, F12)
- CSS user-select prevention
- Video download protection

## 📸 Required Images

### Church Website:
```
images/logo/church-logo.png (50x50px)
images/building/church-building.jpg
images/church-life/ (4 images)
images/sermons/ (3+ images)
images/word/ (2 images)
images/events/ (4+ images)
images/gallery/ (8+ images)
```

### Videos:
```
videos/church-hero.mp4 (1920x1080, <10MB)
academy/videos/academy-hero.mp4
college/videos/college-hero.mp4
```

### Academy & College:
```
academy/images/logo/academy-logo.png (50x50px, blue theme)
college/images/logo/college-logo.png (50x50px, green theme)
```

## 🛠️ Troubleshooting

### Website not updating after push?
1. Check GitHub Actions tab for build status
2. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Wait 2-3 minutes for deployment

### Navigation not working?
1. Ensure all file paths are correct
2. Check file names match exactly (case-sensitive)
3. Verify links in navigation menus

### Weather widget not showing?
1. Check browser console for errors
2. Verify internet connection
3. API may be temporarily down (it will retry)

### Map not displaying?
1. Check iframe src URL
2. Verify Google Maps embed is allowed
3. Check browser console for errors

## 📞 Support

For technical issues with the website:
- Check the [Issues](https://github.com/YOUR-USERNAME/bbbcmolino-website/issues) section
- Create a new issue with details

For church-related inquiries:
- Visit: [www.bbbcmolino.org](https://www.bbbcmolino.org)
- Location: Magdiwang Road, Molino 2, Bacoor, 4102 Cavite, Philippines

## 📄 License

This website is property of Berean Bible Baptist Church Molino.

---

## 🎯 Quick Start Checklist

- [ ] Clone/download repository
- [ ] Add church logo to `images/logo/`
- [ ] Add hero video to `videos/`
- [ ] Update service times in all pages
- [ ] Add sermon images to `images/sermons/`
- [ ] Add event photos to `images/events/`
- [ ] Add gallery photos to `images/gallery/`
- [ ] Test locally in browser
- [ ] Push to GitHub
- [ ] Configure DNS settings
- [ ] Verify deployment

**Built with ❤️ for BBBC Molino**

*Complete Website System - Church, Academy & College*
*Last Updated: January 2025*