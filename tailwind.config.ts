import { Spotlight } from "@/app/components/ui/Spotlight";
import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPallete,
 } = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {

    animation:{

      Spotlight: "Spotlight 2s ease ,75s 1 forwards",
      
      scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
         backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes:{

        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },

        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },

  plugins: [
    addVariablesForColors,
  ],

  
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPallete(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}


export default config;
