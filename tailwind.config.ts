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
        // ─── Brand Palette (colorPallet.pdf) ─────────────────────────────────
        'oceanic-noir':       '#172B36',
        'nocturnal':          '#114C5A',
        'arctic-powder':      '#F1F6F4',
        'mystic-mint':        '#D9E8E2',
        'forsythia':          '#FFC801',
        'deep-saffron':       '#FF9932',
        // ─── Derived tokens ──────────────────────────────────────────────────
        'surface':            '#1D3545',
        'surface-2':          '#223D4D',
        'border-subtle':      'rgba(241,246,244,0.08)',
      },
      fontFamily: {
        mono:  ['var(--font-jetbrains)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans:  ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient':   'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
        'teal-gradient':    'linear-gradient(135deg, #114C5A 0%, #172B36 100%)',
        'hero-glow':        'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,200,1,0.15), transparent)',
      },
      animation: {
        'float':            'float 6s ease-in-out infinite',
        'pulse-slow':       'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'shimmer':          'shimmer 2.5s linear infinite',
        'spin-slow':        'spin 8s linear infinite',
        'ticker':           'ticker 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-16px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-gold':  '0 0 40px rgba(255,200,1,0.25), 0 0 80px rgba(255,200,1,0.10)',
        'glow-teal':  '0 0 40px rgba(17,76,90,0.5)',
        'card':       '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(241,246,244,0.05)',
        'card-hover': '0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,1,0.1)',
      },
    },
  },
  plugins: [],
};
