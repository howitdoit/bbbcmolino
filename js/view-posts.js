// ========== VIEW POSTS (READ-ONLY) ==========

// Storage Keys for different content types
const BLOG_STORAGE_KEY = 'bbbc_blog_posts';
const BIBLE_CALENDAR_KEY = 'bbbc_bible_calendar';
const DISCIPLESHIP_KEY = 'bbbc_discipleship';
const DAILY_JOURNAL_KEY = 'bbbc_daily_journal';
const SUNDAY_SCHOOL_KEY = 'bbbc_sunday_school';

// Pagination settings
const POSTS_PER_PAGE = 6;
let currentPage = 1;

// Initialize view page
document.addEventListener('DOMContentLoaded', function() {
    // Get page from URL parameter if exists
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('page');
    if (pageParam) {
        currentPage = parseInt(pageParam) || 1;
    }
    loadAllContent();
});

// Get all posts from localStorage
function getAllPosts() {
    const postsJson = localStorage.getItem(BLOG_STORAGE_KEY);
    if (!postsJson) {
        return [];
    }
    try {
        return JSON.parse(postsJson);
    } catch (e) {
        console.error('Error parsing blog posts:', e);
        return [];
    }
}

// Get content by type
function getContentByType(type) {
    const key = getStorageKey(type);
    const contentJson = localStorage.getItem(key);
    if (!contentJson) {
        return [];
    }
    try {
        return JSON.parse(contentJson);
    } catch (e) {
        console.error(`Error parsing ${type}:`, e);
        return [];
    }
}

// Get storage key by type
function getStorageKey(type) {
    const keys = {
        'preachings': BLOG_STORAGE_KEY,
        'bible-calendar': BIBLE_CALENDAR_KEY,
        'discipleship': DISCIPLESHIP_KEY,
        'daily-journal': DAILY_JOURNAL_KEY,
        'sunday-school': SUNDAY_SCHOOL_KEY
    };
    return keys[type] || BLOG_STORAGE_KEY;
}

// Load and display all content
function loadAllContent() {
    loadPreachings(currentPage);
    loadBibleCalendar();
    loadDiscipleship();
    loadDailyJournal();
    loadSundaySchool();
}

// Load and display preachings with pagination
function loadPreachings(page = 1) {
    const posts = getAllPosts();
    const container = document.getElementById('preachings-container');
    const paginationContainer = document.getElementById('preachings-pagination');

    if (posts.length === 0) {
        container.innerHTML = `
            <div class="empty-posts">
                <div class="empty-posts-icon">📚</div>
                <h3>No preachings yet</h3>
                <p>Check back soon for our latest biblical teachings and sermons.</p>
            </div>
        `;
        if (paginationContainer) paginationContainer.innerHTML = '';
        return;
    }

    // Sort posts by published date (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.published) - new Date(a.published));

    // Calculate pagination
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    let html = '';
    paginatedPosts.forEach(post => {
        const published = new Date(post.published).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        let fileLink = '';
        if (post.file) {
            const fileUrl = post.file.url || post.file.data || '#';
            const fileName = post.file.name || 'Download File';
            fileLink = `<a href="${escapeHtml(fileUrl)}" target="_blank" class="post-link">📎 ${escapeHtml(fileName)}</a>`;
        }

        html += `
            <div class="post-item">
                <div class="post-info">
                    <h3>${escapeHtml(post.title)}</h3>
                    <p>📅 Published: ${published}</p>
                    ${post.content ? `<div class="post-content">${escapeHtml(post.content)}</div>` : ''}
                    ${post.image && post.image !== 'images/logo/church-logo.png' ? `<img src="${escapeHtml(post.image)}" alt="${escapeHtml(post.title)}" class="post-image" onerror="this.src='images/logo/church-logo.png'">` : `<img src="images/logo/church-logo.png" alt="${escapeHtml(post.title)}" class="post-image">`}
                    ${fileLink}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Render pagination
    if (paginationContainer && totalPages > 1) {
        renderPagination(paginationContainer, page, totalPages, 'preachings');
    } else if (paginationContainer) {
        paginationContainer.innerHTML = '';
    }
}

// Render pagination controls
function renderPagination(container, currentPage, totalPages, section) {
    let paginationHtml = '';

    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }

    paginationHtml += '<div class="pagination">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHtml += `<button onclick="goToPage('${section}', ${currentPage - 1})" class="pagination-btn">« Previous</button>`;
    } else {
        paginationHtml += `<button disabled class="pagination-btn">« Previous</button>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            paginationHtml += `<button onclick="goToPage('${section}', ${i})" class="pagination-btn ${i === currentPage ? 'active' : ''}">${i}</button>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHtml += `<span class="pagination-ellipsis">...</span>`;
        }
    }

    // Next button
    if (currentPage < totalPages) {
        paginationHtml += `<button onclick="goToPage('${section}', ${currentPage + 1})" class="pagination-btn">Next »</button>`;
    } else {
        paginationHtml += `<button disabled class="pagination-btn">Next »</button>`;
    }

    paginationHtml += '</div>';
    container.innerHTML = paginationHtml;
}

// Navigate to specific page
window.goToPage = function(section, page) {
    currentPage = page;
    
    // Update URL without reload
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    window.history.pushState({}, '', url);
    
    // Scroll to top of section
    const sectionElement = document.querySelector('.ministry-highlight:first-of-type');
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    loadPreachings(page);
};

// Load and display Bible Reading Calendar
function loadBibleCalendar() {
    const items = getContentByType('bible-calendar');
    const container = document.getElementById('bible-calendar-container');
    displayResourceItems(items, container, 'Bible Reading Calendar');
}

// Load and display Discipleship Lessons
function loadDiscipleship() {
    const items = getContentByType('discipleship');
    const container = document.getElementById('discipleship-container');
    displayResourceItems(items, container, 'Discipleship Lesson');
}

// Load and display Daily Journal
function loadDailyJournal() {
    const items = getContentByType('daily-journal');
    const container = document.getElementById('daily-journal-container');
    displayResourceItems(items, container, 'Berean Daily Journal');
}

// Load and display Sunday School Materials
function loadSundaySchool() {
    const items = getContentByType('sunday-school');
    const container = document.getElementById('sunday-school-container');
    displayResourceItems(items, container, 'Sunday School Materials');
}

// Display resource items (for file-based content)
function displayResourceItems(items, container, title) {
    if (items.length === 0) {
        container.innerHTML = `
            <div class="empty-posts">
                <div class="empty-posts-icon">📄</div>
                <h3>No ${title} files yet</h3>
                <p>Files will appear here once uploaded.</p>
            </div>
        `;
        return;
    }

    let html = '';
    items.forEach(item => {
        const fileUrl = item.file?.url || item.file?.data || '#';
        const fileName = item.file?.name || item.title || 'Download File';
        const description = item.description || '';
        const uploaded = item.uploaded ? new Date(item.uploaded).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : '';

        html += `
            <div class="post-item">
                <div class="post-info">
                    <h3>${escapeHtml(item.title || fileName)}</h3>
                    ${uploaded ? `<p>📅 Uploaded: ${uploaded}</p>` : ''}
                    ${description ? `<div class="post-content">${escapeHtml(description)}</div>` : ''}
                    <a href="${escapeHtml(fileUrl)}" target="_blank" class="post-link">📎 Download ${escapeHtml(fileName)}</a>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
