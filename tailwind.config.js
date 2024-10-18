/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dancing: ["Satisfy"]
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(3px)' },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideDown: {
          '0%': { transform: 'translateX(200%)' },
          '100%': { transform: 'translateY(0)' }
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-out forwards',
        slidein: "slidein 1s ease 300ms",
        float: 'float 2s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}