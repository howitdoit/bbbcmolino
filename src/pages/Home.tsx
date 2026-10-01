import React from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Cross, 
  Church, 
  Clock, 
  MapPin, 
  HelpCircle, 
  Compass, 
  ArrowRight, 
  Calendar, 
  Users, 
  Mail, 
  GraduationCap, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WeatherWidget } from "@/components/WeatherWidget";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0f2042]">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        >
          <source src="/videos/church-hero.mp4" type="video/mp4" />
          <source src="/videos/church-hero.webm" type="video/webm" />
        </video>

        {/* Gradient Overlay for high readability and premium aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1329] via-[#0f2042]/70 to-[#0a1329]/80" />

        {/* Floating subtle glowing orb effect */}
        <div className="absolute w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none -top-24 -left-24" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -bottom-24 -right-24" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <Badge
            variant="gold"
            className="mb-6 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm animate-pulse-subtle"
          >
            Welcome to BBBC Molino
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Berean Bible Baptist Church <br className="hidden sm:inline" />
            <span className="text-gold-gradient font-black">Molino</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-200 font-light leading-relaxed mb-10">
            Building lives, strengthening faith, and serving our community through the truth and grace of God&apos;s holy Word.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-amber-500/20"
            >
              <a href="#visit">
                <MapPin className="w-5 h-5 mr-2" />
                Plan Your Visit
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base font-medium px-8 py-6 rounded-full border-white/20 text-white bg-white/5 hover:bg-white/15 backdrop-blur-sm"
            >
              <Link to="/ministries">
                <span>Explore Ministries</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Quick Stats / Highlights Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <div className="text-amber-400 font-bold text-2xl sm:text-3xl">KJV</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Biblical Foundation</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl sm:text-3xl">7:45 AM</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Sunday Morning</div>
            </div>
            <div>
              <div className="text-white font-bold text-2xl sm:text-3xl">4:45 PM</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Sunday Afternoon</div>
            </div>
            <div>
              <div className="text-amber-400 font-bold text-2xl sm:text-3xl">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">Grace & Truth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section id="beliefs" className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="navy" className="mb-3 px-3 py-1">
              Foundational Truths
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2042] tracking-tight">
              What We Believe
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              We stand firm on the unchanging Word of God, proclaiming the Gospel of salvation by grace through faith in Jesus Christ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="border-t-4 border-t-amber-500 hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 mb-2">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#0f2042]">The Bible &quot;King James Version&quot;</CardTitle>
                <CardDescription className="text-amber-700/80 font-medium">Inerrant & Inspired</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                We believe in the divine inspiration and absolute authority of the Holy Scriptures as the complete, preserved revelation of God&apos;s will for mankind.
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="border-t-4 border-t-blue-600 hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-2">
                  <Cross className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#0f2042]">The Gospel of Grace</CardTitle>
                <CardDescription className="text-blue-700/80 font-medium">Salvation by Grace through Faith</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Salvation is through faith in Jesus Christ alone—crucified, buried, and risen again. It is a free gift received by grace through faith, not by works of righteousness.
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="border-t-4 border-t-[#0f2042] hover:-translate-y-1 transition-transform duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 mb-2">
                  <Church className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#0f2042]">The Local Church</CardTitle>
                <CardDescription className="text-indigo-700/80 font-medium">Community of Believers</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                We are a local assembly of baptized believers called to worship, fellowship, nurture spiritual maturity, and fulfill the Great Commission locally and globally.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ministries Spotlight Banner */}
      <section className="py-20 bg-[#0f2042] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <Badge variant="gold" className="mb-2">Our Ministries & Institutions</Badge>
              <h2 className="text-3xl font-bold tracking-tight">Equipping Every Generation</h2>
              <p className="text-slate-300 text-sm mt-2 max-w-xl">
                From nursery to seniors, and K-12 Christian education through Bible College theological training, there is a place for your family to grow.
              </p>
            </div>
            <Button asChild variant="gold" className="rounded-full">
              <Link to="/ministries">View All Ministries <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/academy"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Berean Academy</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Christ-centered primary and secondary education nurturing character, intellect, and faith.
              </p>
              <span className="text-blue-400 text-xs font-semibold flex items-center">
                Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </Link>

            <Link
              to="/college"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Bible College</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Rigorous theological training preparing pastors, missionaries, and Christian workers for ministry.
              </p>
              <span className="text-emerald-400 text-xs font-semibold flex items-center">
                Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </Link>

            <Link
              to="/church-life"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Church Life</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Sunday School, music ministry, prayer meetings, fellowship events, and outreach.
              </p>
              <span className="text-amber-400 text-xs font-semibold flex items-center">
                Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </Link>

            <Link
              to="/daughter-churches"
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-rose-400 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Daughter Churches</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Church planting mission extensions throughout Cavite and surrounding regions.
              </p>
              <span className="text-rose-400 text-xs font-semibold flex items-center">
                Learn more <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Your Visit Section */}
      <section id="visit" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="navy" className="mb-3 px-3 py-1">
              Join Us This Sunday
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f2042] tracking-tight">
              Plan Your Visit
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed">
              We look forward to welcoming you! Here is everything you need to know before joining us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Worship Times</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between border-b pb-1.5">
                  <span className="font-semibold text-slate-800">Sunday Morning:</span>
                  <span>7:45 AM</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="font-semibold text-slate-800">Sunday Evening:</span>
                  <span>4:45 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-slate-800">Wednesday Midweek:</span>
                  <span>5:45 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-2">
                  <MapPin className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Location & Parking</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2">
                <p>Magdiwang Road, Molino 2, Bacoor, 4102 Cavite, Philippines.</p>
                <p className="text-emerald-700 font-medium bg-emerald-50 p-2 rounded-lg text-xs">
                  ✓ Free on-site parking available for all attendees and visitors.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-2">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">What to Expect</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-2 leading-relaxed">
                <p>
                  A warm, hospitable welcome, uplifting traditional hymns and music, reverent prayer, and solid biblical teaching directly from the King James Bible.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Interactive Map and Weather Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-slate-800 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Berean Bible Baptist Church Molino on Google Maps</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button asChild size="sm" variant="outline" className="text-xs h-8">
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=14.4054739818229,120.98200747573884"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Compass className="w-3.5 h-3.5 mr-1" />
                      Directions
                    </a>
                  </Button>
                </div>
              </div>
              <div className="w-full h-80 sm:h-96 bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.376026984156!2d120.98200747573884!3d14.4054739818229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d22b037f3787%3A0x27b4beb7ecd5a3f4!2sBerean%20Bible%20Baptist%20Church!5e0!3m2!1sen!2sph!4v1761782669832!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Berean Bible Baptist Church Location Map"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <WeatherWidget />

              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f2042] to-[#1e3c72] text-white">
                <h4 className="font-bold text-base mb-2">Need a Ride or Have Questions?</h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  First time visiting? Feel free to contact our ministry team. We are glad to guide you with directions and transit assistance.
                </p>
                <Button
                  asChild
                  variant="gold"
                  size="sm"
                  className="w-full text-xs font-semibold rounded-lg"
                >
                  <a href="mailto:info@bbbcmolino.org">
                    <Mail className="w-3.5 h-3.5 mr-1" />
                    Contact Church Office
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section id="connect" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-[#0f2042]">Connect With Our Church Family</h2>
            <p className="text-slate-600 text-sm mt-2">
              Whether you are seeking a home church or desiring to know more about Christ, we would love to connect with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Visit In Person</h3>
              <p className="text-xs text-slate-500 mb-4">Magdiwang Road, Molino 2, Bacoor, Cavite</p>
              <a
                href="#visit"
                className="text-amber-600 hover:text-amber-700 text-xs font-semibold inline-flex items-center"
              >
                Service Schedules <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Send An Email</h3>
              <p className="text-xs text-slate-500 mb-4">info@bbbcmolino.org</p>
              <a
                href="mailto:info@bbbcmolino.org"
                className="text-blue-600 hover:text-blue-700 text-xs font-semibold inline-flex items-center"
              >
                Send Message <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Join A Ministry</h3>
              <p className="text-xs text-slate-500 mb-4">Youth, Music, Missions, Couples & Seniors</p>
              <Link
                to="/ministries"
                className="text-emerald-600 hover:text-emerald-700 text-xs font-semibold inline-flex items-center"
              >
                Discover Groups <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
