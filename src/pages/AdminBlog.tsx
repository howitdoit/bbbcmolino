import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  PlusCircle, 
  Trash2, 
  Save, 
  LogOut, 
  Key, 
  FileText, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface AdminPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  description: string;
  fileUrl?: string;
}

const DEFAULT_ADMIN_PASS = "admin123";

export const AdminBlog: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  // Admin Data State
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("preachings");
  const [newAuthor, setNewAuthor] = useState("Pastor");
  const [newDesc, setNewDesc] = useState("");
  const [newFileUrl, setNewFileUrl] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Password change state
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [passMsg, setPassMsg] = useState("");

  useEffect(() => {
    const authStatus = sessionStorage.getItem("bbbc_admin_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);
      loadPosts();
    }
  }, []);

  const loadPosts = () => {
    try {
      const stored = localStorage.getItem("bbbc_blog_posts");
      if (stored) {
        setPosts(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not load admin posts", e);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPass = localStorage.getItem("bbbc_admin_password") || DEFAULT_ADMIN_PASS;
    if (passwordInput === storedPass) {
      setIsAuthenticated(true);
      sessionStorage.setItem("bbbc_admin_auth", "true");
      setAuthError("");
      loadPosts();
    } else {
      setAuthError("Incorrect password. Default is 'admin123' if not changed.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("bbbc_admin_auth");
    setPasswordInput("");
  };

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newPost: AdminPost = {
      id: Date.now().toString(),
      title: newTitle,
      category: newCategory,
      author: newAuthor,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      description: newDesc,
      fileUrl: newFileUrl.trim() || undefined,
    };

    const updated = [newPost, ...posts];
    setPosts(updated);
    localStorage.setItem("bbbc_blog_posts", JSON.stringify(updated));

    setNewTitle("");
    setNewDesc("");
    setNewFileUrl("");
    setSuccessMsg("Resource successfully published!");
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const handleDeletePost = (id: string) => {
    if (!window.confirm("Are you sure you want to delete this resource?")) return;
    const updated = posts.filter((p) => p.id !== id);
    setPosts(updated);
    localStorage.setItem("bbbc_blog_posts", JSON.stringify(updated));
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    const activePass = localStorage.getItem("bbbc_admin_password") || DEFAULT_ADMIN_PASS;
    if (currentPass !== activePass) {
      setPassMsg("Current password does not match.");
      return;
    }
    if (newPass.length < 6) {
      setPassMsg("New password must be at least 6 characters.");
      return;
    }
    localStorage.setItem("bbbc_admin_password", newPass);
    setCurrentPass("");
    setNewPass("");
    setPassMsg("Password updated successfully!");
    setTimeout(() => setPassMsg(""), 3000);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4 py-16">
        <Card className="w-full max-w-md shadow-xl border-t-4 border-t-amber-500">
          <CardHeader className="text-center pb-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <CardTitle className="text-2xl text-[#0f2042]">BBBC Admin Portal</CardTitle>
            <CardDescription>
              Sign in to manage sermons, calendar, and church resources.
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Admin Master Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Enter password..."
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <Button type="submit" variant="gold" className="w-full py-2.5 font-semibold">
                Sign In to Dashboard
              </Button>

              <div className="text-center pt-2">
                <Link to="/" className="text-xs text-slate-500 hover:text-slate-800">
                  ← Back to Public Website
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0f2042] text-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">Admin Resource Manager</h1>
              <p className="text-xs text-slate-300">BBBC Molino Content & Media Management</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button asChild size="sm" variant="outline" className="text-xs text-white border-white/20 bg-white/10 hover:bg-white/20">
              <Link to="/view-posts">View Live Resources</Link>
            </Button>
            <Button
              onClick={handleLogout}
              size="sm"
              variant="destructive"
              className="text-xs font-semibold"
            >
              <LogOut className="w-3.5 h-3.5 mr-1" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Action Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create new resource */}
          <div className="lg:col-span-2">
            <Card className="shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-[#0f2042] flex items-center space-x-2">
                    <PlusCircle className="w-5 h-5 text-amber-600" />
                    <span>Publish New Resource / Sermon</span>
                  </CardTitle>
                </div>
                <CardDescription>
                  Published items will appear immediately on &quot;The Word&quot; and &quot;Posts&quot; pages.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleAddPost} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="e.g. Walking in the Spirit"
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Category
                      </label>
                      <select
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="preachings">Preachings & Sermons</option>
                        <option value="calendar">Bible Reading Calendar</option>
                        <option value="discipleship">Discipleship Lessons</option>
                        <option value="sundayschool">Sunday School Materials</option>
                        <option value="journal">Berean Daily Journal</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Author / Teacher / Speaker
                      </label>
                      <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="Pastor / Teacher"
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        File URL / Google Drive Shareable Link (Optional)
                      </label>
                      <input
                        type="url"
                        value={newFileUrl}
                        onChange={(e) => setNewFileUrl(e.target.value)}
                        placeholder="https://drive.google.com/..."
                        className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Summary or Sermon Notes
                    </label>
                    <textarea
                      rows={4}
                      value={newDesc}
                      onChange={(e) => setNewDesc(e.target.value)}
                      placeholder="Outline, scripture verses, and key devotional thoughts..."
                      className="w-full p-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {successMsg && (
                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{successMsg}</span>
                    </div>
                  )}

                  <Button type="submit" variant="gold" className="font-semibold">
                    <Save className="w-4 h-4 mr-2" />
                    Publish Resource
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* List of existing posts */}
            <div className="mt-8 space-y-4">
              <h3 className="font-bold text-lg text-[#0f2042]">
                Published Items ({posts.length})
              </h3>

              {posts.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-slate-200 text-slate-400 text-xs">
                  No custom items published yet. Add one above!
                </div>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-4 hover:shadow-sm transition-shadow"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="gold" className="text-[10px] capitalize">
                          {post.category}
                        </Badge>
                        <span className="text-[11px] text-slate-400">{post.date}</span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-900">{post.title}</h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{post.description}</p>
                    </div>

                    <Button
                      onClick={() => handleDeletePost(post.id)}
                      size="sm"
                      variant="ghost"
                      className="text-rose-600 hover:bg-rose-50 hover:text-rose-700 h-8 px-2"
                      title="Delete resource"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Change password sidebar */}
          <div>
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base text-[#0f2042] flex items-center space-x-2">
                  <Key className="w-4 h-4 text-amber-600" />
                  <span>Security & Password</span>
                </CardTitle>
                <CardDescription className="text-xs">
                  Update the master administrator password for this browser.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleChangePassword} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      required
                      value={currentPass}
                      onChange={(e) => setCurrentPass(e.target.value)}
                      placeholder="Current password..."
                      className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      required
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                      placeholder="New password (min 6 chars)..."
                      className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  {passMsg && (
                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
                      {passMsg}
                    </div>
                  )}

                  <Button type="submit" variant="navy" size="sm" className="w-full text-xs">
                    Update Password
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
