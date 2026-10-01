import React, { useEffect, useState } from "react";
import { Cloud, Droplets, Wind, RefreshCw, AlertCircle } from "lucide-react";

interface WeatherData {
  temp: number;
  apparentTemp: number;
  humidity: number;
  windSpeed: number;
  code: number;
  time: string;
}

const weatherCodeMap: Record<number, { icon: string; desc: string; color: string }> = {
  0: { icon: "☀️", desc: "Clear Sky", color: "from-amber-400 to-orange-500" },
  1: { icon: "🌤️", desc: "Mainly Clear", color: "from-sky-400 to-blue-500" },
  2: { icon: "⛅", desc: "Partly Cloudy", color: "from-slate-400 to-sky-500" },
  3: { icon: "☁️", desc: "Overcast", color: "from-slate-500 to-gray-600" },
  45: { icon: "🌫️", desc: "Foggy", color: "from-slate-400 to-slate-600" },
  48: { icon: "🌫️", desc: "Foggy", color: "from-slate-400 to-slate-600" },
  51: { icon: "🌦️", desc: "Light Drizzle", color: "from-sky-400 to-blue-600" },
  53: { icon: "🌦️", desc: "Drizzle", color: "from-sky-400 to-blue-600" },
  55: { icon: "🌧️", desc: "Heavy Drizzle", color: "from-blue-500 to-indigo-600" },
  61: { icon: "🌧️", desc: "Light Rain", color: "from-blue-400 to-blue-600" },
  63: { icon: "🌧️", desc: "Moderate Rain", color: "from-blue-500 to-indigo-600" },
  65: { icon: "🌧️", desc: "Heavy Rain", color: "from-indigo-600 to-blue-900" },
  80: { icon: "🌦️", desc: "Light Showers", color: "from-sky-400 to-blue-500" },
  81: { icon: "🌧️", desc: "Showers", color: "from-blue-500 to-indigo-600" },
  82: { icon: "⛈️", desc: "Heavy Showers", color: "from-indigo-700 to-slate-900" },
  95: { icon: "⛈️", desc: "Thunderstorm", color: "from-slate-700 to-amber-700" },
};

export const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      // Bacoor, Cavite coordinates: 14.4127, 120.9836
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=14.4127&longitude=120.9836&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,apparent_temperature&timezone=Asia/Manila"
      );
      if (!res.ok) throw new Error("Could not fetch weather data");
      const data = await res.json();
      const current = data.current;
      setWeather({
        temp: Math.round(current.temperature_2m),
        apparentTemp: Math.round(current.apparent_temperature),
        humidity: current.relative_humidity_2m,
        windSpeed: Math.round(current.wind_speed_10m),
        code: current.weather_code,
        time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "numeric", hour12: true }),
      });
    } catch (err) {
      console.warn("Weather fetch error:", err);
      setError("Unable to load live weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 10 * 60 * 1000); // refresh every 10 min
    return () => clearInterval(interval);
  }, []);

  const weatherInfo = weather ? weatherCodeMap[weather.code] || { icon: "🌤️", desc: "Clear", color: "from-amber-400 to-orange-500" } : null;

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <Cloud className="w-5 h-5 text-amber-500" />
          <h4 className="font-semibold text-slate-800 text-sm">Bacoor, Cavite Weather</h4>
        </div>
        <button
          onClick={fetchWeather}
          disabled={loading}
          className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-md"
          title="Refresh weather"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {loading && !weather ? (
        <div className="py-6 flex flex-col items-center justify-center space-y-2 text-slate-400 text-sm">
          <RefreshCw className="w-5 h-5 animate-spin text-amber-500" />
          <span>Checking weather conditions...</span>
        </div>
      ) : error && !weather ? (
        <div className="py-4 text-center text-xs text-amber-700 flex items-center justify-center space-x-1.5">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      ) : weather && weatherInfo ? (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-4xl">{weatherInfo.icon}</span>
              <div>
                <div className="text-3xl font-bold text-slate-900 tracking-tight">
                  {weather.temp}°C
                </div>
                <div className="text-xs font-medium text-slate-500">
                  Feels like {weather.apparentTemp}°C
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/60">
                {weatherInfo.desc}
              </span>
              <div className="text-[11px] text-slate-400 mt-1">Updated {weather.time}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg">
              <Droplets className="w-4 h-4 text-blue-500" />
              <span>Humidity: {weather.humidity}%</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg">
              <Wind className="w-4 h-4 text-teal-500" />
              <span>Wind: {weather.windSpeed} km/h</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
