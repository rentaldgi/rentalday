module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./**/*.html", // tambahan agar detect file lain juga
  ],
  safelist: [
    'animate-scroll-x', // <== INI WAJIB! biar tailwind ga hapus class animasimu
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s linear infinite',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

