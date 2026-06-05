"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight, Search } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const blogPosts = [
  {
    slug: "getting-started-with-power-bi",
    title: "Getting Started with Power BI: From Raw Data to Insights",
    description: "A complete beginner's guide to Power BI, covering data import, transformation, and building your first interactive dashboard.",
    date: "2025-12-15",
    category: "Power BI",
    tags: ["Power BI", "Data Analytics", "Dashboard"],
    readTime: 8,
    color: "#f59e0b",
  },
  {
    slug: "openstreetmap-geospatial-data-operations",
    title: "OpenStreetMap for Data Operations: A Practitioner's Guide",
    description: "How to use OpenStreetMap for professional geospatial data validation, route analysis, and GeoJSON processing in production environments.",
    date: "2026-01-10",
    category: "GIS",
    tags: ["GIS", "OpenStreetMap", "GeoJSON", "Spatial Data"],
    readTime: 12,
    color: "#10b981",
  },
  {
    slug: "selenium-automation-testing-guide",
    title: "Building a Robust Selenium Automation Framework from Scratch",
    description: "Step-by-step guide to designing a Page Object Model based Selenium framework with Python, including CI/CD integration.",
    date: "2026-02-20",
    category: "Software Testing",
    tags: ["Selenium", "Automation", "QA", "Python"],
    readTime: 15,
    color: "#8b5cf6",
  },
  {
    slug: "lstm-time-series-forecasting",
    title: "LSTM Networks for Time Series Forecasting: A Deep Dive",
    description: "Understanding LSTM architecture for sequential data, with a practical implementation for agricultural production forecasting.",
    date: "2026-03-05",
    category: "Machine Learning",
    tags: ["LSTM", "Deep Learning", "Python", "TensorFlow"],
    readTime: 18,
    color: "#ec4899",
  },
  {
    slug: "google-apps-script-automation",
    title: "Automate Your Workflow with Google Apps Script",
    description: "How to use Google Apps Script to build powerful automation tools, from email triggers to Sheets data processing.",
    date: "2026-04-01",
    category: "Automation",
    tags: ["Google Apps Script", "Automation", "JavaScript"],
    readTime: 10,
    color: "#f97316",
  },
  {
    slug: "python-data-cleaning-guide",
    title: "Python Data Cleaning: The Complete Practitioner's Handbook",
    description: "Master data cleaning with Pandas — handling missing values, outliers, duplicates, and data type conversions with real datasets.",
    date: "2026-04-15",
    category: "Python",
    tags: ["Python", "Pandas", "Data Cleaning", "Analytics"],
    readTime: 14,
    color: "#3b82f6",
  },
];

const categories = ["All", "GIS", "Data Analytics", "Power BI", "Python", "Software Testing", "Automation", "Machine Learning"];

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCat = activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <SectionWrapper id="blog">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>
          Knowledge Base
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginTop: "12px", lineHeight: 1.1 }}>
          Technical{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Blog
          </span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "480px", margin: "16px auto 0", lineHeight: 1.7 }}>
          Deep-dives into GIS, data analytics, AI/ML, automation, and software quality engineering.
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ position: "relative", maxWidth: "480px", margin: "0 auto 32px" }}
      >
        <Search size={16} style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary)" }} />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search articles..."
          style={{
            width: "100%",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border-medium)",
            borderRadius: "12px",
            padding: "12px 16px 12px 44px",
            color: "var(--text-primary)",
            fontSize: "14px",
            outline: "none",
            fontFamily: "var(--font-sans)",
            transition: "border-color 0.2s ease",
          }}
          onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
        />
      </motion.div>

      {/* Categories */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center", marginBottom: "48px" }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "7px 16px",
              borderRadius: "100px",
              border: activeCategory === cat ? "1px solid rgba(124,58,237,0.5)" : "1px solid var(--border-subtle)",
              background: activeCategory === cat ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.03)",
              color: activeCategory === cat ? "#a78bfa" : "var(--text-secondary)",
              fontSize: "12px",
              fontWeight: activeCategory === cat ? 600 : 400,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Posts Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "20px" }}>
        {filtered.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            whileHover={{ y: -6 }}
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${post.color}40`;
              e.currentTarget.style.boxShadow = `0 12px 40px ${post.color}12`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-subtle)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Category + Read Time */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span style={{
                background: `${post.color}15`,
                border: `1px solid ${post.color}35`,
                color: post.color,
                borderRadius: "100px",
                padding: "3px 10px",
                fontSize: "11px",
                fontWeight: 600,
              }}>
                {post.category}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "var(--text-tertiary)" }}>
                <Clock size={12} />
                {post.readTime} min read
              </span>
            </div>

            <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: "10px", flex: 1 }}>
              {post.title}
            </h3>

            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
              {post.description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} style={{
                  display: "flex", alignItems: "center", gap: "4px",
                  fontSize: "11px", color: "var(--text-tertiary)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                }}>
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 600, color: post.color }}>
                Read more <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px", color: "var(--text-tertiary)" }}>
          No articles found for &quot;{searchQuery}&quot;
        </div>
      )}
    </SectionWrapper>
  );
}
