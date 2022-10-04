module.exports = {
  mode: 'jit',
  content: [
    './app/redaxo/data/addons/developer/**/*.php',
  ],  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D6EFD',
          '50': '#C3DBFF',
          '100': '#AFCFFE',
          '200': '#86B7FE',
          '300': '#5E9EFE',
          '400': '#3586FD',
          '500': '#0D6EFD',
          '600': '#0255D0',
          '700': '#013E99',
          '800': '#012861',
          '900': '#001129'
        },
        secondary: {
          DEFAULT: '#6B7280',
          '50': '#CDD0D5',
          '100': '#C2C5CC',
          '200': '#ACB0BA',
          '300': '#969BA7',
          '400': '#7F8694',
          '500': '#6B7280',
          '600': '#515761',
          '700': '#383C43',
          '800': '#1E2024',
          '900': '#050506'
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
