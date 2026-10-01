import React from "react";
import { Link } from "react-router-dom";
import { Church, MapPin, Clock, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1329] text-slate-300 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/10 p-1 border border-amber-400/40 flex items-center justify-center shrink-0">
                <img
                  src="/images/logo/church-logo.png"
                  alt="BBBC Molino Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <Church className="w-5 h-5 text-amber-400 absolute" style={{ zIndex: -1 }} />
              </div>
              <div>
                <span className="block font-bold text-lg text-white leading-tight">BBBC Molino</span>
                <span className="block text-xs text-amber-400/90 font-medium">Berean Bible Baptist Church</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Berean Bible Baptist Church is dedicated to preaching the Gospel of the Grace of God, building lives, and strengthening faith in Molino, Bacoor, Cavite.
            </p>
            <div className="pt-2 text-xs text-amber-300/80 font-medium italic">
              &quot;These were more noble than those in Thessalonica, in that they received the word with all readiness of mind...&quot; — Acts 17:11
            </div>
          </div>

          {/* Col 2: Worship Times */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Worship Services</span>
            </h4>
            <div className="space-y-3 text-sm">
              <div className="border-l-2 border-amber-400/60 pl-3 py-0.5">
                <div className="font-semibold text-white">Sunday Morning Worship</div>
                <div className="text-slate-400">7:45 AM - Sunday School & Worship</div>
              </div>
              <div className="border-l-2 border-amber-400/60 pl-3 py-0.5">
                <div className="font-semibold text-white">Sunday Afternoon Worship</div>
                <div className="text-slate-400">4:45 PM - Praise & Exhortation</div>
              </div>
              <div className="border-l-2 border-amber-400/60 pl-3 py-0.5">
                <div className="font-semibold text-white">Wednesday Midweek Service</div>
                <div className="text-slate-400">5:45 PM - Prayer & Bible Study</div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#beliefs" className="hover:text-amber-400 transition-colors">
                  What We Believe
                </a>
              </li>
              <li>
                <Link to="/ministries" className="hover:text-amber-400 transition-colors">
                  Church Ministries
                </Link>
              </li>
              <li>
                <Link to="/academy" className="hover:text-amber-400 transition-colors">
                  Berean Academy
                </Link>
              </li>
              <li>
                <Link to="/college" className="hover:text-amber-400 transition-colors">
                  Bible College
                </Link>
              </li>
              <li>
                <Link to="/the-word" className="hover:text-amber-400 transition-colors">
                  The Word (Sermons & Materials)
                </Link>
              </li>
              <li>
                <Link to="/church-life" className="hover:text-amber-400 transition-colors">
                  Church Life & Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Location & Contact</span>
            </h4>
            <div className="text-sm text-slate-400 space-y-2.5">
              <p className="leading-relaxed">
                Magdiwang Road, Molino 2,<br />
                Bacoor, 4102 Cavite, Philippines
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Berean+Bible+Baptist+Church+Molino+Cavite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs text-amber-400 hover:underline font-medium"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom divider with Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Berean Bible Baptist Church Molino. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <span className="text-slate-500">Building lives. Strengthening faith. Serving community.</span>
            <span className="text-slate-700">|</span>
            <Link
              to="/admin-blog"
              className="inline-flex items-center text-slate-400 hover:text-amber-400 transition-colors"
              title="Admin Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
