import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  BookOpen, 
  Baby, 
  CheckCircle2, 
  Heart, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Academy: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryGrade, setInquiryGrade] = useState("Preschool");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-sky-50/40">
      {/* Academy Hero with Video */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#0c2340]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/academy/videos/academy-hero.mp4" type="video/mp4" />
          <source src="/academy/videos/academy-hero.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0c2340]/80 to-[#0a192f]/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <Badge className="mb-4 px-4 py-1 bg-blue-500/20 text-blue-200 border-blue-400/40 text-xs uppercase tracking-wider">
            Christian K-12 Foundation
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Berean Academy
          </h1>
          <p className="text-xl sm:text-2xl text-blue-200 font-light max-w-2xl mx-auto mb-4">
            Faith in Action. Learning with Purpose.
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-8 italic">
            &quot;A Tuition-Free Christ-Centered Academy under the ministry of Berean Bible Baptist Church - Molino&quot;
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              variant="academy"
              size="lg"
              className="w-full sm:w-auto text-base rounded-full shadow-lg"
            >
              <a href="#programs">Explore Programs</a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base rounded-full border-blue-300/40 text-white bg-blue-900/30 hover:bg-blue-800/50"
                >
                  Apply / Inquire
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-[#0c2340]">
                    Inquire at Berean Academy
                  </DialogTitle>
                  <DialogDescription>
                    Please share your child&apos;s details and our admissions coordinator will contact you promptly.
                  </DialogDescription>
                </DialogHeader>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900">Inquiry Received!</h4>
                    <p className="text-xs text-slate-600">
                      Thank you, {inquiryName}. We will reach out to {inquiryEmail} regarding admissions.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Parent / Guardian Name
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="Juan Dela Cruz"
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="parent@example.com"
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Grade Level of Interest
                      </label>
                      <select
                        value={inquiryGrade}
                        onChange={(e) => setInquiryGrade(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="Preschool (Ages 3-5)">Preschool (Ages 3-5)</option>
                        <option value="Grade 1">Grade 1</option>
                        <option value="Grade 2">Grade 2</option>
                        <option value="Grade 3">Grade 3</option>
                        <option value="Grade 4">Grade 4</option>
                        <option value="Grade 5">Grade 5</option>
                      </select>
                    </div>

                    <Button type="submit" variant="academy" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Submit Inquiry
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
        {/* Welcome Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-sm text-center max-w-4xl mx-auto">
          <Badge variant="academy" className="mb-3">
            Our Purpose
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340] mb-4">
            Welcome to Berean Academy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            At Berean Academy, we are committed to providing quality Christian education that integrates biblical principles with academic excellence. Our mission is to nurture students spiritually, academically, and socially, preparing them to impact the world for Christ.
          </p>
        </section>

        {/* Programs */}
        <section id="programs">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340]">Our Academic Programs</h2>
            <p className="text-slate-600 text-sm mt-2">
              Structured developmental learning steeped in biblical morals and academic rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all border-t-4 border-t-sky-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                  <Baby className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-[#0c2340]">Preschool</CardTitle>
                  <Badge variant="academy">Ages 3 - 5</Badge>
                </div>
                <CardDescription>Foundational Character & Discovery</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-4">
                <p>
                  Building a strong foundation through play-based discovery, Bible story time, memorization, phonics, and early numeracy skills in a safe, Christ-centered environment.
                </p>
                <ul className="text-xs space-y-1.5 text-slate-700 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Nursery & Kindergarten levels</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Fine motor skills, music, and art</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Loving, spiritually grounded teachers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-t-4 border-t-blue-700">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-[#0c2340]">Elementary</CardTitle>
                  <Badge variant="academy">Grades 1 - 5</Badge>
                </div>
                <CardDescription>Academic Mastery & Moral Discipline</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-4">
                <p>
                  Developing academic excellence and godly character through biblical integration across all academic subjects, critical thinking, and hands-on learning experiences.
                </p>
                <ul className="text-xs space-y-1.5 text-slate-700 pt-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>English, Math, Science, and Social Studies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Daily Bible and character education</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Tuition-free church ministry initiative</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Berean Academy */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="academy" className="mb-2">Distinctives</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2340]">Why Choose Berean Academy?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="text-2xl mb-2">✝️</div>
              <h3 className="font-bold text-slate-900 mb-1">Biblical Foundation</h3>
              <p className="text-xs text-slate-600">Every subject is taught from the perspective of an unchanging Christian worldview.</p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="text-2xl mb-2">👨‍🏫</div>
              <h3 className="font-bold text-slate-900 mb-1">Dedicated Christian Faculty</h3>
              <p className="text-xs text-slate-600">Teachers who model Christ and care deeply about each child&apos;s personal salvation and growth.</p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="text-2xl mb-2">📖</div>
              <h3 className="font-bold text-slate-900 mb-1">Academic Quality</h3>
              <p className="text-xs text-slate-600">Rigorous educational standards preparing students for higher scholastic success.</p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-bold text-slate-900 mb-1">Small Class Sizes</h3>
              <p className="text-xs text-slate-600">Personalized attention ensuring no student is left behind in reading or arithmetic.</p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-bold text-slate-900 mb-1">Well-Rounded Curriculum</h3>
              <p className="text-xs text-slate-600">Art, sacred music, physical education, and healthy extracurricular enrichment.</p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100">
              <div className="text-2xl mb-2">🏫</div>
              <h3 className="font-bold text-slate-900 mb-1">Safe & Clean Campus</h3>
              <p className="text-xs text-slate-600">A secure environment within the church premises with caring administrative supervision.</p>
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
