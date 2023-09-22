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
      screens: {
        '2xl': '2000px'
      }
    },
    fontFamily: {
      'sans': ['rajdhani', 'sans-serif'],
      'light': ['rajdhani-light', 'rajdhani', 'sans-serif'],
      'medium': ['rajdhani-medium', 'rajdhani', 'sans-serif'],
      'bold': ['rajdhani-bold', 'rajdhani', 'sans-serif']
    },
  },
  plugins: [],
}

