export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-16 relative">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                <span className="shimmer-text font-bold text-sm" style={{ fontFamily: 'var(--font-cormorant)' }}>NJ</span>
              </div>
              <span className="text-white/60 font-semibold" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                NJOKU JOSHUA
              </span>
            </div>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs" style={{ fontFamily: 'var(--font-syne)' }}>
              Frontend Developer crafting pixel-perfect, high-performance web experiences.
              Based in Owerri, Nigeria. Available worldwide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-gold/50 text-xs tracking-widest uppercase mb-5" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Navigation
            </div>
            <nav className="space-y-3">
              {[['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="block text-white/35 hover:text-gold transition-colors text-sm"
                  style={{ fontFamily: 'var(--font-syne)' }}
                  onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <div className="text-gold/50 text-xs tracking-widest uppercase mb-5" style={{ fontFamily: 'var(--font-jetbrains)' }}>
              Connect
            </div>
            <div className="space-y-3">
              {[
                ['GitHub',    'https://github.com/NJWILD',                     'NJWILD'],
                ['LinkedIn',  'https://linkedin.com/in/joshua-njoku-9524b9369', 'joshua-njoku'],
                ['Email',     'mailto:njokujoshua571@gmail.com',                'njokujoshua571@gmail.com'],
                ['Portfolio', 'https://joshuanjoku.vercel.app/',          'joshuanjoku.vercel.app'],
              ].map(([label, href, text]) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/35 hover:text-gold transition-colors text-sm group"
                  style={{ fontFamily: 'var(--font-syne)' }}
                >
                  <span className="text-gold/20 group-hover:text-gold transition-colors">→</span>
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/20 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>
            © {year} Njoku Joshua Uchenna. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/20 text-xs" style={{ fontFamily: 'var(--font-jetbrains)' }}>
            <span>Built with</span>
            <span className="text-gold/40">Next.js</span>
            <span>&</span>
            <span className="text-gold/40">Tailwind CSS</span>
            <span>·</span>
            <span className="text-gold/30">Designed with ♥</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
