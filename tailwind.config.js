/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      //theme colors
      "dark-theme-dark": "#18122B",
      "dark-theme-mid-dark": "#393053",
      "dark-theme-mid-light": "#443C68",
      "dark-theme-light": "#635985",
      "light-theme-dark": "#FF9494",
      "light-theme-mid-dark": "#FFD1D1",
      "light-theme-mid-light": "#FFE3E1",
      "light-theme-light": "#FFF5E4",
      //used for top bar buttons if lastHighlighted option is selected
      "button-highlight": "#facc15",
      "button-highlight-dark": "#eab308",
      "custom-border": "transparent",
      //used for background
      "black": "#000000",
      //used for accents (like borders)
      "white": "#ffffff",
      //used for "white" text
      "gray-100": "#f3f4f6",
      //used for "black" text
      "gray-950": "#030712",
    },
  },
  plugins: [],
}

