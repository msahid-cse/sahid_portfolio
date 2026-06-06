"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/shared/BrandIcons";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

const categories: ProjectCategory[] = [
  "All",
  "GIS",
  "Data Analytics",
  "QA",
  "AI",
  "Automation",
  "Web Development",
];

const categoryColors: Record<string, string> = {
  GIS: "#10b981",
  "Data Analytics": "#3b82f6",
  QA: "#8b5cf6",
  AI: "#ec4899",
  Automation: "#f59e0b",
  "Web Development": "#f97316",
};

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "48px" }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>
          Portfolio
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginTop: "12px", lineHeight: 1.1 }}>
          Featured{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Projects
          </span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "520px", margin: "16px auto 0", lineHeight: 1.7 }}>
          Real-world solutions across data analytics, GIS, QA engineering, AI research, and automation.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "center",
          marginBottom: "48px",
        }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "8px 18px",
              borderRadius: "100px",
              border: activeCategory === cat
                ? "1px solid rgba(124,58,237,0.5)"
                : "1px solid var(--border-subtle)",
              background: activeCategory === cat
                ? "rgba(124,58,237,0.15)"
                : "rgba(255,255,255,0.03)",
              color: activeCategory === cat ? "#a78bfa" : "var(--text-secondary)",
              fontSize: "13px",
              fontWeight: activeCategory === cat ? 600 : 400,
              cursor: "pointer",
              fontFamily: "var(--font-sans)",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))", gap: "20px" }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const catColor = categoryColors[project.category] || "#7c3aed";
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "20px",
                  padding: "28px",
                  backdropFilter: "blur(12px)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px ${catColor}30`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                {/* Top Row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{
                      background: `${catColor}18`,
                      border: `1px solid ${catColor}40`,
                      color: catColor,
                      borderRadius: "100px",
                      padding: "3px 10px",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <span style={{
                        background: "rgba(251,191,36,0.1)",
                        border: "1px solid rgba(251,191,36,0.3)",
                        color: "#fbbf24",
                        borderRadius: "100px",
                        padding: "3px 10px",
                        fontSize: "11px",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}>
                        <Star size={10} fill="#fbbf24" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div style={{ display: "flex", gap: "8px" }}>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        style={{ color: "var(--text-tertiary)", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer"
                        style={{ color: "var(--text-tertiary)", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "10px" }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
                  {project.description}
                </p>

                {/* Key Result */}
                {project.results[0] && (
                  <div style={{
                    background: `${catColor}08`,
                    border: `1px solid ${catColor}20`,
                    borderRadius: "10px",
                    padding: "12px 16px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                    <ArrowRight size={14} style={{ color: catColor, flexShrink: 0 }} />
                    <span style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                      {project.results[0]}
                    </span>
                  </div>
                )}

                {/* Tech Stack */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "6px",
                        padding: "3px 8px",
                        fontSize: "11px",
                        color: "var(--text-tertiary)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span style={{ fontSize: "11px", color: "var(--text-tertiary)", padding: "3px 6px" }}>
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
