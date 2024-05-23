/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      suit: ["SUIT", "sans-serif"],
    },
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "640px",
      // => @media (min-width: 640px) { ... }

      lg: "768px",
      // => @media (min-width: 768px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        naverGreen: "#03cf5d",
        white: "#ffffff",
        sliver: "#999999",
        gary: "#e9f0fd",
        sliverLight: "#dadada",
        warningRed: "#ff1414",
        silverDark: "#666666",
        blackAlpha10: "#000000",
        blackDark: "#333333",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
