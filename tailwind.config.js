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
        xxs: "0.25rem",
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
      height: {
        "img-h": "470px",
        "img-h-sm": "235px",
      },
      width: {
        "img-w": "370px",
        "img-w-sm": "185px",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      animation: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
