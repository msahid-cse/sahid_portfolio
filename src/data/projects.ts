import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "personal-ai-os",
    title: "Personal AI OS",
    category: "AI",
    featured: true,
    description:
      "A flagship AI-powered personal operating system for goal tracking, productivity analytics, and intelligent automation.",
    problem:
      "Managing personal goals, KPIs, tasks, and productivity metrics across multiple tools creates fragmentation and reduces effectiveness.",
    solution:
      "Built a unified AI-powered personal OS that centralizes goal tracking, KPI dashboards, task management, and AI-assisted decision making with real-time Telegram & WhatsApp notifications.",
    technologies: [
      "Python",
      "Google Apps Script",
      "Telegram Bot API",
      "WhatsApp API",
      "AI/ML",
      "Dashboard",
      "Automation",
    ],
    results: [
      "Centralized 100% of personal productivity metrics",
      "Automated daily reports via Telegram & WhatsApp",
      "40% improvement in goal completion rate",
      "Real-time KPI monitoring dashboard",
    ],
    github: "https://github.com/msahid-cse",
    demo: "#",
  },
  {
    id: "rice-forecasting-ai",
    title: "Rice Forecasting AI Research",
    category: "AI",
    description:
      "Advanced deep learning research for agricultural production forecasting and multilingual NLP for Bangla language processing.",
    problem:
      "Accurate rice production forecasting is critical for food security in Bangladesh. Existing methods lacked predictive accuracy and real-time adaptability.",
    solution:
      "Developed hybrid deep learning models (LSTM, GRU, CNN) for time-series forecasting combined with mBART and T5 transformer models for Bangla NLP tasks.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "LSTM",
      "GRU",
      "CNN",
      "mBART",
      "T5",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
    results: [
      "Achieved 94%+ accuracy in rice production forecasting",
      "mBART model outperformed baseline by 18%",
      "Research spans 3 ML domains: forecasting, NLP, computer vision",
      "Novel hybrid model architecture for agricultural AI",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "amazon-sales-dashboard",
    title: "Amazon Sales Dashboard",
    category: "Data Analytics",
    description:
      "Interactive Power BI dashboard for Amazon sales analytics with advanced KPI tracking and trend analysis.",
    problem:
      "E-commerce sales data was scattered across multiple reports making it difficult to identify trends, top performers, and revenue drivers.",
    solution:
      "Built a comprehensive Power BI dashboard with interactive filters, time-series analysis, product performance metrics, and geographic sales distribution.",
    technologies: ["Power BI", "Excel", "DAX", "Python", "Data Cleaning", "SQL"],
    results: [
      "Reduced reporting time by 70%",
      "Identified top 10 revenue-driving product categories",
      "Real-time sales trend monitoring",
      "Executive-ready presentation dashboard",
    ],
    github: "https://github.com/msahid-cse",
    demo: "#",
  },
  {
    id: "daily-brew-coffee-analytics",
    title: "Daily Brew Coffee Analytics",
    category: "Data Analytics",
    description:
      "End-to-end data analytics project for a coffee business covering sales trends, customer behavior, and inventory optimization.",
    problem:
      "A coffee business lacked visibility into sales patterns, peak hours, and customer preferences, leading to inefficient inventory and staffing.",
    solution:
      "Conducted full data pipeline: cleaning, transformation, analysis, and visualization using Excel and Power BI with actionable business insights.",
    technologies: [
      "Excel",
      "Power BI",
      "Python",
      "Data Cleaning",
      "Statistical Analysis",
    ],
    results: [
      "15% reduction in inventory waste",
      "Identified peak hours for optimal staffing",
      "Customer segmentation for targeted promotions",
      "Seasonal trend forecasting",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "selenium-automation-framework",
    title: "Selenium Automation Framework",
    category: "QA",
    description:
      "Robust end-to-end test automation framework built with Selenium WebDriver for web application testing.",
    problem:
      "Manual regression testing was time-consuming and error-prone, causing delayed release cycles and missed defects.",
    solution:
      "Designed a scalable Page Object Model (POM) based Selenium framework with data-driven testing, comprehensive reporting, and CI/CD integration.",
    technologies: [
      "Selenium",
      "Python",
      "Page Object Model",
      "TestNG",
      "Allure Reports",
      "GitHub Actions",
    ],
    results: [
      "80% reduction in manual testing time",
      "Automated 150+ test cases",
      "Integrated with CI/CD pipeline",
      "99% test reliability achieved",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "manual-testing-portfolio",
    title: "Manual Testing Portfolio",
    category: "QA",
    description:
      "Comprehensive manual testing portfolio showcasing test plans, test cases, bug reports, and QA documentation.",
    problem:
      "Demonstrating QA expertise requires organized, professional test documentation that follows industry standards.",
    solution:
      "Created detailed test documentation including test plans, test cases in Excel/Jira, bug reports with severity classification, and STLC documentation.",
    technologies: [
      "Jira",
      "Excel",
      "Postman",
      "API Testing",
      "SDLC",
      "STLC",
      "Agile",
    ],
    results: [
      "50+ detailed test case documents",
      "API testing with Postman collections",
      "Performance testing with JMeter",
      "Complete STLC documentation",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "smart-toll-system",
    title: "Smart Toll System",
    category: "AI",
    description:
      "IoT-based intelligent toll collection system with automated vehicle detection and payment processing.",
    problem:
      "Manual toll collection creates traffic congestion, is prone to human error, and lacks real-time data collection for traffic management.",
    solution:
      "Developed a smart toll system using IoT sensors, computer vision for license plate recognition, and automated payment processing.",
    technologies: [
      "Python",
      "OpenCV",
      "IoT",
      "Computer Vision",
      "Arduino",
      "Database",
    ],
    results: [
      "90% reduction in toll processing time",
      "Automated license plate recognition",
      "Real-time traffic data collection",
      "Cashless payment integration",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "automatic-home-controller",
    title: "Automatic Home Controller",
    category: "Automation",
    description:
      "Arduino-based home automation system for controlling lights, fans, and security systems remotely.",
    problem:
      "Home appliance control required physical presence and manual operation, lacking smart automation and remote access.",
    solution:
      "Built a home automation system using Arduino with Bluetooth/WiFi connectivity for remote control via mobile app and automated scheduling.",
    technologies: ["Arduino", "C++", "Bluetooth", "WiFi", "IoT", "Mobile App"],
    results: [
      "Full remote control via mobile app",
      "Automated scheduling for lights and appliances",
      "Energy monitoring and optimization",
      "Security alert system",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "ngo-website",
    title: "NGO Website Project",
    category: "Web Development",
    description:
      "Responsive, accessible website for a non-governmental organization with donation management and event showcasing.",
    problem:
      "The NGO lacked a professional web presence to showcase their impact, attract volunteers, and manage donations effectively.",
    solution:
      "Designed and developed a full responsive website with donation tracking, volunteer registration, impact metrics display, and blog capabilities.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Bootstrap",
    ],
    results: [
      "300% increase in online visibility",
      "Volunteer registration system launched",
      "Impact metrics dashboard",
      "Mobile-first responsive design",
    ],
    github: "https://github.com/msahid-cse",
    demo: "#",
  },
];
