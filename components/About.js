'use client'
import { useEffect, useRef, useState } from 'react'

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const step = end / (duration / 16)
        const timer = setInterval(() => {
          start = Math.min(start + step, end)
          setCount(Math.floor(start))
          if (start >= end) clearInterval(timer)
        }, 16)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { value: 4,  suffix: '+', label: 'Years Experience',  desc: 'Self-taught & industry proven' },
  { value: 10, suffix: '+', label: 'Projects Delivered', desc: 'Client & personal work' },
  { value: 3,  suffix: '',      label: 'Active Roles',       desc: 'Dev, Freelancer, Co-Founder' },
  { value: 100,suffix: '%', label: 'Remote Ready',       desc: 'Open globally' },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div
        className="absolute right-0 top-0 w-1/3 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right center, rgba(229,168,37,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ── Left ── */}
          <div>
            <div className="section-label mb-6 reveal">About Me</div>
            <h2
              className="mb-8 reveal delay-100"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}
            >
              <span className="block text-white" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                Crafting Digital
              </span>
              <span className="block gold-clip font-semibold" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}>
                Experiences
              </span>
              <span className="block text-white/50 font-light" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
                That Matter
              </span>
            </h2>

            <div className="space-y-5 reveal delay-200">
              <p className="text-white/55 leading-relaxed" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.97rem' }}>
                I'm <span className="text-white font-semibold">Njoku Joshua Uchenna</span>, a self-taught
                Frontend Developer from Owerri, Nigeria, with over 4 years of hands-on experience building
                responsive, production-grade web applications that users love.
              </p>
              <p className="text-white/55 leading-relaxed" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.97rem' }}>
                By day I'm a Frontend Developer at{' '}
                <span className="text-gold">Hyperbird Technologies</span>, collaborating with backend teams
                and integrating RESTful APIs to deliver polished user experiences. By night I'm a freelancer,
                startup co-founder, and relentless learner expanding into{' '}
                <span className="text-gold">Next.js</span> and{' '}
                <span className="text-gold">TypeScript</span>.
              </p>
              <p className="text-white/55 leading-relaxed" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.97rem' }}>
                I'm simultaneously pursuing a{' '}
                <span className="text-white/80">Bachelor of Technology</span> at FUTO —
                balancing academics, professional work, and co-founding a student-focused
                e-commerce platform for the FUTO community.
              </p>
            </div>

            {/* Personality tags */}
            <div className="flex flex-wrap gap-3 mt-8 reveal delay-300">
              {['Problem Solver', 'Rapid Learner', 'Team Leader', 'Clean Code Advocate', 'UI Perfectionist'].map(t => (
                <span
                  key={t}
                  className="px-4 py-2 text-xs border border-gold/15 text-white/50 hover:border-gold/40 hover:text-gold/80 transition-all duration-300"
                  style={{ fontFamily: 'var(--font-syne)', letterSpacing: '0.06em' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Contact quick links */}
            <div className="mt-10 flex flex-wrap gap-6 reveal delay-400">
              <div>
                <div className="text-white/30 text-xs mb-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Email</div>
                <a href="mailto:njokujoshua571@gmail.com" className="text-gold hover:text-gold-light transition-colors text-sm" style={{ fontFamily: 'var(--font-syne)' }}>
                  njokujoshua571@gmail.com
                </a>
              </div>
              <div>
                <div className="text-white/30 text-xs mb-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Phone</div>
                <a href="tel:08056364802" className="text-white/60 hover:text-white transition-colors text-sm" style={{ fontFamily: 'var(--font-syne)' }}>
                  +234 805 636 4802
                </a>
              </div>
              <div>
                <div className="text-white/30 text-xs mb-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>Location</div>
                <span className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-syne)' }}>Owerri, Nigeria / Remote</span>
              </div>
            </div>
          </div>

          {/* ── Right: Stats ── */}
          <div className="grid grid-cols-2 gap-4 reveal-right delay-200">
            {stats.map((s, i) => (
              <div
                key={i}
                className="stat-card glow-border bg-charcoal/60 border border-white/5 p-7 hover:border-gold/20 transition-all duration-400 group"
              >
                <div
                  className="gold-clip font-bold mb-2 leading-none"
                  style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(3rem, 5vw, 4rem)' }}
                >
                  <Counter end={s.value} suffix={s.suffix} />
                </div>
                <div
                  className="text-white/80 font-semibold mb-1 group-hover:text-gold transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  {s.label}
                </div>
                <div className="text-white/35 text-xs" style={{ fontFamily: 'var(--font-syne)' }}>
                  {s.desc}
                </div>
              </div>
            ))}

            {/* Philosophy card */}
            <div className="col-span-2 bg-gradient-to-br from-gold/8 to-transparent border border-gold/15 p-7">
              <div className="text-gold/60 text-2xl mb-3" style={{ fontFamily: 'serif' }}>"</div>
              <p className="text-white/60 italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem' }}>
                I don't just write code. I architect experiences — from first paint to final pixel —
                with intention, precision, and an obsessive eye for detail.
              </p>
              <div className="mt-4 text-gold text-xs tracking-widest uppercase" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                — Njoku Joshua
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
