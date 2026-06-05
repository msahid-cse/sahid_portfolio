# Sahid Portfolio — Premium Personal Website

A modern, production-ready portfolio website for **Md. Sahid** built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, Supabase, and Resend.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Email**: Resend
- **Forms**: React Hook Form + Zod
- **Analytics**: Vercel Analytics

## 🛠️ Getting Started

### 1. Clone and Install

```bash
cd d:/Project/sahid_portfolio
npm install
```

### 2. Setup Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your credentials:

```bash
cp .env.local.example .env.local
```

Required variables:
```
NEXT_PUBLIC_SUPABASE_URL=     # From Supabase Dashboard > Settings > API
NEXT_PUBLIC_SUPABASE_ANON_KEY= # From Supabase Dashboard > Settings > API
SUPABASE_SERVICE_ROLE_KEY=    # From Supabase Dashboard > Settings > API
RESEND_API_KEY=               # From resend.com dashboard
NEXT_PUBLIC_SITE_URL=         # Your production URL (e.g., https://msahid.dev)
```

### 3. Setup Supabase Database

Run these SQL commands in your Supabase SQL editor:

```sql
-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow insert from service role
CREATE POLICY "Service role can insert" ON contact_submissions
  FOR INSERT TO service_role WITH CHECK (true);

-- Analytics table
CREATE TABLE page_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  country TEXT,
  city TEXT,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Add Profile Photo

Drop your photo as `public/SAHID.png` or `public/images/sahid.jpg`

### 6. Add Resume PDF

Drop your resume as `public/resume.pdf`

## 📦 Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deploy to Vercel

1. Push to GitHub
2. Connect repository at [vercel.com](https://vercel.com)
3. Add all environment variables in Vercel Dashboard
4. Deploy!

## 🗂️ Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── layout/       # Navbar, Footer, CommandPalette, ScrollProgress
│   ├── sections/     # All page sections (Hero, About, Projects, etc.)
│   └── shared/       # ThemeProvider, AnimatedCounter, SectionWrapper
├── data/             # Static data (projects, expertise, experience, research)
├── lib/              # Supabase, Resend, utilities, Zod schemas
└── types/            # TypeScript types
```

## ✨ Features

- ⚡ Next.js 15 App Router
- 🌙 Dark/Light mode with CSS variables
- ⌨️ Command Palette (Ctrl+K)
- 📊 Animated counters
- 🎭 Framer Motion page animations
- 📝 Contact form → Supabase + Resend email
- 🗺️ SEO optimized (JSON-LD, sitemap, OG tags)
- 📱 Fully responsive
- 🔢 Vercel Analytics

## 📬 Contact Form Flow

1. User submits form (validated with Zod)
2. Data saved to Supabase `contact_submissions` table
3. Notification email sent to `msahid.cse@gmail.com`
4. Auto-reply thank-you email sent to user
