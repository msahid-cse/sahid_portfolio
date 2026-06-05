"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: "64px" }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>
          Work History
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginTop: "12px", lineHeight: 1.1 }}>
          Professional{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Experience
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: "relative", maxWidth: "800px" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "23px",
          top: "24px",
          bottom: "0",
          width: "1px",
          background: "linear-gradient(to bottom, #7c3aed, rgba(124,58,237,0.2))",
        }} />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ display: "flex", gap: "28px", marginBottom: "40px" }}
          >
            {/* Timeline dot */}
            <div style={{ flexShrink: 0, position: "relative" }}>
              <div style={{
                width: 48, height: 48,
                borderRadius: "14px",
                background: exp.current
                  ? "linear-gradient(135deg, #7c3aed, #6d28d9)"
                  : "rgba(124,58,237,0.15)",
                border: exp.current ? "none" : "1px solid rgba(124,58,237,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: exp.current ? "0 8px 24px rgba(124,58,237,0.35)" : "none",
              }}>
                <Briefcase size={20} style={{ color: exp.current ? "white" : "#a78bfa" }} />
              </div>
              {exp.current && (
                <div style={{
                  position: "absolute",
                  top: "-2px",
                  right: "-2px",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#10b981",
                  border: "2px solid var(--bg-primary)",
                  boxShadow: "0 0 8px rgba(16,185,129,0.6)",
                }} />
              )}
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.25)" }}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${exp.current ? "rgba(124,58,237,0.25)" : "var(--border-subtle)"}`,
                borderRadius: "20px",
                padding: "28px",
                transition: "all 0.3s ease",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)" }}>
                  {exp.role}
                </h3>
                {exp.current && (
                  <span style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#10b981",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "block" }} />
                    Current
                  </span>
                )}
              </div>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "20px" }}>
                <span style={{ fontSize: "15px", fontWeight: 600, color: "#a78bfa" }}>
                  {exp.company}
                </span>
                <span style={{ color: "var(--text-tertiary)", fontSize: "14px" }}>
                  {exp.period}
                </span>
                <span style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "6px",
                  padding: "2px 8px",
                  fontSize: "12px",
                  color: "var(--text-tertiary)",
                }}>
                  {exp.type}
                </span>
              </div>

              {/* Achievements */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                {exp.achievements.map((ach) => (
                  <div key={ach} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={14} style={{ color: "#10b981", marginTop: "2px", flexShrink: 0 }} />
                    <span style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6 }}>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              {exp.technologies && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.technologies.map((tech) => (
                    <span key={tech} style={{
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.15)",
                      borderRadius: "6px",
                      padding: "3px 8px",
                      fontSize: "11px",
                      color: "#c4b5fd",
                      fontFamily: "var(--font-mono)",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
