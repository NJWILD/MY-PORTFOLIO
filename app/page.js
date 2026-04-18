'use client'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarqueeBanner from '../components/MarqueeBanner'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Cursor from '../components/Cursor'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Navbar />

      <main>
        <Hero />
        <MarqueeBanner />
        <About />

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <Experience />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        </div>

        <Education />

        {/* CTA Banner */}
        <section className="py-24 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(229,168,37,0.06) 0%, transparent 50%, rgba(229,168,37,0.04) 100%)',
            }}
          />
          <div
            className="absolute inset-0 grid-lines"
            style={{ opacity: 0.4 }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {/* Orb */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(229,168,37,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
          />

          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
            <div className="section-label justify-center mb-8 reveal">Ready to Collaborate?</div>

            <h2 className="mb-6 reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
              <span className="block text-white" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                Let's Build Your
              </span>
              <span className="shimmer-text font-semibold" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
                Next Big Idea
              </span>
            </h2>

            <p className="text-white/40 mb-10 max-w-xl mx-auto reveal delay-200" style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem', lineHeight: 1.8 }}>
              Whether you need a blazing-fast frontend, a complete web app, or a
              technical co-founder for your startup — I'm ready to ship.
            </p>

            <div className="flex flex-wrap gap-4 justify-center reveal delay-300">
              <a
                href="#contact"
                className="btn-gold"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                Start a Project
              </a>
              <a
                href="mailto:njokujoshua571@gmail.com"
                className="btn-ghost flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
                </svg>
                Email Directly
              </a>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  )
}
