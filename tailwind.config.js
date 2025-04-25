/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      large: { max: "1600px" },
      middle: { max: "1040px" },
      small: { max: "768px" },
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        dm: ["var(--font-dm)"],
        oswald: ["var(--font-oswald)"],
        kaushan: ["var(--font-kaushan)"],
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
