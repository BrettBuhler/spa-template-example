/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "dark-theme-dark": "#18122B",
      "dark-theme-mid-dark": "#393053",
      "dark-theme-mid-light": "#443C68",
      "dark-theme-light": "#635985",
      "light-theme-dark": "#FF9494",
      "light-theme-mid-dark": "#FFD1D1",
      "light-theme-mid-light": "#FFE3E1",
      "light-theme-light": "#FFF5E4",
      "button-highlight": "#facc15",
      "button-highlight-dark": "#eab308",
      "custom-border": "transparent",
      //used for background
      "black": "#000000",
      //used for accents (like borders)
      "white": "#ffffff",
      "gray-50": "#f9fafb",
      //used for "white" text
      "gray-100": "#f3f4f6",
      "gray-200": "#e5e7eb",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-700": "#374151",
      "gray-800": "#1f2937",
      "gray-900": "#111827",
      //used for "black" text
      "gray-950": "#030712",
    },
  },
  plugins: [],
}

