/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        inter: ["Inter"],
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(124.84deg, #28004A 3.6%, #740002 46.77%, #5B005C 79.29%)",
        custom1:
          "linear-gradient(90deg, #520099 0%, #8800FF 49.5%, #520099 100%)",
        custom2:
          "linear-gradient(90deg, #00049A 0%, #0006FF 49.5%, #00049A 100%)",
        custom3:
          "linear-gradient(90deg, #9A022F 0%, #FF004C 49.5%, #9A022F 100%)",
        custom4:
          "linear-gradient(90deg, #9F2701 0%, #FF3100 49.5%, #9F2701 100%)",
        modalGradient:
          "linear-gradient(269.82deg, #1A022F -1.83%, #002B8C 46.14%, #1A022F 104.77%), linear-gradient(180deg, #120120 4.5%, rgba(18, 1, 32, 0) 100%)",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        smoothGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        scroll: "scroll 15s infinite linear",
        smoothGradient: "smoothGradient 12s infinite linear",
      },
    },
  },
  plugins: [],
};
