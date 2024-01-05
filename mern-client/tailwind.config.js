/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'faf8f9': '#C1E3FF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

