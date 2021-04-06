module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f2',
          100: '#fcf0ee',
          200: '#f8ddd8',
          300: '#f1bcb1',
          400: '#e99786',
          500: '#df664e',
          600: '#c23e24',
          700: '#9b321c',
          800: '#812918',
          900: '#702415',
        },
      },
    },
  },
  variants: {
    extend: {
      transform: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
};
