/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#0F172A',
          dark: '#F8FAFC',
        },
        secondary: {
          light: '#3B82F6',
          dark: '#60A5FA',
        },
        accent: {
          light: '#10B981',
          dark: '#34D399',
        },
      },
    },
  },
  plugins: [],
}
