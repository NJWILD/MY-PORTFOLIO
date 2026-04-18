/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf9ec',
          100: '#f9edca',
          200: '#f3d98f',
          300: '#ecc04e',
          400: '#e5a825',
          500: '#c9891a',
          600: '#a86b14',
          700: '#854f13',
          800: '#6e3f15',
          900: '#5d3315',
        },
        obsidian: '#08090d',
        charcoal: '#111318',
        smoke: '#1a1d24',
        ash: '#252830',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body:    ['var(--font-syne)', 'sans-serif'],
        mono:    ['var(--font-jetbrains)', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #e5a825 0%, #f3d98f 50%, #c9891a 100%)',
        'dark-gradient':  'linear-gradient(180deg, #08090d 0%, #111318 100%)',
        'glow-gold':      'radial-gradient(ellipse at center, rgba(229,168,37,0.15) 0%, transparent 70%)',
        'noise':          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up':       'fadeUp 0.8s ease forwards',
        'fade-in':       'fadeIn 1s ease forwards',
        'slide-right':   'slideRight 0.8s ease forwards',
        'float':         'float 6s ease-in-out infinite',
        'pulse-gold':    'pulseGold 2s ease-in-out infinite',
        'spin-slow':     'spin 12s linear infinite',
        'marquee':       'marquee 25s linear infinite',
        'border-spin':   'borderSpin 4s linear infinite',
        'shimmer':       'shimmer 2.5s ease-in-out infinite',
        'glow':          'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(229,168,37,0.3)' },
          '50%':      { boxShadow: '0 0 50px rgba(229,168,37,0.7)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        borderSpin: {
          '0%':   { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(229,168,37,0.4))' },
          '50%':      { filter: 'drop-shadow(0 0 20px rgba(229,168,37,0.8))' },
        },
      },
      boxShadow: {
        'gold-sm':  '0 0 12px rgba(229,168,37,0.3)',
        'gold-md':  '0 0 30px rgba(229,168,37,0.4)',
        'gold-lg':  '0 0 60px rgba(229,168,37,0.5)',
        'gold-xl':  '0 0 100px rgba(229,168,37,0.6)',
        'inset-gold': 'inset 0 0 30px rgba(229,168,37,0.05)',
      },
    },
  },
  plugins: [],
}
