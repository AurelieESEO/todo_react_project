/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            display: ['IBM Plex Mono', 'Menlo', 'monospace'],
            body: ['IBM Plex Mono', 'Menlo', 'monospace'],
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
  plugins: [],
}

