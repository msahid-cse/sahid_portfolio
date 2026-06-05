import { ResearchItem } from "@/types";

export const researchItems: ResearchItem[] = [
  {
    id: "rice-forecasting",
    title: "Rice Production Forecasting Using Deep Learning",
    category: "Machine Learning",
    description:
      "Developed hybrid deep learning models for accurate rice production forecasting in Bangladesh, combining LSTM, GRU, and CNN architectures for time-series analysis of agricultural data.",
    models: ["LSTM", "GRU", "CNN", "XGBoost", "LightGBM", "Scikit-learn"],
    outcomes: [
      "94%+ prediction accuracy achieved",
      "Novel hybrid architecture combining temporal and spatial features",
      "Significant improvement over traditional statistical models",
      "Real-world applicability for food security planning",
    ],
    status: "Completed",
    year: "2024-2025",
  },
  {
    id: "bangla-nlp",
    title: "Bangla Natural Language Processing with mBART & T5",
    category: "Natural Language Processing",
    description:
      "Research into multilingual NLP models for Bangla language, exploring text classification, summarization, and translation tasks using state-of-the-art transformer architectures.",
    models: ["mBART", "T5", "BERT", "Transformers", "HuggingFace"],
    outcomes: [
      "mBART outperformed baseline by 18% on Bangla translation",
      "Custom fine-tuning pipeline for low-resource language",
      "Benchmark dataset creation for Bangla NLP tasks",
      "Cross-lingual transfer learning insights",
    ],
    status: "In Progress",
    year: "2025",
  },
  {
    id: "computer-vision",
    title: "Computer Vision for Smart Systems",
    category: "Computer Vision",
    description:
      "Applied computer vision research for real-world smart systems including license plate recognition, object detection, and image classification for IoT applications.",
    models: ["CNN", "OpenCV", "TensorFlow", "Keras", "YOLO"],
    outcomes: [
      "90% accuracy on license plate recognition",
      "Real-time object detection pipeline",
      "Embedded deployment on IoT devices",
      "Smart toll system proof of concept",
    ],
    status: "Completed",
    year: "2024",
  },
];
