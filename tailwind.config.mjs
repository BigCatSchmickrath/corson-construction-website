/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'ccr-blue': '#2c5f8a',
        'ccr-navy': '#1a1a2e',
        'ccr-gray': '#6b7b8d',
        'ccr-light': '#f4f6f8',
        'ccr-gold': '#c9a84c',
      },
      borderRadius: {
        'sharp': '2px',
      },
    },
  },
  plugins: [],
};
