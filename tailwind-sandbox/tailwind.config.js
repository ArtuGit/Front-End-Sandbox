module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'xs': '1px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'cst-dark': {
          lighter: '#3d5a80',
          default: '#293241',
        },
        'cst-light': {
          darker: '#98c1d9',
          default: '#e0fbfc',
        },
        'cst-orange': '#ee6c4d',
      },
    },
  },
  variants: {},
  plugins: [],
}
