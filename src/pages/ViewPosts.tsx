import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  Download, 
  FileText, 
  Search, 
  Tag, 
  User, 
  Clock, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface ResourceItem {
  id: string;
  title: string;
  category: "all" | "preachings" | "calendar" | "discipleship" | "journal" | "sundayschool";
  date: string;
  description: string;
  author?: string;
  fileUrl?: string;
}

const initialResources: ResourceItem[] = [
  {
    id: "res-1",
    title: "Whole Year Bible Reading Plan - 2026",
    category: "calendar",
    date: "January 2026",
    author: "Pastor",
    description: "Daily systematic scripture schedule covering the Old Testament once and the New Testament twice in one year.",
  },
  {
    id: "res-2",
    title: "Foundations of Faith: Lesson 1 - Eternal Security",
    category: "discipleship",
    date: "February 2026",
    author: "Discipleship Team",
    description: "Biblical evidence proving the eternal salvation of the believer resting solely in Christ's finished atonement.",
  },
  {
    id: "res-3",
    title: "Sunday School Primary Lessons: The Miracles of Jesus",
    category: "sundayschool",
    date: "March 2026",
    author: "Sunday School Teachers",
    description: "Comprehensive lesson outlines, memory verses, coloring sheets, and student worksheets for Junior classes.",
  },
  {
    id: "res-4",
    title: "Daily Journal Devotions: Wisdom from Proverbs",
    category: "journal",
    date: "Current Quarter",
    author: "Berean Ministry",
    description: "Structured journaling prompts with monthly themes, memory passages, and prayer diary sections.",
  },
  {
    id: "res-5",
    title: "Sermon Notes: The Pillar and Ground of Truth",
    category: "preachings",
    date: "Sunday Worship",
    author: "Pastor",
    description: "Expository message on 1 Timothy 3:15 and the sacred duty of the local church in defending biblical truth.",
  },
];

export const ViewPosts: React.FC = () => {
  const [resources, setResources] = useState<ResourceItem[]>(initialResources);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      const storedPosts = localStorage.getItem("bbbc_blog_posts");
      if (storedPosts) {
        const parsed = JSON.parse(storedPosts);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const mapped: ResourceItem[] = parsed.map((p: any, idx: number) => ({
            id: p.id || `post-${idx}`,
            title: p.title || "Resource",
            category: (p.type || p.category || "preachings").toLowerCase(),
            date: p.date || "Recent",
            author: p.author || "Pastor",
            description: p.description || p.content || "",
            fileUrl: p.fileUrl,
          }));
          setResources([...mapped, ...initialResources]);
        }
      }
    } catch (e) {
      console.warn("Could not load stored resources", e);
    }
  }, []);

  const filtered = resources.filter((item) => {
    const matchesTab = activeTab === "all" || item.category === activeTab;
    const matchesQuery =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesQuery;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0f2042] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4 px-3 py-1">
            Media & Publications
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Posts, Sermons & Resources
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Browse our library of sermon notes, Sunday School curriculum, Bible reading calendars, and discipleship lessons.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-10">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
            <input
              type="text"
              placeholder="Search resources, topics, or speaker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="flex items-center space-x-2 text-xs text-slate-500 w-full md:w-auto justify-end">
            <span>Showing {filtered.length} resources</span>
            <span className="text-slate-300">|</span>
            <Link
              to="/admin-blog"
              className="inline-flex items-center text-amber-700 hover:text-amber-800 font-semibold"
            >
              <ShieldCheck className="w-3.5 h-3.5 mr-1" />
              Admin Portal
            </Link>
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto pb-2">
            <TabsList className="bg-slate-200/80 p-1 rounded-xl flex min-w-max">
              <TabsTrigger value="all" className="rounded-lg text-xs sm:text-sm">
                All Resources
              </TabsTrigger>
              <TabsTrigger value="preachings" className="rounded-lg text-xs sm:text-sm">
                Preachings
              </TabsTrigger>
              <TabsTrigger value="calendar" className="rounded-lg text-xs sm:text-sm">
                Bible Calendar
              </TabsTrigger>
              <TabsTrigger value="discipleship" className="rounded-lg text-xs sm:text-sm">
                Discipleship
              </TabsTrigger>
              <TabsTrigger value="sundayschool" className="rounded-lg text-xs sm:text-sm">
                Sunday School
              </TabsTrigger>
              <TabsTrigger value="journal" className="rounded-lg text-xs sm:text-sm">
                Daily Journal
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-8">
            {filtered.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-700">No resources found</h3>
                <p className="text-xs text-slate-500 mt-1">Try searching for a different keyword or category.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow flex flex-col justify-between">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="gold" className="capitalize text-[11px]">
                          {item.category}
                        </Badge>
                        <span className="text-[11px] text-slate-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-base text-slate-900 leading-snug">
                        {item.title}
                      </CardTitle>
                      {item.author && (
                        <CardDescription className="text-xs flex items-center text-slate-500 mt-1">
                          <User className="w-3 h-3 mr-1 text-slate-400" />
                          {item.author}
                        </CardDescription>
                      )}
                    </CardHeader>

                    <CardContent className="text-xs text-slate-600 space-y-4 pt-0">
                      <p className="leading-relaxed line-clamp-3">{item.description}</p>
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        {item.fileUrl ? (
                          <Button asChild size="sm" variant="navy" className="text-xs w-full">
                            <a href={item.fileUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="w-3.5 h-3.5 mr-1" /> Download Resource
                            </a>
                          </Button>
                        ) : (
                          <Button asChild size="sm" variant="outline" className="text-xs w-full">
                            <a href={`mailto:info@bbbcmolino.org?subject=Resource%20Request:%20${encodeURIComponent(item.title)}`}>
                              Request Material
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};
