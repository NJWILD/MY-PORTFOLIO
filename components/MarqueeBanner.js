const techs = [
  'React.js', '✦', 'Tailwind CSS', '✦', 'Firebase', '✦', 'JavaScript ES6', '✦',
  'Next.js', '✦', 'TypeScript', '✦', 'HTML5', '✦', 'CSS3', '✦',
  'Git & GitHub', '✦', 'Postman', '✦', 'REST APIs', '✦', 'Firestore', '✦',
  'React.js', '✦', 'Tailwind CSS', '✦', 'Firebase', '✦', 'JavaScript ES6', '✦',
  'Next.js', '✦', 'TypeScript', '✦', 'HTML5', '✦', 'CSS3', '✦',
  'Git & GitHub', '✦', 'Postman', '✦', 'REST APIs', '✦', 'Firestore', '✦',
]

export default function MarqueeBanner() {
  return (
    <div className="border-y border-gold/10 bg-gold/3 py-4 overflow-hidden">
      <div className="marquee-track">
        {techs.map((t, i) => (
          <span
            key={i}
            className={`mx-6 whitespace-nowrap text-sm ${
              t === '✦' ? 'text-gold/50' : 'text-white/40'
            }`}
            style={{ fontFamily: t === '✦' ? 'serif' : 'var(--font-syne)', letterSpacing: t !== '✦' ? '0.08em' : '0' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
