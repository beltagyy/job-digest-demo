export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0F172A',
        'brand-surface': '#1a232e',
        'brand-accent': '#A78BFA',
        'brand-cyan': '#0ea5e9',
        'text-primary': '#f8fafc',
        'text-muted': '#94a3b8',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
      },
      fontFamily: {
        'display': ['IBM Plex Mono', 'system-ui', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'h1-mobile': ['32px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1-desktop': ['56px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2-mobile': ['24px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h2-desktop': ['42px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3-mobile': ['20px', { lineHeight: '1.4' }],
        'h3-desktop': ['28px', { lineHeight: '1.4' }],
        'body-lg': ['16px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
      },
      spacing: {
        'safe-bottom': 'max(20px, env(safe-area-inset-bottom))',
        'safe-left': 'max(16px, env(safe-area-inset-left))',
        'safe-right': 'max(16px, env(safe-area-inset-right))',
      },
      animation: {
        'float': 'float 6s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slide-up 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
            boxShadow: '0 0 20px rgba(167, 139, 250, 0.3)',
          },
          '50%': {
            backgroundPosition: '100% 50%',
            boxShadow: '0 0 30px rgba(14, 165, 233, 0.5)',
          },
        },
        'slide-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '12px',
      },
      boxShadow: {
        'accent': '0 0 24px rgba(167, 139, 250, 0.25)',
        'accent-lg': '0 0 48px rgba(167, 139, 250, 0.35)',
        'cyan': '0 0 24px rgba(14, 165, 233, 0.25)',
      },
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'ease-in-cubic': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'ease-in-out-cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
