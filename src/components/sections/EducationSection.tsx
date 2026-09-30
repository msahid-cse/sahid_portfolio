"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { Award, GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";

const educationItems = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Green University of Bangladesh",
    location: "Dhaka",
    period: "Feb 2022 – Feb 2026",
    detail: "CGPA: 3.32 / 4.00",
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Faridganj Govt. Degree College",
    location: "Chandpur",
    period: "2018 – 2020",
    detail: "Science",
    highlight: false,
  },
];

const certifications = [
  {
    title: "Data Analyst Job-Ready Bootcamp",
    issuer: "Data Solution 360",
    status: "Ongoing",
    color: "#06b6d4",
  },
  {
    title: "Advanced Python (Django)",
    issuer: "IIT, JU · EDGE · BCC, ICT Division",
    status: "Completed",
    color: "#a78bfa",
  },
  {
    title: "Robotics Camp 2024",
    issuer: "Roboment R&D Lab, Gazipur",
    status: "Completed",
    color: "#f59e0b",
  },
  {
    title: "Green Start-Ups Program",
    issuer: "Future Nation & UNDP Bangladesh",
    status: "Completed",
    color: "#10b981",
  },
];

const leadershipItems = [
  {
    title: "Organizing Secretary",
    org: "BASIS Students’ Forum · GUB Chapter",
    period: "Jun 2025 – Feb 2026",
    points: [
      "Organized and executed student development programs involving 100+ participants.",
      "Coordinated communication and planning between faculty and student committees.",
    ],
  },
  {
    title: "General Secretary",
    org: "Prottay Islami Pathagar · Chandpur",
    period: "2024 – Present",
    points: [
      "Led community-based projects promoting education and youth empowerment.",
      "Oversaw event operations, strategic planning, and organizational communication.",
    ],
  },
  {
    title: "Scholarship Exam Management Team",
    org: "Sopner Faridganj",
    period: "2024 – Present",
    points: [
      "Assist with scholarship exam planning and coordination to support smooth operations.",
      "Support registration, documentation, and communications for exam management.",
    ],
  },
  {
    title: "Campus Volunteer",
    org: "Green University · As-Sunnah Foundation",
    period: "2023 – Present",
    points: [
      "Supported humanitarian, educational, and social welfare initiatives through community service.",
    ],
  },
  {
    title: "Weather Reporter",
    org: "Bangladesh Weather Observation Team (BWOT)",
    period: "2022 – Present",
    points: [
      "Monitored and reported local weather data, including temperature, rainfall, and wind conditions.",
    ],
  },
  {
    title: "Judge & Program Manager",
    org: "Youth Festival 2025 · Ministry of Youth and Sports",
    period: "2025",
    points: [
      "Managed a festival with 200+ participants and evaluated 20+ submissions.",
    ],
  },
];

const awards = [
  { title: "Science Olympiad Bangladesh", result: "5th Position", year: "2019" },
  { title: "National Science and Technology Fair", result: "2nd Position", year: "2019" },
];

const sectionLabel: CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#a78bfa",
  fontFamily: "var(--font-mono)",
  marginBottom: "20px",
  display: "block",
};

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <div className="edu-columns">
        <div>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: "36px" }}
          >
            <h2 style={sectionLabel}>Education</h2>
            <div className="education-list">
              {educationItems.map((item, i) => (
                <motion.article
                  key={item.degree}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="education-card"
                  style={{
                    background: item.highlight
                      ? "linear-gradient(135deg, rgba(124,58,237,0.10), rgba(6,182,212,0.035))"
                      : "rgba(255,255,255,0.025)",
                    border: `1px solid ${item.highlight ? "rgba(124,58,237,0.24)" : "var(--border-subtle)"}`,
                  }}
                >
                  <div className="education-card-top">
                    <div className="education-icon">
                      <GraduationCap size={21} color="#c4b5fd" />
                    </div>
                    <span className="date-pill">{item.period}</span>
                  </div>
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                  <div className="education-meta">
                    <span>{item.location}</span>
                    <span className="meta-divider" aria-hidden="true">·</span>
                    <span>{item.detail}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>


        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={sectionLabel}>Certifications</h2>
          <div className="certification-list">
            {certifications.map((cert, i) => (
              <motion.article
                key={cert.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ x: 3 }}
                className="certification-card"
              >
                <div
                  className="certification-icon"
                  style={{ background: `${cert.color}16`, borderColor: `${cert.color}35` }}
                >
                  <Award size={19} style={{ color: cert.color }} />
                </div>
                <div className="certification-copy">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <span className={`status-pill ${cert.status === "Ongoing" ? "status-ongoing" : "status-completed"}`}>
                  {cert.status}
                </span>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="awards-section"
      >
        <h2 style={sectionLabel}>Awards</h2>
        <div className="awards-list">
          {awards.map((award) => (
            <article key={award.title} className="award-card">
              <div className="award-icon"><Award size={18} color="#fbbf24" /></div>
              <div className="award-copy">
                <h3>{award.title}</h3>
                <p>{award.result}</p>
              </div>
              <span className="award-year">{award.year}</span>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="leadership-section"
      >
        <div className="leadership-heading">
          <div>
            <h2 style={{ ...sectionLabel, marginBottom: "8px" }}>Leadership & Volunteering</h2>
            <p className="leadership-intro">Community, campus, and organizational contributions</p>
          </div>
          <span className="leadership-count">{leadershipItems.length} roles</span>
        </div>
        <div className="leadership-grid">
          {leadershipItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.06 }}
              whileHover={{ y: -3 }}
              className="leadership-card"
            >
              <div className="leadership-card-heading">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </div>
                <span className="date-pill">{item.period}</span>
              </div>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <style>{`
        .edu-columns {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 36px;
          align-items: start;
        }
        .education-list, .certification-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .awards-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .awards-section { margin-top: 36px; }
        .education-card, .certification-card, .award-card, .leadership-card {
          border-radius: 16px;
          transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
        }
        .education-card { padding: 22px; }
        .education-card-top, .leadership-card-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 14px;
        }
        .education-icon, .award-icon, .certification-icon {
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(124,58,237,0.12);
          border: 1px solid rgba(124,58,237,0.24);
        }
        .date-pill, .status-pill, .leadership-count, .award-year {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          white-space: nowrap;
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.4;
        }
        .date-pill {
          padding: 5px 9px;
          color: var(--text-tertiary);
          background: rgba(255,255,255,0.035);
          border: 1px solid var(--border-subtle);
        }
        .education-degree {
          color: var(--text-primary);
          font-size: 16px;
          line-height: 1.4;
          margin: 17px 0 5px;
        }
        .education-institution {
          color: #c4b5fd;
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 12px;
        }
        .education-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          color: var(--text-tertiary);
          font-size: 12px;
        }
        .meta-divider { color: #7c3aed; }
        .award-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border-subtle);
        }
        .award-icon {
          width: 36px;
          height: 36px;
          background: rgba(251,191,36,0.09);
          border-color: rgba(251,191,36,0.2);
        }
        .award-copy { min-width: 0; flex: 1; }
        .award-copy h3 {
          color: var(--text-primary);
          font-size: 13px;
          line-height: 1.4;
          margin: 0 0 3px;
        }
        .award-copy p { color: var(--text-secondary); font-size: 12px; margin: 0; }
        .award-year {
          color: #fbbf24;
          padding: 4px 8px;
          background: rgba(251,191,36,0.08);
          border: 1px solid rgba(251,191,36,0.17);
        }
        .certification-card {
          min-width: 0;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border-subtle);
        }
        .certification-icon { width: 40px; height: 40px; }
        .certification-copy { min-width: 0; flex: 1; }
        .certification-copy h3 {
          color: var(--text-primary);
          font-size: 14px;
          line-height: 1.4;
          margin: 0 0 4px;
        }
        .certification-copy p {
          color: var(--text-tertiary);
          font-size: 12px;
          line-height: 1.5;
          margin: 0;
        }
        .status-pill { padding: 4px 8px; font-weight: 600; }
        .status-ongoing {
          color: #67e8f9;
          background: rgba(6,182,212,0.09);
          border: 1px solid rgba(6,182,212,0.2);
        }
        .status-completed {
          color: #6ee7b7;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.18);
        }
        .leadership-section { margin-top: 48px; }
        .leadership-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }
        .leadership-intro { color: var(--text-tertiary); font-size: 13px; margin: 0; }
        .leadership-count {
          color: #c4b5fd;
          padding: 5px 9px;
          background: rgba(124,58,237,0.09);
          border: 1px solid rgba(124,58,237,0.2);
        }
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .leadership-card {
          padding: 18px;
          background: rgba(255,255,255,0.025);
          border: 1px solid var(--border-subtle);
        }
        .leadership-card-heading h3 {
          color: var(--text-primary);
          font-size: 14px;
          line-height: 1.4;
          margin: 0 0 4px;
        }
        .leadership-card-heading p {
          color: #c4b5fd;
          font-size: 12px;
          line-height: 1.5;
          margin: 0;
        }
        .leadership-card ul {
          display: grid;
          gap: 7px;
          list-style: none;
          padding: 0;
          margin: 14px 0 0;
        }
        .leadership-card li {
          position: relative;
          padding-left: 15px;
          color: var(--text-secondary);
          font-size: 12px;
          line-height: 1.55;
        }
        .leadership-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 7px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8b5cf6;
        }
        @media (max-width: 900px) {
          .edu-columns { gap: 24px; }
          .certification-card { flex-wrap: wrap; }
          .certification-copy { min-width: calc(100% - 60px); }
          .status-pill { margin-left: 54px; }
        }
        @media (max-width: 700px) {
          .edu-columns, .leadership-grid, .awards-list { grid-template-columns: minmax(0, 1fr); }
          .edu-columns { gap: 32px; }
          .leadership-section { margin-top: 38px; }
        }
        @media (max-width: 480px) {
          .education-card { padding: 18px; }
          .certification-card { padding: 15px; gap: 11px; }
          .certification-copy { min-width: calc(100% - 52px); }
          .status-pill { margin-left: 51px; }
          .leadership-card-heading { flex-direction: column; gap: 8px; }
          .leadership-heading { align-items: flex-start; }
          .leadership-intro { max-width: 240px; line-height: 1.5; }
        }
      `}</style>
    </SectionWrapper>
  );
}
