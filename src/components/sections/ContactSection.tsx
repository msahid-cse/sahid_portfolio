"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
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

  return (
    <SectionWrapper id="contact" className="contact-section">
      <motion.header
        className="contact-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="contact-eyebrow">Get in touch</span>
        <h2>
          Let&apos;s <span>work together</span>
        </h2>
        <p>
          Have a project, collaboration, or idea in mind? Tell me a little about it and let&apos;s start a conversation.
        </p>
      </motion.header>

      <motion.div
        className="contact-layout"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <aside className="contact-aside">
          <div className="contact-aside-copy">
            <span className="contact-aside-eyebrow">Contact details</span>
            <h3>Good things start with a conversation.</h3>
            <p>For project inquiries, opportunities, or a friendly hello, reach out through any of these channels.</p>
          </div>

          <a className="contact-email" href="mailto:msahid.cse@gmail.com">
            <span className="contact-email-icon"><Mail size={19} /></span>
            <span className="contact-email-copy">
              <span>Email me</span>
              <strong>msahid.cse@gmail.com</strong>
            </span>
            <ArrowUpRight className="contact-email-arrow" size={18} />
          </a>

          <div className="contact-location">
            <span className="contact-location-icon"><MapPin size={17} /></span>
            <span><small>Based in</small><strong>Dhaka, Bangladesh</strong></span>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/msahid-cse" target="_blank" rel="noreferrer" aria-label="Visit GitHub profile">
              <GithubIcon size={18} />
              <span>GitHub</span>
              <ArrowUpRight size={14} />
            </a>
            <a href="https://linkedin.com/in/msahid-cse" target="_blank" rel="noreferrer" aria-label="Visit LinkedIn profile">
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </aside>

        <div className="contact-form-panel">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                className="contact-success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                role="status"
                aria-live="polite"
              >
                <div className="contact-success-icon"><CheckCircle2 size={34} /></div>
                <span className="contact-form-eyebrow">Message received</span>
                <h3>Thanks for reaching out!</h3>
                <p>I&apos;ll get back to you within 24 hours. You should also receive a confirmation email.</p>
                <button className="contact-another-button" type="button" onClick={() => setStatus("idle")}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="contact-form-heading">
                  <div>
                    <span className="contact-form-eyebrow">Project inquiry</span>
                    <h3>Send me a message</h3>
                    <p>Fill in the details below and I&apos;ll reply as soon as I can.</p>
                  </div>
                  <div className="contact-form-icon" aria-hidden="true"><Send size={19} /></div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="contact-name">Name <span>*</span></label>
                    <input
                      id="contact-name"
                      {...register("name")}
                      className={errors.name ? "contact-input has-error" : "contact-input"}
                      placeholder="Your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                    />
                    {errors.name && <p className="contact-field-error" id="contact-name-error">{errors.name.message}</p>}
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email">Email <span>*</span></label>
                    <input
                      id="contact-email"
                      {...register("email")}
                      type="email"
                      className={errors.email ? "contact-input has-error" : "contact-input"}
                      placeholder="you@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && <p className="contact-field-error" id="contact-email-error">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-company">Company <span className="optional-label">Optional</span></label>
                  <input
                    id="contact-company"
                    {...register("company")}
                    className="contact-input"
                    placeholder="Your organization"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject">Subject <span>*</span></label>
                  <input
                    id="contact-subject"
                    {...register("subject")}
                    className={errors.subject ? "contact-input has-error" : "contact-input"}
                    placeholder="What would you like to discuss?"
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                  />
                  {errors.subject && <p className="contact-field-error" id="contact-subject-error">{errors.subject.message}</p>}
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message">Message <span>*</span></label>
                  <textarea
                    id="contact-message"
                    {...register("message")}
                    className={errors.message ? "contact-input contact-textarea has-error" : "contact-input contact-textarea"}
                    rows={5}
                    placeholder="Share a few details about your project or idea..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                  />
                  {errors.message && <p className="contact-field-error" id="contact-message-error">{errors.message.message}</p>}
                </div>

                {status === "error" && (
                  <div className="contact-error-banner" role="alert">
                    <AlertCircle size={17} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <motion.button
                  className="contact-submit"
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={status !== "loading" ? { y: -2 } : {}}
                  whileTap={status !== "loading" ? { scale: 0.99 } : {}}
                >
                  {status === "loading" ? (
                    <><span className="contact-spinner" />Sending your message...</>
                  ) : (
                    <>Send message <Send size={16} /></>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <style>{`
        .contact-section .contact-heading {
          margin: 0 auto 44px;
          max-width: 720px;
          text-align: center;
        }
        .contact-section .contact-eyebrow,
        .contact-section .contact-aside-eyebrow,
        .contact-section .contact-form-eyebrow {
          color: #a78bfa;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .contact-section .contact-heading h2 {
          margin: 12px 0 0;
          color: var(--text-primary);
          font-size: clamp(2.1rem, 4.5vw, 3.2rem);
          font-weight: 800;
          letter-spacing: -0.045em;
          line-height: 1.08;
        }
        .contact-section .contact-heading h2 span {
          background: linear-gradient(120deg, #a78bfa 5%, #06b6d4 95%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .contact-section .contact-heading p {
          max-width: 530px;
          margin: 15px auto 0;
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.7;
        }
        .contact-section .contact-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          overflow: hidden;
          width: 100%;
          border: 1px solid var(--border-subtle);
          border-radius: 28px;
          background: var(--bg-card);
          box-shadow: 0 28px 80px rgba(0,0,0,0.14);
        }
        .contact-section .contact-aside {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: clamp(28px, 4vw, 48px);
          border-right: 1px solid var(--border-subtle);
          background:
            radial-gradient(ellipse at 5% 0%, rgba(124,58,237,0.18), transparent 42%),
            linear-gradient(150deg, rgba(124,58,237,0.055), transparent 55%);
        }
        .contact-section .contact-aside-copy h3 {
          max-width: 340px;
          margin: 16px 0 10px;
          color: var(--text-primary);
          font-size: clamp(22px, 2.5vw, 30px);
          font-weight: 750;
          letter-spacing: -0.035em;
          line-height: 1.2;
        }
        .contact-section .contact-aside-copy p {
          max-width: 360px;
          margin: 0;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
        }
        .contact-section .contact-email {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 34px;
          padding: 16px;
          border: 1px solid rgba(167,139,250,0.18);
          border-radius: 16px;
          background: rgba(124,58,237,0.08);
          color: inherit;
          text-decoration: none;
          transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
        }
        .contact-section .contact-email:hover {
          transform: translateY(-2px);
          border-color: rgba(167,139,250,0.42);
          background: rgba(124,58,237,0.13);
        }
        .contact-section .contact-email-icon,
        .contact-section .contact-location-icon {
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          place-items: center;
          border: 1px solid rgba(167,139,250,0.22);
          border-radius: 12px;
          background: rgba(124,58,237,0.13);
          color: #c4b5fd;
        }
        .contact-section .contact-email-copy {
          display: grid;
          min-width: 0;
          flex: 1;
          gap: 4px;
        }
        .contact-section .contact-email-copy > span,
        .contact-section .contact-location small {
          color: var(--text-tertiary);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .contact-section .contact-email-copy strong,
        .contact-section .contact-location strong {
          overflow-wrap: anywhere;
          color: var(--text-primary);
          font-size: 13px;
          font-weight: 650;
        }
        .contact-section .contact-email-arrow { flex: 0 0 auto; color: #a78bfa; }
        .contact-section .contact-location {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 22px;
        }
        .contact-section .contact-location-icon {
          width: 38px;
          height: 38px;
          border-color: rgba(16,185,129,0.2);
          background: rgba(16,185,129,0.08);
          color: #34d399;
        }
        .contact-section .contact-location > span:last-child {
          display: grid;
          gap: 4px;
        }
        .contact-section .contact-socials {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: auto;
          padding-top: 32px;
        }
        .contact-section .contact-socials a {
          display: flex;
          min-width: 0;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          background: rgba(255,255,255,0.025);
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: border-color 180ms ease, color 180ms ease, background 180ms ease;
        }
        .contact-section .contact-socials a:hover {
          border-color: rgba(6,182,212,0.3);
          background: rgba(6,182,212,0.06);
          color: var(--text-primary);
        }
        .contact-section .contact-socials a > svg:first-child { flex: 0 0 auto; color: #67e8f9; }
        .contact-section .contact-socials a > svg:last-child { flex: 0 0 auto; margin-left: auto; opacity: 0.65; }
        .contact-section .contact-form-panel { min-width: 0; padding: clamp(26px, 4vw, 48px); }
        .contact-section .contact-form { display: grid; gap: 19px; }
        .contact-section .contact-form-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          margin-bottom: 4px;
        }
        .contact-section .contact-form-heading h3,
        .contact-section .contact-success h3 {
          margin: 9px 0 5px;
          color: var(--text-primary);
          font-size: 22px;
          font-weight: 750;
          letter-spacing: -0.025em;
        }
        .contact-section .contact-form-heading p,
        .contact-section .contact-success p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.6;
        }
        .contact-section .contact-form-icon {
          display: grid;
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          place-items: center;
          border: 1px solid rgba(6,182,212,0.2);
          border-radius: 13px;
          background: rgba(6,182,212,0.08);
          color: #67e8f9;
        }
        .contact-section .contact-form-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .contact-section .contact-field { min-width: 0; }
        .contact-section .contact-field label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-secondary);
          font-size: 12px;
          font-weight: 650;
        }
        .contact-section .contact-field label > span:first-child:not(.optional-label) { color: #a78bfa; }
        .contact-section .contact-field .optional-label {
          margin-left: 5px;
          color: var(--text-tertiary);
          font-size: 10px;
          font-weight: 500;
          text-transform: none;
        }
        .contact-section .contact-input {
          box-sizing: border-box;
          width: 100%;
          min-height: 46px;
          padding: 12px 14px;
          border: 1px solid var(--border-subtle);
          border-radius: 11px;
          outline: none;
          background: var(--bg-secondary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 13px;
          transition: border-color 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }
        .contact-section .contact-input::placeholder { color: var(--text-tertiary); opacity: 0.8; }
        .contact-section .contact-input:focus {
          border-color: rgba(167,139,250,0.65);
          background: var(--bg-card);
          box-shadow: 0 0 0 3px rgba(124,58,237,0.12);
        }
        .contact-section .contact-input.has-error { border-color: rgba(244,63,94,0.7); }
        .contact-section .contact-textarea { min-height: 132px; resize: vertical; line-height: 1.55; }
        .contact-section .contact-field-error { margin: 6px 0 0; color: #fb7185; font-size: 11px; }
        .contact-section .contact-error-banner {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          padding: 12px 14px;
          border: 1px solid rgba(244,63,94,0.25);
          border-radius: 11px;
          background: rgba(244,63,94,0.08);
          color: #fb7185;
          font-size: 12px;
          line-height: 1.5;
        }
        .contact-section .contact-error-banner svg { flex: 0 0 auto; margin-top: 1px; }
        .contact-section .contact-submit {
          display: flex;
          min-height: 49px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 0;
          border-radius: 12px;
          background: linear-gradient(110deg, #7c3aed, #6d28d9 58%, #5b21b6);
          box-shadow: 0 10px 24px rgba(124,58,237,0.22);
          color: white;
          cursor: pointer;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          transition: box-shadow 180ms ease, opacity 180ms ease;
        }
        .contact-section .contact-submit:hover { box-shadow: 0 13px 30px rgba(124,58,237,0.32); }
        .contact-section .contact-submit:disabled { cursor: wait; opacity: 0.7; }
        .contact-section .contact-spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.35);
          border-top-color: white;
          border-radius: 50%;
          animation: contact-spin 0.8s linear infinite;
        }
        .contact-section .contact-success {
          display: flex;
          min-height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 12px;
          text-align: center;
        }
        .contact-section .contact-success-icon {
          display: grid;
          width: 68px;
          height: 68px;
          margin-bottom: 22px;
          place-items: center;
          border: 1px solid rgba(16,185,129,0.28);
          border-radius: 22px;
          background: rgba(16,185,129,0.1);
          color: #34d399;
        }
        .contact-section .contact-success h3 { margin: 9px 0 8px; }
        .contact-section .contact-success p { max-width: 390px; }
        .contact-section .contact-another-button {
          margin-top: 22px;
          padding: 11px 17px;
          border: 1px solid rgba(167,139,250,0.28);
          border-radius: 10px;
          background: rgba(124,58,237,0.1);
          color: #c4b5fd;
          cursor: pointer;
          font: 600 12px var(--font-sans);
        }
        @keyframes contact-spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .contact-section .contact-layout { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); }
          .contact-section .contact-aside { padding: 28px; }
          .contact-section .contact-form-panel { padding: 28px; }
          .contact-section .contact-form-row { grid-template-columns: minmax(0, 1fr); gap: 17px; }
        }
        @media (max-width: 700px) {
          .contact-section .contact-heading { margin-bottom: 28px; }
          .contact-section .contact-heading p { font-size: 14px; }
          .contact-section .contact-layout { grid-template-columns: minmax(0, 1fr); border-radius: 22px; }
          .contact-section .contact-aside {
            padding: 26px 22px;
            border-right: 0;
            border-bottom: 1px solid var(--border-subtle);
          }
          .contact-section .contact-aside-copy h3 { max-width: 360px; font-size: 25px; }
          .contact-section .contact-email { margin-top: 24px; }
          .contact-section .contact-socials { margin-top: 22px; padding-top: 0; }
          .contact-section .contact-form-panel { padding: 25px 22px; }
          .contact-section .contact-form-row { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 480px) {
          .contact-section .contact-form-row { grid-template-columns: minmax(0, 1fr); }
          .contact-section .contact-heading h2 { font-size: clamp(30px, 9vw, 39px); }
          .contact-section .contact-aside { padding: 24px 18px; }
          .contact-section .contact-form-panel { padding: 24px 18px; }
          .contact-section .contact-socials a { padding: 11px 9px; font-size: 11px; }
          .contact-section .contact-form-heading h3 { font-size: 20px; }
          .contact-section .contact-form-icon { width: 38px; height: 38px; }
        }
      `}</style>
    </SectionWrapper>
  );
}
