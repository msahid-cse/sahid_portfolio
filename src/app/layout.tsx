import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CommandPalette from "@/components/layout/CommandPalette";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Md. Sahid — Data Operations Analyst & AI Engineer",
    template: "%s | Md. Sahid",
  },
  description:
    "Portfolio of Md. Sahid — Data Operations Analyst, GIS Specialist, SQA Engineer & AI Automation Builder. Transforming data, maps, and automation into scalable digital solutions.",
  keywords: [
    "Md. Sahid",
    "Data Operations Analyst",
    "GIS Specialist",
    "SQA Engineer",
    "AI Automation",
    "Data Analytics",
    "Bangladesh",
    "TechnoNext",
    "OpenStreetMap",
    "Power BI",
  ],
  authors: [{ name: "Md. Sahid", url: "https://github.com/msahid-cse" }],
  creator: "Md. Sahid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://msahid.dev",
    siteName: "Md. Sahid Portfolio",
    title: "Md. Sahid — Data Operations Analyst & AI Engineer",
    description:
      "Transforming Data, Maps, Quality Engineering, and AI Automation into Scalable Digital Solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md. Sahid Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Sahid — Data Operations Analyst & AI Engineer",
    description:
      "Transforming Data, Maps, Quality Engineering, and AI Automation into Scalable Digital Solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <CommandPalette />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
