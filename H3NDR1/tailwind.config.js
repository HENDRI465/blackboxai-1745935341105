/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        neonBlue: '#0ff',
        neonPurple: '#9d00ff',
        neonGreen: '#39ff14',
        darkBg: '#0a0a0a',
        darkGray: '#121212',
      },
      fontFamily: {
        futuristic: ['"Orbitron"', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(45deg, #0ff, #9d00ff, #39ff14)',
      },
      boxShadow: {
        'neon-blue': '0 0 8px #0ff, 0 0 20px #0ff',
        'neon-purple': '0 0 8px #9d00ff, 0 0 20px #9d00ff',
        'neon-green': '0 0 8px #39ff14, 0 0 20px #39ff14',
      },
    },
  },
  plugins: [],
}
