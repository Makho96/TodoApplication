/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          'main-color': 'var(--text-color-main)',
          'secondary-color': 'var(--text-color-secondary)',
          'red-color': 'var(--color-red)'
        },
      },
      backgroundColor: {
        skin: {
          'page-background': 'var(--page-background-color)',
          'modal-background': 'var(--modal-background-color)'
        },
      },
      borderColor: {
        skin: {
          'main-color': 'var(--border-color-main)',
          'secondary-color': '#f0d8d7'
        },
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};