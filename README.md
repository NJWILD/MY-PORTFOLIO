# Njoku Joshua Uchenna — Portfolio Website

A luxurious, dark-gold themed portfolio built with **Next.js 14** and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       ← All custom CSS (animations, cursor, grain, etc.)
│   ├── layout.js         ← Root layout with SEO metadata & fonts
│   └── page.js           ← Main page — assembles all sections
│
├── components/
│   ├── Cursor.js         ← Custom gold cursor with ring follower
│   ├── Navbar.js         ← Fixed nav with scroll detection & mobile menu
│   ├── Hero.js           ← Full-screen hero with typewriter & profile photo
│   ├── MarqueeBanner.js  ← Scrolling tech stack ticker
│   ├── About.js          ← About me + animated stat counters
│   ├── Skills.js         ← Skill bars with intersection-triggered animation
│   ├── Experience.js     ← Timeline of all work experience
│   ├── Projects.js       ← Project cards with hover effects
│   ├── Education.js      ← Education + certifications
│   ├── Contact.js        ← Contact form + info
│   ├── Footer.js         ← Footer with navigation links
│   └── ScrollReveal.js   ← Scroll-triggered reveal animation driver
│
├── public/
│   └── profile-placeholder.jpg   ← ⭐ REPLACE THIS WITH YOUR PHOTO
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## 📸 Adding Your Photo

1. Add your photo to the `public/` folder (any name, e.g. `joshua.jpg`)
2. Open `components/Hero.js`
3. Find the `<Image>` component and update the `src`:

```jsx
// Before
src="/profile-placeholder.jpg"

// After
src="/joshua.jpg"
```

Your photo will appear in the circular profile frame in the hero section.

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Primary** | `#e5a825` (Gold) |
| **Light Gold** | `#f3d98f` |
| **Dark Gold** | `#c9891a` |
| **Background** | `#08090d` (Obsidian) |
| **Surface** | `#111318` (Charcoal) |
| **Display Font** | Cormorant Garamond |
| **Body Font** | Syne |
| **Mono Font** | JetBrains Mono |

---

## 🔌 Wiring Up the Contact Form

The contact form is ready for any service. Add your preferred handler:

### Option A — Formspree (easiest)
```bash
# Sign up at formspree.io, get your form ID
# In components/Contact.js, replace handleSubmit:

const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Option B — EmailJS
```bash
npm install @emailjs/browser
```

---

## 🌐 Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for automatic deployments
```

---

## ✅ SEO Features Included

- Full Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data (Person schema)
- Semantic HTML throughout
- Canonical URL
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Theme color meta tag

---

## 📱 Responsive Breakpoints

| Screen | Behavior |
|---|---|
| Mobile (< 640px) | Single column, stacked layout |
| Tablet (640–1024px) | Two-column grid for cards |
| Desktop (> 1024px) | Full multi-column layout + custom cursor |

---

Built with ❤️ by **Njoku Joshua Uchenna**
