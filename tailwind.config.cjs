/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5a4510',
          light: '#6b5215',
          dark: '#4a3a0d',
        },
        secondary: {
          DEFAULT: '#8b6914',
          light: '#a67d1a',
          dark: '#7a5c12',
        },
        accent: {
          DEFAULT: '#c9a227',
          tan: '#d4b84a',
          cream: '#f5f0e1',
        }
      },
    },
  },
  plugins: [],
}
