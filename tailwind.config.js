/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fem: {
          50: "hsl(0, 0%, 100%)",
          100: "hsl(7, 99%, 70%)",
          200: "hsl(51, 100%, 49%)",
          300: "hsl(167, 40%, 24%)",
          400: "hsl(198, 62%, 26%)",
          500: "hsl(168, 34%, 41%)",
          550: "#90D4C5",
          600: "hsl(212, 27%, 19%)",
          700: "hsl(213, 9%, 39%)",
          800: "hsl(232, 10%, 55%)",
          900: "hsl(210, 4%, 67%)",
        },
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
