/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}", "./src/*.{ts,tsx}"],
  theme: {
    extend: {
      dark: {
        primary: "#2F3140",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
