/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: '#030712',
        brand: {
          DEFAULT: '#14b8a6',
          hover: '#0d9488',
          light: '#2dd4bf',
          dark: '#0f766e',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          hover: '#7c3aed',
          light: '#a78bfa',
        },
        cyan: {
          DEFAULT: '#22d3ee',
          hover: '#06b6d4',
          light: '#67e8f9',
        },
        surface: {
          DEFAULT: '#080c1c',
          subtle: '#0f172a',
          hover: '#1e293b',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          strong: 'rgba(255, 255, 255, 0.14)',
          brand: 'rgba(20, 184, 166, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
      boxShadow: {
        glow: '0 0 24px rgba(20, 184, 166, 0.35)',
        'glow-lg': '0 0 40px rgba(20, 184, 166, 0.5)',
        card: '0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 24px rgba(20, 184, 166, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
      },
    },
  },
  plugins: [],
};
