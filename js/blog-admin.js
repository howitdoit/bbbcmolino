// ========== BLOG ADMIN MANAGER ==========

// Blog Storage Keys
const BLOG_STORAGE_KEY = 'bbbc_blog_posts';
const BIBLE_CALENDAR_KEY = 'bbbc_bible_calendar';
const DISCIPLESHIP_KEY = 'bbbc_discipleship';
const DAILY_JOURNAL_KEY = 'bbbc_daily_journal';
const SUNDAY_SCHOOL_KEY = 'bbbc_sunday_school';
// Admin Password Key (change this password!)
const ADMIN_PASSWORD_KEY = 'bbbc_admin_password';
const DEFAULT_ADMIN_PASSWORD = 'admin123'; // Change this to your desired password

// Check if user is authenticated
function isAuthenticated() {
    const auth = sessionStorage.getItem('bbbc_admin_auth');
    return auth === 'true';
}

// Set authentication
function setAuthenticated(value) {
    sessionStorage.setItem('bbbc_admin_auth', value ? 'true' : 'false');
}

// Check password and show admin interface
function checkPassword() {
    const passwordInput = document.getElementById('admin-password');
    const enteredPassword = passwordInput.value;
    
    // Get stored password or use default
    const storedPassword = localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;
    
    if (enteredPassword === storedPassword) {
        setAuthenticated(true);
        showAdminInterface();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Incorrect Password',
            text: 'Please try again.',
            confirmButtonColor: '#6495ED'
        });
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// Show admin interface
function showAdminInterface() {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('admin-container').classList.remove('hidden');
    loadPosts();
    loadAllResources();
    setupForm();
}

// Logout (global function for onclick)
window.logout = function() {
    setAuthenticated(false);
    document.getElementById('login-container').classList.remove('hidden');
    document.getElementById('admin-container').classList.add('hidden');
    document.getElementById('admin-password').value = '';
};

// Check password (global function for onclick)
window.checkPassword = checkPassword;

// Initialize admin page
document.addEventListener('DOMContentLoaded', function() {
    // Check if already authenticated
    if (isAuthenticated()) {
        showAdminInterface();
    } else {
        // Focus on password input
        document.getElementById('admin-password').focus();
        // Allow Enter key to submit
        document.getElementById('admin-password').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });
    }
});

// Setup form submission
function setupForm() {
    // Main blog form
    const form = document.getElementById('blog-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            savePost();
        });
    }
    
    // Resource forms
    setupResourceForm('bible-calendar', BIBLE_CALENDAR_KEY);
    setupResourceForm('discipleship', DISCIPLESHIP_KEY);
    setupResourceForm('daily-journal', DAILY_JOURNAL_KEY);
    setupResourceForm('sunday-school', SUNDAY_SCHOOL_KEY);
    
    // Handle file input change
    const fileInput = document.getElementById('post-file-input');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            handleFileSelect(e.target.files[0]);
        });
    }
    
    // Handle image input change
    const imageInput = document.getElementById('post-image-input');
    if (imageInput) {
        imageInput.addEventListener('change', function(e) {
            handleImageSelect(e.target.files[0]);
        });
    }
    
    // Handle image URL input change for preview
    const imageUrlInput = document.getElementById('post-image');
    if (imageUrlInput) {
        imageUrlInput.addEventListener('input', function(e) {
            if (e.target.value && !document.getElementById('post-image-input').files[0]) {
                showImagePreview(e.target.value);
            }
        });
    }
}

// Handle file selection
function handleFileSelect(file) {
    if (!file) return;
    
    const fileInfo = document.getElementById('file-info');
    const fileName = document.getElementById('file-name');
    const fileSize = document.getElementById('file-size');
    
    // Check file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        Swal.fire({
            icon: 'error',
            title: 'File Too Large',
            text: 'File is too large. Maximum size is 5MB. Please use Google Drive link instead.',
            confirmButtonColor: '#6495ED'
        });
        document.getElementById('post-file-input').value = '';
        fileInfo.style.display = 'none';
        return;
    }
    
    // Show file info
    fileName.textContent = file.name;
    fileSize.textContent = formatFileSize(file.size);
    fileInfo.style.display = 'block';
    
    // Clear the URL input if file is selected
    document.getElementById('post-file').value = '';
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Handle image selection
function handleImageSelect(file) {
    if (!file) return;
    
    // Check if it's an image
    if (!file.type.startsWith('image/')) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid File Type',
            text: 'Please select an image file (JPG, PNG, GIF, etc.)',
            confirmButtonColor: '#6495ED'
        });
        document.getElementById('post-image-input').value = '';
        return;
    }
    
    // Check file size (2MB limit for images)
    const maxSize = 2 * 1024 * 1024; // 2MB
    if (file.size > maxSize) {
        Swal.fire({
            icon: 'error',
            title: 'Image Too Large',
            text: 'Image is too large. Maximum size is 2MB. Please use Google Drive link instead.',
            confirmButtonColor: '#6495ED'
        });
        document.getElementById('post-image-input').value = '';
        return;
    }
    
    // Show preview
    const reader = new FileReader();
    reader.onload = function(e) {
        showImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
    
    // Clear the URL input if file is selected
    document.getElementById('post-image').value = '';
}

// Show image preview
function showImagePreview(src) {
    const preview = document.getElementById('image-preview');
    const previewImg = document.getElementById('image-preview-img');
    if (preview && previewImg) {
        previewImg.src = src;
        preview.style.display = 'block';
    }
}

// Clear image input
window.clearImageInput = function() {
    document.getElementById('post-image-input').value = '';
    document.getElementById('post-image').value = '';
    document.getElementById('image-preview').style.display = 'none';
};

// Clear file input
window.clearFileInput = function() {
    document.getElementById('post-file-input').value = '';
    document.getElementById('post-file').value = '';
    document.getElementById('file-info').style.display = 'none';
};

// Setup resource form (for Bible Calendar, Discipleship, etc.)
function setupResourceForm(formId, storageKey) {
    const form = document.getElementById(`${formId}-form`);
    if (!form) return;
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        await saveResource(formId, storageKey);
    });
    
    // Handle file input
    const fileInput = document.getElementById(`${formId}-file-input`);
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            handleResourceFileSelect(e.target.files[0], formId);
        });
    }
}

// Handle resource file select
function handleResourceFileSelect(file, formId) {
    if (!file) return;
    
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        Swal.fire({
            icon: 'error',
            title: 'File Too Large',
            text: 'File size must be less than 5MB.',
            confirmButtonColor: '#6495ED'
        });
        document.getElementById(`${formId}-file-input`).value = '';
        return;
    }
    
    // Show file info
    const fileUrlInput = document.getElementById(`${formId}-file`);
    if (fileUrlInput) {
        fileUrlInput.value = file.name;
    }
}

// Clear resource file input
window.clearResourceFileInput = function(formId) {
    const fileInput = document.getElementById(`${formId}-file-input`);
    const fileUrlInput = document.getElementById(`${formId}-file`);
    
    if (fileInput) fileInput.value = '';
    if (fileUrlInput) fileUrlInput.value = '';
};

// Save resource (Bible Calendar, Discipleship, etc.)
async function saveResource(formId, storageKey) {
    const titleInput = document.getElementById(`${formId}-title`);
    const descriptionInput = document.getElementById(`${formId}-description`);
    const fileInput = document.getElementById(`${formId}-file-input`);
    const fileUrlInput = document.getElementById(`${formId}-file`);
    
    const title = titleInput?.value.trim();
    const description = descriptionInput?.value.trim();
    const fileUrl = fileUrlInput?.value.trim();
    const selectedFile = fileInput?.files[0];
    
    if (!title) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please enter a title.',
            confirmButtonColor: '#6495ED'
        });
        return;
    }
    
    if (!selectedFile && !fileUrl) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please upload a file or provide a file URL.',
            confirmButtonColor: '#6495ED'
        });
        return;
    }
    
    // Handle file - prioritize uploaded file over URL
    let fileData = null;
    
    if (selectedFile) {
        try {
            const base64Data = await fileToBase64(selectedFile);
            fileData = {
                name: selectedFile.name,
                type: selectedFile.type,
                size: selectedFile.size,
                data: base64Data
            };
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'File Error',
                text: 'Error processing file. Please try again.',
                confirmButtonColor: '#6495ED'
            });
            return;
        }
    } else if (fileUrl) {
        fileData = {
            name: fileUrl.split('/').pop() || 'Download File',
            url: fileUrl
        };
    }
    
    // Create resource item
    const resourceItem = {
        id: Date.now().toString(),
        title: title,
        description: description || '',
        file: fileData,
        uploaded: new Date().toISOString()
    };
    
    // Get existing resources
    const existingJson = localStorage.getItem(storageKey);
    let resources = [];
    if (existingJson) {
        try {
            resources = JSON.parse(existingJson);
        } catch (e) {
            console.error('Error parsing resources:', e);
        }
    }
    
    // Add new resource
    resources.unshift(resourceItem);
    
    // Save to localStorage
    try {
        localStorage.setItem(storageKey, JSON.stringify(resources));
        
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Resource saved successfully.',
            confirmButtonColor: '#6495ED',
            timer: 2000
        });
        
        // Reset form
        if (titleInput) titleInput.value = '';
        if (descriptionInput) descriptionInput.value = '';
        if (fileInput) fileInput.value = '';
        if (fileUrlInput) fileUrlInput.value = '';
        
        // Reload resources to show new item
        loadAllResources();
        
    } catch (e) {
        console.error('Error saving resource:', e);
        Swal.fire({
            icon: 'error',
            title: 'Save Error',
            text: 'Error saving resource. Please check browser storage.',
            confirmButtonColor: '#6495ED'
        });
    }
}

// Load all resources (for admin display)
function loadAllResources() {
    loadResourceList('bible-calendar', BIBLE_CALENDAR_KEY, 'bible-calendar-container', 'bible-calendar-count');
    loadResourceList('discipleship', DISCIPLESHIP_KEY, 'discipleship-container', 'discipleship-count');
    loadResourceList('daily-journal', DAILY_JOURNAL_KEY, 'daily-journal-container', 'daily-journal-count');
    loadResourceList('sunday-school', SUNDAY_SCHOOL_KEY, 'sunday-school-container', 'sunday-school-count');
}

// Load and display resource list
function loadResourceList(formId, storageKey, containerId, countId) {
    const container = document.getElementById(containerId);
    const countElement = document.getElementById(countId);
    
    if (!container) return;
    
    const resources = getResourcesByType(storageKey);
    
    // Update count
    if (countElement) {
        countElement.textContent = `${resources.length} file${resources.length !== 1 ? 's' : ''}`;
    }
    
    if (resources.length === 0) {
        container.innerHTML = `
            <div class="empty-posts">
                <div class="empty-posts-icon">📄</div>
                <h3>No files uploaded yet</h3>
                <p>Files will appear here once uploaded.</p>
            </div>
        `;
        return;
    }
    
    let html = '';
    resources.forEach(item => {
        const uploaded = item.uploaded ? new Date(item.uploaded).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : '';
        const fileName = item.file?.name || 'Download File';
        
        html += `
            <div class="post-item">
                <div class="post-info">
                    <h3>${escapeHtml(item.title)}</h3>
                    ${uploaded ? `<p>📅 Uploaded: ${uploaded}</p>` : ''}
                    ${item.description ? `<p style="color: #666; margin-top: 0.5rem;">${escapeHtml(item.description)}</p>` : ''}
                    <p style="color: #6495ED; margin-top: 0.5rem; font-weight: 600;">📎 ${escapeHtml(fileName)}</p>
                </div>
                <div class="post-actions">
                    <button onclick="confirmDeleteResource('${formId}', '${item.id}', '${storageKey}')" class="btn-small btn-delete">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Get resources by type
function getResourcesByType(storageKey) {
    const resourcesJson = localStorage.getItem(storageKey);
    if (!resourcesJson) {
        return [];
    }
    try {
        return JSON.parse(resourcesJson);
    } catch (e) {
        console.error('Error parsing resources:', e);
        return [];
    }
}

// Save resources by type
function saveResourcesByType(storageKey, resources) {
    try {
        localStorage.setItem(storageKey, JSON.stringify(resources));
        return true;
    } catch (e) {
        console.error('Error saving resources:', e);
        return false;
    }
}

// Confirm delete resource with SweetAlert2
window.confirmDeleteResource = function(formId, resourceId, storageKey) {
    const resources = getResourcesByType(storageKey);
    const resource = resources.find(r => r.id === resourceId);
    
    if (!resource) {
        Swal.fire({
            icon: 'error',
            title: 'File Not Found',
            text: 'The file you are trying to delete does not exist.',
            confirmButtonColor: '#6495ED'
        });
        return;
    }
    
    const isMobile = window.innerWidth <= 768;
    const modalWidth = isMobile ? '95%' : '500px';
    
    // First warning
    Swal.fire({
        title: '⚠️ Warning!',
        html: `
            <div style="text-align: left;">
                <p style="margin-bottom: 1rem; font-size: ${isMobile ? '0.95rem' : '1rem'};">
                    You are about to delete a file. This action is <strong style="color: #ff6b6b;">permanent</strong> and cannot be undone.
                </p>
                <div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border: 2px solid #ff6b6b; margin-bottom: 1rem;">
                    <div style="font-weight: 600; color: #1e3c72; margin-bottom: 0.5rem; font-size: ${isMobile ? '0.95rem' : '1rem'};">File to delete:</div>
                    <div style="color: #333; font-size: ${isMobile ? '0.9rem' : '1rem'};">${escapeHtml(resource.title)}</div>
                    <div style="color: #666; font-size: ${isMobile ? '0.85rem' : '0.9rem'}; margin-top: 0.5rem;">${escapeHtml(resource.file?.name || '')}</div>
                </div>
                <p style="color: #ff6b6b; font-weight: 700; font-size: ${isMobile ? '0.9rem' : '1rem'}; text-align: center; padding: 0.75rem; background: #fff5f5; border-radius: 8px;">
                    ⚠️ This action cannot be undone! ⚠️
                </p>
            </div>
        `,
        icon: 'warning',
        iconColor: '#ff6b6b',
        showCancelButton: true,
        confirmButtonText: '🗑️ Yes, Delete It',
        cancelButtonText: '❌ Cancel',
        confirmButtonColor: '#ff6b6b',
        cancelButtonColor: '#999',
        reverseButtons: true,
        width: modalWidth,
        customClass: {
            popup: 'swal2-popup-mobile',
            container: 'swal2-container-mobile'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Second confirmation
            Swal.fire({
                title: '⚠️ Final Confirmation',
                html: `
                    <div style="text-align: center;">
                        <p style="margin-bottom: 1rem; font-size: ${isMobile ? '0.95rem' : '1rem'}; font-weight: 600;">
                            Are you absolutely sure you want to delete this file?
                        </p>
                        <div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border: 2px solid #ff6b6b; margin-bottom: 1rem;">
                            <div style="color: #1e3c72; font-weight: 600; font-size: ${isMobile ? '0.9rem' : '1rem'};">${escapeHtml(resource.title)}</div>
                        </div>
                        <p style="color: #ff6b6b; font-weight: 700; font-size: ${isMobile ? '0.85rem' : '0.95rem'};">
                            This will permanently remove the file from the system!
                        </p>
                    </div>
                `,
                icon: 'error',
                iconColor: '#ff6b6b',
                showCancelButton: true,
                confirmButtonText: '🗑️ Delete Forever',
                cancelButtonText: '❌ No, Keep It',
                confirmButtonColor: '#ff6b6b',
                cancelButtonColor: '#6495ED',
                reverseButtons: true,
                width: modalWidth,
                customClass: {
                    popup: 'swal2-popup-mobile',
                    container: 'swal2-container-mobile'
                }
            }).then((finalResult) => {
                if (finalResult.isConfirmed) {
                    deleteResource(formId, resourceId, storageKey);
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Cancelled',
                        text: 'The file was not deleted.',
                        confirmButtonColor: '#6495ED',
                        timer: 2000
                    });
                }
            });
        }
    });
};

// Delete a resource
function deleteResource(formId, resourceId, storageKey) {
    const resources = getResourcesByType(storageKey);
    const filtered = resources.filter(r => r.id !== resourceId);
    
    if (saveResourcesByType(storageKey, filtered)) {
        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The file has been deleted successfully.',
            confirmButtonColor: '#6495ED',
            timer: 2000
        });
        loadAllResources();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to delete file. Please try again.',
            confirmButtonColor: '#6495ED'
        });
    }
}

// Convert file to base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

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

// Save all posts to localStorage
function saveAllPosts(posts) {
    try {
        localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts));
        return true;
    } catch (e) {
        console.error('Error saving blog posts:', e);
        Swal.fire({
            icon: 'error',
            title: 'Save Error',
            text: 'Error saving post. Please check browser storage.',
            confirmButtonColor: '#6495ED'
        });
        return false;
    }
}

// Save or update a post
async function savePost() {
    const id = document.getElementById('post-id').value;
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
    const imageUrl = document.getElementById('post-image').value.trim();
    const imageInput = document.getElementById('post-image-input');
    const fileInput = document.getElementById('post-file-input');
    const fileUrl = document.getElementById('post-file').value.trim();

    if (!title || !content) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please fill in all required fields (Title and Content).',
            confirmButtonColor: '#6495ED'
        });
        return;
    }

    // Handle image - prioritize uploaded file over URL
    let image = 'images/logo/church-logo.png';
    const selectedImage = imageInput.files[0];
    
    if (selectedImage) {
        // Convert image to base64
        try {
            image = await fileToBase64(selectedImage);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Image Error',
                text: 'Error processing image. Please try again.',
                confirmButtonColor: '#6495ED'
            });
            return;
        }
    } else if (imageUrl) {
        image = imageUrl;
    }

    // Handle file attachment
    let fileAttachment = null;
    const selectedFile = fileInput.files[0];
    
    if (selectedFile) {
        // Convert file to base64
        try {
            const base64 = await fileToBase64(selectedFile);
            fileAttachment = {
                name: selectedFile.name,
                type: selectedFile.type,
                size: selectedFile.size,
                data: base64
            };
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'File Error',
                text: 'Error processing file. Please try again.',
                confirmButtonColor: '#6495ED'
            });
            return;
        }
    } else if (fileUrl) {
        // Use URL instead
        fileAttachment = {
            url: fileUrl,
            type: 'url'
        };
    }

    const posts = getAllPosts();
    const now = new Date().toISOString();

    if (id) {
        // Update existing post
        const index = posts.findIndex(p => p.id === id);
        if (index !== -1) {
            posts[index] = {
                ...posts[index],
                title,
                content,
                image: image,
                file: fileAttachment || posts[index].file || null,
                updated: now
            };
        }
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Your post has been updated successfully.',
            confirmButtonColor: '#6495ED',
            timer: 2000
        });
    } else {
        // Create new post
        const newPost = {
            id: Date.now().toString(),
            title,
            content,
            image: image,
            file: fileAttachment || null,
            published: now,
            updated: now
        };
        posts.unshift(newPost); // Add to beginning
        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: 'Your post has been added successfully.',
            confirmButtonColor: '#6495ED',
            timer: 2000
        });
    }

    // Sort by published date (newest first)
    posts.sort((a, b) => new Date(b.published) - new Date(a.published));

    if (saveAllPosts(posts)) {
        loadPosts();
        resetForm();
    }
}

// Pagination state
let currentPage = 1;
const postsPerPage = 5;

// Load and display all posts with pagination
function loadPosts(page = 1) {
    const posts = getAllPosts();
    const container = document.getElementById('posts-container');
    const paginationContainer = document.getElementById('pagination-container');
    const postsCount = document.getElementById('posts-count');
    
    // Sort posts by published date (newest first)
    const sortedPosts = [...posts].sort((a, b) => new Date(b.published) - new Date(a.published));

    if (sortedPosts.length === 0) {
        container.innerHTML = `
            <div class="empty-posts">
                <div class="empty-posts-icon">📚</div>
                <h3>No posts yet</h3>
                <p>Add your first post using the form above.</p>
            </div>
        `;
        if (paginationContainer) paginationContainer.innerHTML = '';
        if (postsCount) postsCount.textContent = '0 posts';
        return;
    }

    // Calculate pagination
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (page - 1) * postsPerPage;
    const endIndex = Math.min(startIndex + postsPerPage, sortedPosts.length);
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
    
    // Update posts count with pagination info
    if (postsCount) {
        if (totalPages > 1) {
            postsCount.textContent = `Showing ${startIndex + 1}-${endIndex} of ${sortedPosts.length} posts`;
        } else {
            postsCount.textContent = `${sortedPosts.length} post${sortedPosts.length !== 1 ? 's' : ''}`;
        }
    }
    
    // Update posts count with pagination info
    if (postsCount) {
        if (totalPages > 1) {
            postsCount.textContent = `Showing ${startIndex + 1}-${endIndex} of ${sortedPosts.length} posts`;
        } else {
            postsCount.textContent = `${sortedPosts.length} post${sortedPosts.length !== 1 ? 's' : ''}`;
        }
    }

    let html = '';
    paginatedPosts.forEach(post => {
        const published = new Date(post.published).toLocaleDateString('en-PH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        const hasFile = post.file ? '📎' : '';
        const hasImage = post.image && post.image !== 'images/logo/church-logo.png' ? '🖼️' : '';

        html += `
            <div class="post-item">
                <div class="post-info">
                    <h3>${escapeHtml(post.title)} ${hasImage} ${hasFile}</h3>
                    <p>📅 Published: ${published}</p>
                </div>
                <div class="post-actions">
                    <button class="btn btn-edit btn-small" onclick="openEditModal('${post.id}')">
                        ✏️ Edit
                    </button>
                    <button class="btn btn-delete btn-small" onclick="confirmDeletePost('${post.id}')">
                        🗑️ Delete
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    
    // Render pagination
    if (paginationContainer && totalPages > 1) {
        let paginationHtml = '';
        
        // Previous button
        paginationHtml += `<button onclick="loadPosts(${page - 1})" class="pagination-btn" ${page === 1 ? 'disabled' : ''}>« Previous</button>`;
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - 2 && i <= page + 2)) {
                paginationHtml += `<button onclick="loadPosts(${i})" class="pagination-btn ${i === page ? 'active' : ''}">${i}</button>`;
            } else if (i === page - 3 || i === page + 3) {
                paginationHtml += `<span class="pagination-ellipsis">...</span>`;
            }
        }
        
        // Next button
        paginationHtml += `<button onclick="loadPosts(${page + 1})" class="pagination-btn" ${page === totalPages ? 'disabled' : ''}>Next »</button>`;
        
        paginationContainer.innerHTML = paginationHtml;
    } else if (paginationContainer) {
        paginationContainer.innerHTML = '';
    }
    
    currentPage = page;
}

// Make loadPosts accessible globally for pagination
window.loadPosts = loadPosts;

// Open edit modal with SweetAlert2
window.openEditModal = function(id) {
    const posts = getAllPosts();
    const post = posts.find(p => p.id === id);

    if (!post) {
        Swal.fire({
            icon: 'error',
            title: 'Post Not Found',
            text: 'The post you are trying to edit does not exist.',
            confirmButtonColor: '#6495ED'
        });
        return;
    }

    const published = new Date(post.published).toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Detect mobile screen size
    const isMobile = window.innerWidth <= 768;
    const modalWidth = isMobile ? '95%' : '700px';

    Swal.fire({
        title: '✏️ Edit Post',
        html: `
            <div style="text-align: left; width: 100%;">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #1e3c72; font-size: ${isMobile ? '0.9rem' : '1rem'};">Title *</label>
                    <input id="swal-title" class="swal2-input" value="${escapeHtml(post.title)}" placeholder="Enter post title" required style="width: 100%; font-size: ${isMobile ? '0.9rem' : '1rem'}; padding: ${isMobile ? '0.6rem' : '0.75rem'};">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #1e3c72; font-size: ${isMobile ? '0.9rem' : '1rem'};">Content/Description *</label>
                    <textarea id="swal-content" class="swal2-textarea" placeholder="Enter post content" style="min-height: ${isMobile ? '120px' : '150px'}; width: 100%; font-size: ${isMobile ? '0.9rem' : '1rem'}; padding: ${isMobile ? '0.6rem' : '0.75rem'};" required>${escapeHtml(post.content)}</textarea>
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #1e3c72; font-size: ${isMobile ? '0.9rem' : '1rem'};">Image URL</label>
                    <input id="swal-image" class="swal2-input" value="${post.image && post.image !== 'images/logo/church-logo.png' ? escapeHtml(post.image) : ''}" placeholder="Paste image URL or leave empty" style="width: 100%; font-size: ${isMobile ? '0.9rem' : '1rem'}; padding: ${isMobile ? '0.6rem' : '0.75rem'};">
                    ${post.image && post.image !== 'images/logo/church-logo.png' && !post.image.startsWith('data:') ? `<img src="${escapeHtml(post.image)}" style="max-width: 100%; max-height: ${isMobile ? '120px' : '150px'}; margin-top: 0.5rem; border-radius: 8px; width: 100%; object-fit: contain;" onerror="this.src='images/logo/church-logo.png';">` : `<img src="images/logo/church-logo.png" style="max-width: 100%; max-height: ${isMobile ? '120px' : '150px'}; margin-top: 0.5rem; border-radius: 8px; width: 100%; object-fit: contain;">`}
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: #1e3c72; font-size: ${isMobile ? '0.9rem' : '1rem'};">File URL (Optional)</label>
                    <input id="swal-file" class="swal2-input" value="${post.file && post.file.url ? escapeHtml(post.file.url) : ''}" placeholder="Paste file URL" style="width: 100%; font-size: ${isMobile ? '0.9rem' : '1rem'}; padding: ${isMobile ? '0.6rem' : '0.75rem'};">
                </div>
                <div style="font-size: ${isMobile ? '0.75rem' : '0.85rem'}; color: #666; margin-top: 0.5rem;">
                    📅 Published: ${published}
                </div>
            </div>
        `,
        width: modalWidth,
        showCancelButton: true,
        confirmButtonText: '💾 Update Post',
        cancelButtonText: '❌ Cancel',
        confirmButtonColor: '#6495ED',
        cancelButtonColor: '#999',
        focusConfirm: false,
        customClass: {
            popup: 'swal2-popup-mobile',
            container: 'swal2-container-mobile'
        },
        preConfirm: () => {
            const title = document.getElementById('swal-title').value.trim();
            const content = document.getElementById('swal-content').value.trim();
            const image = document.getElementById('swal-image').value.trim();
            const fileUrl = document.getElementById('swal-file').value.trim();

            if (!title || !content) {
                Swal.showValidationMessage('Please fill in all required fields (Title and Content)');
                return false;
            }

            return { title, content, image, fileUrl };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            updatePostFromModal(id, result.value);
        }
    });
};

// Update post from modal
function updatePostFromModal(id, data) {
    const posts = getAllPosts();
    const index = posts.findIndex(p => p.id === id);
    
    if (index === -1) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Post not found.',
            confirmButtonColor: '#6495ED'
        });
        return;
    }

    const now = new Date().toISOString();
    
    posts[index] = {
        ...posts[index],
        title: data.title,
        content: data.content,
        image: data.image || 'images/logo/church-logo.png',
        file: data.fileUrl ? { url: data.fileUrl, type: 'url' } : posts[index].file || null,
        updated: now
    };

    if (saveAllPosts(posts)) {
        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: 'Your post has been updated successfully.',
            confirmButtonColor: '#6495ED',
            timer: 2000
        });
        loadPosts(currentPage);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to update post. Please try again.',
            confirmButtonColor: '#6495ED'
        });
    }
}

// Edit a post (legacy function - kept for compatibility)
function editPost(id) {
    openEditModal(id);
}

// Confirm delete with SweetAlert2 - Enhanced warning
window.confirmDeletePost = function(id) {
    const posts = getAllPosts();
    const post = posts.find(p => p.id === id);

    if (!post) {
        Swal.fire({
            icon: 'error',
            title: 'Post Not Found',
            text: 'The post you are trying to delete does not exist.',
            confirmButtonColor: '#6495ED'
        });
        return;
    }

    const isMobile = window.innerWidth <= 768;
    const modalWidth = isMobile ? '95%' : '500px';

    // First warning
    Swal.fire({
        title: '⚠️ Warning!',
        html: `
            <div style="text-align: left;">
                <p style="margin-bottom: 1rem; font-size: ${isMobile ? '0.95rem' : '1rem'};">
                    You are about to delete a post. This action is <strong style="color: #ff6b6b;">permanent</strong> and cannot be undone.
                </p>
                <div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border: 2px solid #ff6b6b; margin-bottom: 1rem;">
                    <div style="font-weight: 600; color: #1e3c72; margin-bottom: 0.5rem; font-size: ${isMobile ? '0.95rem' : '1rem'};">Post to delete:</div>
                    <div style="color: #333; font-size: ${isMobile ? '0.9rem' : '1rem'};">${escapeHtml(post.title)}</div>
                </div>
                <p style="color: #ff6b6b; font-weight: 700; font-size: ${isMobile ? '0.9rem' : '1rem'}; text-align: center; padding: 0.75rem; background: #fff5f5; border-radius: 8px;">
                    ⚠️ This action cannot be undone! ⚠️
                </p>
            </div>
        `,
        icon: 'warning',
        iconColor: '#ff6b6b',
        showCancelButton: true,
        confirmButtonText: '🗑️ Yes, Delete It',
        cancelButtonText: '❌ Cancel',
        confirmButtonColor: '#ff6b6b',
        cancelButtonColor: '#999',
        reverseButtons: true,
        width: modalWidth,
        customClass: {
            popup: 'swal2-popup-mobile',
            container: 'swal2-container-mobile'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // Second confirmation for extra safety
            Swal.fire({
                title: '⚠️ Final Confirmation',
                html: `
                    <div style="text-align: center;">
                        <p style="margin-bottom: 1rem; font-size: ${isMobile ? '0.95rem' : '1rem'}; font-weight: 600;">
                            Are you absolutely sure you want to delete this post?
                        </p>
                        <div style="background: #fff5f5; padding: 1rem; border-radius: 8px; border: 2px solid #ff6b6b; margin-bottom: 1rem;">
                            <div style="color: #1e3c72; font-weight: 600; font-size: ${isMobile ? '0.9rem' : '1rem'};">${escapeHtml(post.title)}</div>
                        </div>
                        <p style="color: #ff6b6b; font-weight: 700; font-size: ${isMobile ? '0.85rem' : '0.95rem'};">
                            This will permanently remove the post from the system!
                        </p>
                    </div>
                `,
                icon: 'error',
                iconColor: '#ff6b6b',
                showCancelButton: true,
                confirmButtonText: '🗑️ Delete Forever',
                cancelButtonText: '❌ No, Keep It',
                confirmButtonColor: '#ff6b6b',
                cancelButtonColor: '#6495ED',
                reverseButtons: true,
                width: modalWidth,
                customClass: {
                    popup: 'swal2-popup-mobile',
                    container: 'swal2-container-mobile'
                }
            }).then((finalResult) => {
                if (finalResult.isConfirmed) {
                    deletePost(id);
                } else {
                    Swal.fire({
                        icon: 'info',
                        title: 'Cancelled',
                        text: 'The post was not deleted.',
                        confirmButtonColor: '#6495ED',
                        timer: 2000
                    });
                }
            });
        }
    });
};

// Delete a post
function deletePost(id) {
    const posts = getAllPosts();
    const filtered = posts.filter(p => p.id !== id);

    if (saveAllPosts(filtered)) {
        Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your post has been deleted successfully.',
            confirmButtonColor: '#6495ED',
            timer: 2000
        });
        loadPosts(currentPage);
        resetForm();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to delete post. Please try again.',
            confirmButtonColor: '#6495ED'
        });
    }
}

// Reset form
function resetForm() {
    document.getElementById('blog-form').reset();
    document.getElementById('post-id').value = '';
    clearFileInput();
    clearImageInput();
    document.getElementById('form-title').textContent = 'Add New Post';
    document.getElementById('submit-btn').textContent = 'Add Post';
    document.getElementById('cancel-btn').style.display = 'none';
}

// Show alert message
function showAlert(message, type) {
    const alert = document.getElementById('alert');
    alert.textContent = message;
    alert.className = `alert alert-${type} show`;
    
    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
}

// Show login alert message
function showLoginAlert(message, type) {
    const alert = document.getElementById('login-alert');
    alert.textContent = message;
    alert.className = `alert alert-${type} show`;
    
    setTimeout(() => {
        alert.classList.remove('show');
    }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
