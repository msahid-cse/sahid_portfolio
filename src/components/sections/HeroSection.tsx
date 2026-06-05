"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Download,
  ArrowRight,
  MapPin,
  Briefcase,
  FlaskConical,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const roles = [
  "Data Operations Analyst",
  "GIS Specialist",
  "Data Analyst",
  "SQA Engineer",
  "AI Automation Builder",
  "Frontend Developer",
];

const stats = [
  { label: "Projects Completed", value: 9, icon: Briefcase, suffix: "+" },
  { label: "Years of Experience", value: 1, icon: Briefcase, suffix: "+" },
  { label: "Research Projects", value: 3, icon: FlaskConical, suffix: "" },
  { label: "Automation Systems", value: 3, icon: Cpu, suffix: "+" },
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Aurora Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "70%",
            height: "70%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          className="animate-aurora"
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "60%",
            height: "60%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(6,182,212,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40%",
            height: "40%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(16,185,129,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid pattern */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", width: "100%", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "60px",
          alignItems: "center",
        }}
        className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(16,185,129,0.1)",
                border: "1px solid rgba(16,185,129,0.2)",
                borderRadius: "100px",
                padding: "6px 14px",
                marginBottom: "28px",
              }}
            >
              <span style={{
                width: 8, height: 8,
                borderRadius: "50%",
                background: "#10b981",
                display: "block",
                boxShadow: "0 0 8px rgba(16,185,129,0.8)",
              }} className="animate-pulse-glow" />
              <span style={{ fontSize: "13px", color: "#10b981", fontWeight: 500 }}>
                Available for work · Dhaka, Bangladesh
              </span>
              <MapPin size={12} style={{ color: "#10b981" }} />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
                color: "var(--text-primary)",
              }}
            >
              Md.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sahid
              </span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginBottom: "24px", height: "36px", display: "flex", alignItems: "center" }}
            >
              <AnimatePresence mode="wait">
                {visible && (
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                      fontWeight: 600,
                      color: "#a78bfa",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {roles[roleIndex]}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "580px",
                marginBottom: "40px",
              }}
            >
              I build data-driven systems, GIS solutions, automation workflows,
              quality-assured software products, and AI-powered business tools.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "48px" }}
            >
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 8px 30px rgba(124,58,237,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
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
                View Projects
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-medium)",
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
                <Mail size={16} />
                Contact Me
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "rgba(6,182,212,0.08)",
                  color: "#06b6d4",
                  border: "1px solid rgba(6,182,212,0.2)",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              style={{ display: "flex", gap: "12px", alignItems: "center" }}
            >
              {[
                { icon: GithubIcon, href: "https://github.com/msahid-cse", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://linkedin.com/in/msahid-cse", label: "LinkedIn" },
                { icon: Mail, href: "mailto:msahid.cse@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={label}
                  style={{
                    width: 44, height: 44,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "12px",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#a78bfa";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-subtle)";
                  }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-avatar-wrap animate-float"
            style={{ flexShrink: 0 }}
          >
            <div style={{ position: "relative" }}>
              {/* Glow ring */}
              <div style={{
                position: "absolute",
                inset: "-8px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5))",
                filter: "blur(16px)",
                zIndex: 0,
              }} />
              {/* Avatar container */}
              <div style={{
                width: "clamp(200px, 25vw, 300px)",
                height: "clamp(200px, 25vw, 300px)",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
                border: "3px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
              }}>
                <span style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  fontWeight: 800,
                  color: "white",
                  letterSpacing: "-0.05em",
                }}>
                  MS
                </span>
              </div>
              {/* Online badge */}
              <div style={{
                position: "absolute",
                bottom: "12px",
                right: "12px",
                width: "22px", height: "22px",
                borderRadius: "50%",
                background: "#10b981",
                border: "3px solid var(--bg-primary)",
                zIndex: 2,
                boxShadow: "0 0 12px rgba(16,185,129,0.6)",
              }} />
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "16px",
            marginTop: "64px",
          }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(124,58,237,0.2)" }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))",
                  borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 12px",
                }}>
                  <Icon size={18} style={{ color: "#a78bfa" }} />
                </div>
                <div style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1,
                  marginBottom: "6px",
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  gap: "2px",
                }}>
                  <AnimatedCounter target={stat.value} delay={0.8 + i * 0.1} />
                  <span style={{ color: "#a78bfa" }}>{stat.suffix}</span>
                </div>
                <p style={{ fontSize: "12px", color: "var(--text-tertiary)", fontWeight: 500 }}>
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-avatar-wrap {
            order: -1;
            display: flex;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
