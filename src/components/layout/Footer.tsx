"use client";

import { Mail, Heart, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--bg-secondary)",
      padding: "48px 24px 32px",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Top row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "32px",
          marginBottom: "40px",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{
                width: 36, height: 36,
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                borderRadius: "10px",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "15px", fontWeight: 700, color: "white",
              }}>
                MS
              </div>
              <span style={{ fontWeight: 700, fontSize: "18px", color: "var(--text-primary)" }}>
                Md. Sahid
              </span>
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "14px", maxWidth: "280px", lineHeight: 1.7 }}>
              Data Operations Analyst, GIS Specialist & AI Automation Builder based in Dhaka, Bangladesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontWeight: 600, fontSize: "13px", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--text-secondary)", fontSize: "14px",
                    textAlign: "left", padding: 0,
                    fontFamily: "var(--font-sans)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontWeight: 600, fontSize: "13px", color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "14px" }}>
              Get In Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="mailto:msahid.cse@gmail.com" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <Mail size={14} style={{ color: "#7c3aed" }} />
                msahid.cse@gmail.com
              </a>
              <a href="https://github.com/msahid-cse" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <GithubIcon size={14} style={{ color: "#7c3aed" }} />
                github.com/msahid-cse
                <ExternalLink size={11} />
              </a>
              <a href="https://linkedin.com/in/msahid-cse" target="_blank" rel="noreferrer" style={{ color: "var(--text-secondary)", textDecoration: "none", fontSize: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                <LinkedinIcon size={14} style={{ color: "#7c3aed" }} />
                linkedin.com/in/msahid-cse
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: "24px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}>
          <p style={{ color: "var(--text-tertiary)", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
            © {year} Md. Sahid. Built with{" "}
            <Heart size={12} style={{ color: "#f43f5e", fill: "#f43f5e" }} />
            using Next.js & Tailwind.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="https://github.com/msahid-cse" target="_blank" rel="noreferrer" style={{ color: "var(--text-tertiary)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/msahid-cse" target="_blank" rel="noreferrer" style={{ color: "var(--text-tertiary)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              <LinkedinIcon size={18} />
            </a>
            <a href="mailto:msahid.cse@gmail.com" style={{ color: "var(--text-tertiary)", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
