'use client'

const experiences = [
  {
    role:     'Frontend Developer',
    company:  'Hyperbird Technologies',
    period:   'Aug 2025 — Present',
    type:     'Full-time · Remote/On-site',
    tag:      'Current',
    color:    'gold',
    bullets: [
      'Develop and maintain responsive frontend components for client web applications using React and Tailwind CSS.',
      'Collaborate with backend teams to integrate RESTful APIs, utilizing Postman for rigorous endpoint testing and validation.',
      'Implement version control best practices using Git and GitHub, ensuring clean and collaborative codebases across the team.',
      'Optimize web pages for maximum speed and cross-browser compatibility, consistently delivering high performance scores.',
    ],
    stack: ['React', 'Tailwind CSS', 'Git', 'Postman', 'REST APIs'],
  },
  {
    role:     'Co-Founder & Lead Frontend Developer',
    company:  'FUTO Student E-commerce Platform',
    period:   'Feb 2026 — Present',
    type:     'Startup · Owerri, Nigeria',
    tag:      'Startup',
    color:    'amber',
    bullets: [
      'Co-founded a student-focused e-commerce platform aimed at serving the FUTO community and beyond.',
      'Solely responsible for the entire frontend architecture — building the user interface with React and Tailwind CSS.',
      'Collaborated with a small team (backend, product) to define MVP features, user flows, and deployment strategy.',
      'Applied Firebase for authentication and real-time data management, creating a seamless shopping experience for student vendors and buyers.',
    ],
    stack: ['React', 'Tailwind CSS', 'Firebase', 'Firestore', 'Firebase Auth'],
  },
  {
    role:     'Freelance Frontend Developer',
    company:  'Self-Employed',
    period:   'Jan 2023 — Present',
    type:     'Freelance · Remote',
    tag:      '3+ yrs',
    color:    'white',
    bullets: [
      'Secured and delivered fully functional e-commerce websites for paying clients, managing the entire project lifecycle — from requirements gathering to deployment.',
      'Built and deployed multiple high-fidelity personal and client projects including a Hotel Booking UI, NFT Gallery, Sports Analytics Dashboard, CoinPay Fintech Dashboard, and Fashion Lookbook.',
      'Managed client communication, expectations, and revisions — building a reputation for reliable, pixel-perfect delivery.',
      'Continuously expanded skill set through self-directed learning while delivering real-world value for clients.',
    ],
    stack: ['React', 'Tailwind CSS', 'JavaScript', 'Firebase', 'Chart.js', 'CSS Grid'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(229,168,37,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <div className="section-label mb-6 reveal">Career Journey</div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
              <span className="block text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>Work</span>
              <span className="gold-clip font-semibold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Experience</span>
            </h2>
            <p className="text-white/40 max-w-xs sm:text-right reveal delay-200" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem' }}>
              4+ years of hands-on professional development across multiple roles.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative lg:pl-24 reveal delay-${(i + 1) * 100}`}>
                {/* Timeline dot (desktop) */}
                <div
                  className="hidden lg:flex absolute left-[25px] top-8 timeline-dot items-center justify-center"
                  style={{ boxShadow: '0 0 20px rgba(229,168,37,0.5)' }}
                />

                {/* Card */}
                <div className="card-glow glow-border bg-charcoal/50 border border-white/5 p-8 lg:p-10 group">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="text-white font-semibold group-hover:text-gold transition-colors"
                          style={{ fontFamily: 'var(--font-syne)', fontSize: '1.15rem' }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          className="px-3 py-1 text-xs border border-gold/25 text-gold/80"
                          style={{ fontFamily: 'var(--font-jetbrains)' }}
                        >
                          {exp.tag}
                        </span>
                      </div>
                      <div className="text-gold/80 font-medium text-sm" style={{ fontFamily: 'var(--font-syne)' }}>{exp.company}</div>
                      <div className="text-white/35 text-xs mt-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>{exp.type}</div>
                    </div>
                    <div
                      className="text-white/40 text-sm border border-white/10 px-4 py-2 whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-jetbrains)', fontSize: '0.75rem' }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-8">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-white/50 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-syne)' }}>
                        <span className="text-gold/50 mt-1 flex-shrink-0">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(s => (
                      <span
                        key={s}
                        className="px-3 py-1 text-xs bg-gold/8 border border-gold/15 text-gold/70 hover:bg-gold/15 hover:text-gold transition-all duration-200"
                        style={{ fontFamily: 'var(--font-jetbrains)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
