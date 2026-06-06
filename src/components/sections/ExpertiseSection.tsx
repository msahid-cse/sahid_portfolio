"use client";

import { motion } from "framer-motion";
import { Map, BarChart3, ShieldCheck, Code2, Zap, Brain } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { expertiseAreas } from "@/data/expertise";

const iconMap: Record<string, React.ElementType> = {
  Map,
  BarChart3,
  ShieldCheck,
  Code2,
  Zap,
  Brain,
};

const gradientMap: Record<string, { border: string; glow: string }> = {
  gis: { border: "rgba(16,185,129,0.3)", glow: "rgba(16,185,129,0.08)" },
  "data-analytics": { border: "rgba(59,130,246,0.3)", glow: "rgba(59,130,246,0.08)" },
  sqa: { border: "rgba(139,92,246,0.3)", glow: "rgba(139,92,246,0.08)" },
  frontend: { border: "rgba(249,115,22,0.3)", glow: "rgba(249,115,22,0.08)" },
  "ai-automation": { border: "rgba(234,179,8,0.3)", glow: "rgba(234,179,8,0.08)" },
  "ai-ml": { border: "rgba(236,72,153,0.3)", glow: "rgba(236,72,153,0.08)" },
};

export default function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span style={{
          fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em",
          textTransform: "uppercase", color: "#a78bfa",
          fontFamily: "var(--font-mono)",
        }}>
          What I Do
        </span>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          marginTop: "12px",
          lineHeight: 1.1,
        }}>
          Areas of{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Expertise
          </span>
        </h2>
        <p style={{
          color: "var(--text-secondary)",
          fontSize: "16px",
          maxWidth: "560px",
          margin: "16px auto 0",
          lineHeight: 1.7,
        }}>
          Six core domains where I deliver measurable business impact through
          technical excellence.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(340px, 100%), 1fr))",
        gap: "20px",
      }}>
        {expertiseAreas.map((area, i) => {
          const Icon = iconMap[area.icon];
          const colors = gradientMap[area.id] || { border: "rgba(124,58,237,0.3)", glow: "rgba(124,58,237,0.08)" };

          return (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${colors.border}`,
                borderRadius: "20px",
                padding: "28px",
                backdropFilter: "blur(12px)",
                transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                cursor: "default",
                boxShadow: `0 0 40px ${colors.glow}`,
              }}
            >
              {/* Icon */}
              <div style={{
                width: 48, height: 48,
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${colors.glow.replace("0.08", "0.3")}, ${colors.glow})`,
                border: `1px solid ${colors.border}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "20px",
              }}>
                {Icon && <Icon size={22} className={area.color} style={{ color: area.color.replace("text-", "") }} />}
              </div>

              <h3 style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "10px",
              }}>
                {area.title}
              </h3>

              <p style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}>
                {area.description}
              </p>

              {/* Skill Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {area.skills.slice(0, 8).map((skill) => (
                  <span
                    key={skill}
                    style={{
                      background: `${colors.glow.replace("0.08", "0.12")}`,
                      border: `1px solid ${colors.border.replace("0.3", "0.2")}`,
                      borderRadius: "100px",
                      padding: "4px 10px",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
                {area.skills.length > 8 && (
                  <span style={{
                    borderRadius: "100px",
                    padding: "4px 10px",
                    fontSize: "11px",
                    color: "var(--text-tertiary)",
                  }}>
                    +{area.skills.length - 8} more
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
