'use client'
import { useState, useEffect } from 'react'

const projects = [
  {
    title:    'Client E-commerce Platform',
    subtitle: 'Real-World Client Project',
    desc:     'Full-stack frontend for a real paying client. Integrated product catalog, dynamic cart logic, payment checkout simulation, and Firebase backend. End-to-end project from requirements gathering all the way to deployment — fully managed solo.',
    stack:    ['React', 'Tailwind CSS', 'Firebase',],
    tag:      'Client Work',
    tagColor: 'gold',
    icon:     '🛒',
    featured: true,
    screenshot: '/images/Apex.png',
    color:    '#e5a825',
    links:    { live: '#', github: '#' },
    metrics:  ['Full lifecycle', 'Firebase Auth', 'Cart & Checkout', 'Deployed'],
  },
  {
    title:    'FUTO Student Marketplace',
    subtitle: 'Startup · Co-Founder',
    desc:     'A student-focused e-commerce platform built to serve the FUTO university community and beyond. Solely responsible for the entire frontend architecture — real-time shopping, vendor storefronts, and student buyer flows powered by Firebase.',
    stack:    ['React', 'Tailwind CSS', 'Firebase',],
    tag:      'Startup',
    tagColor: 'green',
    icon:     '🎓',
    featured: true,
    screenshot: '/images/JOVO2.png',
    color:    '#22c55e',
    links:    { live: '#', github: '#' },
    metrics:  ['Student Vendors', 'Real-time DB', 'Auth System', 'MVP Live'],
  },
  {
    title:    'Hotel Booking System',
    subtitle: 'Dynamic Booking UI',
    desc:     'A sophisticated hotel website featuring dynamic room listings with advanced filtering, image galleries, and a complete reservation interface with availability management and booking confirmation flows.',
    stack:    ['React', 'Tailwind CSS', 'JavaScript'],
    tag:      'Personal Project',
    tagColor: 'blue',
    icon:     '🏨',
    featured: false,
    screenshot: '/images/LuxuryHotel.png',
    color:    '#3b82f6',
    links:    { live: 'https://nj-luxury-hotel-web.vercel.app/', github: '#' },
    metrics:  ['Room Filtering', 'Booking Flow', 'Image Gallery', 'Responsive'],
  },
  {
    title:    'CoinPay Fintech Dashboard',
    subtitle: 'Financial Analytics UI',
    desc:     'A modern fintech dashboard featuring interactive Chart.js visualizations, transaction history, balance overview, and portfolio tracking. Sleek dark-mode financial interface designed for clarity and performance.',
    stack:    ['React', 'Tailwind CSS', 'Chart.js'],
    tag:      'Personal Project',
    tagColor: 'blue',
    icon:     '💳',
    featured: false,
    screenshot: '/images/CoinPay.png',
    color:    '#3b82f6',
    links:    { live: 'https://nj-coinpay.vercel.app/', github: '#' },
    metrics:  ['Live Charts', 'Transactions', 'Portfolio View', 'Dark Mode'],
  },
  {
    title:    'NFT Marketplace Concept',
    subtitle: 'Web3-Inspired Design',
    desc:     'A visually stunning NFT marketplace concept with responsive NFT card grids, artist profile pages, auction countdown timers, and a modern Web3-inspired aesthetic — built entirely with CSS Grid and React.',
    stack:    ['React', 'Tailwind CSS', 'CSS Grid'],
    tag:      'Personal Project',
    tagColor: 'purple',
    icon:     '🎨',
    featured: false,
    screenshot: '/images/PengWeb.png',
    color:    '#a855f7',
    links:    { live: 'https://nj-nft-gaming.vercel.app/', github: '#' },
    metrics:  ['NFT Cards', 'Artist Profiles', 'Auction Timers', 'Web3 UX'],
  },
  {
    title:    'Sports Analytics Hub',
    subtitle: 'Live Sports Platform',
    desc:     'A sports analytics dashboard pulling live scores, match stats, and news feeds from a public sports API. Built with real-time data updates, dynamic score cards, and a fully responsive layout.',
    stack:    ['React', 'Tailwind CSS', 'REST API'],
    tag:      'API Integration',
    tagColor: 'orange',
    icon:     '⚽',
    featured: false,
    screenshot: '/images/TennisWeb.png',
    color:    '#f97316',
    links:    { live: 'https://nj-tennis-web.vercel.app/', github: '#' },
    metrics:  ['Live Scores', 'Stats API', 'News Feed', 'Real-time'],
  },
  {
    title:    'Fashion Lookbook',
    subtitle: 'Visual E-commerce Storefront',
    desc:     'A visually rich fashion e-commerce storefront with editorial photography layouts, product showcases, lookbook galleries, and smooth UI interactions crafted for a premium brand experience.',
    stack:    ['React', 'Tailwind CSS', 'JavaScript'],
    tag:      'E-commerce',
    tagColor: 'pink',
    icon:     '👗',
    featured: false,
    screenshot: '/images/FashionWeb.png',
    color:    '#ec4899',
    links:    { live: 'https://nj-stitches-hub.vercel.app/', github: '#' },
    metrics:  ['Editorial Layout', 'Product Catalog', 'Lookbook Gallery', 'Brand UX'],
  },
]

const tagColors = {
  gold:   { bg: 'rgba(229,168,37,0.12)',  border: 'rgba(229,168,37,0.35)',  text: '#e5a825' },
  green:  { bg: 'rgba(34,197,94,0.12)',   border: 'rgba(34,197,94,0.35)',   text: '#22c55e' },
  blue:   { bg: 'rgba(59,130,246,0.12)',  border: 'rgba(59,130,246,0.35)',  text: '#3b82f6' },
  purple: { bg: 'rgba(168,85,247,0.12)',  border: 'rgba(168,85,247,0.35)',  text: '#a855f7' },
  orange: { bg: 'rgba(249,115,22,0.12)',  border: 'rgba(249,115,22,0.35)',  text: '#f97316' },
  pink:   { bg: 'rgba(236,72,153,0.12)',  border: 'rgba(236,72,153,0.35)',  text: '#ec4899' },
}

/* ── Placeholder when no real screenshot ─────────────────────── */
function ScreenshotPlaceholder({ project }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #0d0f14, #1a1d24, ${project.color}18)` }}
    >
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `linear-gradient(${project.color}18 1px, transparent 1px),
                            linear-gradient(90deg, ${project.color}18 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div
        className="absolute w-40 h-40 rounded-full opacity-15"
        style={{ background: project.color, filter: 'blur(60px)', top: '20%', left: '35%' }}
      />
      <span className="relative text-5xl drop-shadow-lg">{project.icon}</span>
      <span
        className="relative text-xs tracking-widest uppercase"
        style={{ fontFamily: 'var(--font-jetbrains)', color: project.color, opacity: 0.5 }}
      >
        screenshot coming soon
      </span>
    </div>
  )
}

/* ── Modal ───────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const tc = tagColors[project.tagColor]
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <>
      <style>{`
        @keyframes modalBackdropIn { from{opacity:0} to{opacity:1} }
        @keyframes modalSlideIn {
          from { opacity:0; transform:translateY(40px) scale(0.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        style={{ background: 'rgba(4,5,8,0.93)', backdropFilter: 'blur(18px)', animation: 'modalBackdropIn 0.25s ease both' }}
        onClick={onClose}
      >
        {/* Modal box */}
        <div
          className="relative w-full max-w-3xl overflow-hidden"
          style={{
            background: '#0e1015',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: `0 40px 120px rgba(0,0,0,0.85), 0 0 60px ${project.color}18`,
            maxHeight: '90vh',
            overflowY: 'auto',
            animation: 'modalSlideIn 0.35s cubic-bezier(0.34,1.36,0.64,1) both',
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all duration-200"
            style={{ background: 'rgba(8,9,13,0.9)', backdropFilter: 'blur(8px)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          {/* Screenshot */}
          <div className="relative w-full overflow-hidden" style={{ height: '260px', borderBottom: `1px solid ${project.color}20` }}>
            {!imgError ? (
              <img
                src={project.screenshot}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <ScreenshotPlaceholder project={project} />
            )}

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, transparent, #0e1015)' }}
            />

            {/* Tag chip */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1.5 text-xs font-semibold border"
                style={{
                  fontFamily: 'var(--font-jetbrains)',
                  background: tc.bg, borderColor: tc.border, color: tc.text,
                  backdropFilter: 'blur(10px)',
                }}
              >
                ★ {project.tag}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="p-7 lg:p-9">
            {/* Title row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-2xl">{project.icon}</span>
                  <h3
                    className="text-white font-semibold"
                    style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.1rem, 3vw, 1.4rem)' }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p style={{ fontFamily: 'var(--font-jetbrains)', color: project.color, fontSize: '11px', letterSpacing: '0.08em' }}>
                  {project.subtitle}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2.5 flex-shrink-0">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:opacity-85"
                  style={{ fontFamily: 'var(--font-syne)', background: project.color, color: '#08090d' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <path d="M15 3h6v6"/><path d="M10 14L21 3"/>
                  </svg>
                  Live Site
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-widest uppercase text-white/50 hover:text-white transition-all duration-300"
                  style={{ fontFamily: 'var(--font-syne)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px mb-6" style={{ background: `linear-gradient(90deg, ${project.color}40, transparent 70%)` }} />

            {/* Description */}
            <p
              className="text-white/55 leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.94rem', lineHeight: '1.9' }}
            >
              {project.desc}
            </p>

            {/* Metrics + Stack grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ fontFamily: 'var(--font-jetbrains)', color: 'rgba(240,236,228,0.28)' }}
                >
                  Key Features
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {project.metrics.map(m => (
                    <div
                      key={m}
                      className="flex items-center gap-2 text-xs text-white/50 py-2.5 px-3"
                      style={{ fontFamily: 'var(--font-syne)', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <span style={{ color: project.color, fontSize: '10px', flexShrink: 0 }}>✓</span>
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ fontFamily: 'var(--font-jetbrains)', color: 'rgba(240,236,228,0.28)' }}
                >
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(s => (
                    <span
                      key={s}
                      className="px-3 py-1.5 text-xs border"
                      style={{
                        fontFamily: 'var(--font-jetbrains)',
                        background: `${project.color}10`,
                        borderColor: `${project.color}28`,
                        color: project.color,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── Featured Card ───────────────────────────────────────────────── */
function FeaturedCard({ project, onOpen }) {
  const tc = tagColors[project.tagColor]
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="group relative overflow-hidden border border-white/5 cursor-pointer"
      style={{ background: '#111318', transition: 'border-color 0.4s, box-shadow 0.4s' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.color}35`
        e.currentTarget.style.boxShadow   = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}10`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
        e.currentTarget.style.boxShadow   = 'none'
      }}
      onClick={() => onOpen(project)}
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        {!imgError ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <ScreenshotPlaceholder project={project} />
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'rgba(8,9,13,0.78)',
            backdropFilter: 'blur(4px)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
          ref={el => {
            if (el) {
              el.parentElement.parentElement.addEventListener('mouseenter', () => el.style.opacity = '1')
              el.parentElement.parentElement.addEventListener('mouseleave', () => el.style.opacity = '0')
            }
          }}
        >
          <span
            className="flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase border"
            style={{ fontFamily: 'var(--font-syne)', color: project.color, borderColor: project.color, background: `${project.color}14` }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/>
            </svg>
            View Details
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span
            className="px-2.5 py-1 text-xs font-medium border"
            style={{ fontFamily: 'var(--font-jetbrains)', background: tc.bg, borderColor: tc.border, color: tc.text, backdropFilter: 'blur(8px)' }}
          >
            ★ {project.tag}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xl">{project.icon}</span>
          <div>
            <h3
              className="font-semibold text-white/90 group-hover:text-white transition-colors"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem' }}
            >
              {project.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-jetbrains)', color: project.color, fontSize: '10px', letterSpacing: '0.06em', marginTop: '2px' }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        <p
          className="text-white/40 text-sm leading-relaxed mb-5"
          style={{ fontFamily: 'var(--font-syne)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map(s => (
            <span
              key={s}
              className="px-2.5 py-1 text-xs border"
              style={{ fontFamily: 'var(--font-jetbrains)', background: `${project.color}08`, borderColor: `${project.color}20`, color: project.color, opacity: 0.8 }}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span
            className="text-xs flex items-center gap-1.5 font-semibold"
            style={{ fontFamily: 'var(--font-syne)', color: project.color, letterSpacing: '0.08em' }}
          >
            View Details
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          <div className="flex gap-4">
            <a href={project.links.live} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
              Live ↗
            </a>
            <a href={project.links.github} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Small Card ──────────────────────────────────────────────────── */
function SmallCard({ project, onOpen }) {
  const tc = tagColors[project.tagColor]
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="group relative overflow-hidden border border-white/5 cursor-pointer flex flex-col"
      style={{ background: '#0e1015', transition: 'border-color 0.4s, transform 0.4s, box-shadow 0.4s' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${project.color}30`
        e.currentTarget.style.transform   = 'translateY(-5px)'
        e.currentTarget.style.boxShadow   = '0 16px 50px rgba(0,0,0,0.5)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
        e.currentTarget.style.transform   = 'translateY(0)'
        e.currentTarget.style.boxShadow   = 'none'
      }}
      onClick={() => onOpen(project)}
    >
      {/* Screenshot */}
      <div className="relative overflow-hidden flex-shrink-0" style={{ height: '145px' }}>
        {!imgError ? (
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <ScreenshotPlaceholder project={project} />
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'rgba(8,9,13,0.82)',
            opacity: 0,
            transition: 'opacity 0.3s',
          }}
          ref={el => {
            if (el) {
              el.parentElement.parentElement.addEventListener('mouseenter', () => el.style.opacity = '1')
              el.parentElement.parentElement.addEventListener('mouseleave', () => el.style.opacity = '0')
            }
          }}
        >
          <span
            className="flex items-center gap-1.5 text-xs px-4 py-2 border font-semibold"
            style={{ fontFamily: 'var(--font-syne)', color: project.color, borderColor: project.color, background: `${project.color}12`, letterSpacing: '0.08em' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            View Details
          </span>
        </div>

        {/* Tag */}
        <div className="absolute top-2 right-2 z-10">
          <span
            className="px-2 py-0.5 border"
            style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '9px', background: tc.bg, borderColor: tc.border, color: tc.text, backdropFilter: 'blur(8px)' }}
          >
            {project.tag}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-lg">{project.icon}</span>
          <h3
            className="font-semibold text-white/85 group-hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-syne)', fontSize: '13px' }}
          >
            {project.title}
          </h3>
        </div>

        <p style={{ fontFamily: 'var(--font-jetbrains)', color: project.color, fontSize: '10px', opacity: 0.7, marginBottom: '10px' }}>
          {project.subtitle}
        </p>

        <p
          className="text-white/35 leading-relaxed mb-4 flex-1"
          style={{
            fontFamily: 'var(--font-syne)', fontSize: '12px', lineHeight: '1.7',
            display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}
        >
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 3).map(s => (
            <span
              key={s}
              className="px-2 py-0.5 border"
              style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px', background: `${project.color}08`, borderColor: `${project.color}18`, color: project.color, opacity: 0.85 }}
            >
              {s}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-2 py-0.5 border border-white/8 text-white/25" style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '10px' }}>
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span
            className="text-xs flex items-center gap-1 font-semibold"
            style={{ fontFamily: 'var(--font-syne)', color: project.color, opacity: 0.85, letterSpacing: '0.06em' }}
          >
            Details
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </span>
          <div className="flex gap-3">
            <a href={project.links.live} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
              className="text-white/25 hover:text-white transition-colors" style={{ fontSize: '11px', fontFamily: 'var(--font-syne)' }}>
              Live ↗
            </a>
            <a href={project.links.github} onClick={e => e.stopPropagation()} target="_blank" rel="noopener noreferrer"
              className="text-white/25 hover:text-white transition-colors" style={{ fontSize: '11px', fontFamily: 'var(--font-syne)' }}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Main Component ──────────────────────────────────────────────── */
export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const featured = projects.filter(p => p.featured)
  const rest     = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(229,168,37,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6 reveal">Portfolio</div>
          <h2 className="reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
            <span className="block text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>Featured</span>
            <span className="gold-clip font-semibold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Projects</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto reveal delay-200" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem' }}>
            Click any project card to explore screenshots, full details, and live links.
          </p>
        </div>

        {/* Featured */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5 reveal delay-200">
          {featured.map(p => (
            <FeaturedCard key={p.title} project={p} onOpen={setActiveProject} />
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 reveal delay-300">
          {rest.map(p => (
            <SmallCard key={p.title} project={p} onOpen={setActiveProject} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 reveal delay-400">
          <p className="text-white/30 text-sm mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            Want to see more? Find all my projects on GitHub.
          </p>
          <a
            href="https://github.com/NJWILD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View GitHub Profile
          </a>
        </div>
      </div>

      {/* Modal — renders outside section flow */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  )
}