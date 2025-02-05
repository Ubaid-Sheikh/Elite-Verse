/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 0.2s infinite",
        navbar: "navbarSlide 1s ease-out",
        hero: "heroReveal 1.5s ease-out",
        marquee: "marquee 100s linear infinite",
        marqueeHorizontal: "marquee-x var(--duration) infinite linear",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        navbarSlide: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        heroReveal: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      colors: {
        darkblue: "var(--color-darkblue-bg)",
        mainblue: "var(--color-mainblue)",
        lightblue: "var(--color-lightblue)",
        mainyellow: "var(--color-mainyellow)",
        lightyellow: "var(--color-lightyellow)",
        bgblue: "var(--color-bgblue)",
      },
      fontFamily: {
        orbitron: "var(--font-orbitron)",
        openSans: "var(--font-openSans)",
        inria: "var(--font-inriaSans)",
        press: "var(--font-pressStart)",
        bungeeShade: "var(--font-bungeeShade)",
        bungeeInline: "var(--font-bungeeInline)",
        space: "var(--font-spaceGrotesk)",
        exo: "var(--font-exo)",
        raleway: "var(--font-raleway)",
        poppins: "var(--font-poppins)",
      },
      "marquee-x": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(calc(-100% - var(--gap)))" },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
