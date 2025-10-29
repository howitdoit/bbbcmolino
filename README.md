# Berean Bible Baptist Church Molino - Official Website

Welcome to the official website repository for Berean Bible Baptist Church (BBBC) Molino. This is a modern, responsive multi-page church website built with HTML, CSS, and JavaScript.

## 🌐 Live Website

**Domain:** [www.bbbcmolino.org](https://www.bbbcmolino.org)

## 📁 Project Structure

```
bbbcmolino-website/
│
├── index.html              # Homepage (Hero, Visit, Connect)
├── beliefs.html            # What We Believe page
├── ministries.html         # Ministries page
├── academy.html            # Berean Academy page
├── college.html            # Bible College page
├── church-life.html        # Church Life page
├── the-word.html           # The Word page
├── highlights.html         # Highlights/Events page
│
├── css/
│   ├── base.css           # Shared styles (header, footer, common)
│   ├── homepage.css       # Homepage-specific styles
│   └── pages.css          # Internal pages styles
│
├── js/
│   ├── base.js            # Shared scripts (navigation, time, protection)
│   └── homepage.js        # Homepage-specific scripts (weather)
│
├── images/
│   ├── logo/
│   │   └── church-logo.png
│   ├── building/
│   ├── ministries/
│   ├── events/
│   └── gallery/
│
├── videos/
│   ├── church-hero.mp4    # Hero background video
│   └── church-hero.webm   # Fallback video format
│
└── README.md              # This file
```

## 🎨 Design System

### Base Components (Reusable)
- **Top Bar**: Live date/time (Manila, PH timezone)
- **Header/Navigation**: Transparent on homepage, solid on other pages
- **Footer**: 3-column layout with contact info, service times, and quick links
- **Cards**: Consistent card design across all pages

### Pages Overview

#### Homepage (`index.html`)
- Hero section with video background
- Plan Your Visit (with map and weather)
- Connect With Us

#### Internal Pages
- **beliefs.html**: Core beliefs and doctrines
- **ministries.html**: All church ministries
- **academy.html**: Berean Academy information
- **college.html**: Bible College details
- **church-life.html**: Worship, Bible study, fellowship
- **the-word.html**: Sermons, resources, devotions
- **highlights.html**: Events, updates, news

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
   git commit -m "Initial commit - BBBC Molino website"

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

## 📝 Making Changes

### Editing Content

**Homepage:**
- Edit `index.html` for hero, visit, connect sections
- Edit `css/homepage.css` for homepage-specific styling
- Edit `js/homepage.js` for weather and homepage features

**Internal Pages:**
- Edit individual page files (`beliefs.html`, `ministries.html`, etc.)
- Styling is in `css/pages.css`

**Header/Footer (All Pages):**
- Edit `css/base.css` for styling
- Changes apply to ALL pages automatically

### Adding a New Page

1. Copy an existing page (e.g., `beliefs.html`)
2. Rename it (e.g., `new-page.html`)
3. Update the content
4. Add navigation link in header of all pages
5. Add link in footer if needed

### Common Updates:

**Change service times (all pages):**
```html
<!-- In footer of each page -->
<p>Sunday: 7:45 AM & 4:45 PM<br>Wednesday: 5:45 PM</p>
```

**Change colors:**
```css
/* In css/base.css */
/* Primary Blue: #1e3c72 */
/* Light Blue: #6495ED */
/* Change these throughout the file */
```

**Update logo:**
- Replace `images/logo/church-logo.png`
- Keep filename the same, or update all HTML files

## 🎨 Features

- ✅ Multi-page website with consistent design
- ✅ Reusable header and footer components
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dropdown menus for navigation
- ✅ Live Manila time and date in top bar
- ✅ Video background hero section
- ✅ Google Maps integration
- ✅ Live weather widget
- ✅ Smooth scrolling navigation
- ✅ Image and video protection
- ✅ Modern card-based layouts
- ✅ White and light blue color scheme

## 🔒 Security Features

- Right-click disabled on images and videos
- Drag-and-drop protection
- Keyboard shortcut blocking (Ctrl+S, F12)
- CSS user-select prevention

## 🛠️ Troubleshooting

### Website not updating after push?
1. Check GitHub Actions tab for build status
2. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Wait 2-3 minutes for deployment

### Navigation not working?
1. Ensure all page files are in root directory
2. Check file names match exactly (case-sensitive)
3. Verify links in navigation menus

### Styles not applying?
1. Check CSS file paths in HTML
2. Ensure `css/base.css` is loaded first
3. Clear browser cache

## 📞 Support

For technical issues with the website:
- Check the [Issues](https://github.com/YOUR-USERNAME/bbbcmolino-website/issues) section
- Create a new issue with details

For church-related inquiries:
- Visit: [www.bbbcmolino.org](https://www.bbbcmolino.org)
- Location: Magdiwang Road, Molino 2, Bacoor, 4102 Cavite

## 📄 License

This website is property of Berean Bible Baptist Church Molino.

---

**Built with ❤️ for BBBC Molino**

*Last Updated: October 2025*