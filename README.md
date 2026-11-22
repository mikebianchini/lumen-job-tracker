# Lumen — Job Tracker & Career Studio

A calm, Apple Liquid Glass web app (PWA) for tracking job applications, networking contacts, and tailoring resumes per role — accessible on both desktop and mobile.

## Features
- **Apple Liquid Glass UI**: Translucent glass surfaces with specular rim highlights, ambient luminous canvas, automatic Light & Dark modes, desktop floating sidebar, and iOS-style floating bottom tab bar on mobile.
- **Jobs Tracker**: Pipeline stages, compensation, role level, work mode (Remote/Hybrid/On-site), job posting link, job description, interview notes, and next-step dates.
- **People CRM**: Track recruiters, hiring managers, referrals, and coffee chats with bidirectional linking to companies and specific job applications.
- **Resume Studio**: Upload a base resume (`.pdf`, `.docx`, `.txt`, `.md`), get live ATS keyword match scoring against any job description, auto-tailor locally or with an optional OpenAI/Gemini API key, save tailored versions per role, and export a clean PDF.
- **Sync & Cloud**: Built-in connectors for **Google Sheets (Apps Script)**, **Supabase**, and **JSON/CSV** local backup.

## Deploying for Web + Mobile Access
1. **GitHub Pages / Vercel / Netlify**: Push this folder to a repo and enable Pages (zero build step required — pure HTML/CSS/JS).
2. **Install on iPhone**: Open your deployed URL in Safari → tap **Share** → **Add to Home Screen**.
3. **Enable Cross-Device Sync**: Open **Sync & Cloud** inside Lumen and connect either **Supabase** (recommended for real-time desktop + iPhone sync) or **Google Sheets**.
