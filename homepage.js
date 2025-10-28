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

// Disable right-click on entire page (specifically for images and videos)
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

// Disable keyboard shortcuts for saving images/videos (Ctrl+S, Cmd+S)
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

// ========== LIVE DATE AND TIME (Manila, Philippines) ==========
function updateDateTime() {
    const now = new Date();
    
    // Format date for Philippines
    const dateOptions = { 
        timeZone: 'Asia/Manila',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    
    const dateStr = now.toLocaleDateString('en-PH', dateOptions);
    
    // Format time for Philippines
    const timeOptions = {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    const timeStr = now.toLocaleTimeString('en-PH', timeOptions);
    
    // Update the DOM
    const dateElement = document.getElementById('currentDate');
    const timeElement = document.getElementById('currentTime');
    
    if (dateElement) dateElement.textContent = dateStr;
    if (timeElement) timeElement.textContent = timeStr;
}

// Update time immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// ========== WEATHER API (OpenWeatherMap) ==========
async function fetchWeather() {
    const weatherWidget = document.getElementById('weatherWidget');
    
    try {
        // Using Open-Meteo API (free, no API key needed)
        // Coordinates for Bacoor, Cavite: 14.4127° N, 120.9836° E
        const lat = 14.4127;
        const lon = 120.9836;
        
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=Asia/Singapore`
        );
        
        if (!response.ok) throw new Error('Weather data unavailable');
        
        const data = await response.json();
        const current = data.current;
        
        // Weather code mapping
        const weatherCodes = {
            0: '☀️ Clear Sky',
            1: '🌤️ Mainly Clear',
            2: '⛅ Partly Cloudy',
            3: '☁️ Overcast',
            45: '🌫️ Foggy',
            48: '🌫️ Foggy',
            51: '🌦️ Light Drizzle',
            53: '🌦️ Drizzle',
            55: '🌧️ Heavy Drizzle',
            61: '🌧️ Light Rain',
            63: '🌧️ Rain',
            65: '🌧️ Heavy Rain',
            71: '🌨️ Light Snow',
            73: '🌨️ Snow',
            75: '🌨️ Heavy Snow',
            77: '❄️ Snow Grains',
            80: '🌦️ Light Showers',
            81: '🌧️ Showers',
            82: '⛈️ Heavy Showers',
            85: '🌨️ Light Snow Showers',
            86: '🌨️ Snow Showers',
            95: '⛈️ Thunderstorm',
            96: '⛈️ Thunderstorm with Hail',
            99: '⛈️ Heavy Thunderstorm'
        };
        
        const weatherDesc = weatherCodes[current.weather_code] || '🌤️ Partly Cloudy';
        const temp = Math.round(current.temperature_2m);
        const humidity = current.relative_humidity_2m;
        const windSpeed = current.wind_speed_10m;
        
        weatherWidget.innerHTML = `
            <div class="weather-info">
                <div class="weather-temp">${temp}°C</div>
                <div class="weather-desc">${weatherDesc}</div>
                <div class="weather-details">
                    <div class="weather-detail">
                        <span class="weather-detail-label">Humidity</span>
                        <span class="weather-detail-value">${humidity}%</span>
                    </div>
                    <div class="weather-detail">
                        <span class="weather-detail-label">Wind</span>
                        <span class="weather-detail-value">${windSpeed} km/h</span>
                    </div>
                </div>
            </div>
        `;
        
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherWidget.innerHTML = `
            <div class="weather-info">
                <div class="weather-desc" style="color: #666;">
                    Weather information temporarily unavailable
                </div>
            </div>
        `;
    }
}

// Fetch weather on page load
fetchWeather();

// Refresh weather every 10 minutes (600000 milliseconds)
setInterval(fetchWeather, 600000);