'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Frontend Core',
    icon: '⬡',
    skills: [
      { name: 'React.js',        level: 90, years: '3+ yrs' },
      { name: 'Tailwind CSS',    level: 92, years: '3+ yrs' },
      { name: 'JavaScript ES6+', level: 88, years: '4+ yrs' },
      { name: 'HTML5 & CSS3',    level: 95, years: '4+ yrs' },
    ],
  },
  {
    category: 'Tools & Services',
    icon: '◈',
    skills: [
      { name: 'Firebase (Auth & Firestore)', level: 80, years: '2+ yrs' },
      { name: 'Git & GitHub',               level: 85, years: '3+ yrs' },
      { name: 'Postman / REST APIs',        level: 75, years: '2+ yrs' },
      { name: 'VS Code',                    level: 95, years: '4+ yrs' },
    ],
  },
  {
    category: 'Learning Now',
    icon: '◉',
    skills: [
      { name: 'Next.js',     level: 55, years: 'Active' },
      { name: 'TypeScript',  level: 45, years: 'Active' },
      { name: 'Node.js',     level: 35, years: 'Exploring' },
      { name: 'Chart.js',    level: 70, years: '1+ yr' },
    ],
  },
]

const softSkills = [
  { label: 'Team Leadership',      icon: '◆' },
  { label: 'Problem Solving',      icon: '◆' },
  { label: 'Client Communication', icon: '◆' },
  { label: 'Rapid Learning',       icon: '◆' },
  { label: 'Project Management',   icon: '◆' },
  { label: 'Attention to Detail',  icon: '◆' },
]

function SkillBar({ name, level, years, visible }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70 text-sm group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
          {name}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-white/30 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>{years}</span>
          <span className="text-gold text-sm font-semibold" style={{ fontFamily: 'var(--font-jetbrains)' }}>{level}%</span>
        </div>
      </div>
      <div className="h-[3px] bg-white/5 rounded-full overflow-hidden">
        <div
          className="skill-bar-fill rounded-full"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = require('react').useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true)
    }, { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(229,168,37,0.05) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6 reveal">Technical Arsenal</div>
          <h2 className="reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
            <span className="block text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>Skills &</span>
            <span className="gold-clip font-semibold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Expertise</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto reveal delay-200" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem' }}>
            A curated stack of technologies I wield to bring high-quality digital products to life.
          </p>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`card-glow glow-border bg-charcoal/50 border border-white/5 p-8 reveal delay-${(gi + 1) * 100}`}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-gold text-xl">{group.icon}</span>
                <h3 className="text-white font-semibold text-sm tracking-wider uppercase" style={{ fontFamily: 'var(--font-syne)' }}>
                  {group.category}
                </h3>
              </div>
              <div className="space-y-6">
                {group.skills.map(skill => (
                  <SkillBar key={skill.name} {...skill} visible={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="reveal delay-400">
          <div className="section-label mb-6">Soft Skills</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {softSkills.map(s => (
              <div
                key={s.label}
                className="group flex items-center gap-3 bg-charcoal/30 border border-white/5 px-5 py-4 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300"
              >
                <span className="text-gold/40 group-hover:text-gold text-xs transition-colors">{s.icon}</span>
                <span className="text-white/50 group-hover:text-white/80 text-xs transition-colors" style={{ fontFamily: 'var(--font-syne)', letterSpacing: '0.04em' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-lg reveal delay-500">
          {[
            { lang: 'English', level: 'Fluent', pct: 95 },
            { lang: 'Igbo',    level: 'Native', pct: 100 },
          ].map(l => (
            <div key={l.lang} className="bg-charcoal/30 border border-white/5 p-6">
              <div className="flex justify-between mb-2">
                <span className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-syne)' }}>{l.lang}</span>
                <span className="text-gold/70 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>{l.level}</span>
              </div>
              <div className="h-[2px] bg-white/5 rounded-full">
                <div
                  className="skill-bar-fill rounded-full"
                  style={{ width: visible ? `${l.pct}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
