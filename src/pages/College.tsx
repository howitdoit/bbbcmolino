import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Scroll, 
  CheckCircle2, 
  Users, 
  Flame, 
  Shield, 
  ArrowRight,
  Send,
  Building
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const College: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantProgram, setApplicantProgram] = useState("Bachelor of Theology (4 Years)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-emerald-50/30">
      {/* College Hero with Video */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#063326]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/college/videos/college-hero.mp4" type="video/mp4" />
          <source src="/college/videos/college-hero.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#042018] via-[#063326]/80 to-[#042018]/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <Badge className="mb-4 px-4 py-1 bg-emerald-500/20 text-emerald-200 border-emerald-400/40 text-xs uppercase tracking-wider">
            Pastoral & Theological Training
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Berean Bible College
          </h1>
          <p className="text-xl sm:text-2xl text-emerald-200 font-light max-w-3xl mx-auto mb-4">
            Equipping Servants. Strengthening Faith. Shaping Leaders for Christ.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto mb-8 italic">
            &quot;Committed to training men and women in Sound Doctrine, Spiritual Maturity, and Faithful Service to God and His Church.&quot;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="college"
              size="lg"
              className="w-full sm:w-auto text-base rounded-full shadow-lg"
            >
              <a href="#programs">View Academic Programs</a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base rounded-full border-emerald-300/40 text-white bg-emerald-950/40 hover:bg-emerald-900/60"
                >
                  Apply for Admission
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-[#063326]">
                    Apply to Berean Bible College
                  </DialogTitle>
                  <DialogDescription>
                    Begin your theological and pastoral ministry journey. Submit your details below.
                  </DialogDescription>
                </DialogHeader>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900">Application Received!</h4>
                    <p className="text-xs text-slate-600">
                      Thank you, {applicantName}. The Academic Dean&apos;s office will review and reach out to {applicantEmail}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Juan Dela Cruz"
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="student@example.com"
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Desired Degree / Program
                      </label>
                      <select
                        value={applicantProgram}
                        onChange={(e) => setApplicantProgram(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      >
                        <option value="Certificate in Ministry (1 Year)">Certificate in Ministry (1 Year)</option>
                        <option value="Diploma in Theology (3 Years)">Diploma in Theology (3 Years)</option>
                        <option value="Bachelor of Theology (4 Years)">Bachelor of Theology (4 Years)</option>
                      </select>
                    </div>

                    <Button type="submit" variant="college" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Application
                    </Button>
                  </form>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
        {/* Mission Statement */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm text-center max-w-4xl mx-auto">
          <Badge variant="college" className="mb-3">
            Our Calling
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#063326] mb-4">
            Our Purpose & Vision
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Berean Bible College exists to train and equip believers for effective gospel ministry through comprehensive biblical, doctrinal, and practical education. We are committed to developing humble, courageous servants who will faithfully proclaim the Word of God and shepherd local New Testament churches.
          </p>
        </section>

        {/* Academic Programs */}
        <section id="programs">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#063326]">Academic Programs</h2>
            <p className="text-slate-600 text-sm mt-2">
              Sound biblical theology paired with rigorous church-based practical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <Card className="hover:shadow-lg transition-all border-t-4 border-t-teal-600 flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-2">
                  <Scroll className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-lg text-[#063326]">Certificate in Ministry</CardTitle>
                  <Badge variant="college">1 Year</Badge>
                </div>
                <CardDescription>Foundations in Scripture & Doctrine</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-slate-600 space-y-4">
                <p>
                  A one-year intensive course designed for church workers, Sunday school teachers, and lay leaders desiring deeper biblical grounding.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-800">Core Subjects:</div>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Bibliology & Canon of Scripture</li>
                    <li>• Soteriology (Doctrine of Salvation)</li>
                    <li>• Baptist History & Distinctives</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="hover:shadow-lg transition-all border-t-4 border-t-emerald-600 flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-lg text-[#063326]">Diploma in Theology</CardTitle>
                  <Badge variant="college">3 Years</Badge>
                </div>
                <CardDescription>Systematic Theology & Homiletics</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-slate-600 space-y-4">
                <p>
                  A three-year systematic doctrinal study covering the 12 major biblical doctrines, expository preaching, and pastoral leadership.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-800">Core Subjects:</div>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Systematic Theology (12 Doctrines)</li>
                    <li>• Ecclesiology & Biblical Church Order</li>
                    <li>• Homiletics & Expository Sermon Preparation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Program 3 */}
            <Card className="hover:shadow-lg transition-all border-t-4 border-t-green-700 flex flex-col justify-between">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-green-100 text-green-900 flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-1">
                  <CardTitle className="text-lg text-[#063326]">Bachelor of Theology</CardTitle>
                  <Badge variant="college">4 Years</Badge>
                </div>
                <CardDescription>Comprehensive Pastoral & Missions Degree</CardDescription>
              </CardHeader>
              <CardContent className="text-xs text-slate-600 space-y-4">
                <p>
                  Our premier undergraduate degree preparing men for pastoral ministry, foreign missions, and full-time church leadership.
                </p>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="font-semibold text-slate-800">Core Subjects:</div>
                  <ul className="space-y-1 text-slate-600">
                    <li>• Advanced Pastoral Epistles & Hermeneutics</li>
                    <li>• Dispensationalism & Israelology</li>
                    <li>• Field Internship & Church Planting Practicum</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Distinctives Grid */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="college" className="mb-2">Distinctives</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#063326]">Why Train at Berean Bible College?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-bold text-slate-900 mb-1">Uncompromising KJV Authority</h3>
              <p className="text-xs text-slate-600">Strict adherence to the inspired, preserved King James Bible as our final authority.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <div className="text-2xl mb-2">👨‍🏫</div>
              <h3 className="font-bold text-slate-900 mb-1">Pastoral Mentors</h3>
              <p className="text-xs text-slate-600">Learn under seasoned pastors with decades of proven pastoral and church planting experience.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <div className="text-2xl mb-2">⛪</div>
              <h3 className="font-bold text-slate-900 mb-1">Local Church-Centric</h3>
              <p className="text-xs text-slate-600">Theology rooted directly in local church ministry, soulwinning, and disciple-making.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-slate-900 mb-1">Affordable Ministry Tuition</h3>
              <p className="text-xs text-slate-600">Subsidized and supported by local church ministries so finances don&apos;t hinder God&apos;s call.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="font-bold text-slate-900 mb-1">Hands-On Practicum</h3>
              <p className="text-xs text-slate-600">Weekly soulwinning, preaching labs, Sunday school teaching, and youth rallies.</p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/40 border border-emerald-100">
              <div className="text-2xl mb-2">🔥</div>
              <h3 className="font-bold text-slate-900 mb-1">Heart for Global Missions</h3>
              <p className="text-xs text-slate-600">Inspiring students with a burning burden to reach unreached nations for Jesus Christ.</p>
            </div>
          </div>
        </section>

        {/* Back to Church button */}
        <div className="text-center pt-4">
          <Button asChild variant="outline" className="rounded-full text-xs">
            <Link to="/">← Back to Main Church Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
