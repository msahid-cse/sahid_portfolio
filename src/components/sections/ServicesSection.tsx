"use client";

import { motion } from "framer-motion";
import { Map, BarChart3, Zap, ShieldCheck } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Map,
  BarChart3,
  Zap,
  ShieldCheck,
};

export default function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span style={{
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#a78bfa",
          fontFamily: "var(--font-mono)",
        }}>
          What I Offer
        </span>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          marginTop: "12px",
          lineHeight: 1.1,
        }}>
          Professional <span style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Services
          </span>
        </h2>
        <p style={{
          color: "var(--text-secondary)",
          fontSize: "16px",
          maxWidth: "560px",
          margin: "16px auto 0",
          lineHeight: 1.7,
        }}>
          A curated selection of services I deliver for organizations that need data, GIS, AI, and quality assurance support.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "24px",
      }}>
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.12)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div style={{
                width: 52,
                height: 52,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "22px",
                background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)`,
                border: `1px solid ${service.color}30`,
              }}>
                {Icon && <Icon size={24} style={{ color: service.color }} />}
              </div>
              <h3 style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: "12px",
              }}>
                {service.title}
              </h3>
              <p style={{
                color: "var(--text-secondary)",
                fontSize: "14px",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}>
                {service.description}
              </p>
              <ul style={{ display: "grid", gap: "10px", listStyle: "none", padding: 0, margin: 0 }}>
                {service.features.map((feature) => (
                  <li key={feature} style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}>
                    <span style={{ color: service.color, marginTop: "2px" }}>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
