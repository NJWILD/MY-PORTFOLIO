'use client'
import { useState } from 'react'

const contactInfo = [
  {
    label: 'Email',
    value: 'njokujoshua571@gmail.com',
    href:  'mailto:njokujoshua571@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+234 805 636 4802',
    href:  'tel:08056364802',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.68 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1.09h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82A16 16 0 0 0 16 16.91l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Owerri, Nigeria / Remote Worldwide',
    href:  null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    value: 'joshuanjoku.vercel.app',
    href:  'https://joshuanjoku.vercel.app/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [form,     setForm]     = useState({ name: '', email: '', subject: '', message: '' })
  const [status,   setStatus]   = useState('idle') // idle | sending | sent | error
  const [focused,  setFocused]  = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send — wire up to your preferred service (Formspree, EmailJS, etc.)
    await new Promise(r => setTimeout(r, 1800))
    setStatus('sent')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-32 relative">
      {/* Gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(229,168,37,0.06) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-label justify-center mb-6 reveal">Get In Touch</div>
          <h2 className="reveal delay-100" style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, lineHeight: 1.1 }}>
            <span className="block text-white" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)' }}>Let's Build</span>
            <span className="gold-clip font-semibold" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>Something Great</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-lg mx-auto reveal delay-200" style={{ fontFamily: 'var(--font-syne)', fontSize: '0.95rem' }}>
            Open to full-time roles, freelance projects, collaborations, and remote opportunities worldwide.
            Let's turn your vision into pixels.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* ── Left: Contact Info ── */}
          <div className="lg:col-span-2 space-y-6 reveal-left delay-200">
            {contactInfo.map(c => (
              <div
                key={c.label}
                className="card-glow glow-border bg-charcoal/40 border border-white/5 p-6 flex items-start gap-5 group"
              >
                <div className="text-gold/50 group-hover:text-gold transition-colors mt-0.5 flex-shrink-0">
                  {c.icon}
                </div>
                <div>
                  <div className="text-white/30 text-xs mb-1" style={{ fontFamily: 'var(--font-jetbrains)' }}>{c.label}</div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-gold transition-colors text-sm"
                      style={{ fontFamily: 'var(--font-syne)' }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-white/70 text-sm" style={{ fontFamily: 'var(--font-syne)' }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="p-6 border border-white/5 bg-charcoal/20">
              <div className="text-white/30 text-xs mb-4" style={{ fontFamily: 'var(--font-jetbrains)' }}>Social Profiles</div>
              <div className="flex gap-4">
                {[
                  { label: 'GitHub',   href: 'https://github.com/NJWILD',                         icon: 'GH' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/joshua-njoku-9524b9369',    icon: 'LI' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-white/3 border border-white/8 text-white/50 hover:border-gold/30 hover:text-gold transition-all duration-300 text-xs group"
                    style={{ fontFamily: 'var(--font-syne)', letterSpacing: '0.08em' }}
                  >
                    {s.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M7 7h10v10"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability tag */}
            <div className="flex items-center gap-3 px-6 py-4 bg-green-500/5 border border-green-500/15">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-green-400 text-xs font-semibold" style={{ fontFamily: 'var(--font-syne)' }}>
                  Available for Work
                </div>
                <div className="text-white/30 text-xs mt-0.5" style={{ fontFamily: 'var(--font-syne)' }}>
                  Full-time · Part-time · Freelance · Remote
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="lg:col-span-3 reveal-left delay-200">
            <div className="glow-border bg-charcoal/40 border border-white/5 p-8 lg:p-10">
              <h3
                className="text-white font-semibold mb-2"
                style={{ fontFamily: 'var(--font-syne)', fontSize: '1.1rem' }}
              >
                Send a Message
              </h3>
              <p className="text-white/30 text-sm mb-8" style={{ fontFamily: 'var(--font-syne)' }}>
                I respond within 24 hours. Let's discuss your project.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {['name', 'email'].map(field => (
                    <div key={field} className="relative">
                      <label
                        className="block text-xs mb-2 transition-colors"
                        style={{
                          fontFamily: 'var(--font-jetbrains)',
                          color: focused === field ? 'var(--gold)' : 'rgba(240,236,228,0.3)',
                        }}
                      >
                        {field === 'name' ? 'Your Name *' : 'Email Address *'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field)}
                        onBlur={() => setFocused(null)}
                        required
                        className="contact-input"
                        placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
                      />
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <label
                    className="block text-xs mb-2 transition-colors"
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      color: focused === 'subject' ? 'var(--gold)' : 'rgba(240,236,228,0.3)',
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    required
                    className="contact-input"
                    placeholder="Project Inquiry / Collaboration / Job Opportunity"
                  />
                </div>

                <div className="relative">
                  <label
                    className="block text-xs mb-2 transition-colors"
                    style={{
                      fontFamily: 'var(--font-jetbrains)',
                      color: focused === 'message' ? 'var(--gold)' : 'rgba(240,236,228,0.3)',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                    rows={6}
                    className="contact-input resize-none"
                    placeholder="Tell me about your project, timeline, and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className={`w-full btn-gold flex items-center justify-center gap-3 ${status !== 'idle' ? 'opacity-80 pointer-events-none' : ''}`}
                  style={{ padding: '16px 36px', fontSize: '0.8rem' }}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                        <path d="M22 2L11 13M22 2L15 22 11 13 2 9l20-7z"/>
                      </svg>
                    </>
                  )}
                  {status === 'sending' && (
                    <>
                      <span className="animate-spin rounded-full border-2 border-current border-r-transparent w-4 h-4 inline-block" />
                      Sending...
                    </>
                  )}
                  {status === 'sent' && (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                      Message Sent! I'll reply soon.
                    </>
                  )}
                </button>

                <p className="text-white/20 text-xs text-center" style={{ fontFamily: 'var(--font-syne)' }}>
                  Or reach me directly at{' '}
                  <a href="mailto:njokujoshua571@gmail.com" className="text-gold/60 hover:text-gold transition-colors">
                    njokujoshua571@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
