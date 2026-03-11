/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8edf4',
          100: '#c5d1e3',
          200: '#9eb3d0',
          300: '#7795bd',
          400: '#597faf',
          500: '#3b69a1',
          600: '#355f93',
          700: '#2d5280',
          800: '#25456e',
          900: '#1a2f4e',
          950: '#0f1b2d',
        },
        dark: {
          DEFAULT: '#0f172a',
          100: '#1e293b',
          200: '#1a2332',
          300: '#243447',
          400: '#2d4159',
          500: '#334155',
          600: '#475569',
        },
        accent: {
          DEFAULT: '#38bdf8',
          dark: '#0ea5e9',
          light: '#7dd3fc',
        },
        gold: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(56, 189, 248, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(56, 189, 248, 0.4)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
