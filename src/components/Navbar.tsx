import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Church, 
  GraduationCap, 
  BookOpen, 
  Users, 
  HeartHandshake, 
  Calendar, 
  Sparkles,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const [churchLifeOpen, setChurchLifeOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMinistriesOpen(false);
    setChurchLifeOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0f2042]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-2.5"
          : "bg-[#0f2042] border-b border-white/10 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden bg-white/10 p-0.5 border border-amber-400/40 group-hover:border-amber-400 transition-colors flex items-center justify-center">
            <img
              src="/images/logo/church-logo.png"
              alt="BBBC Molino"
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback icon if image path differs
                e.currentTarget.style.display = "none";
              }}
            />
            <Church className="w-6 h-6 text-amber-400 absolute" style={{ zIndex: -1 }} />
          </div>
          <div>
            <span className="block font-bold text-white text-base sm:text-lg leading-tight tracking-tight">
              BBBC Molino
            </span>
            <span className="block text-[11px] font-normal text-amber-300/90 tracking-wide">
              Berean Bible Baptist Church
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium text-slate-200">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10 ${
              location.pathname === "/" ? "text-amber-400 font-semibold" : ""
            }`}
          >
            Home
          </Link>

          <a
            href="/#beliefs"
            className="px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10"
          >
            What We Believe
          </a>

          {/* Ministries Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10 group-hover:text-amber-400"
              onClick={() => setMinistriesOpen(!ministriesOpen)}
            >
              <span>Ministries</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#0a1329] border border-white/10 shadow-2xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                to="/ministries"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Users className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Church Ministries</div>
                  <div className="text-xs text-slate-400">Youth, Couples, Music, Missions</div>
                </div>
              </Link>
              <Link
                to="/academy"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <GraduationCap className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Berean Academy</div>
                  <div className="text-xs text-slate-400">K-12 Christian Education</div>
                </div>
              </Link>
              <Link
                to="/college"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Bible College</div>
                  <div className="text-xs text-slate-400">Theological & Pastoral Training</div>
                </div>
              </Link>
              <Link
                to="/daughter-churches"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <HeartHandshake className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Daughter Churches</div>
                  <div className="text-xs text-slate-400">Missions & Extension Works</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Church Life Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center space-x-1 px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10 group-hover:text-amber-400"
            >
              <span>Church Life</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#0a1329] border border-white/10 shadow-2xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200">
              <Link
                to="/church-life"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Overview & Gallery</div>
                  <div className="text-xs text-slate-400">Fellowship, activities & photos</div>
                </div>
              </Link>
              <Link
                to="/the-word"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <BookOpen className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">The Word</div>
                  <div className="text-xs text-slate-400">Sermons, Studies & Devotions</div>
                </div>
              </Link>
              <Link
                to="/highlights"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Calendar className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Highlights & Events</div>
                  <div className="text-xs text-slate-400">News, announcements & updates</div>
                </div>
              </Link>
              <Link
                to="/view-posts"
                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white text-sm">Community Posts</div>
                  <div className="text-xs text-slate-400">Articles & testimonies</div>
                </div>
              </Link>
            </div>
          </div>

          <a
            href="/#visit"
            className="px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10"
          >
            Plan Your Visit
          </a>

          <a
            href="/#connect"
            className="px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10"
          >
            Connect
          </a>
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <Button
            asChild
            variant="gold"
            size="sm"
            className="hidden sm:inline-flex rounded-full text-xs font-semibold px-4 tracking-wide shadow-md"
          >
            <a href="/#visit">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              Visit Us
            </a>
          </Button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 lg:hidden focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1329] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10"
          >
            Home
          </Link>
          <a
            href="/#beliefs"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(false)}
          >
            What We Believe
          </a>

          {/* Mobile Ministries Accordion */}
          <div className="border-t border-white/10 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
              Ministries & Schools
            </div>
            <Link
              to="/ministries"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Church Ministries</span>
            </Link>
            <Link
              to="/academy"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span>Berean Academy</span>
            </Link>
            <Link
              to="/college"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span>Bible College</span>
            </Link>
            <Link
              to="/daughter-churches"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <HeartHandshake className="w-4 h-4 text-rose-400" />
              <span>Daughter Churches</span>
            </Link>
          </div>

          {/* Mobile Church Life Accordion */}
          <div className="border-t border-white/10 pt-2">
            <div className="px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
              Church Life & Word
            </div>
            <Link
              to="/church-life"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Church Life & Gallery</span>
            </Link>
            <Link
              to="/the-word"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>The Word (Sermons & Materials)</span>
            </Link>
            <Link
              to="/highlights"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Highlights & Events</span>
            </Link>
            <Link
              to="/view-posts"
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-slate-300 hover:bg-white/10"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Community Posts</span>
            </Link>
          </div>

          <div className="border-t border-white/10 pt-3 flex flex-col space-y-2">
            <a
              href="/#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-amber-500 text-slate-950 font-semibold text-sm hover:bg-amber-600 transition-colors"
            >
              Plan Your Visit
            </a>
            <a
              href="/#connect"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-colors"
            >
              Connect With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
