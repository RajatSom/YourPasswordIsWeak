/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    minHeight: {
      'h': '60px'
    },
    // fontSize: {
    //   '3.5xl': '2rem',
    //   // 'xl': '1.25rem'
    // },
    height: {
      'h1': '44px',
    },
    extend: {
      transitionDuration: {
        '800': '800ms',
      },
      fontFamily: {
        'cool_font': ['"Dosis"', 'cursive'],
      },
    },
  },
  plugins: [],
}

