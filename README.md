🕌 IlmulQuran.com – Global Online Quran Academy

IlmulQuran.com is a global Islamic education platform by Your Future Campus Ltd (YFC) — offering one-on-one online Qur’an and Islamic Studies classes for kids, adults, and reverts worldwide.

🌍 Overview

IlmulQuran.com connects students with certified male and female Qur’an teachers through Zoom, Skype, or Microsoft Teams.
It provides structured Qur’anic and Islamic learning with authentic curriculum, spiritual development, and Islamic teaching etiquette (adab).

📚 Key Features
🧩 Curriculum

Qur’an & Tajweed – From Noorani Qaida to advanced recitation

Hifz-ul-Qur’an – Personalized memorization tracks

Islamic Studies – Aqeedah, Seerah, Fiqh, Akhlaq, and Adab

Arabic Language – Qur’anic vocabulary and conversation (planned)

Specialized Books – Salah, Duʿā, Tajweed & Arabic series

🕋 Teaching System

Live one-on-one classes (Zoom, Skype, or Teams)

ERP-managed teacher scheduling and attendance

OBS-based session monitoring for quality assurance

Global shift-based teachers (Morning/Night for UK, USA, Canada, Australia, NZ)

⚙️ Technology Stack
Component	Description
Backend	Oracle APEX ERP (lead management, billing, follow-ups, attendance)
Frontend	Next.js app hosted on Vercel
Automation	WhatsApp Cloud API for communication and lead nurturing
Monitoring	OBS recordings for QA
Database	Oracle Database (self-hosted / Vultr VPS)
🧭 Curriculum Structure
Track 1 – Qur’an & Tajweed

Noorani Qaida → Reading → Tajweed → Hifz-ul-Qur’an → Tafseer

Track 2 – Islamic Studies (Main Track)
Level	Age	Focus	Lessons
Level 1	4–7	Foundation of Faith & Manners	120
Level 2	8–12	Practicing Faith & Responsibility	126
Level 3	13–18	Faith, Character & Responsibility	Planned
Level 4	18+	Applied Islam & Leadership	Planned
Track 3 – Revert Islamic Studies

Tailored curriculum for new Muslims (Brothers & Sisters)

Track 4 – Bridge Packs

Short alignment courses for new joiners (Kids / Teens / Adults)

Track 5 – Specialized Books

Salah Book ✅

Daily Duʿā Book ✅

Tajweed Book ✅

Arabic Tracks ⚙️ (in progress)

Each lesson includes:
Main Message • Qur’an or Hadith Reference • Explanation • Story Example • Activity • Reflection • Closing Duʿā

🧠 Pedagogical Design

Tarbiyyah-based: Builds character, spirituality, and manners

Authenticity: Based on Qur’an and Sahih Hadith

Child-Friendly: Simple English + Arabic, with visuals and storytelling

ERP-Linked: Every lesson coded for system integration (example below)

Example lesson code:
2.1.1.3.4 → Level 1 → Year 1 → Module 3 → Lesson 4

🖥️ System Architecture

Frontend (Next.js + Vercel)
│
▼
Backend (Oracle APEX ERP)
│
├── Leads & Billing
├── Teacher Schedules
├── Attendance Tracking
└── Reports & Follow-ups
│
▼
Integration Layer
├── WhatsApp Cloud API
├── Google Drive Sync
└── OBS Recordings (QA)

👥 Departments & Operations

Teaching Department: Shift-based teachers (8 hours/day)

Supervisors: Manage scheduling and quality

QA Listeners: Monitor class performance

HR & Payroll: Managed through Oracle APEX ERP

Billing & CRM: Multi-currency invoicing + WhatsApp & Email reminders

📈 Marketing & SEO

Global SEO targeting “Online Quran Classes” keywords

Country pages for UK, USA, Canada, Australia, NZ

Ads managed by YFC Digital via Meta, Google & Bing

Target reach: 1M+ annual views across YouTube, TikTok, and Instagram

🧾 2025–26 Goals
Metric	Target
Monthly Visitors	50,000+
Active Students	5,000+
Certified Teachers	300+
Recorded Sessions	100,000+
Global Social Reach	1M+ views
🎨 Brand Identity

Educational • Family-friendly • Spiritually respectful • Calm Islamic tone
Reflects sincerity, gratitude, and excellence (ihsan) in learning.

🧩 Repository Structure

/frontend → Next.js source (Vercel deployment)
/backend → Oracle APEX app exports
/curriculum → Lesson plans, years, and modules (ERP-ready)
/automation → WhatsApp API and auto-message scripts
/docs → Curriculum documentation & ERP integration notes
/assets → Logos, icons, and visuals

⚙️ Setup & Installation
Frontend (Next.js)

Clone repository
git clone https://github.com/yourfuturecampus/ilmulquran.git

Install dependencies
npm install

Create .env.local file

NEXT_PUBLIC_API_URL=https://ap.ilmulquran.com/api
NEXT_PUBLIC_WHATSAPP_API_KEY=your_key_here


Run development server
npm run dev

Backend (Oracle APEX)

Import app from /backend/apex_app.sql

Configure Database (Oracle 19c+)

Deploy via ORDS on Tomcat server (port 8443)

Set up REST APIs for Next.js frontend

🧠 Integrations

WhatsApp Cloud API → Automated student communication

Google Drive API → Backups & shared teacher folders

OBS Monitor System → Automated video QA capture

Stripe / PayPal / Wise → Global fee collection

🧾 Licensing & Ownership

© 2025 Your Future Campus Ltd
All course content, code, and curriculum are proprietary to IlmulQuran.com.
Use permitted only for internal academy operations and approved partners.

📞 Official Contact

IlmulQuran.com – Global Online Quran Academy
📍 Your Future Campus Ltd (UK & Pakistan Operations)
🌐 Website: https://www.ilmulquran.com

📧 Email: admin@ilmulquran.com

📞 WhatsApp / Support: +92 349 0055415
🏢 HR & Partnerships: yourfuturecampus2@gmail.com

🧑‍💼 Founder: Zulqarnain Basher

💡 Contribution

We welcome collaboration for educational research, Islamic curriculum development, and technology improvement.
For partnership or developer access, contact admin@ilmulquran.com
.

🧾 License

MIT License for open components (frontend & integration code).
All Islamic content & curriculum copyrighted © IlmulQuran.com 2025.

Designed & Managed by:
🌙 Zulqarnain Basher
Founder & Director – Your Future Campus Ltd
https://www.yfcampus.com
