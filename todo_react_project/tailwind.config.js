/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['IBM Plex Sans', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        title: ['DM Serif Display', 'Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F6F3FE',
          100: '#E2D6FF',
          200: '#CDC7FF',
          300: '#C3C0FF',
          400: '#B8B8FF',
        },
        accent: {
          500: "#150833",
        },
        playful: {
          50: '#E1FFBD',
          100: '#FFEDBD',
          200: '#D6E4FF',
          300: '#FDD6FF',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}

