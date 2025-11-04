// ========== BASE JAVASCRIPT (Used on all pages) ==========

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (!link.classList.contains('dropbtn')) {
            document.getElementById('navLinks').classList.remove('active');
        }
    });
});

// Handle dropdown on mobile
const dropdownBtns = document.querySelectorAll('.dropdown .dropbtn');
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            this.parentElement.classList.toggle('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !this.classList.contains('dropbtn')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Header scroll effect
const header = document.getElementById('header');
if (header && !header.classList.contains('solid')) {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Disable right-click on images and videos
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
    }
});

// Disable drag on images and videos
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
    }
});

// Disable keyboard shortcuts for saving
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
    }
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
});

// ========== LIVE DATE AND TIME (Manila, Philippines) ==========
function updateDateTime() {
    const now = new Date();
    
    const dateOptions = { 
        timeZone: 'Asia/Manila',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const dateStr = now.toLocaleDateString('en-PH', dateOptions);
    
    const timeOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const timeStr = now.toLocaleTimeString('en-PH', timeOptions);
    
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    
    if (dateElement) dateElement.textContent = dateStr;
    if (timeElement) timeElement.textContent = timeStr;
}

updateDateTime();
setInterval(updateDateTime, 1000);


// Automatically load latest posts from Blogger
fetch("https://api.rss2json.com/v1/api.json?rss_url=https://theword.bbbcmolino.org/feeds/posts/default?alt=rss")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("blog-feed");

    if (!data.items || !Array.isArray(data.items)) {
      throw new Error("Feed not loaded properly.");
    }

    const entries = data.items.slice(0, 6);
    let html = '';

    entries.forEach(entry => {
      const title = entry.title || "Untitled";
      const link = entry.link || "#";
      const published = entry.pubDate
        ? new Date(entry.pubDate).toLocaleDateString('en-PH', { year: 'numeric', month: 'long', day: 'numeric' })
        : "Unknown date";
      const summary = entry.description
        ? entry.description.replace(/<[^>]+>/g, '').slice(0, 180) + '...'
        : "No description available.";
      const thumbnail = entry.thumbnail || "images/sermons/default.jpg";

      html += `
        <div class="sermon-card">
          <div class="sermon-thumbnail">
            <img src="${thumbnail}" alt="${title}">
          </div>
          <div class="sermon-info">
            <h4>${title}</h4>
            <div class="sermon-meta">
              <span>📅 ${published}</span>
            </div>
            <p class="sermon-description">${summary}</p>
            <div class="sermon-actions">
              <a href="${link}" target="_blank" class="btn btn-primary">📖 Read More</a>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  })
  .catch(err => {
    console.error("Error loading blog feed:", err);
    document.getElementById("blog-feed").innerHTML =
      "<p style='color:red;'>Unable to load preachings at the moment. Please try again later.</p>";
  });