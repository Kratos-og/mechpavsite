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
        'pavia-green': '#14fecd',
        'pavs-red': '#f70817',
      },
      screens: {
        '2xl': '2000px'
      }
    },
    fontFamily: {
      'sans': ['rajdhani', 'sans-serif'],
      'medium': ['rajdhani-medium', 'rajdhani', 'sans-serif'],
      'bold': ['rajdhani-bold', 'rajdhani', 'sans-serif'],
      'sohne': ['sohne', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f70817",
          secondary: "#4f4d4d",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}

