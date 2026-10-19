/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A0B',
          secondary: '#111114',
          tertiary: '#17171B',
          card: '#17171B',
          cardHover: '#1F1F25',
        },
        foreground: {
          DEFAULT: '#F5F5F5',
          muted: '#A1A1AA',
          subtle: '#71717A',
        },
        accent: {
          DEFAULT: '#8B5CF6',
          hover: '#7C3AED',
          light: '#A78BFA',
          subtle: 'rgba(139, 92, 246, 0.12)',
          border: 'rgba(139, 92, 246, 0.25)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.14)',
          highlight: 'rgba(255, 255, 255, 0.22)',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-accent': '0 0 35px -8px rgba(139, 92, 246, 0.35)',
        'glow-subtle': '0 0 25px -5px rgba(139, 92, 246, 0.15)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
