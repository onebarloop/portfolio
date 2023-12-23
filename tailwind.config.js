/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    fontFamily: {
      VT323: ['VT323', 'monospace']
    },
    extend: {
      backgroundImage: {
        dots: "url('~/assets/img/dot-pattern.png')"
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
