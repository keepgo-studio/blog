/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'container-pattern': 'radial-gradient(500px 200px at 50%0,#131f33 20%,rgba(19,30,49,0) 100%)'
      },
      colors: {
        'personal': '#3557AD',
        'semi-dark': '#161e2c',
        'dark': '#0f151d',
      }
    },
  },
  plugins: [],
}
