/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#A87953',
        secondary: '#735239',
        accent: '#D4A373',
        background: '#F5F0E1',
      },
      fontFamily: {
        body: ['Merriweather', 'serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}