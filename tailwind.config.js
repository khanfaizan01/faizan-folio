/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: {
          primary: '#121212',
          secondary: '#1A1A1A',
          card: '#1E1E1E',
          elevated: '#252525',
        },
        text: {
          primary: '#E0E0E0',
          secondary: '#9E9E9E',
          muted: '#616161',
        },
        accent: {
          cobalt: '#00B4FF',
          cobaltDim: '#0090CC',
          cobaltGlow: 'rgba(0, 180, 255, 0.15)',
          mint: '#00E5CC',
          mintDim: '#00B8A3',
          mintGlow: 'rgba(0, 229, 204, 0.15)',
        },
        border: {
          subtle: '#2A2A2A',
          DEFAULT: '#333333',
          strong: '#444444',
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,180,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.03) 1px, transparent 1px)",
        'hero-gradient': 'radial-gradient(ellipse at 60% 50%, rgba(0,180,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,229,204,0.05) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'glow-cobalt': '0 0 20px rgba(0, 180, 255, 0.3)',
        'glow-mint': '0 0 20px rgba(0, 229, 204, 0.3)',
        'glow-cobalt-lg': '0 0 40px rgba(0, 180, 255, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'spin-slow': 'spin 8s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 180, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 180, 255, 0.5)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
};
