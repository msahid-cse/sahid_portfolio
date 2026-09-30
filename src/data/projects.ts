import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "amazon-sales-dashboard",
    title: "Amazon-Sales-Analysis-Dashboard",
    category: "Data Analytics",
    description:
      "Interactive Power BI dashboard that turns Amazon sales data into insights on performance, top products, customer engagement, and seasonal trends.",
    problem:
      "Raw sales data can make it difficult to track performance, identify top products, understand customer engagement, and spot seasonal trends.",
    solution:
      "Built a Power BI dashboard with YTD Sales, QTD Sales, YTD Products Sold, and YTD Reviews KPIs; interactive Category and Quarter filters; and a DAX-backed relational data model.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Interactive Filters", "Sales Analytics"],
    highlights: [
      "YTD Sales, QTD Sales, YTD Products Sold, and YTD Reviews KPIs",
      "Line, column, bar, and heat-map visuals for sales and seasonal trends",
      "Category and Quarter filters backed by a dynamic Power BI data model",
    ],
    results: [
      "Brings sales performance, top products, customer engagement, and seasonal trends into one view",
      "Supports decision-making with actionable sales and product insights",
    ],
    github: "https://github.com/msahid-cse/Amazon-Sales-Analysis-Dashboard-Power-BI-Project",
    demo: "#",
  },
  {
    id: "daily-brew-coffee-analytics",
    title: "Coffee_Shop_Sales_Analysis",
    category: "Data Analytics",
    description:
      "Responsive, four-page Power BI analytics suite turning transaction, product, customer, and employee data from a 15+ location NYC coffee business into operational insights and growth recommendations.",
    problem:
      "Daily Brew's 15+ NYC locations generate high volumes of transaction data, but the business needs clearer insights to improve profitability and customer loyalty.",
    solution:
      "Created four interactive dashboards and strategic analysis across sales, products, customers, and employees, with growth opportunities and financial projections.",
    technologies: [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Interactive Slicers",
      "Drill-downs & Tooltips",
    ],
    highlights: [
      "Multi-select Year, Month, City, and Store filters, with drill-downs and hover tooltips",
      "Analysis of store, product, promotion, customer, employee, time-of-day, and basket performance",
      "DAX measures for revenue, COGS, gross profit, margin, revenue per customer, and promo-item share",
    ],
    results: [
      "Mapped growth opportunities toward a 5x profit target by 2026",
      "Delivered four interactive dashboard pages for 15+ NYC locations",
      "Provided recommendations to improve profitability and customer loyalty",
    ],
    github: "https://github.com/msahid-cse/Coffee_Shop_Sales_Analysis_Power_BI_Dashboard",
  },
  {
    id: "customer-behaviour-analysis",
    title: "Customer Behaviour Analysis",
    category: "Data Analytics",
    description:
      "End-to-end analysis of 3,900 customer shopping transactions, using Python for data cleaning, SQL for exploratory analysis, and an interactive Power BI dashboard to surface purchasing patterns and business insights.",
    problem:
      "Businesses need a clearer view of customer segments, category revenue, discount impact, subscription behavior, and shipping preferences to guide marketing, sales, and inventory decisions.",
    solution:
      "Cleaned and feature-engineered the transaction data with Pandas and NumPy, loaded it into PostgreSQL with SQLAlchemy, analyzed customer and sales patterns with SQL, and presented the findings in Power BI.",
    technologies: [
      "Python",
      "SQL",
      "Power BI",
      "Pandas",
      "PostgreSQL",
      "SQLAlchemy",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    highlights: [
      "Analyzes 3,900 transactions with customer demographics, products, subscriptions, discounts, and shipping details",
      "Interactive Power BI filters for gender, age group, category, subscription, and shipping type",
      "Tracks $233K revenue, $59.76 average purchase amount, 3.75 average review rating, and customer segments",
      "Finds subscribers spend more, Young Adults lead purchases, and Clothing and Accessories top revenue",
    ],
    results: [
      "Surfaces customer and sales insights to guide marketing, retention, and inventory planning",
      "Highlights higher average spend among subscribers and leading categories and age segments",
    ],
    github: "https://github.com/msahid-cse/Customer-Behaviour-Analysis",
  },
  {
    id: "selenium-automation-framework",
    title: "Micro Automation Testing Framework (Selenium-Python)",
    category: "QA",
    description:
      "A robust, lightweight Selenium-Python automation suite developed for Labs QA Jobs by QA Harbor, covering end-to-end user journeys across authentication, account management, and job search.",
    problem:
      "The Labs QA Jobs candidate journey needed repeatable functional coverage across registration, login, account security, and job search.",
    solution:
      "Built a lightweight Python 3 and Selenium WebDriver suite, using WebDriver Manager with Google Chrome to run 13 end-to-end functional tests.",
    technologies: [
      "Python 3.x",
      "Selenium WebDriver",
      "WebDriver Manager",
      "Google Chrome",
      "E2E Testing",
    ],
    highlights: [
      "13 automated cases for registration, valid and invalid login, logout, password reset, and password changes",
      "Covers duplicate registration, keyword job search, homepage load, header navigation, and email subscription",
      "Responsive UI check simulates a 375 × 667 mobile viewport",
    ],
    results: [
      "13 automated test cases cover the core Labs QA Jobs candidate journey",
      "Includes authentication and account-security checks for invalid credentials and duplicate accounts",
      "Validates job search, mobile layout, navigation, and email subscription flows",
    ],
    github: "https://github.com/msahid-cse/Micro-Automation-Testing-Framework-Selenium-Python",
  },
  {
    id: "manual-testing-portfolio",
    title: "Manual Testing Portfolio",
    category: "QA",
    description:
      "End-to-end manual testing for Nymph Solutions, with a specialized test suite for a standardized Login Authentication Module.",
    problem:
      "Nymph Solutions needed broad functional and non-functional coverage, alongside focused validation of login authentication.",
    solution:
      "Tested navigation, core page sections, contact and login forms, security, responsive behavior, browser compatibility, themes, performance, SEO, accessibility, and UI alignment.",
    technologies: [
      "Manual Testing",
      "Functional Testing",
      "Form Validation",
      "Security Testing",
      "Cross-browser Testing",
      "Responsive Testing",
      "Accessibility",
    ],
    highlights: [
      "Test cases: UI/UX 15+, Functionality 25+, Security 10+, Optimization 15+",
      "End-to-end functional testing for navigation, Hero, Services, Footer, Contact Forms, and Login UI",
      "SQL injection, XSS, reCAPTCHA, responsive and cross-browser behavior, theme toggling, performance, SEO, and accessibility checks",
    ],
    results: [
      "Documented 65+ test cases across UI/UX, functionality, security, and optimization",
      "Developed a focused suite for the Login Authentication Module",
      "Completed broad end-to-end manual testing for Nymph Solutions",
    ],
    github: "https://github.com/msahid-cse/Manual-Testing-Portfolio-Nymph-Solutions-Login-Module",
  },
  {
    id: "automatic-home-controller",
    title: "Automatic Home Controller",
    category: "Automation",
    description:
      "Engineered an ESP8266-powered smart home system that lets you control lights, fans, and other electrical and electronic devices from a mobile app over Wi-Fi. It also automates plant watering, switches the water-pump motor off when the tank is full, adjusts lights to daylight, and detects potential intruders.",
    problem:
      "Household appliances, garden watering, tank filling, lighting, and home security often need separate systems or manual attention.",
    solution:
      "Built an ESP8266-based IoT controller with Wi-Fi and mobile-app control for household devices, plus automatic watering, tank-full motor shutoff, daylight-responsive lighting, and theft detection.",
    technologies: ["ESP8266", "IoT", "Wi-Fi", "Mobile App", "Home Automation", "Sensors"],
    highlights: [
      "Control lights, fans, and compatible electrical or electronic devices from a mobile app over Wi-Fi",
      "Automatically waters plants and switches off the pump motor when the water tank is full",
      "Turns lights off during daylight and on when it gets dark",
      "Includes theft detection to help protect the home",
    ],
    results: [
      "Brings mobile control, automatic watering, tank protection, smart lighting, and theft detection into one system",
      "Reduces routine manual work and helps prevent tank overflow",
      "Supports more convenient and energy-conscious home control",
    ],
    github: "https://github.com/msahid-cse",
  },
  {
    id: "cholen-haati",
    title: "Cholen Haati - Walking for Health Platform",
    category: "Web Development",
    description:
      "A full-stack, responsive community platform that brings members together around healthier walking habits. Members can manage profiles, log walks, set goals, track progress, join events and challenges, share updates, browse the gallery, message admins, and register for events with secure payments.",
    problem:
      "Walking communities need a convenient way to connect members, encourage regular activity, coordinate events, share updates, and manage participation securely.",
    solution:
      "Built a member platform with JWT authentication and email verification, walking and goal tracking, community features, event registration, payment support, and an admin dashboard for managing users, content, advisors, events, and reports.",
    technologies: [
      "Next.js 14",
      "React 18",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "Vercel",
    ],
    highlights: [
      "Member profiles, walk logs, personal goals, walking statistics, events, and community challenges",
      "Social feed, activity gallery, admin messaging, and secure event-registration payments",
      "Admin tools for user, event, content, advisor, and payment management, plus JSON/CSV reports",
      "Responsive interface with dark/light themes and accessible keyboard navigation",
    ],
    results: [
      "Connects member walking activity, community events, and shared updates in one platform",
      "Gives administrators a single dashboard for community operations and analytics",
    ],
    github: "https://github.com/msahid-cse/cholen-haati",
    demo: "https://cholen-haati-final.vercel.app/",
  },
  {
    id: "shawpner-faridganj",
    title: "Shawpner Faridganj",
    category: "Web Development",
    description:
      "A Bengali-first digital platform for a local community organization, combining a responsive public website with a secure admin panel for programs, events, campaigns, gallery media, scholarships, blood-bank information, and community requests.",
    problem:
      "The organization needed a welcoming online presence and a reliable way for its team to manage community information, media, and incoming requests without editing the public site directly.",
    solution:
      "Built a Next.js community website and role-based admin workspace backed by PostgreSQL and Prisma, with validated public forms, Cloudinary media uploads, and SMTP notifications for administrators.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React 19",
      "PostgreSQL",
      "Prisma",
      "Zod",
      "Cloudinary",
      "Nodemailer",
      "Vercel",
    ],
    highlights: [
      "Responsive Bengali-first public site with organization, program, campaign, committee, and gallery sections",
      "Public contact, volunteer, scholarship, and donation-intent forms with server-side validation",
      "Role-based admin tools for members, content, campaigns, media, messages, and community records",
      "Album-based gallery, scholarship and blood-bank pages, Cloudinary uploads, and admin email alerts",
    ],
    results: [
      "Brings public community information and organization management into one platform",
      "Lets the team maintain programs, records, media, and incoming requests through admin tools",
    ],
    github: "https://github.com/msahid-cse/shawpno",
    demo: "https://shawpnerfaridganj.vercel.app/",
  },
  {
    id: "dena-paona-finance-ledger",
    title: "Dena-Paona - Personal Finance Ledger",
    category: "Web Development",
    description:
      "A multilingual, full-stack finance ledger that helps friends, family, and colleagues track informal debts and credits. Members can record Dena (payables) and Paona (receivables), follow partial repayments, and coordinate settlements through linked requests, notifications, and in-app chat.",
    problem:
      "Informal loans are easy to forget, and tracking changing balances, partial payments, and mutual agreements across multiple people can be confusing.",
    solution:
      "Built a secure ledger with verified accounts, transaction and payment histories, due-date reminders, contact approval workflows, in-app notifications, direct messaging, and admin controls.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Neon",
      "JWT",
      "Vanilla CSS",
      "Nodemailer",
      "Vercel",
    ],
    highlights: [
      "Track payables and receivables with partial payments, due dates, payment history, and pending, partial, or cleared status",
      "Send linked transaction requests that registered contacts can approve or decline",
      "Chat with contacts and use the platform in English, Bangla, or Banglish",
      "Admin tools for member moderation, roles, activity logs, and transaction statistics",
      "Mobile-friendly responsive layout with dark and light themes",
    ],
    results: [
      "Makes balances, repayment progress, and settlement history easier for both sides to track",
      "Brings ledger management, settlement communication, and member administration into one platform",
    ],
    github: "https://github.com/msahid-cse/dena_paona",
    demo: "https://denapaona-one.vercel.app/",
  },
];
