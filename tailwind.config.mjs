/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060913',
          900: '#0b1120',
          850: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        brand: {
          primary: '#10B981', // Emerald
          primaryHover: '#059669',
          cyan: '#06B6D4',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BD5A',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
        'glow-purple': '0 0 35px -5px rgba(139, 92, 246, 0.25)',
        card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        whatsapp: '0 8px 25px -4px rgba(37, 211, 102, 0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
