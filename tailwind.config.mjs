/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#09090b',
        surface: {
          DEFAULT: '#111115',
          subtle: '#16161c',
          hover: '#1a1a22',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          strong: 'rgba(255, 255, 255, 0.14)',
        },
        accent: {
          emerald: '#10b981',
          emeraldDark: '#059669',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#20BD5A',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      boxShadow: {
        bento: '0 0 0 1px rgba(255, 255, 255, 0.06), 0 20px 40px -15px rgba(0, 0, 0, 0.7)',
        'bento-hover': '0 0 0 1px rgba(255, 255, 255, 0.16), 0 25px 50px -12px rgba(0, 0, 0, 0.85)',
        highlight: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
