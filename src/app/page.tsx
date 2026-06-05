import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Md. Sahid — Data Operations Analyst & AI Engineer",
  description:
    "Portfolio of Md. Sahid — Data Operations Analyst, GIS Specialist, SQA Engineer & AI Automation Builder based in Dhaka, Bangladesh.",
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Md. Sahid",
  url: "https://msahid.dev",
  email: "msahid.cse@gmail.com",
  jobTitle: "Data Operations Analyst",
  worksFor: {
    "@type": "Organization",
    name: "TechnoNext Software Ltd",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  sameAs: [
    "https://github.com/msahid-cse",
    "https://linkedin.com/in/msahid-cse",
  ],
  knowsAbout: [
    "Data Operations",
    "GIS",
    "OpenStreetMap",
    "Data Analytics",
    "Power BI",
    "Python",
    "Software Quality Assurance",
    "Selenium",
    "AI Automation",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Green University of Bangladesh",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ProductsSection />
      <ResearchSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
