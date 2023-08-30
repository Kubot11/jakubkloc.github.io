/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        zero: "0px",
      },
      scale: {
        "h-flip": "-1",
      },
      height: {
        "half-screen": "50vh",
      },
      cursor: {
        custom: "url(/src/assets/cursor-custom.png), auto",
        "custom-link": "url(/src/assets/cursor-link-custom.png), pointer",
        "custom-action": "url(/src/assets/cursor-action-custom.png), pointer",
      },
      borderWidth: {
        3: "3px",
      },
      keyframes: {
        "loading-bar": {
          "0%": { "background-color": "#A6A6A6", width: "0%" },
          "50%": { "background-color": "#FFFFFF" },
          "100%": { "background-color": "var(--color)", width: "100%" },
        },
        blinking: {
          "0%": { "background-color": "#A6A6A6" },
          "50%": { "background-color": "#FFFFFF" },
          "100%": { "background-color": "var(--color)" },
        },
        fadeing: {
          "75%": { opacity: "0.95" },
          "90%": { opacity: "0.70" },
          "100%": { opacity: "0" },
        },
        brightening: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fulling: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },

      animation: {
        "loading-bar":
          "blinking 2500ms forwards, fulling 3s ease-in-out forwards",
        "loading-bar-container": "fadeing 3.5s ease-in-out forwards",
        brightening: "brightening 1s ease-in-out forwards",
      },
      skew: {
        20: "20deg",
      },
      colors: {
        custom: {
          "loading-bar-border": "#D1D1D1",
          bars: "#006400",
          background: "#141616",
          font: "#FFFFFF",
          frames: "#FFFFFF",
          "up-arrow": "#A6A6A6",
          "down-arrow": "#737373",
          corners: "#006400",
          "bars-highlines": "#A6A6A6",
          "theme-color-1": "#006400",
          "theme-color-2": "#0198e1",
          "theme-color-3": "#800000",
          "theme-color-4": "#7f00ff",
        },
      },
    },
  },
  plugins: [],
};
