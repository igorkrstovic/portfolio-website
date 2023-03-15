/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s infinite steps(60)",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },
          "80%": {
            width: "60ch",
          },
          "100%": {
            width: "60ch",
          },
        },
      },
    },
  },
  plugins: [],
};
