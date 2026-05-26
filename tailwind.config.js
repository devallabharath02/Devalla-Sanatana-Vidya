/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saffron: { DEFAULT: '#d4841a', light: '#e8a040', dark: '#b87018' },
        maroon: { DEFAULT: '#8b2020', light: '#c45040' },
        gold: { DEFAULT: '#b8942e', light: '#d4a848' },
        cream: { DEFAULT: '#faf6f0', dark: '#f5ede2' },
        temple: {
          50: '#faf6f0',
          100: '#f5ede2',
          200: '#e8ddd0',
          300: '#d4c8b4',
          400: '#b8a890',
          500: '#9a8a78',
          600: '#786858',
          700: '#5a4a3a',
          800: '#3a3028',
          900: '#2a1f14',
          950: '#1a1410',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Source Serif 4"', 'Georgia', 'serif'],
        sanskrit: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite 2s',
        'spin-slow': 'spin 120s linear infinite',
        'fade-in': 'fadeIn 0.8s ease forwards',
        'fade-in-d1': 'fadeIn 0.8s ease 0.1s forwards',
        'fade-in-d2': 'fadeIn 0.8s ease 0.2s forwards',
        'fade-in-d3': 'fadeIn 0.8s ease 0.3s forwards',
        'slide-down': 'slideDown 0.3s ease',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', maxHeight: '0' },
          to: { opacity: '1', maxHeight: '500px' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
