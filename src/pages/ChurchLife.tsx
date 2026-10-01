import React from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  Music, 
  BookOpen, 
  Heart, 
  Smile, 
  Compass, 
  ArrowRight,
  Flame,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const weeklySchedule = [
  {
    day: "Sunday Morning",
    time: "7:45 AM",
    title: "Morning Worship & Preaching",
    description: "Traditional hymns, congregational prayer, and expositional preaching from the King James Bible.",
    tag: "Main Worship",
    badgeVariant: "gold" as const,
  },
  {
    day: "Sunday School",
    time: "9:45 AM",
    title: "All-Ages Sunday School",
    description: "Age-tailored classes: Toddlers, Juniors, Young People, Single Adults, Men, and Ladies.",
    tag: "Discipleship",
    badgeVariant: "navy" as const,
  },
  {
    day: "Sunday Afternoon",
    time: "4:45 PM",
    title: "Evening Praise & Preaching",
    description: "Testimonies, special choir numbers, and practical Christian living exhortations.",
    tag: "Evening Service",
    badgeVariant: "gold" as const,
  },
  {
    day: "Wednesday",
    time: "5:45 PM",
    title: "Midweek Prayer & Bible Study",
    description: "Corporate prayer time for our members, missionaries, and verse-by-verse Bible study.",
    tag: "Midweek",
    badgeVariant: "navy" as const,
  },
  {
    day: "Saturday",
    time: "8:00 AM",
    title: "Community Outreach & Soulwinning",
    description: "Going door-to-door in Bacoor, tract distribution, and personal gospel evangelism.",
    tag: "Evangelism",
    badgeVariant: "gold" as const,
  },
];

const annualEvents = [
  { title: "Missions Conference", desc: "Annual church-wide conference hearing from foreign and home missionaries.", icon: "🌍" },
  { title: "Lord's Supper & Communion", desc: "Reverent remembrance of our Savior's sacrifice and fellowship.", icon: "🍷" },
  { title: "Family Camp Retreat", desc: "Spiritual refreshment, family seminars, outdoor recreation, and camp preaching.", icon: "🏕️" },
  { title: "Youth Revival & Camp", desc: "Life-changing youth rallies challenging teens for Christ.", icon: "🔥" },
  { title: "Couples Conference", desc: "Biblical principles for godly marriages and strengthening Christian homes.", icon: "💍" },
  { title: "Music Camp", desc: "Sacred music training, choir seminars, and instrumental workshop.", icon: "🎼" },
  { title: "Daily Vacation Bible School", desc: "Summer children's Bible outreach filled with crafts, lessons, and verses.", icon: "🎨" },
  { title: "Year-End Thanksgiving", desc: "Praising God for His unwavering faithfulness and looking ahead in prayer.", icon: "🎊" },
];

export const ChurchLife: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0f2042] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4 px-3 py-1">
            Community & Fellowship
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Church Life at BBBC Molino
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Experience authentic Christian community, joyful traditional worship, and purposeful discipleship together.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
        {/* Weekly Schedule */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Weekly Gatherings Schedule</h2>
            <p className="text-slate-600 text-sm mt-2">
              Join us throughout the week as we worship the Lord and grow in His grace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule.map((item, idx) => (
              <Card key={idx} className="hover:shadow-md transition-all border-l-4 border-l-amber-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      {item.day}
                    </span>
                    <Badge variant={item.badgeVariant}>{item.tag}</Badge>
                  </div>
                  <CardTitle className="text-lg text-slate-900">{item.title}</CardTitle>
                  <CardDescription className="flex items-center text-xs font-semibold text-slate-700">
                    <Clock className="w-3.5 h-3.5 mr-1 text-amber-600" />
                    {item.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Feature Story 1: Sunday School */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <Badge variant="navy">Spiritual Foundations</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">
                Sunday School for Every Generation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sunday School provides age-appropriate biblical instruction for every member of your family. Each class is designed to help believers delve into the Word, memorize Scripture, and apply timeless biblical truth to everyday life.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Toddlers & Beginners:</strong> Foundational Bible stories & songs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Juniors & Primary:</strong> Scripture memorization & biblical character</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Youth & Singles:</strong> Navigating teen challenges with biblical conviction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Men & Ladies Classes:</strong> Godly leadership, parenting & victorious Christian living</span>
                </li>
              </ul>
              <div className="pt-2 text-xs font-semibold text-amber-700">
                Meets every Sunday at 9:45 AM right after Morning Worship.
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/images/church-life/sunday-school.png"
                alt="Sunday School at BBBC Molino"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/images/building/church-building.jpg";
                }}
              />
            </div>
          </div>
        </section>

        {/* Feature Story 2: Prayer Meeting & Music */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img
                src="/images/church-life/prayer-meeting.png"
                alt="Prayer Meeting at BBBC"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/images/building/church-building.jpg";
                }}
              />
            </div>

            <div className="order-1 lg:order-2 space-y-4">
              <Badge variant="gold">The Power of Prayer</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">
                Midweek Prayer & Discipleship
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Prayer is the engine of our ministry. We believe God answers the heartfelt, unified petitions of His saints. Every Wednesday evening, we gather to lift up sick members, our nation, and our missionaries around the globe.
              </p>
              <div className="bg-amber-50/70 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 italic">
                &quot;The effectual fervent prayer of a righteous man availeth much.&quot; — James 5:16
              </div>
              <p className="text-xs text-slate-600">
                Whether you have an urgent prayer request or simply want to draw closer to the Lord during the busy week, our Wednesday services are a spiritual oasis.
              </p>
            </div>
          </div>
        </section>

        {/* Annual Events Grid */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="navy" className="mb-2">Calendar Highlights</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Special Annual Programs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {annualEvents.map((evt, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{evt.icon}</div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{evt.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{evt.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visitor CTA */}
        <section className="bg-gradient-to-r from-[#0f2042] to-[#1e3c72] text-white rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3">Join Us This Coming Sunday</h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            We would be honored to have you as our guest. Experience a church that feels like family.
          </p>
          <Button asChild variant="gold" size="lg" className="rounded-full">
            <Link to="/#visit">Plan Your Visit</Link>
          </Button>
        </section>
      </div>
    </div>
  );
};
