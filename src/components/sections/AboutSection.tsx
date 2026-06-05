"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";

const TIMELINE = [
  {
    year: "2024–2025",
    title: "AI Research & Deep Learning",
    desc: "Dove into advanced ML research — building forecasting models with LSTM/GRU/CNN, exploring NLP with mBART & T5 for Bangla language, and applying computer vision to real-world systems.",
    color: "#a78bfa",
  },
  {
    year: "2025",
    title: "SQA Engineering",
    desc: "Joined QA Harbor Limited as an SQA intern. Mastered the full testing lifecycle — manual testing, API testing with Postman, automation with Selenium, and performance testing with JMeter.",
    color: "#06b6d4",
  },
  {
    year: "2026–Present",
    title: "Data Operations & GIS",
    desc: "Now leading data operations at TechnoNext Software Ltd — validating geospatial data, processing OpenStreetMap routes, and building automated data quality pipelines for production systems.",
    color: "#10b981",
  },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: "60px" }}
      >
        <span style={{
          fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#a78bfa",
          fontFamily: "var(--font-mono)",
        }}>
          About Me
        </span>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          marginTop: "12px",
          lineHeight: 1.1,
        }}>
          From testing software to<br />
          <span style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            mapping the world with AI
          </span>
        </h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}
        className="about-grid"
      >
        {/* Story */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "20px",
              padding: "32px",
              marginBottom: "24px",
              backdropFilter: "blur(8px)",
            }}
          >
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "15px", marginBottom: "16px" }}>
              I&apos;m <strong style={{ color: "var(--text-primary)" }}>Md. Sahid</strong> — a multidisciplinary technologist from
              Dhaka, Bangladesh, with a B.Sc. in Computer Science & Engineering from
              Green University of Bangladesh.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "15px", marginBottom: "16px" }}>
              My journey started in software quality assurance, where I learned that great
              software starts with great testing. That discipline shaped how I approach
              every system I build today — with rigor, attention to detail, and a focus
              on measurable outcomes.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
              Today I work at the intersection of <strong style={{ color: "#a78bfa" }}>data operations</strong>,{" "}
              <strong style={{ color: "#06b6d4" }}>geospatial intelligence</strong>, and{" "}
              <strong style={{ color: "#10b981" }}>AI automation</strong> — building systems
              that turn raw data into scalable digital solutions.
            </p>
          </motion.div>

          {/* Values */}
          {[
            { label: "Problem-First Thinking", desc: "I start with the business problem, not the technology." },
            { label: "Data-Driven Decisions", desc: "Every solution is validated with real metrics and measurable outcomes." },
            { label: "Continuous Learning", desc: "From SQA to GIS to AI research — I pursue mastery across domains." },
          ].map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}
            >
              <div style={{
                width: 8, height: 8,
                borderRadius: "50%",
                background: "#7c3aed",
                marginTop: "6px",
                flexShrink: 0,
                boxShadow: "0 0 8px rgba(124,58,237,0.5)",
              }} />
              <div>
                <p style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px" }}>{v.label}</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div>
          <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "32px" }}>
            My Journey
          </p>
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "15px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)",
            }} />
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                style={{ paddingLeft: "48px", marginBottom: "36px", position: "relative" }}
              >
                <div style={{
                  position: "absolute",
                  left: "8px",
                  top: "4px",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: item.color,
                  border: "2px solid var(--bg-primary)",
                  boxShadow: `0 0 12px ${item.color}`,
                }} />
                <span style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: item.color,
                  fontFamily: "var(--font-mono)",
                  marginBottom: "6px",
                  display: "block",
                }}>
                  {item.year}
                </span>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "16px", marginBottom: "8px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
