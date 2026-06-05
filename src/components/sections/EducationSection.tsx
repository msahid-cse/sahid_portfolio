"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Star } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const certifications = [
  { title: "Google Data Analytics Certificate", issuer: "Google / Coursera", year: "2024", color: "#3b82f6" },
  { title: "Python for Data Science", issuer: "IBM / Coursera", year: "2024", color: "#f59e0b" },
  { title: "Manual Software Testing", issuer: "Udemy", year: "2025", color: "#8b5cf6" },
  { title: "Power BI Data Analyst", issuer: "Microsoft", year: "2024", color: "#10b981" },
];

const leadershipItems = [
  {
    title: "IT Club President",
    org: "Green University of Bangladesh",
    period: "2023–2024",
    desc: "Led the university tech community, organized workshops, hackathons, and tech events.",
    impact: "200+ students engaged",
  },
  {
    title: "Volunteer Tech Instructor",
    org: "Community Learning Initiative",
    period: "2023",
    desc: "Taught programming fundamentals and data literacy to underserved youth in Dhaka.",
    impact: "50+ students trained",
  },
];

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}
        className="edu-grid"
      >
        {/* Left: Education + Leadership */}
        <div>
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "48px" }}
          >
            <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)", marginBottom: "24px", display: "block" }}>
              Education
            </span>

            <motion.div
              whileHover={{ y: -4 }}
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.04))",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "20px",
                padding: "28px",
              }}
            >
              <div style={{
                width: 52, height: 52,
                borderRadius: "14px",
                background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
                boxShadow: "0 8px 24px rgba(124,58,237,0.3)",
              }}>
                <GraduationCap size={24} style={{ color: "white" }} />
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "6px" }}>
                B.Sc. in Computer Science & Engineering
              </h3>
              <p style={{ color: "#a78bfa", fontWeight: 600, fontSize: "15px", marginBottom: "4px" }}>
                Green University of Bangladesh
              </p>
              <p style={{ color: "var(--text-tertiary)", fontSize: "13px", marginBottom: "16px" }}>
                Dhaka, Bangladesh · 2020–2024
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <div style={{
                  background: "rgba(251,191,36,0.1)",
                  border: "1px solid rgba(251,191,36,0.3)",
                  borderRadius: "100px",
                  padding: "6px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}>
                  <Star size={12} style={{ color: "#fbbf24" }} fill="#fbbf24" />
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "#fbbf24" }}>CGPA: 3.32 / 4.00</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)", marginBottom: "24px", display: "block" }}>
              Leadership & Volunteering
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {leadershipItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "16px",
                    padding: "20px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <div>
                      <h4 style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "15px" }}>{item.title}</h4>
                      <p style={{ color: "#a78bfa", fontSize: "13px" }}>{item.org}</p>
                    </div>
                    <span style={{ fontSize: "11px", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap" }}>
                      {item.period}
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.6, marginBottom: "10px" }}>
                    {item.desc}
                  </p>
                  <span style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    borderRadius: "100px",
                    padding: "3px 10px",
                    fontSize: "11px",
                    color: "#10b981",
                    fontWeight: 600,
                  }}>
                    📊 {item.impact}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)", marginBottom: "24px", display: "block" }}>
              Certifications
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, boxShadow: `0 8px 24px ${cert.color}15` }}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "16px",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    transition: "all 0.3s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${cert.color}40`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
                >
                  <div style={{
                    width: 44, height: 44,
                    borderRadius: "12px",
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Award size={20} style={{ color: cert.color }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px", marginBottom: "3px" }}>
                      {cert.title}
                    </p>
                    <p style={{ color: "var(--text-tertiary)", fontSize: "12px" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .edu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
