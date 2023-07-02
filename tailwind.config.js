/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {gridTemplateColumns: {
      // Simple 16 column grid
     'fill': 'repeat(auto-fill, minmax(350px, 1fr))',

      // Complex site-specific column configuration
     'footer': '200px minmax(900px, 1fr) 100px',
    }},
  },
  plugins: [],
}

