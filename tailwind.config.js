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
      boxShadow: {
        tiny: '3.5px 3.5px black',
        small: '5px 5px black',
        big: '10px 10px black'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
