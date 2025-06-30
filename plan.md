🌟 Project Overview: Dhruvtara Farms
A responsive, elegant, and modern website for showcasing a wedding/event resort with an admin-friendly content management system and visitor analytics.

✅ Feature Set
1. Landing Page
Hero section with background video/image

Welcome text, call-to-action (CTA)

Quick overview of the farm’s offerings

Highlight sections (Rooms, Lawn, Glasshouse)

2. Gallery
Categorized view:

Rooms

Lawn

Glasshouse

Decor

Image optimization & lazy loading

Optional lightbox view

3. Testimonials
Carousel of testimonials

Add/Edit via CMS

4. Contact Us
Form: Name, Email, Phone, Message

Google Maps embed of location

WhatsApp button

Form submission email + storage in DB

5. About Us
Farm history, mission, values

Owner image or quote

Team/staff section (optional)

6. Admin Panel (CMS)
Staff login

Gallery management: upload/delete images by category

Testimonials management

Contact message viewer

IP logging viewer (see visitors by source, IP, date, etc.)

7. Telemetry & Analytics
Visitor tracking by source (Instagram, Google, etc.)

UTM tracking for marketing campaigns

Referrer-based logging

Geo/IP logging with timestamp

Page view and session tracking

Admin view for basic stats

🗂️ Pages Overview
Route	Purpose
/	Landing Page
/gallery	Full gallery with filters/categories
/about	About Us
/testimonials	Testimonials
/contact	Contact Form + WhatsApp button
/admin/login	Staff login page
/admin/dashboard	CMS-style dashboard for content control

🛠️ Tech Stack
🧩 Frontend
Tool	Use
Next.js	Frontend + API + Routing
React.js	UI logic
Tailwind CSS	Styling framework
ShadCN UI	Modern prebuilt components
Framer Motion	Animations & transitions

🔐 CMS
Tool	Use
Sanity CMS	Headless CMS for staff
Sanity Studio UI	For gallery & testimonials
Hosted separately (or on Vercel)	

🌐 Backend / API
Tool	Use
Next.js API routes	Handle uploads, auth, logging
Supabase	Optional for storage of form entries, IP logs, admin auth
Optional: Cloudinary	For optimized image hosting

🧠 Telemetry / Analytics
Tool	Use
Referrer + UTM tracking	Custom logic via API
Supabase DB table	Store visit logs
Plausible.io (optional)	Traffic analytics dashboard
Google Analytics (optional)	In-depth tracking

📈 Telemetry & Visitor Tracking
Data Collected	How It's Collected
IP Address	From API route headers
Referrer / UTM Source	From client-side document.referrer, URL params
Country/City	IP Geolocation API (optional)
Page Visited	Tracked via router events
Device & Browser	User-agent string
Session Duration	JS timers + logging
Click Events (CTA)	Optional — tracked via JS + API

Data stored securely in Supabase or logged to an admin-only dashboard.

🛡️ Admin Security Features
Protected admin route with Supabase Auth

Session tokens / localStorage

Rate-limited login endpoint

Optional audit log for changes