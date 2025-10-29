// ========== HOMEPAGE SPECIFIC JAVASCRIPT ==========

// Weather API for Bacoor, Cavite
async function fetchWeather() {
    const weatherWidget = document.getElementById('weatherWidget');
    
    if (!weatherWidget) return; // Exit if not on homepage
    
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