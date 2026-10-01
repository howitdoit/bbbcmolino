import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  Download, 
  FileText, 
  Sparkles, 
  Search, 
  Volume2, 
  ExternalLink,
  ArrowRight,
  BookMarked
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface PostItem {
  id: string;
  title: string;
  category: string;
  date: string;
  speaker?: string;
  passage?: string;
  summary: string;
  fileUrl?: string;
}

const defaultSermons: PostItem[] = [
  {
    id: "1",
    title: "Standing Firm on the Immovable Foundation",
    category: "Sunday Preaching",
    date: "Latest Service",
    speaker: "Pastor",
    passage: "1 Corinthians 15:58",
    summary: "An exhortation to remain steadfast, unmovable, and always abounding in the work of the Lord.",
  },
  {
    id: "2",
    title: "The Preciousness of God's Preserved Word",
    category: "Bible Study",
    date: "Midweek Exhortation",
    speaker: "Pastor",
    passage: "Psalm 12:6-7",
    summary: "Examining why the inspired Scripture is our sole and ultimate authority for faith and practice.",
  },
  {
    id: "3",
    title: "Salvation Wholly by Grace: No Room for Boasting",
    category: "Sunday Preaching",
    date: "Gospel Sunday",
    speaker: "Pastor",
    passage: "Ephesians 2:8-9",
    summary: "How Christ paid the complete penalty for our sins, offering eternal life as an unmerited gift.",
  },
];

export const TheWord: React.FC = () => {
  const [posts, setPosts] = useState<PostItem[]>(defaultSermons);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Check localStorage for any custom posts created by admin
    try {
      const stored = localStorage.getItem("bbbc_blog_posts");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const mapped: PostItem[] = parsed.map((p: any, idx: number) => ({
            id: p.id || String(idx),
            title: p.title || "Preaching",
            category: p.category || "Preaching",
            date: p.date || "Recent",
            speaker: p.speaker || "Pastor",
            passage: p.passage || "Scripture",
            summary: p.summary || p.content?.substring(0, 140) + "..." || "",
            fileUrl: p.fileUrl,
          }));
          setPosts([...mapped, ...defaultSermons]);
        }
      }
    } catch (e) {
      console.warn("Could not load local posts", e);
    }
  }, []);

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.passage?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-[#0f2042] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="gold" className="mb-4 px-3 py-1">
            Preaching & Biblical Resources
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            The Word of God
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            &quot;Faith cometh by hearing, and hearing by the word of God.&quot; — Romans 10:17
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        {/* Core Resources Showcase */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-amber-500">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                <BookOpen className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg text-[#0f2042]">Sermons & Preaching</CardTitle>
              <CardDescription>Sunday & Midweek Messages</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 space-y-4">
              <p>In-depth expository preaching from the King James Bible to feed your spiritual soul and encourage your walk.</p>
              <Button asChild variant="outline" size="sm" className="w-full text-xs">
                <Link to="/view-posts">View All Preachings <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-blue-500">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg text-[#0f2042]">Bible Reading Calendar</CardTitle>
              <CardDescription>Daily Scripture Journey</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 space-y-4">
              <p>Daily reading schedule designed to guide believers through the entirety of Scripture with structured chapters.</p>
              <Button asChild variant="outline" size="sm" className="w-full text-xs">
                <Link to="/view-posts">Access Bible Calendar <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow border-t-4 border-t-emerald-500">
            <CardHeader>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                <BookMarked className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg text-[#0f2042]">Sunday School & Discipleship</CardTitle>
              <CardDescription>Curriculum & Teaching Notes</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-slate-600 space-y-4">
              <p>Downloadable Sunday School lessons, teacher activity sheets, and foundational discipleship guides.</p>
              <Button asChild variant="outline" size="sm" className="w-full text-xs">
                <Link to="/view-posts">Browse Materials <ArrowRight className="w-3.5 h-3.5 ml-1" /></Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Preaching Library with Search */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <Badge variant="navy" className="mb-1">Messages</Badge>
              <h2 className="text-2xl font-bold text-[#0f2042]">Recent Messages & Studies</h2>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search by topic or passage..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-sm">
                No sermons found matching your search.
              </div>
            ) : (
              filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400/80 hover:bg-amber-50/20 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Badge variant="gold" className="text-[11px] py-0">{post.category}</Badge>
                      <span className="text-xs text-slate-400">{post.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{post.title}</h3>
                    <p className="text-xs text-slate-600">{post.summary}</p>
                    {post.passage && (
                      <span className="inline-block text-xs font-semibold text-amber-700">
                        📖 {post.passage}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 shrink-0">
                    <Button asChild size="sm" variant="navy" className="text-xs">
                      <Link to="/view-posts">
                        Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Berean Daily Journal Spotlight */}
        <section className="bg-gradient-to-br from-[#0f2042] to-[#1e3c72] text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-4">
              <Badge variant="gold">Daily Fellowship</Badge>
              <h3 className="text-2xl sm:text-3xl font-bold">The Berean Daily Journal</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Grow consistent in personal prayer and daily meditation. The Berean Daily Journal includes daily scripture passages, Proverbs for wisdom, prayer prompts, and notes for spiritual reflection.
              </p>
              <ul className="text-xs sm:text-sm text-slate-200 space-y-2">
                <li>✓ Daily Proverbs & Psalms readings</li>
                <li>✓ Personal prayer request journal pages</li>
                <li>✓ Weekly sermon notes space</li>
              </ul>
              <div className="pt-2">
                <Button asChild variant="gold" className="rounded-full text-xs">
                  <a href="mailto:info@bbbcmolino.org?subject=Berean%20Daily%20Journal%20Inquiry">
                    Inquire About A Journal Copy
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center max-w-sm">
                <BookOpen className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold">Start Your Spiritual Habit</h4>
                <p className="text-xs text-slate-300 mt-2 mb-4">
                  &quot;Thy word is a lamp unto my feet, and a light unto my path.&quot; — Psalm 119:105
                </p>
                <Badge variant="gold">Available at Church Office</Badge>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
