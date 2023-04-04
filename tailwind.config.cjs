/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    color: {
      white: "#fff",
      lightblue: "#e6f4ff",
      blue: "#0070f3",
      purple: "#7928ca",
      black: "#000",
      gray: "#eaeaea",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
