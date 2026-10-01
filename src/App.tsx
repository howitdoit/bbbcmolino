import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { Ministries } from "@/pages/Ministries";
import { ChurchLife } from "@/pages/ChurchLife";
import { TheWord } from "@/pages/TheWord";
import { Highlights } from "@/pages/Highlights";
import { DaughterChurches } from "@/pages/DaughterChurches";
import { Academy } from "@/pages/Academy";
import { College } from "@/pages/College";
import { ViewPosts } from "@/pages/ViewPosts";
import { AdminBlog } from "@/pages/AdminBlog";

// Scroll restoration and hash anchor smooth scrolling
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <TopBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            {/* Primary Modern Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/church-life" element={<ChurchLife />} />
            <Route path="/the-word" element={<TheWord />} />
            <Route path="/highlights" element={<Highlights />} />
            <Route path="/daughter-churches" element={<DaughterChurches />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/college" element={<College />} />
            <Route path="/view-posts" element={<ViewPosts />} />
            <Route path="/admin-blog" element={<AdminBlog />} />

            {/* Legacy URL automatic compatibility & redirects */}
            <Route path="/index.html" element={<Navigate to="/" replace />} />
            <Route path="/ministries.html" element={<Navigate to="/ministries" replace />} />
            <Route path="/church-life.html" element={<Navigate to="/church-life" replace />} />
            <Route path="/the-word.html" element={<Navigate to="/the-word" replace />} />
            <Route path="/highlights.html" element={<Navigate to="/highlights" replace />} />
            <Route path="/daughter-churches.html" element={<Navigate to="/daughter-churches" replace />} />
            <Route path="/academy/index.html" element={<Navigate to="/academy" replace />} />
            <Route path="/college/index.html" element={<Navigate to="/college" replace />} />
            <Route path="/admin-blog.html" element={<Navigate to="/admin-blog" replace />} />
            <Route path="/view-posts.html" element={<Navigate to="/view-posts" replace />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
