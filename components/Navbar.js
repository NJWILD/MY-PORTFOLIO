'use client'
import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Intersection observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { threshold: 0.35 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-glass py-4' : 'py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={e => navClick(e, '#')}
            className="flex items-center gap-3 group"
            aria-label="Njoku Joshua - Home"
          >
            <div className="relative w-10 h-10 border border-gold/40 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
              <span
                className="text-sm font-bold shimmer-text"
                style={{ fontFamily: 'var(--font-cormorant)', letterSpacing: '0.05em' }}
              >NJ</span>
              <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/10 transition-colors" />
            </div>
            <span
              className="text-white/80 group-hover:text-white transition-colors duration-300 hidden sm:block"
              style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', letterSpacing: '0.1em' }}
            >NJOKU JOSHUA</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={e => navClick(e, l.href)}
                className={`relative text-xs tracking-widest uppercase transition-colors duration-300 group ${
                  active === l.href.slice(1) ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-syne)', fontWeight: 600 }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active === l.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA & Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:njokujoshua571@gmail.com"
              className="hidden lg:block btn-gold text-xs"
              style={{ padding: '10px 24px' }}
            >
              Hire Me
            </a>
            <button
              className="lg:hidden flex flex-col gap-[5px] p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-7 bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px bg-gold transition-all duration-300 ${mobileOpen ? 'opacity-0 w-0' : 'w-5'}`} />
              <span className={`block h-px w-7 bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-y-0 right-0 z-40 w-80 max-w-full bg-charcoal border-l border-gold/10 flex flex-col justify-center px-10 ${
          mobileOpen ? 'open' : ''
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-10">
          <div className="text-gold text-xs tracking-widest uppercase mb-2" style={{ fontFamily: 'var(--font-jetbrains)' }}>Navigation</div>
          <div className="w-8 h-px bg-gold/40" />
        </div>

        <nav className="flex flex-col gap-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => navClick(e, l.href)}
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-300"
            >
              <span className="text-gold/40 font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.95rem' }}>
                {l.label}
              </span>
              <span className="ml-auto w-0 h-px bg-gold transition-all duration-300 group-hover:w-8" />
            </a>
          ))}
        </nav>

        <div className="mt-12 pt-10 border-t border-gold/10">
          <a
            href="mailto:njokujoshua571@gmail.com"
            className="btn-gold block text-center text-xs"
          >
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}