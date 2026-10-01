// ========== HOMEPAGE SPECIFIC JAVASCRIPT ==========

// Weather API for Bacoor, Cavite
let weatherRefreshInterval;

async function fetchWeather(showLoading = true) {
    const weatherWidget = document.getElementById('weatherWidget');
    
    if (!weatherWidget) return; // Exit if not on homepage
    
    if (showLoading) {
        weatherWidget.innerHTML = `
            <div class="weather-loading">
                <div class="weather-spinner"></div>
                <p>Loading weather data...</p>
            </div>
        `;
    }
    
    try {
        // Using Open-Meteo API (free, no API key needed)
        // Coordinates for Bacoor, Cavite: 14.4127° N, 120.9836° E
        const lat = 14.4127;
        const lon = 120.9836;
        
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,apparent_temperature&timezone=Asia/Manila`
        );
        
        if (!response.ok) throw new Error('Weather data unavailable');
        
        const data = await response.json();
        const current = data.current;
        
        // Weather code mapping with better icons
        const weatherCodes = {
            0: { icon: '☀️', desc: 'Clear Sky', bg: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' },
            1: { icon: '🌤️', desc: 'Mainly Clear', bg: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 100%)' },
            2: { icon: '⛅', desc: 'Partly Cloudy', bg: 'linear-gradient(135deg, #B0C4DE 0%, #D3D3D3 100%)' },
            3: { icon: '☁️', desc: 'Overcast', bg: 'linear-gradient(135deg, #708090 0%, #A9A9A9 100%)' },
            45: { icon: '🌫️', desc: 'Foggy', bg: 'linear-gradient(135deg, #C0C0C0 0%, #D3D3D3 100%)' },
            48: { icon: '🌫️', desc: 'Foggy', bg: 'linear-gradient(135deg, #C0C0C0 0%, #D3D3D3 100%)' },
            51: { icon: '🌦️', desc: 'Light Drizzle', bg: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)' },
            53: { icon: '🌦️', desc: 'Drizzle', bg: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)' },
            55: { icon: '🌧️', desc: 'Heavy Drizzle', bg: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)' },
            61: { icon: '🌧️', desc: 'Light Rain', bg: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)' },
            63: { icon: '🌧️', desc: 'Rain', bg: 'linear-gradient(135deg, #1E90FF 0%, #0000CD 100%)' },
            65: { icon: '🌧️', desc: 'Heavy Rain', bg: 'linear-gradient(135deg, #0000CD 0%, #191970 100%)' },
            71: { icon: '🌨️', desc: 'Light Snow', bg: 'linear-gradient(135deg, #E0E0E0 0%, #FFFFFF 100%)' },
            73: { icon: '🌨️', desc: 'Snow', bg: 'linear-gradient(135deg, #D3D3D3 0%, #E0E0E0 100%)' },
            75: { icon: '🌨️', desc: 'Heavy Snow', bg: 'linear-gradient(135deg, #C0C0C0 0%, #D3D3D3 100%)' },
            77: { icon: '❄️', desc: 'Snow Grains', bg: 'linear-gradient(135deg, #E0E0E0 0%, #FFFFFF 100%)' },
            80: { icon: '🌦️', desc: 'Light Showers', bg: 'linear-gradient(135deg, #87CEEB 0%, #4682B4 100%)' },
            81: { icon: '🌧️', desc: 'Showers', bg: 'linear-gradient(135deg, #4682B4 0%, #1E90FF 100%)' },
            82: { icon: '⛈️', desc: 'Heavy Showers', bg: 'linear-gradient(135deg, #1E90FF 0%, #0000CD 100%)' },
            85: { icon: '🌨️', desc: 'Light Snow Showers', bg: 'linear-gradient(135deg, #E0E0E0 0%, #FFFFFF 100%)' },
            86: { icon: '🌨️', desc: 'Snow Showers', bg: 'linear-gradient(135deg, #D3D3D3 0%, #E0E0E0 100%)' },
            95: { icon: '⛈️', desc: 'Thunderstorm', bg: 'linear-gradient(135deg, #2F4F4F 0%, #000000 100%)' },
            96: { icon: '⛈️', desc: 'Thunderstorm with Hail', bg: 'linear-gradient(135deg, #2F4F4F 0%, #000000 100%)' },
            99: { icon: '⛈️', desc: 'Heavy Thunderstorm', bg: 'linear-gradient(135deg, #2F4F4F 0%, #000000 100%)' }
        };
        
        const weather = weatherCodes[current.weather_code] || { icon: '🌤️', desc: 'Partly Cloudy', bg: 'linear-gradient(135deg, #B0C4DE 0%, #D3D3D3 100%)' };
        const temp = Math.round(current.temperature_2m);
        const feelsLike = Math.round(current.apparent_temperature || current.temperature_2m);
        const humidity = current.relative_humidity_2m;
        const windSpeed = Math.round(current.wind_speed_10m);
        
        // Get current time
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        
        weatherWidget.innerHTML = `
            <div class="weather-info" style="background: ${weather.bg};">
                <div class="weather-header">
                    <div class="weather-icon-large">${weather.icon}</div>
                    <div class="weather-main">
                        <div class="weather-temp">${temp}°C</div>
                        <div class="weather-desc">${weather.desc}</div>
                        <div class="weather-time">Updated: ${timeString}</div>
                    </div>
                </div>
                <div class="weather-details-grid">
                    <div class="weather-detail-card">
                        <div class="weather-detail-icon">🌡️</div>
                        <div class="weather-detail-info">
                            <span class="weather-detail-label">Feels Like</span>
                            <span class="weather-detail-value">${feelsLike}°C</span>
                        </div>
                    </div>
                    <div class="weather-detail-card">
                        <div class="weather-detail-icon">💧</div>
                        <div class="weather-detail-info">
                            <span class="weather-detail-label">Humidity</span>
                            <span class="weather-detail-value">${humidity}%</span>
                        </div>
                    </div>
                    <div class="weather-detail-card">
                        <div class="weather-detail-icon">💨</div>
                        <div class="weather-detail-info">
                            <span class="weather-detail-label">Wind Speed</span>
                            <span class="weather-detail-value">${windSpeed} km/h</span>
                        </div>
                    </div>
                </div>
                <button class="weather-refresh-btn" onclick="fetchWeather(true)" title="Refresh weather">
                    🔄 Refresh
                </button>
            </div>
        `;
        
    } catch (error) {
        console.error('Error fetching weather:', error);
        weatherWidget.innerHTML = `
            <div class="weather-error">
                <div class="weather-error-icon">⚠️</div>
                <div class="weather-error-text">
                    <p>Weather information temporarily unavailable</p>
                    <button class="weather-retry-btn" onclick="fetchWeather(true)">🔄 Try Again</button>
                </div>
            </div>
        `;
    }
}

// Fetch weather on page load
document.addEventListener('DOMContentLoaded', () => {
    fetchWeather(true);
    
    // Refresh weather every 10 minutes (600000 milliseconds)
    weatherRefreshInterval = setInterval(() => fetchWeather(false), 600000);
});

// Clean up interval on page unload
window.addEventListener('beforeunload', () => {
    if (weatherRefreshInterval) {
        clearInterval(weatherRefreshInterval);
    }
});