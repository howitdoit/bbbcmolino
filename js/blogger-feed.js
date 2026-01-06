// ========== BLOG FEED LOADER ==========

// Blog Storage Key (must match blog-admin.js)
const BLOG_STORAGE_KEY = 'bbbc_blog_posts';

// Load blog posts from localStorage
function loadBloggerFeed() {
  const container = document.getElementById("blog-feed");
  
  if (!container) return; // Exit if blog-feed element doesn't exist
  
  try {
    // Get posts from localStorage
    const postsJson = localStorage.getItem(BLOG_STORAGE_KEY);
    let posts = [];
    
    if (postsJson) {
      posts = JSON.parse(postsJson);
    }
    
    // Get latest 6 posts
    const entries = posts.slice(0, 6);
    
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
        const published = entry.published
          ? new Date(entry.published).toLocaleDateString('en-PH', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })
          : "Unknown date";
        
        // Use stored image or default
        const thumbnail = entry.image || "images/logo/church-logo.png";
        
        // Build action buttons
        let actionButtons = '';
        if (entry.file) {
          const fileUrl = getFileUrl(entry.file);
          const fileName = entry.file.name || 'Download File';
          actionButtons += `<a href="${escapeHtml(fileUrl)}" target="_blank" class="btn btn-primary" style="margin-right: 0.5rem;">📎 ${escapeHtml(fileName)}</a>`;
        }
        // Always show Read More button that routes to view-posts.html
        actionButtons += `<a href="view-posts.html" class="btn btn-primary">📖 Read More</a>`;

        html += `
          <div class="sermon-card">
            <div class="sermon-thumbnail">
              <img 
                src="${escapeHtml(thumbnail)}" 
                alt="${escapeHtml(title)}" 
                loading="lazy"
                onload="this.parentElement.classList.add('loaded');this.style.opacity='1'"
                onerror="this.onerror=null; this.src='images/logo/church-logo.png'; this.style.opacity='1';"
              >
              <div class="sermon-badge">New</div>
            </div>
            <div class="sermon-info">
              <h4>${escapeHtml(title)}</h4>
              <div class="sermon-meta">
                <span>📅 ${published}</span>
              </div>
              <div class="sermon-actions">
                ${actionButtons}
              </div>
            </div>
          </div>
        `;
      });

    container.innerHTML = html;
  } catch (err) {
    console.error("Error loading blog feed:", err);
    container.innerHTML = `
      <div class="error-state">
        <div class="error-icon">⚠️</div>
        <h3>Unable to Load Preachings</h3>
        <p>We're having trouble loading the latest preachings. Please try again later.</p>
      </div>
    `;
  }
}

// Get file URL for download
function getFileUrl(file) {
  if (!file) return '#';
  if (file.url) return escapeHtml(file.url);
  if (file.data) return file.data; // Base64 data URL
  return '#';
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Load feed when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadBloggerFeed);
} else {
  loadBloggerFeed();
}

// Reload feed when storage changes (if admin page is open)
window.addEventListener('storage', function(e) {
  if (e.key === BLOG_STORAGE_KEY) {
    loadBloggerFeed();
  }
});