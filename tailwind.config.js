module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:{
          dark:"#034f7e",
          base:"#1DA1F2",
          light:"#7ec9f6",
        },
        gray:{
          dark:"#657786",
          light:"#AAB8C2",
          extraLight:"#E1E8ED",
          lightest:"#F5F8FA",
        },
        black:"#14171A"
      },
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/2': '45vw',
        '3/4': '75%',
        'full': '100%',
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '810px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '410px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
