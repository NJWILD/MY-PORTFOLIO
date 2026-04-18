'use client'

const projects = [
  {
    title:    'Client E-commerce Platform',
    subtitle: 'Real-World Client Project',
    desc:     'Full-stack frontend for a real paying client. Integrated product catalog, dynamic cart logic, payment checkout simulation, and Firebase backend. End-to-end project from requirements to deployment.',
    stack:    ['React', 'Tailwind CSS', 'Firebase', 'Firestore'],
    tag:      'Client Work',
    tagColor: 'gold',
    icon:     '🛒',
    featured: true,
    links:    { live: '#', github: '#' },
    metrics:  ['Full lifecycle', 'Firebase Auth', 'Cart & Checkout', 'Deployed'],
  },
  {
    title:    'FUTO Student Marketplace',
    subtitle: 'Startup · Co-Founder',
    desc:     'A student-focused e-commerce platform serving the FUTO university community. Built the entire frontend architecture — real-time shopping, vendor storefronts, and student buyer flows.',
    stack:    ['React', 'Tailwind CSS', 'Firebase Auth', 'Firestore'],
    tag:      'Startup',
    tagColor: 'green',
    icon:     '🎓',
    featured: true,
    links:    { live: '#', github: '#' },
    metrics:  ['Student Vendors', 'Real-time DB', 'Auth System', 'MVP Live'],
  },
  {
    title:    'Hotel Booking System',
    subtitle: 'Dynamic Booking UI',
    desc:     'A sophisticated hotel website featuring dynamic room listings with advanced filtering, image galleries, and a complete reservation interface with availability management.',
    stack:    ['React', 'Tailwind CSS', 'JavaScript'],
    tag:      'Personal Project',
    tagColor: 'blue',
    icon:     '🏨',
    featured: false,
    links:    { live: '#', github: '#' },
    metrics:  ['Room Filtering', 'Booking Flow', 'Image Gallery', 'Responsive'],
  },
  {
    title:    'CoinPay Fintech Dashboard',
    subtitle: 'Financial Analytics UI',
    desc:     'A modern fintech dashboard featuring interactive Chart.js visualizations, transaction history, balance overview, portfolio tracking, and a sleek dark-mode financial interface.',
    stack:    ['React', 'Tailwind CSS', 'Chart.js'],
    tag:      'Personal Project',
    tagColor: 'blue',
    icon:     '💳',
    featured: false,
    links:    { live: '#', github: '#' },
    metrics:  ['Live Charts', 'Transactions', 'Portfolio View', 'Dark Mode'],
  },
  {
    title:    'NFT Marketplace Concept',
    subtitle: 'Web3-Inspired Design',
    desc:     'A visually stunning NFT marketplace concept with responsive NFT card grids, artist profile pages, auction countdown timers, and a modern Web3-inspired aesthetic built with CSS Grid.',
    stack:    ['React', 'Tailwind CSS', 'CSS Grid'],
    tag:      'Personal Project',
    tagColor: 'purple',
    icon:     '🎨',
    featured: false,
    links:    { live: '#', github: '#' },
    metrics:  ['NFT Cards', 'Artist Profiles', 'Auction Timers', 'Web3 UX'],
  },
  {
    title:    'Sports Analytics Hub',
    subtitle: 'Live Sports Platform',
    desc:     'A sports analytics dashboard pulling live scores, match stats, and news feeds from a public sports API. Built with real-time data updates and a dynamic responsive layout.',
    stack:    ['React', 'Tailwind CSS', 'REST API'],
    tag:      'API Integration',
    tagColor: 'orange',
    icon:     '⚽',
    featured: false,
    links:    { live: '#', github: '#' },
    metrics:  ['Live Scores', 'Stats API', 'News Feed', 'Real-time'],
  },
  {
    title:    'Fashion Lookbook',
    subtitle: 'Visual E-commerce Storefront',
    desc:     'A visually rich fashion e-commerce storefront with editorial photography layouts, product showcases, lookbook galleries, and smooth UI interactions for a premium brand experience.',
    stack:    ['React', 'Tailwind CSS', 'JavaScript'],
    tag:      'E-commerce',
    tagColor: 'pink',
    icon:     '👗',
    featured: false,
    links:    { live: '#', github: '#' },
    metrics:  ['Editorial Layout', 'Product Catalog', 'Lookbook Gallery', 'Brand UX'],
  },
]

const tagColors = {
  gold:   { bg: 'rgba(229,168,37,0.1)',  border: 'rgba(229,168,37,0.3)',  text: '#e5a825' },
  green:  { bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.3)',   text: '#22c55e' },
  blue:   { bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.3)',  text: '#3b82f6' },
  purple: { bg: 'rgba(168,85,247,0.1)',  border: 'rgba(168,85,247,0.3)',  text: '#a855f7' },
  orange: { bg: 'rgba(249,115,22,0.1)',  border: 'rgba(249,115,22,0.3)',  text: '#f97316' },
  pink:   { bg: 'rgba(236,72,153,0.1)',  border: 'rgba(236,72,153,0.3)',  text: '#ec4899' },
  white:  { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)', text: '#ffffff' },
}

function ProjectCard({ project, i, featured }) {
  const tc = tagColors[project.tagColor]
  const delay = ((i % 3) + 1) * 100

  if (featured) {
    return (
      <div className={`col-span-full lg:col-span-1 card-glow glow-border bg-charcoal/50 border border-white/5 p-8 lg:p-10 reveal delay-${delay} group`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 flex items-center justify-center border border-gold/15 text-2xl group-hover:border-gold/40 transition-colors"
            >
              {project.icon}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs px-2.5 py-1 border"
                  style={{ fontFamily: 'var(--font-jetbrains)', background: tc.bg, borderColor: tc.border, color: tc.text }}
                >
                  ★ {project.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-syne)', fontSize: '1.05rem' }}>
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        <p className="text-white/45 text-sm leading-relaxed mb-6" style={{ fontFamily: 'var(--font-syne)' }}>
          {project.desc}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.metrics.map(m => (
            <div key={m} className="flex items-center gap-2 text-xs text-white/40" style={{ fontFamily: 'var(--font-syne)' }}>
              <span className="text-gold/50">✓</span> {m}
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map(s => (
            <span
              key={s}
              className="px-3 py-1 text-xs bg-white/4 border border-white/8 text-white/40"
              style={{ fontFamily: 'var(--font-jetbrains)' }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-white/5">
          <a
            href={project.links.live}
            className="flex items-center gap-2 text-gold text-xs hover:text-gold-light transition-colors"
            style={{ fontFamily: 'var(--font-syne)', letterSpacing: '0.08em' }}
          >
            Live Demo
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
          <a
            href={project.links.github}
            className="flex items-center gap-2 text-white/30 text-xs hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-syne)', letterSpacing: '0.08em' }}
          >
            GitHub
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className={`card-glow glow-border bg-charcoal/40 border border-white/5 p-7 reveal delay-${delay} group`}>
      <div className="flex items-center justify-between mb-5">
        <span className="text-3xl">{project.icon}</span>
        <span
          className="text-xs px-2.5 py-1 border"
          style={{ fontFamily: 'var(--font-jetbrains)', background: tc.bg, borderColor: tc.border, color: tc.text }}
        >
          {project.tag}
        </span>
      </div>

      <h3 className="text-white font-semibold mb-1 group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-syne)', fontSize: '1rem' }}>
        {project.title}
      </h3>
      <p className="text-gold/60 text-xs mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>{project.subtitle}</p>
      <p className="text-white/40 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-syne)' }}>
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map(s => (
          <span key={s} className="px-2 py-1 text-xs bg-white/3 border border-white/6 text-white/35" style={{ fontFamily: 'var(--font-jetbrains)' }}>
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-4 border-t border-white/5">
        <a href={project.links.live} className="text-gold text-xs hover:text-gold-light transition-colors flex items-center gap-1" style={{ fontFamily: 'var(--font-syne)' }}>
          Demo <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
        </a>
        <a href={project.links.github} className="text-white/30 text-xs hover:text-white transition-colors" style={{ fontFamily: 'var(--font-syne)' }}>
          GitHub
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
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
            A collection of my most impactful work — from client deliverables to startup builds.
          </p>
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} featured />
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5">
          {rest.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} featured={false} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 reveal delay-300">
          <p className="text-white/30 text-sm mb-4" style={{ fontFamily: 'var(--font-syne)' }}>
            Want to see more? Find all my projects on GitHub.
          </p>
          <a
            href="https://github.com/NJWILD"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
