// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Don't close menu if clicking dropdown button on mobile
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

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#ministries' && href !== '#life' || !this.classList.contains('dropbtn')) {
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
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add 'scrolled' class when user scrolls down more than 100px
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Disable right-click on entire page (specifically for images)
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
        return false;
    }
});

// Disable drag on images
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Disable keyboard shortcuts for saving images (Ctrl+S, Cmd+S)
document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S or Cmd+S
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
    }
    // Prevent F12 (developer tools) - optional
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
});

// Video background protection
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    heroVideo.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        return false;
    });
}