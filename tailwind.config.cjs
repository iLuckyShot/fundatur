/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'wine': {
          '50': '#fcf3f8',
          '100': '#fae9f3',
          '200': '#f8d2e9',
          '300': '#f3aed5',
          '400': '#eb7bb9',
          '500': '#e0549d',
          '600': '#ce347c',
          '700': '#b22463',
          '800': '#932152',
          '900': '#7b2047',
          '950': '#550e2c',
      },      
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
