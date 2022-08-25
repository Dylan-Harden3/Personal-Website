/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkBlue: '#111A20',
      altBlue: '#1C2B35',
      lightBlue: '#0983FE'
    },
    fontFamily: {
      'inter': ['"Inter"', 'sans-serif'],
      'poppins' : ['"Poppins"', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
