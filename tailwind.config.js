const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: defaultTheme.colors.green,
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
  },
};
