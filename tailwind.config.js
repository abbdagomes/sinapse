/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Isso garante que ele leia tudo dentro de src
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sinapseBlue: '#0004FF',
      },
      fontFamily: {
        // --font-satoshi vem do layout.tsx (next/font/local)
        sans: ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}