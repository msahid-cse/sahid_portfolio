import { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "technonext",
    role: "Data Operations Analyst",
    company: "TechnoNext Software Ltd",
    period: "Jan 2026 – Jul 16, 2026",
    current: false,
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    achievements: [
      "Led GIS data operations and OpenStreetMap route validation for large-scale mapping projects",
      "Processed and validated geospatial datasets (GeoJSON, KML/KMZ) for production systems",
      "Developed data quality pipelines ensuring 99%+ accuracy in spatial data processing",
      "Collaborated with cross-functional teams on data-driven decision making",
      "Built automated reporting workflows to streamline operational insights",
    ],
    technologies: [
      "OpenStreetMap",
      "GeoJSON",
      "Python",
      "SQL",
      "Power BI",
      "QGIS",
    ],
  },
  {
    id: "qa-harbor",
    role: "SQA Engineer Intern",
    company: "QA Harbor Limited",
    period: "Nov 2025 – Dec 2025",
    current: false,
    location: "Dhaka, Bangladesh",
    type: "Internship",
    achievements: [
      "Executed comprehensive manual test cases for web and mobile applications",
      "Performed API testing using Postman ensuring backend reliability",
      "Documented detailed bug reports with severity classification in Jira",
      "Participated in Agile sprint ceremonies and daily standups",
      "Contributed to STLC documentation and test plan creation",
    ],
    technologies: ["Selenium", "Postman", "Jira", "Manual Testing", "API Testing"],
  },
];
