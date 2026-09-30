"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="experience-section">
      <motion.header
        className="experience-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <span className="experience-eyebrow">Work History</span>
          <h2>
            Professional{" "}
            <span>Experience</span>
          </h2>
        </div>
        <p className="experience-intro">
          A track record in geospatial data operations and software quality assurance.
        </p>
      </motion.header>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="experience-card-top">
              <div className="experience-icon" aria-hidden="true">
                <Briefcase size={19} />
              </div>
              <span className="experience-index">
                {String(i + 1).padStart(2, "0")} <span>/</span> {String(experiences.length).padStart(2, "0")}
              </span>
            </div>

            <div className="experience-labels">
              <span className="experience-type">{exp.type}</span>
              {exp.current && <span className="experience-current"><i /> Current role</span>}
            </div>

            <h3>{exp.role}</h3>
            <div className="experience-company">
              <Building2 size={15} aria-hidden="true" />
              <span>{exp.company}</span>
            </div>

            <div className="experience-meta">
              <span><CalendarDays size={14} aria-hidden="true" />{exp.period}</span>
              {exp.location && <span><MapPin size={14} aria-hidden="true" />{exp.location}</span>}
            </div>

            <div className="experience-divider" />
            <p className="experience-subheading">Selected contributions</p>
            <ul className="experience-achievements">
              {exp.achievements.map((achievement) => (
                <li key={achievement}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>

            {exp.technologies && exp.technologies.length > 0 && (
              <div className="experience-tech-wrap">
                <p className="experience-subheading">Tools & technologies</p>
                <div className="experience-tech-list">
                  {exp.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        ))}
      </div>

      <style>{`
        .experience-section .experience-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 36px;
          margin-bottom: 40px;
        }
        .experience-section .experience-eyebrow {
          display: inline-block;
          color: #a78bfa;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .experience-section .experience-header h2 {
          margin: 12px 0 0;
          color: var(--text-primary);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
        }
        .experience-section .experience-header h2 span {
          background: linear-gradient(120deg, #a78bfa 5%, #06b6d4 95%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .experience-section .experience-intro {
          max-width: 340px;
          margin: 0 0 3px;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
        }
        .experience-section .experience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          gap: 22px;
        }
        .experience-section .experience-card {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 100%;
          flex-direction: column;
          overflow: hidden;
          padding: clamp(22px, 2.5vw, 32px);
          border: 1px solid var(--border-subtle);
          border-radius: 22px;
          background: var(--bg-card);
          box-shadow: 0 16px 44px rgba(0,0,0,0.10);
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }
        .experience-section .experience-card::before {
          position: absolute;
          top: 0;
          right: 18px;
          left: 18px;
          height: 2px;
          background: linear-gradient(90deg, rgba(124,58,237,0.8), rgba(6,182,212,0.55), transparent);
          content: "";
        }
        .experience-section .experience-card:hover {
          border-color: rgba(167,139,250,0.32);
          box-shadow: 0 22px 52px rgba(0,0,0,0.18);
        }
        .experience-section .experience-card-top,
        .experience-section .experience-labels,
        .experience-section .experience-company,
        .experience-section .experience-meta,
        .experience-section .experience-meta span {
          display: flex;
          align-items: center;
        }
        .experience-section .experience-card-top {
          justify-content: space-between;
          margin-bottom: 22px;
        }
        .experience-section .experience-icon {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border: 1px solid rgba(124,58,237,0.24);
          border-radius: 14px;
          background: linear-gradient(145deg, rgba(124,58,237,0.18), rgba(6,182,212,0.08));
          color: #c4b5fd;
        }
        .experience-section .experience-index {
          color: var(--text-tertiary);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .experience-section .experience-index span { color: #7c3aed; padding: 0 4px; }
        .experience-section .experience-labels { gap: 8px; margin-bottom: 12px; }
        .experience-section .experience-type,
        .experience-section .experience-current {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 999px;
          padding: 5px 10px;
          font-size: 11px;
          font-weight: 600;
        }
        .experience-section .experience-type {
          border: 1px solid rgba(124,58,237,0.22);
          background: rgba(124,58,237,0.08);
          color: #c4b5fd;
        }
        .experience-section .experience-current {
          border: 1px solid rgba(16,185,129,0.22);
          background: rgba(16,185,129,0.08);
          color: #34d399;
        }
        .experience-section .experience-current i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 8px rgba(16,185,129,0.5);
        }
        .experience-section .experience-card h3 {
          margin: 0 0 8px;
          color: var(--text-primary);
          font-size: clamp(19px, 2vw, 22px);
          font-weight: 750;
          letter-spacing: -0.025em;
          line-height: 1.3;
        }
        .experience-section .experience-company {
          gap: 8px;
          color: #a78bfa;
          font-size: 14px;
          font-weight: 650;
        }
        .experience-section .experience-company svg { flex: 0 0 auto; }
        .experience-section .experience-meta {
          flex-wrap: wrap;
          gap: 9px 18px;
          margin-top: 17px;
          color: var(--text-tertiary);
        }
        .experience-section .experience-meta span {
          gap: 7px;
          font-size: 12px;
          line-height: 1.5;
        }
        .experience-section .experience-meta svg { flex: 0 0 auto; color: #8b5cf6; }
        .experience-section .experience-divider {
          height: 1px;
          margin: 22px 0 18px;
          background: linear-gradient(90deg, var(--border-subtle), transparent);
        }
        .experience-section .experience-subheading {
          margin: 0 0 12px;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .experience-section .experience-achievements {
          display: grid;
          gap: 11px;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .experience-section .experience-achievements li {
          display: grid;
          grid-template-columns: 16px minmax(0, 1fr);
          align-items: start;
          gap: 9px;
          color: var(--text-secondary);
          font-size: 13px;
          line-height: 1.6;
        }
        .experience-section .experience-achievements svg {
          margin-top: 2px;
          color: #10b981;
        }
        .experience-section .experience-tech-wrap {
          margin-top: auto;
          padding-top: 22px;
        }
        .experience-section .experience-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .experience-section .experience-tech-list span {
          padding: 5px 9px;
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 10px;
          line-height: 1.35;
        }
        @media (max-width: 900px) {
          .experience-section .experience-grid { grid-template-columns: minmax(0, 1fr); }
          .experience-section .experience-card { min-height: 0; }
          .experience-section .experience-tech-wrap { margin-top: 0; }
        }
        @media (max-width: 600px) {
          .experience-section .experience-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 28px;
          }
          .experience-section .experience-intro { max-width: 100%; font-size: 13px; }
          .experience-section .experience-grid { gap: 16px; }
          .experience-section .experience-card { padding: 20px; border-radius: 18px; }
          .experience-section .experience-card-top { margin-bottom: 18px; }
          .experience-section .experience-divider { margin: 18px 0 16px; }
          .experience-section .experience-meta { gap: 8px 14px; }
        }
      `}</style>
    </SectionWrapper>
  );
}
