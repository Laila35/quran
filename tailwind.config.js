/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'custom-image': "url('/Images/Banner/Front Banner.jpg')",
      },
      colors: {
        contrast: {
          text: '#1F2937', // gray-800
          muted: '#374151', // gray-700
          accent: '#0f766e', // deeper teal
        },
      },
      keyframes: {
        smoothFlicker: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        smoothFlicker: 'smoothFlicker 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
