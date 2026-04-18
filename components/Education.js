'use client'

const certs = [
  {
    title:    'Version Control with Git & GitHub',
    platform: 'Self-paced · Online',
    icon:     '◈',
    desc:     'Mastered Git workflows, branching strategies, pull requests, and collaborative development practices used in professional team environments.',
    skills:   ['Git', 'GitHub', 'Version Control', 'Collaboration'],
  },
  {
    title:    'Firebase — The Full Course',
    platform: 'Self-paced · Online',
    icon:     '◉',
    desc:     'In-depth study of Firebase services including Authentication, Firestore real-time database, Cloud Functions, Hosting, and Storage.',
    skills:   ['Firebase Auth', 'Firestore', 'Cloud Functions', 'Hosting'],
  },
  {
    title:    'React.js — Advanced Patterns',
    platform: 'Self-directed Learning',
    icon:     '⬡',
    desc:     'Deep-dived into React hooks, context, performance optimization, custom hooks, and architectural patterns for scalable applications.',
    skills:   ['React Hooks', 'Context API', 'Custom Hooks', 'Performance'],
  },
  {
    title:    'Next.js & TypeScript',
    platform: 'Currently Learning · Active',
    icon:     '◆',
    desc:     'Currently expanding into Next.js App Router, Server Components, TypeScript type systems, and fullstack development patterns.',
    skills:   ['Next.js', 'TypeScript', 'App Router', 'SSR/SSG'],
    active:   true,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 80%, rgba(229,168,37,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* ── Education ── */}
          <div>
            <div className="section-label mb-6 reveal">Academic</div>
            <h2 className="mb-12 reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
              <span className="block text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>Education</span>
            </h2>

            {/* FUTO Card */}
            <div className="card-glow glow-border bg-charcoal/50 border border-white/5 p-8 reveal delay-200">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-2xl">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-white font-semibold" style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem' }}>
                      Bachelor of Technology
                    </h3>
                    <span className="px-2.5 py-1 bg-gold/10 border border-gold/25 text-gold text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                      In Progress
                    </span>
                  </div>
                  <div className="text-gold/70 text-sm mb-3 font-medium" style={{ fontFamily: 'var(--font-syne)' }}>
                    Federal University of Technology, Owerri (FUTO)
                  </div>
                  <div className="text-white/30 text-xs mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                    Expected Graduation: 2029 · Owerri, Imo State, Nigeria
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-syne)' }}>
                    Pursuing a degree in Computer Science & Information Technology while simultaneously
                    maintaining an active professional career — demonstrating exceptional time management
                    and dedication to both academic and industry excellence.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Information Technology', 'Problem-Solving with Data', 'Algorithms'].map(c => (
                      <span
                        key={c}
                        className="px-3 py-1 text-xs bg-white/4 border border-white/8 text-white/40"
                        style={{ fontFamily: 'var(--font-syne)' }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement callout */}
            <div className="mt-6 border-l-2 border-gold/40 pl-6 py-2 reveal delay-300">
              <p className="text-white/50 text-sm italic leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem' }}>
                Balancing full-time academics with active professional development, client freelance work,
                and co-founding a startup — all simultaneously.
              </p>
              <div className="mt-2 text-gold/50 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                The definition of commitment.
              </div>
            </div>
          </div>

          {/* ── Certifications ── */}
          <div>
            <div className="section-label mb-6 reveal">Learning</div>
            <h2 className="mb-12 reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
              <span className="block text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>Certifications</span>
              <span className="gold-clip font-semibold" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>&amp; Learning</span>
            </h2>

            <div className="space-y-4">
              {certs.map((cert, i) => (
                <div
                  key={cert.title}
                  className={`card-glow border p-6 reveal delay-${(i + 2) * 100} ${
                    cert.active
                      ? 'bg-gold/5 border-gold/20'
                      : 'bg-charcoal/40 border-white/5'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`text-xl flex-shrink-0 mt-0.5 ${cert.active ? 'text-gold animate-pulse' : 'text-gold/50'}`}>
                      {cert.icon}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <h4 className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-syne)' }}>
                          {cert.title}
                        </h4>
                        {cert.active && (
                          <span className="px-2 py-0.5 bg-green-500/10 border border-green-500/25 text-green-400 text-xs flex items-center gap-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Active
                          </span>
                        )}
                      </div>
                      <div className="text-gold/50 text-xs mb-3" style={{ fontFamily: 'var(--font-jetbrains)' }}>
                        {cert.platform}
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed mb-3" style={{ fontFamily: 'var(--font-syne)' }}>
                        {cert.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map(s => (
                          <span
                            key={s}
                            className="px-2 py-0.5 text-xs bg-white/3 border border-white/6 text-white/30"
                            style={{ fontFamily: 'var(--font-jetbrains)' }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
