import { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    id: "data-operations",
    title: "Data Operations & Analytics",
    icon: "BarChart3",
    color: "#38bdf8",
    description:
      "Reliable data pipelines, cleaning, transformation, and dashboard delivery for smarter decision-making.",
    features: [
      "ETL and data preparation",
      "Power BI and reporting",
      "Database optimization",
      "Data validation and quality",
    ],
  },
  {
    id: "gis-mapping",
    title: "GIS & Spatial Data",
    icon: "Map",
    color: "#22c55e",
    description:
      "Geospatial data processing, OpenStreetMap editing, route validation, and map-based insights.",
    features: [
      "OSM mapping and editing",
      "Spatial analysis",
      "Route and asset validation",
      "GeoJSON / KML exports",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation & Workflows",
    icon: "Zap",
    color: "#f59e0b",
    description:
      "AI-enabled automation for repetitive workflows, data operations, and intelligent business processes.",
    features: [
      "Process automation",
      "Custom AI integrations",
      "Bots and scripting",
      "Workflow optimization",
    ],
  },
  {
    id: "qa-testing",
    title: "Quality Assurance & Testing",
    icon: "ShieldCheck",
    color: "#a855f7",
    description:
      "Structured QA services from manual test planning to automation and performance validation.",
    features: [
      "Manual and automation testing",
      "API and regression checks",
      "Test strategy development",
      "Performance validation",
    ],
  },
];
