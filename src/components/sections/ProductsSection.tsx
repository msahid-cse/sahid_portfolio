"use client";

import { motion } from "framer-motion";
import {
  Target, LayoutDashboard, Bot, CheckSquare,
  Bell, MessageSquare, TrendingUp, Map, Zap, ArrowRight,
} from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const features = [
  { icon: Target, label: "Goal Tracking", desc: "Set, track, and achieve personal & professional goals" },
  { icon: LayoutDashboard, label: "KPI Dashboard", desc: "Real-time metrics and performance indicators" },
  { icon: Bot, label: "AI Assistant", desc: "Intelligent recommendations and insights" },
  { icon: CheckSquare, label: "Task Management", desc: "Smart task prioritization and scheduling" },
  { icon: Bell, label: "Telegram Notifications", desc: "Daily reports and alerts via Telegram bot" },
  { icon: MessageSquare, label: "WhatsApp Updates", desc: "Automated summaries to WhatsApp" },
  { icon: TrendingUp, label: "Productivity Analytics", desc: "Track patterns and optimize your workflow" },
  { icon: Map, label: "Roadmap", desc: "Visual progress tracking toward milestones" },
];

export default function ProductsSection() {
  return (
    <SectionWrapper id="products">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>
          Flagship Product
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginTop: "12px", lineHeight: 1.1 }}>
          Introducing{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Personal AI OS
          </span>
        </h2>
      </motion.div>

      {/* Main Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(6,182,212,0.05) 100%)",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: "28px",
          padding: "clamp(32px, 5vw, 64px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start", position: "relative" }}
          className="product-grid"
        >
          {/* Left: Description */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "24px",
            }}>
              <Zap size={14} style={{ color: "#a78bfa" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#a78bfa" }}>AI-Powered Personal OS</span>
            </div>

            <h3 style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "16px", lineHeight: 1.15 }}>
              Your life, operating at peak performance
            </h3>

            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
              Personal AI OS is an intelligent productivity ecosystem that connects your
              goals, tasks, metrics, and AI assistant in one unified dashboard. Get
              automated daily briefings via Telegram & WhatsApp, track KPIs in real time,
              and let AI help you make better decisions every day.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "32px" }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Join Waitlist
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "12px",
                  padding: "14px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                }}
              >
                View Demo →
              </motion.button>
            </div>

            {/* Pricing placeholder */}
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "14px",
              padding: "20px",
            }}>
              <p style={{ fontSize: "12px", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                Pricing
              </p>
              <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "28px", fontWeight: 800, color: "var(--text-primary)" }}>Free</span>
                  <span style={{ color: "var(--text-tertiary)", fontSize: "14px" }}> beta access</span>
                </div>
                <div style={{ width: 1, height: 32, background: "var(--border-subtle)" }} />
                <div>
                  <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                    Pro plan launching soon · Early birds get 50% off
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ scale: 1.03 }}
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "14px",
                      padding: "16px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                  >
                    <div style={{
                      width: 36, height: 36,
                      borderRadius: "8px",
                      background: "rgba(124,58,237,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "10px",
                    }}>
                      <Icon size={16} style={{ color: "#a78bfa" }} />
                    </div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--text-primary)", marginBottom: "4px" }}>
                      {feature.label}
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--text-tertiary)", lineHeight: 1.5 }}>
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
