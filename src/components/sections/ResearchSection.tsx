"use client";

import { motion } from "framer-motion";
import { FlaskConical, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { researchItems } from "@/data/research";

const statusColors: Record<string, string> = {
  Published: "#10b981",
  "In Progress": "#f59e0b",
  Completed: "#3b82f6",
};

export default function ResearchSection() {
  return (
    <SectionWrapper id="research">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>
          Academic Work
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginTop: "12px", lineHeight: 1.1 }}>
          Research &{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Publications
          </span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "520px", margin: "16px auto 0", lineHeight: 1.7 }}>
          Applied AI research spanning NLP, deep learning for forecasting, and computer vision systems.
        </p>
      </motion.div>

      {/* Research Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {researchItems.map((item, i) => {
          const statusColor = statusColors[item.status] || "#7c3aed";
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ x: 4 }}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "20px",
                padding: "32px",
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "28px",
                alignItems: "start",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-subtle)")}
              className="research-card"
            >
              {/* Icon */}
              <div style={{
                width: 52, height: 52,
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))",
                border: "1px solid rgba(124,58,237,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <FlaskConical size={24} style={{ color: "#a78bfa" }} />
              </div>

              {/* Content */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
                  <div>
                    <span style={{
                      fontSize: "11px", fontWeight: 600,
                      color: "#06b6d4",
                      fontFamily: "var(--font-mono)",
                      marginBottom: "6px",
                      display: "block",
                    }}>
                      {item.category} · {item.year}
                    </span>
                    <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                  </div>
                  <span style={{
                    background: `${statusColor}15`,
                    border: `1px solid ${statusColor}40`,
                    color: statusColor,
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontSize: "11px",
                    fontWeight: 600,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: statusColor, display: "block" }} />
                    {item.status}
                  </span>
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7, marginBottom: "20px" }}>
                  {item.description}
                </p>

                {/* Models */}
                <div style={{ marginBottom: "16px" }}>
                  <p style={{ fontSize: "11px", color: "var(--text-tertiary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                    Models & Tools
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {item.models.map((m) => (
                      <span key={m} style={{
                        background: "rgba(124,58,237,0.1)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        borderRadius: "6px",
                        padding: "3px 10px",
                        fontSize: "11px",
                        color: "#c4b5fd",
                        fontFamily: "var(--font-mono)",
                      }}>
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <p style={{ fontSize: "11px", color: "var(--text-tertiary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                    Key Outcomes
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {item.outcomes.slice(0, 2).map((outcome) => (
                      <div key={outcome} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <CheckCircle2 size={14} style={{ color: "#10b981", marginTop: "1px", flexShrink: 0 }} />
                        <span style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.5 }}>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .research-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
