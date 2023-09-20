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
      keyframes: {
        squeeze: {
          '0%': { transform: 'scaleX(-1)' },
          '1000%': { transform: 'scaleX(-1)' },
        }
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

