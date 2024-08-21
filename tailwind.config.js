/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbar: "#f7f4eb",
      },
      fontFamily: {
        Lato: ["Urbanist"],
        DM: ["DM Serif Text"],
      },
    },
  },
  plugins: [],
};
