// ========== BLOGGER FEED LOADER ==========

// Automatically load latest posts from Blogger
function loadBloggerFeed() {
  const container = document.getElementById("blog-feed");
  
  if (!container) return; // Exit if blog-feed element doesn't exist
  
  fetch("https://api.rss2json.com/v1/api.json?rss_url=https://theword.bbbcmolino.org/feeds/posts/default?alt=rss")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      if (!data.items || !Array.isArray(data.items)) {
        throw new Error("Feed not loaded properly.");
      }

      // Get latest 6 posts
      const entries = data.items.slice(0, 6);
      
      if (entries.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <div class="empty-icon">📚</div>
            <h3>No Preachings Yet</h3>
            <p>Check back soon for our latest biblical teachings and sermons.</p>
          </div>
        `;
        return;
      }

      let html = '';

      entries.forEach(entry => {
        const title = entry.title || "Untitled";
        const link = entry.link || "#";
        const published = entry.pubDate
          ? new Date(entry.pubDate).toLocaleDateString('en-PH', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          : "Unknown date";
        
        // Get thumbnail with higher resolution and better fallbacks
        let thumbnail = "images/logo/church-logo.png";
        
        // Try to get the best quality image with multiple fallback methods
        if (entry.thumbnail) {
          // Replace Blogger thumbnail size parameters for higher quality
          thumbnail = entry.thumbnail
            .replace(/\/s72-c/, '/s600')  // Replace small thumbnail with larger
            .replace(/\/s\d+-c/, '/s600') // Replace any sized thumbnail
            .replace(/\/w\d+-h\d+/, '/s600'); // Replace width-height format
        } else if (entry.enclosure && entry.enclosure.link) {
          thumbnail = entry.enclosure.link;
        } else if (entry.content) {
          // Try to extract first image from content
          const imgMatch = entry.content.match(/<img[^>]+src=["']([^"']+)["']/);
          if (imgMatch && imgMatch[1]) {
            thumbnail = imgMatch[1]
              .replace(/\/s72-c/, '/s600')
              .replace(/\/s\d+-c/, '/s600')
              .replace(/\/w\d+-h\d+/, '/s600');
          }
        } else if (entry.description) {
          // Last resort: try description field
          const imgMatch = entry.description.match(/<img[^>]+src=["']([^"']+)["']/);
          if (imgMatch && imgMatch[1]) {
            thumbnail = imgMatch[1]
              .replace(/\/s72-c/, '/s600')
              .replace(/\/s\d+-c/, '/s600')
              .replace(/\/w\d+-h\d+/, '/s600');
          }
        }

        html += `
          <div class="sermon-card">
            <div class="sermon-thumbnail">
              <img 
                src="${thumbnail}" 
                alt="${title}" 
                loading="lazy"
                onload="this.style.opacity='1'"
                onerror="this.onerror=null; this.src='images/sermons/default.jpg'; this.style.opacity='1';"
              >
              <div class="sermon-badge">New</div>
            </div>
            <div class="sermon-info">
              <h4>${title}</h4>
              <div class="sermon-meta">
                <span>📅 ${published}</span>
              </div>
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
      container.innerHTML = `
        <div class="error-state">
          <div class="error-icon">⚠️</div>
          <h3>Unable to Load Preachings</h3>
          <p>We're having trouble loading the latest preachings. Please try again later or visit our blog directly.</p>
          <a href="https://theword.bbbcmolino.org" target="_blank" class="btn btn-primary">Visit Blog</a>
        </div>
      `;
    });
}

// Load feed when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadBloggerFeed);
} else {
  loadBloggerFeed();
}

// Optional: Reload feed every 5 minutes to get new posts
setInterval(loadBloggerFeed, 300000);