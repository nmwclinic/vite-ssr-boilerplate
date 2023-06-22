/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'zoom-in': 'zoom 10s ease-in-out infinite'
      },
      listStyleType: {
        square: 'square',
        roman: 'lower-roman',
        'alpha-lower': 'lower-alpha',
        'alpha-upper': 'upper-alpha'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        zoom: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '50%': { transform: 'scale(1.3, 1.3)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}