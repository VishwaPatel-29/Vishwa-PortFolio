/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00998c',
        secondary: '#085d56',
        dark: {
          bg: '#0F172A',
          card: '#1E293B',
          text: '#E5E7EB'
        },
        light: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          text: '#1A1A1A'
        }
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif']
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        }
      },
      rotate: {
        '360': '360deg'
      },
      keyframes: {
        'rotate-alternate': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'rotate-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-90deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '75%': { transform: 'rotate(-270deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        }
      },
      animation: {
        'rotate-fwd': 'rotate-alternate 0.7s ease-in-out',
        'rotate-rev': 'rotate-reverse 0.7s ease-in-out'
      }
    },
  },
  plugins: [],
}
