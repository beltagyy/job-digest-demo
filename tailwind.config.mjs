export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0F172A',
        'brand-surface': '#1a232e',
        'brand-accent': '#A78BFA',
        'brand-cyan': '#0ea5e9',
        'brand-muted': '#94a3b8',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(167, 139, 250, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(167, 139, 250, 0.6)' },
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
      },
      backdropBlur: {
        sm: '4px',
      },
    },
  },
  plugins: [],
};
