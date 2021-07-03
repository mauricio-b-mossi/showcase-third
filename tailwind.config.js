module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
      },
      fontSize: {
        xxl: "200px",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        "city-background": "url('../public/artsyBG.jpg')",
        "black-white": "url('../public/BWBG.jpg')",
      },
      maxWidth: {
        "small-box": "100px",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      animation: ["hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
