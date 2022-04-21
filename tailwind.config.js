module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': "spin 12s linear infinite",
        'bounce-slow': "bounce 12s linear infinite",
      }
    },
  },
  plugins: [],
}
