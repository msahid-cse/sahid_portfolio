import { ResearchItem } from "@/types";

export const researchItems: ResearchItem[] = [
  {
    id: "rice-forecasting",
    title: "An AI-Driven Environmental Adaptable System for Forecasting Rice Variety",
    category: "Undergraduate Research Thesis",
    description: "Undergraduate research thesis at Green University of Bangladesh.",
    supervisor: {
      name: "Md. Solaiman Mia",
      href: "https://scholar.google.com/citations?user=Vh4qvB4AAAAJ&hl=en",
      title: "Assistant Professor",
      institution: "Green University of Bangladesh",
    },
    methods: [
      "LSTM",
      "GRU",
      "CNN",
      "XGBoost",
      "LightGBM",
      "Climate Data",
      "Genomic Data",
      "Data Preprocessing",
      "Model Validation",
      "Hyperparameter Tuning",
    ],
    outcomes: [
      "Developed machine learning models integrating climate and genomic data for rice variety forecasting",
      "Improved model accuracy by 15% through data preprocessing, validation, and hyperparameter tuning",
    ],
    status: "Completed",
    year: "Feb 2025 – Feb 2026",
  },
  {
    id: "medical-text-simplification",
    title: "Medical Text Simplification for Rural Patients: Safe, Accessible, and Equity-Focused NLP Solutions",
    category: "Clinical NLP",
    description:
      "A multilingual framework that simplifies clinical documents into Bangla, English, and Banglish while preserving medical meaning through biomedical entity checks, BERTScore, and physician review.",
    methods: [
      "T5-base",
      "mBART-50",
      "BanglaBERT",
      "BioBERT",
      "scispaCy",
      "UMLS",
      "BERTScore",
      "Physician HITL Review",
    ],
    outcomes: [
      "Built a benchmark of 600 annotated clinical documents with " +
        "inter-annotator agreement κ = 0.81",
      "T5 with fidelity controls achieved FRE 74.0, SARI 47.3, and " +
        "BERTScore 0.880, with 4 clinical violations per 100 documents " +
        "(p < 0.001)",
    ],
    status: "Completed",
    year: "2026",
  },
];
