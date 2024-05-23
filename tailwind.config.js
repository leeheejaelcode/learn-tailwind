/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    fontFamily: {
      suit: ["SUIT Variable", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#03cf5d",
        white: "#ffffff",
        warning: "#ff1414",
        "blue-10": "#e9f0fd",
        "gray-10": "#dadada",
        "gray-20": "#999999",
        "gray-30": "#666666",
        "gray-40": "#333333",
        black: "#121212",
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to))",
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require("@tailwindcss/aspect-ratio"),
  ],
};
