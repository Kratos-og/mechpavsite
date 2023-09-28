/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pavia-green': '#14fecd'
      },
      screens: {
        '2xl': '2000px'
      }
    },
    fontFamily: {
      'sans': ['rajdhani', 'sans-serif'],
      'medium': ['rajdhani-medium', 'rajdhani', 'sans-serif'],
      'bold': ['rajdhani-bold', 'rajdhani', 'sans-serif']
    },
  },
  plugins: [],
}

