module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marcellus: ["var(--font-marcellus)"],
        poppins: ["var(--font-poppins)"],
        sans: ["var(--font-marcellus)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#1d4ed8",
        secondary: "#64748b",
      },
    },
  },
  plugins: [],
};
