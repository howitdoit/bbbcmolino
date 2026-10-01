import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

export const TopBar: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>("");
  const [dateStr, setDateStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format in Asia/Manila timezone
      const timeFormatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }).format(now);

      const dateFormatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Manila",
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }).format(now);

      setTimeStr(timeFormatted);
      setDateStr(dateFormatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0a1329] text-slate-300 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Date */}
        <div className="flex items-center space-x-2">
          <Calendar className="w-3.5 h-3.5 text-amber-400" />
          <span>{dateStr || "Loading date..."}</span>
          <span className="text-slate-600">|</span>
          <span className="flex items-center space-x-1 text-slate-400">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>Molino 2, Bacoor, Cavite</span>
          </span>
        </div>

        {/* Center: Faith Statement */}
        <div className="font-medium tracking-wide text-amber-300/90 text-center">
          ✝ &quot;Jesus Christ our Lord and Savior&quot;
        </div>

        {/* Right: Manila Time */}
        <div className="flex items-center space-x-2">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono text-slate-200">{timeStr || "..."}</span>
          <span className="text-slate-500 text-[11px]">(Manila, PH)</span>
        </div>
      </div>
    </div>
  );
};
