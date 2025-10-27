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
document.querySelector('.dropdown .dropbtn').addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#ministries' || !this.classList.contains('dropbtn')) {
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