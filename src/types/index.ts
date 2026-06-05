export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  image?: string;
}

export type ProjectCategory =
  | "All"
  | "GIS"
  | "Data Analytics"
  | "QA"
  | "AI"
  | "Automation"
  | "Web Development";

export interface ExpertiseArea {
  id: string;
  title: string;
  icon: string;
  color: string;
  gradient: string;
  skills: string[];
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  location: string;
  type: string;
  achievements: string[];
  technologies?: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  category: string;
  description: string;
  models: string[];
  outcomes: string[];
  status: "Published" | "In Progress" | "Completed";
  year: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readTime: number;
  published: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  impact: string;
}
