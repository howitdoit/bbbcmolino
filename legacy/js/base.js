// ========== BASE JAVASCRIPT (Used on all pages) ==========

// Set default image for all images without source or that fail to load
function setDefaultImageForAllImages() {
    const defaultImage = 'images/logo/church-logo.png';
    
    // Handle images without src or with empty src
    document.querySelectorAll('img').forEach(img => {
        // Skip logo images
        if (img.closest('.logo-container') || img.src.includes('church-logo.png')) {
            return;
        }
        
        // Handle images without src or with empty/invalid src
        if (!img.src || 
            img.src === window.location.href || 
            img.src.endsWith('#') || 
            img.getAttribute('src') === '' ||
            img.getAttribute('src') === '#' ||
            !img.hasAttribute('src')) {
            img.src = defaultImage;
        }
        
        // Add error handler if not already present
        if (!img.hasAttribute('data-default-handler')) {
            img.setAttribute('data-default-handler', 'true');
            const originalOnError = img.onerror;
            img.onerror = function() {
                // Prevent infinite loop
                if (this.src !== defaultImage && !this.src.includes('church-logo.png')) {
                    this.src = defaultImage;
                    this.onerror = null; // Clear error handler after setting default
                } else if (originalOnError) {
                    originalOnError.call(this);
                }
            };
        }
    });
}

// Global error handler for dynamically added images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        const defaultImage = 'images/logo/church-logo.png';
        const img = e.target;
        
        // Skip logo images
        if (img.closest('.logo-container') || img.src.includes('church-logo.png')) {
            return;
        }
        
        // Set default image if error occurs
        if (img.src !== defaultImage) {
            img.src = defaultImage;
            img.onerror = null; // Prevent infinite loop
        }
    }
}, true);

// Initialize on page load
document.addEventListener('DOMContentLoaded', setDefaultImageForAllImages);

// Also run after delays to catch dynamically loaded images
setTimeout(setDefaultImageForAllImages, 500);
setTimeout(setDefaultImageForAllImages, 2000);

// Use MutationObserver to handle dynamically added images
const imageObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) { // Element node
                if (node.tagName === 'IMG') {
                    setDefaultImageForAllImages();
                } else if (node.querySelectorAll) {
                    const images = node.querySelectorAll('img');
                    if (images.length > 0) {
                        setDefaultImageForAllImages();
                    }
                }
            }
        });
    });
});

// Start observing
document.addEventListener('DOMContentLoaded', function() {
    imageObserver.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// Create mobile menu overlay if it doesn't exist
function createMobileOverlay() {
    if (!document.querySelector('.mobile-menu-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.addEventListener('click', closeMobileMenu);
        document.body.appendChild(overlay);
    }
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    // Create overlay if it doesn't exist
    if (!overlay) {
        createMobileOverlay();
    }
    
    const isActive = navLinks.classList.contains('active');
    
    if (isActive) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

// Open mobile menu - Optimized
function openMobileMenu() {
    // Update menu position before opening
    updateMobileMenuPosition();
    
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
        navLinks.classList.add('active');
        if (mobileMenu) mobileMenu.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Re-initialize dropdowns when menu opens
        setTimeout(() => {
            initDropdowns();
        }, 50);
        
        // Update position multiple times to ensure accuracy after layout changes
        requestAnimationFrame(() => {
            updateMobileMenuPosition();
            setTimeout(() => updateMobileMenuPosition(), 50);
            setTimeout(() => updateMobileMenuPosition(), 100);
        });
    });
}

// Close mobile menu - Optimized
function closeMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    // Use requestAnimationFrame for smoother performance
    requestAnimationFrame(() => {
        navLinks.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Initialize overlay on page load
document.addEventListener('DOMContentLoaded', () => {
    createMobileOverlay();
    // Update menu position after DOM is ready
    setTimeout(updateMobileMenuPosition, 100);
    setTimeout(updateMobileMenuPosition, 500);
});

// Close mobile menu when clicking on a link (non-dropdown) - Optimized
// Use event delegation to handle dynamically added elements
document.addEventListener('click', (e) => {
    const link = e.target.closest('.nav-links a');
    if (!link || !document.getElementById('navLinks')?.classList.contains('active')) {
        return; // Not a nav link or menu not open
    }
    
    // Don't close if it's a dropdown button
    if (link.classList.contains('dropbtn')) {
        return; // Let dropdown handler take care of it
    }
    
    // Check if it's a dropdown content link
    const isDropdownLink = link.closest('.dropdown-content');
    if (!isDropdownLink) {
        // Regular link - close menu
        closeMobileMenu();
    } else {
        // Dropdown content link - close menu after navigation
        setTimeout(() => closeMobileMenu(), 150);
    }
});

// Handle dropdown on mobile
function initDropdowns() {
    // Only initialize on mobile screens
    if (window.innerWidth > 768) {
        return; // Let CSS hover handle desktop dropdowns
    }
    
    // Remove existing listeners to prevent duplicates
    const dropdownBtns = document.querySelectorAll('.dropdown .dropbtn');
    dropdownBtns.forEach(btn => {
        // Check if already has mobile handler (to avoid duplicates)
        if (btn.dataset.mobileHandler === 'true') {
            return;
        }
        
        // Mark as having mobile handler
        btn.dataset.mobileHandler = 'true';
        
        // Add event listener for mobile only
        btn.addEventListener('click', function(e) {
            // Double check we're on mobile
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                
                const dropdown = this.closest('.dropdown');
                if (!dropdown) return;
                
                // Close other dropdowns
                document.querySelectorAll('.dropdown').forEach(dd => {
                    if (dd !== dropdown) {
                        dd.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('active');
            }
        }, true); // Use capture phase to ensure it fires first
    });
}

// Initialize dropdowns on page load
document.addEventListener('DOMContentLoaded', () => {
    initDropdowns();
});

// Re-initialize on window resize (in case switching between mobile/desktop)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Remove mobile handlers if switching to desktop
        if (window.innerWidth > 768) {
            document.querySelectorAll('.dropdown .dropbtn').forEach(btn => {
                delete btn.dataset.mobileHandler;
            });
        } else {
            // Re-initialize if switching to mobile
            initDropdowns();
        }
    }, 250);
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

// Update mobile menu position when header scrolls (for mobile only)
function updateMobileMenuPosition() {
    if (window.innerWidth <= 768) {
        const header = document.getElementById('header');
        const navLinks = document.getElementById('navLinks');
        const topBar = document.querySelector('.top-bar');
        
        if (header && navLinks) {
            // Force a reflow to get accurate measurements
            void header.offsetHeight;
            void topBar?.offsetHeight;
            
            // Use offsetHeight for accurate measurements (includes padding, border)
            const topBarHeight = topBar ? topBar.offsetHeight : 0;
            const headerHeight = header.offsetHeight;
            
            // Calculate menu top position: top bar + header height
            const menuTop = topBarHeight + headerHeight;
            
            // Calculate max height to prevent cutoff
            const maxHeight = window.innerHeight - menuTop;
            
            // Update menu position dynamically
            navLinks.style.top = menuTop + 'px';
            navLinks.style.maxHeight = maxHeight + 'px';
            navLinks.style.bottom = 'auto';
        }
    } else {
        // Reset on desktop
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.style.top = '';
        }
    }
}

// Update menu position on scroll, resize, and when menu opens
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768) {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateMobileMenuPosition();
            // If menu is open, update its position
            const navLinks = document.getElementById('navLinks');
            if (navLinks && navLinks.classList.contains('active')) {
                updateMobileMenuPosition();
            }
        }, 10);
    }
});

window.addEventListener('resize', () => {
    updateMobileMenuPosition();
});

// Also update when header class changes (scrolled state)
const headerObserver = new MutationObserver(() => {
    if (window.innerWidth <= 768) {
        updateMobileMenuPosition();
    }
});

// Observe header for class changes
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    if (header) {
        headerObserver.observe(header, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
});

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