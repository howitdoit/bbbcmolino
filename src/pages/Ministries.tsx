import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Baby, 
  Music, 
  Flame, 
  Globe2, 
  GraduationCap, 
  BookOpen, 
  Church, 
  Mail, 
  ArrowRight,
  ExternalLink,
  DollarSign,
  HeartHandshake,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Missionary {
  name: string;
  field: string;
  since: string;
  verse: string;
  sendingChurch: string;
  email: string;
  isForeign?: boolean;
}

const localMissionaries: Missionary[] = [
  {
    name: "Ptr. Danilo Palicpic Jr.",
    field: "General Trias, Cavite, Philippines",
    since: "June 2024",
    verse: "Isaiah 61:1",
    sendingChurch: "Temple Bible Baptist Church - Taguig",
    email: "jun.palicpic27@gmail.com",
  },
  {
    name: "Msnry. Ruel De Mesa",
    field: "Silang, Cavite, Philippines",
    since: "October 2025",
    verse: "John 3:16",
    sendingChurch: "Berean Bible Baptist Church - Mendez",
    email: "rueldemesa41@gmail.com",
  },
  {
    name: "Msnry. Dexter & Mrs. Dessa Lake",
    field: "Tanza, Cavite, Philippines",
    since: "September 2025",
    verse: "Romans 1:16",
    sendingChurch: "El Bethel Baptist Church - Bulihan, Silang, Cavite",
    email: "dexter.lake29@gmail.com",
  },
  {
    name: "Msnry. Rannie Tenorio",
    field: "Alaminos, Laguna, Philippines",
    since: "September 2025",
    verse: "Luke 19:10",
    sendingChurch: "Berean Bible Baptist Church - Lipa, Batangas",
    email: "rannietenorio12@gmail.com",
  },
  {
    name: "Ptr. Manuel Romero",
    field: "Tondo, Manila, Philippines",
    since: "November 2024",
    verse: "Psalm 119:11",
    sendingChurch: "FBC Pasig",
    email: "deveramanuel29@gmail.com",
  },
];

const foreignMissionaries: Missionary[] = [
  {
    name: "Ptr. Jezreel & Mrs. Ryna Tendero",
    field: "Indonesia",
    since: "June 2024",
    verse: "I Chronicles 16:24",
    sendingChurch: "Grace Baptist Church",
    email: "tenderosforindonesia@gmail.com",
    isForeign: true,
  },
  {
    name: "Ptr. Jiar & Mrs. Venus Villanueva",
    field: "Taiwan",
    since: "June 2024",
    verse: "I Corinthians 9:23",
    sendingChurch: "Mt. View Bible Baptist Church",
    email: "raijsunev@gmail.com",
    isForeign: true,
  },
  {
    name: "Ptr. Kim John & Mrs. Rose Lim",
    field: "Dar es Salaam, Tanzania",
    since: "June 2024",
    verse: "Matthew 5:16",
    sendingChurch: "Grace Baptist Church",
    email: "kimjohn.lim@abclear.net",
    isForeign: true,
  },
  {
    name: "Ptr. Adams & Mrs. Altes Addai",
    field: "Kumasi, Ghana, Africa",
    since: "June 2024",
    verse: "Jude 22",
    sendingChurch: "La Loma Baptist Church",
    email: "profdarko888@gmail.com",
    isForeign: true,
  },
  {
    name: "Ptr. Januario Montenegro",
    field: "Israel",
    since: "June 2024",
    verse: "Matthew 5:16",
    sendingChurch: "Temple Bible Baptist Church",
    email: "info@bbbcmolino.org",
    isForeign: true,
  },
  {
    name: "Ptr. Ernie & Mrs. Maricel Flaviano",
    field: "Peru",
    since: "October 2025",
    verse: "Matthew 9:36",
    sendingChurch: "Cornerstone Christian Bible Baptist Church - Agoncillo",
    email: "ernieferryflaviano@gmail.com",
    isForeign: true,
  },
];

export const Ministries: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0f2042] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4 px-3 py-1">
            BBBC Molino Ministries
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Ministries & Missions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Serving God, strengthening families, and reaching our neighborhood and the world with the Gospel of Jesus Christ.
          </p>
        </div>
        <div className="absolute w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -bottom-20 -left-20" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-20">
        {/* Local Church Ministries */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Local Church Ministries</h2>
            <p className="text-slate-600 text-sm mt-2">
              Opportunities to serve, fellowship, and grow in grace within our local church family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-amber-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Barnabas Ministry</CardTitle>
                <CardDescription>Family Support & Encouragement</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Supporting families through spiritual encouragement and benevolent practical assistance during times of hardship and need.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <Baby className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Children&apos;s Ministry</CardTitle>
                <CardDescription>Sunday School & Daily Vacation Bible School</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Nurturing young hearts with scripture memorization, Bible stories, praise songs, and wholesome fellowship.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-purple-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-2">
                  <Flame className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Youth Ministry</CardTitle>
                <CardDescription>Teens & Young Adults</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Empowering the next generation to stand firm in biblical conviction, resist worldly peer pressure, and lead godly lives.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-emerald-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <Music className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Music Ministry</CardTitle>
                <CardDescription>Choir, Orchestra & Congregational Praise</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Leading Christ-honoring, traditional sacred music that exalts the Lord and prepares hearts for preaching.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-indigo-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Prayer Warrior Ministry</CardTitle>
                <CardDescription>Intercessory Prayer</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Interceding regularly for pastors, church family, missionaries, the sick, and our national leaders.
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow border-t-4 border-t-rose-500">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-2">
                  <Globe2 className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg text-[#0f2042]">Outreach & Evangelism</CardTitle>
                <CardDescription>Gospel Tracts & Visitation</CardDescription>
              </CardHeader>
              <CardContent className="text-slate-600 text-sm leading-relaxed">
                Weekly door-to-door soulwinning, tract distribution, and community gospel feeding programs in Molino and Bacoor.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Missions & Missionaries */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge variant="navy" className="mb-2">Great Commission</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">
              🌍 Missions & Missionaries
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              BBBC Molino joyfully supports faithful missionary servants laboring across the Philippines and across continents.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-slate-100 p-1 rounded-xl">
                <TabsTrigger value="all" className="rounded-lg text-xs sm:text-sm">
                  All Missionaries ({localMissionaries.length + foreignMissionaries.length})
                </TabsTrigger>
                <TabsTrigger value="local" className="rounded-lg text-xs sm:text-sm">
                  Local Philippines ({localMissionaries.length})
                </TabsTrigger>
                <TabsTrigger value="foreign" className="rounded-lg text-xs sm:text-sm">
                  Foreign Fields ({foreignMissionaries.length})
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...localMissionaries, ...foreignMissionaries].map((m, idx) => (
                  <MissionaryCard key={idx} missionary={m} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="local" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localMissionaries.map((m, idx) => (
                  <MissionaryCard key={idx} missionary={m} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="foreign" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foreignMissionaries.map((m, idx) => (
                  <MissionaryCard key={idx} missionary={m} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* How to support */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h3 className="text-xl font-bold text-center text-[#0f2042] mb-6">How to Support Our Missionaries</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">Faith Promise Giving</h4>
                <p className="text-xs text-slate-500">Partner through monthly missionary faith promise offerings.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-3">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">Regular Intercession</h4>
                <p className="text-xs text-slate-500">Pray for protection, gospel fruitfulness, and health on their fields.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl text-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-800 text-sm mb-1">Encouraging Notes</h4>
                <p className="text-xs text-slate-500">Send direct emails, cards, and letters to uplift their spirits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Educational & Plant Programs */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f2042]">Institutions & Affiliates</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#0f2042]">Berean Academy</CardTitle>
                <CardDescription>Christian K-12 Academy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Tuition-free Christian education providing biblical principles, moral excellence, and academic foundations for children.
                </p>
                <Button asChild variant="academy" size="sm" className="w-full">
                  <Link to="/academy">Explore Academy <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#0f2042]">Bible College</CardTitle>
                <CardDescription>Theological Training</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Comprehensive biblical and theological curriculum training future pastors, church planters, and dedicated Christian leaders.
                </p>
                <Button asChild variant="college" size="sm" className="w-full">
                  <Link to="/college">Explore Bible College <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-2">
                  <Church className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#0f2042]">Daughter Churches</CardTitle>
                <CardDescription>Church Planting Network</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600">
                  Supporting and partnering with 8 daughter churches planted throughout Cavite and nearby provinces.
                </p>
                <Button asChild variant="navy" size="sm" className="w-full">
                  <Link to="/daughter-churches">View Daughter Churches <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

const MissionaryCard: React.FC<{ missionary: Missionary }> = ({ missionary }) => {
  return (
    <Card className="hover:shadow-md transition-shadow flex flex-col justify-between">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={missionary.isForeign ? "navy" : "gold"}>
            {missionary.isForeign ? "🌏 Foreign" : "📍 Local Field"}
          </Badge>
          <span className="text-[11px] text-slate-400 font-mono">since {missionary.since}</span>
        </div>
        <CardTitle className="text-base text-slate-900 leading-snug">{missionary.name}</CardTitle>
        <CardDescription className="text-xs text-amber-700 font-medium">
          {missionary.field}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-xs text-slate-600 space-y-2 pt-0">
        <div className="p-2 rounded bg-slate-50 border border-slate-100">
          <span className="font-semibold text-slate-700">Theme Verse: </span>
          <span className="italic text-slate-600">{missionary.verse}</span>
        </div>
        <div>
          <span className="font-semibold text-slate-700">Sending Church: </span>
          <span>{missionary.sendingChurch}</span>
        </div>
        {missionary.email && (
          <div className="pt-2">
            <a
              href={`mailto:${missionary.email}`}
              className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-1" />
              {missionary.email}
            </a>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
