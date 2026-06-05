"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/BrandIcons";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong");
      setStatus("success");
      reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message");
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid var(--border-medium)",
    borderRadius: "12px",
    padding: "14px 16px",
    color: "var(--text-primary)",
    fontSize: "15px",
    outline: "none",
    fontFamily: "var(--font-sans)",
    transition: "border-color 0.2s ease",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--text-secondary)",
    marginBottom: "8px",
  };

  return (
    <SectionWrapper id="contact">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <span style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#a78bfa", fontFamily: "var(--font-mono)" }}>
          Get In Touch
        </span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text-primary)", marginTop: "12px", lineHeight: 1.1 }}>
          Let&apos;s{" "}
          <span style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Work Together
          </span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "480px", margin: "16px auto 0", lineHeight: 1.7 }}>
          Whether it&apos;s a project, collaboration, or just a conversation about data and AI — I&apos;d love to hear from you.
        </p>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "48px", alignItems: "start" }}
        className="contact-grid"
      >
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Contact Info Cards */}
          {[
            { icon: Mail, label: "Email", value: "msahid.cse@gmail.com", href: "mailto:msahid.cse@gmail.com", color: "#7c3aed" },
            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#", color: "#10b981" },
    { icon: GithubIcon, label: "GitHub", value: "github.com/msahid-cse", href: "https://github.com/msahid-cse", color: "#06b6d4" },
            { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/msahid-cse", href: "https://linkedin.com/in/msahid-cse", color: "#3b82f6" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "16px",
                  padding: "18px 20px",
                  marginBottom: "12px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = `${item.color}40`;
                  (e.currentTarget as HTMLAnchorElement).style.background = `${item.color}08`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-subtle)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.025)";
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  borderRadius: "12px",
                  background: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p style={{ fontSize: "11px", color: "var(--text-tertiary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {item.label}
                  </p>
                  <p style={{ fontSize: "14px", color: "var(--text-primary)", fontWeight: 500 }}>
                    {item.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "24px",
            padding: "40px",
          }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: "center", padding: "48px 24px" }}
              >
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <CheckCircle2 size={36} style={{ color: "#10b981" }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
                  Message Sent! 🎉
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                  Thanks for reaching out! I&apos;ll get back to you within 24 hours. You should also receive a confirmation email.
                </p>
                <button onClick={() => setStatus("idle")} style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                  color: "white", border: "none", borderRadius: "12px",
                  padding: "12px 24px", cursor: "pointer", fontSize: "14px", fontWeight: 600,
                  fontFamily: "var(--font-sans)",
                }}>
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
                  className="form-row">
                  <div>
                    <label style={labelStyle}>Name *</label>
                    <input
                      {...register("name")}
                      placeholder="Md. Sahid"
                      style={{ ...inputStyle, borderColor: errors.name ? "#f43f5e" : undefined }}
                      onFocus={(e) => !errors.name && (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                      onBlur={(e) => !errors.name && (e.target.style.borderColor = "var(--border-medium)")}
                    />
                    {errors.name && (
                      <p style={{ color: "#f43f5e", fontSize: "12px", marginTop: "4px" }}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="you@example.com"
                      style={{ ...inputStyle, borderColor: errors.email ? "#f43f5e" : undefined }}
                      onFocus={(e) => !errors.email && (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                      onBlur={(e) => !errors.email && (e.target.style.borderColor = "var(--border-medium)")}
                    />
                    {errors.email && (
                      <p style={{ color: "#f43f5e", fontSize: "12px", marginTop: "4px" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Company</label>
                  <input
                    {...register("company")}
                    placeholder="Optional"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border-medium)")}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Subject *</label>
                  <input
                    {...register("subject")}
                    placeholder="Project collaboration, Hiring inquiry..."
                    style={{ ...inputStyle, borderColor: errors.subject ? "#f43f5e" : undefined }}
                    onFocus={(e) => !errors.subject && (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                    onBlur={(e) => !errors.subject && (e.target.style.borderColor = "var(--border-medium)")}
                  />
                  {errors.subject && (
                    <p style={{ color: "#f43f5e", fontSize: "12px", marginTop: "4px" }}>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project, requirements, or just say hello..."
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                      borderColor: errors.message ? "#f43f5e" : undefined,
                    }}
                    onFocus={(e) => !errors.message && (e.target.style.borderColor = "rgba(124,58,237,0.5)")}
                    onBlur={(e) => !errors.message && (e.target.style.borderColor = "var(--border-medium)")}
                  />
                  {errors.message && (
                    <p style={{ color: "#f43f5e", fontSize: "12px", marginTop: "4px" }}>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <div style={{
                    background: "rgba(244,63,94,0.08)",
                    border: "1px solid rgba(244,63,94,0.25)",
                    borderRadius: "12px",
                    padding: "14px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#f43f5e",
                    fontSize: "14px",
                  }}>
                    <AlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status !== "loading" ? { scale: 1.02, boxShadow: "0 8px 30px rgba(124,58,237,0.4)" } : {}}
                  whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                  style={{
                    background: status === "loading"
                      ? "rgba(124,58,237,0.5)"
                      : "linear-gradient(135deg, #7c3aed, #6d28d9)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    padding: "16px 32px",
                    fontSize: "15px",
                    fontWeight: 600,
                    cursor: status === "loading" ? "wait" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontFamily: "var(--font-sans)",
                    transition: "background 0.2s ease",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "white", animation: "spin 0.8s linear infinite" }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </SectionWrapper>
  );
}
