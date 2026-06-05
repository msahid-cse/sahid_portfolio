"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Briefcase, FileText, Mail, User, Code2 } from "lucide-react";

const commands = [
  { id: "home", label: "Go to Home", href: "#hero", icon: User, category: "Navigation" },
  { id: "about", label: "Go to About", href: "#about", icon: User, category: "Navigation" },
  { id: "expertise", label: "Go to Expertise", href: "#expertise", icon: Code2, category: "Navigation" },
  { id: "projects", label: "Go to Projects", href: "#projects", icon: Briefcase, category: "Navigation" },
  { id: "research", label: "Go to Research", href: "#research", icon: FileText, category: "Navigation" },
  { id: "experience", label: "Go to Experience", href: "#experience", icon: Briefcase, category: "Navigation" },
  { id: "services", label: "Go to Services", href: "#services", icon: Briefcase, category: "Navigation" },
  { id: "contact", label: "Go to Contact", href: "#contact", icon: Mail, category: "Navigation" },
  { id: "resume", label: "Download Resume", href: "/resume.pdf", icon: FileText, category: "Actions" },
  { id: "github", label: "Open GitHub", href: "https://github.com/msahid-cse", icon: Code2, category: "Social" },
  { id: "email", label: "Send Email", href: "mailto:msahid.cse@gmail.com", icon: Mail, category: "Social" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = commands.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = useCallback((href: string) => {
    setOpen(false);
    setQuery("");
    if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("/resume")) {
      window.open(href, href.startsWith("mailto") ? "_self" : "_blank");
    } else {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    };
    const handleCustom = () => setOpen(true);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustom);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustom);
    };
  }, []);

  const grouped = filtered.reduce(
    (acc, cmd) => {
      if (!acc[cmd.category]) acc[cmd.category] = [];
      acc[cmd.category].push(cmd);
      return acc;
    },
    {} as Record<string, typeof commands>
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setOpen(false); setQuery(""); }}
            style={{
              position: "fixed", inset: 0, zIndex: 9998,
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(4px)",
            }}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 9999,
              width: "min(580px, calc(100vw - 32px))",
              background: "rgba(13,13,20,0.95)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "16px",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(124,58,237,0.1)",
              overflow: "hidden",
            }}
          >
            {/* Search Input */}
            <div style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
              <Search size={18} style={{ color: "var(--text-tertiary)", flexShrink: 0 }} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "var(--text-primary)", fontSize: "15px",
                  fontFamily: "var(--font-sans)",
                }}
              />
              {query && (
                <button onClick={() => setQuery("")} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-tertiary)" }}>
                  <X size={16} />
                </button>
              )}
              <kbd style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "6px",
                padding: "3px 8px",
                fontSize: "11px",
                color: "var(--text-tertiary)",
                fontFamily: "var(--font-mono)",
              }}>
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div style={{ maxHeight: "360px", overflowY: "auto", padding: "8px" }}>
              {Object.entries(grouped).map(([category, items]) => (
                <div key={category}>
                  <div style={{
                    padding: "6px 12px 4px",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-tertiary)",
                  }}>
                    {category}
                  </div>
                  {items.map((cmd) => {
                    const Icon = cmd.icon;
                    return (
                      <button
                        key={cmd.id}
                        onClick={() => handleSelect(cmd.href)}
                        style={{
                          width: "100%",
                          display: "flex", alignItems: "center", gap: "12px",
                          padding: "10px 12px",
                          borderRadius: "8px",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          color: "var(--text-primary)",
                          fontSize: "14px",
                          textAlign: "left",
                          fontFamily: "var(--font-sans)",
                          transition: "background 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(124,58,237,0.12)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <Icon size={16} style={{ color: "#a78bfa", flexShrink: 0 }} />
                        <span style={{ flex: 1 }}>{cmd.label}</span>
                        <ArrowRight size={14} style={{ color: "var(--text-tertiary)" }} />
                      </button>
                    );
                  })}
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ padding: "32px", textAlign: "center", color: "var(--text-tertiary)", fontSize: "14px" }}>
                  No results for &quot;{query}&quot;
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
