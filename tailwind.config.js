/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on 'dark' class
  theme: {
    extend: {
      colors: {
        'primary-50': 'var(--color-primary-50)',
        'primary-500': 'var(--color-primary-500)',
        'primary-700': 'var(--color-primary-700)',
        'secondary-50': 'var(--color-secondary-50)',
        'secondary-500': 'var(--color-secondary-500)',
        'gray-50': 'var(--color-gray-50)',
        'gray-200': 'var(--color-gray-200)',
        'gray-500': 'var(--color-gray-500)',
        'gray-900': 'var(--color-gray-900)',
      },
    },
  },
  plugins: [],
}