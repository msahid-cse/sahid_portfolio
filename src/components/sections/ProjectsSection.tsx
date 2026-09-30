"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/shared/BrandIcons";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { projects } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import styles from "./ProjectsSection.module.css";

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
      <motion.div layout className={styles.projectsGrid}>
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
                whileHover={{ y: -4 }}
                className={styles.card}
                style={{ "--project-accent": catColor } as CSSProperties}
              >
                {/* Top Row */}
                <div className={styles.topRow}>
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
                      <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label={`View ${project.title} source on GitHub`}
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className={styles.iconLink} aria-label={`Open ${project.title} live demo`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className={styles.title}>
                  {project.title}
                </h3>

                <p className={styles.description}>
                  {project.description}
                </p>

                {project.highlights && project.highlights.length > 0 && (
                  <div className={styles.highlights}>
                    <p className={styles.sectionLabel}>
                      Highlights
                    </p>
                    <div className={styles.highlightList}>
                      {project.highlights.slice(0, 2).map((highlight) => (
                        <div key={highlight} className={styles.highlight}>
                          <CheckCircle2 size={14} style={{ color: catColor, marginTop: "2px", flexShrink: 0 }} />
                          <span className={styles.highlightText}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Result */}
                {project.results[0] && (
                  <div className={styles.keyResult} style={{
                    background: `${catColor}08`,
                    border: `1px solid ${catColor}20`,
                  }}>
                    <ArrowRight size={14} style={{ color: catColor, flexShrink: 0 }} />
                    <span className={styles.resultText}>
                      {project.results[0]}
                    </span>
                  </div>
                )}

                {/* Tech Stack */}
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={styles.techMore}>
                      +{project.technologies.length - 4} more
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
