# Berean Bible Baptist Church Molino - Official Website

Welcome to the official website repository for Berean Bible Baptist Church (BBBC) Molino. This is a modern, responsive church landing page built with HTML, CSS, and JavaScript.

## 🌐 Live Website

**Domain:** [www.bbbcmolino.org](https://www.bbbcmolino.org)

## 📁 Project Structure

```
bbbcmolino-website/
│
├── index.html          # Main HTML file
├── homepage.css          # All styling and animations
├── homepage.js           # JavaScript functionality
└── README.md          # This file
```

## 🚀 Deployment Setup (GitHub Pages)

### Prerequisites
- GitHub account
- Git installed on your computer
- Domain `bbbcmolino.org` already owned

### Step 1: Initial Repository Setup

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New Repository"
   - Name it: `bbbcmolino-website` (or any name you prefer)
   - Keep it Public
   - Don't initialize with README (we already have one)
   - Click "Create Repository"

2. **Push your code to GitHub:**
   ```bash
   # Navigate to your project folder
   cd /path/to/your/project

   # Initialize git (if not already done)
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

#### On Your Domain Registrar (where you bought bbbcmolino.org):

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

**Note:** DNS changes can take 24-48 hours to propagate fully, but often work within a few hours.

### Step 4: Verify Setup

1. Wait 10-15 minutes after DNS configuration
2. Visit `https://bbbcmolino.org`
3. Your website should now be live!

## 🔄 Automatic Updates

Once set up, your website will automatically update whenever you push changes to GitHub:

```bash
# Make your changes to index.html, homepage.css, or homepage.js

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
- **Text content**: Edit `index.html`
- **Styling/colors**: Edit `homepage.css`
- **Functionality**: Edit `homepage.js`

### Common Updates:

**Change service times:**
```html
<!-- In index.html, find the #visit section -->
<p>Sunday Morning: 9:00 AM & 11:00 AM<br>Sunday Evening: 6:00 PM<br>Wednesday: 7:00 PM</p>
```

**Change colors:**
```css
/* In homepage.css */
/* Blue: #1e3c72, #2a5298 */
/* Yellow: #ffd700 */
```

**Add new section:**
1. Copy an existing `<section>` in `index.html`
2. Change the `id` and content
3. Add link in navigation

## 🎨 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dropdown menu for Ministries section
- ✅ Smooth scrolling navigation
- ✅ Animated hero section
- ✅ Blue and yellow color scheme
- ✅ Modern card-based layout
- ✅ Fast loading times

## 🛠️ Troubleshooting

### Website not updating after push?
1. Check GitHub Actions tab for build status
2. Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
3. Wait 2-3 minutes for deployment

### Domain not working?
1. Verify DNS records are correct
2. Wait up to 48 hours for DNS propagation
3. Check GitHub Pages status in Settings > Pages

### Mobile menu not working?
1. Ensure all three files (HTML, CSS, JS) are in the same folder
2. Check browser console for JavaScript errors
3. Make sure `script.js` is linked in `index.html`

## 📞 Support

For technical issues with the website:
- Check the [Issues](https://github.com/YOUR-USERNAME/bbbcmolino-website/issues) section
- Create a new issue with details

For church-related inquiries:
- Visit: [www.bbbcmolino.org](https://www.bbbcmolino.org)
- Email: [Contact through website]

## 📄 License

This website is property of Berean Bible Baptist Church Molino.

---

**Built with ❤️ for BBBC Molino**

*Last Updated: October 2025*