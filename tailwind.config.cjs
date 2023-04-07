/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      primary: {
        DEFAULT: "var(--color-primary)",
        content: "var(--color-primary-content)",
        focus: "var(--color-primary-focus)",
      },
      accent: {
        DEFAULT: "var(--color-accent)",
        content: "var(--color-accent-content)",
        focus: "var(--color-accent-focus)",
        edge: "var(--color-accent-edge)",
      },
      neutral: {
        DEFAULT: "var(--color-neutral)",
        content: "var(--color-neutral-content)",
        focus: "var(--color-neutral-focus)",
      },
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
      mono: ["Ubuntu Mono", "monospace"],
      accent: ["Zen Loop", "Ubuntu", "sans-serif"],
    },
    extend: {
      height: {
        svh: "100svh",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "8xl": "4rem",
        "9xl": "4.5rem",
      },
      fontSize: {
        "10xl": ["9rem", "1"],
        "11xl": ["10rem", "1"],
        "12xl": ["11rem", "1"],
        "13xl": ["12rem", "1"],
        "14xl": ["13rem", "1"],
        "15xl": ["14rem", "1"],
        "16xl": ["15rem", "1"],
        "17xl": ["16rem", "1"],
        "18xl": ["17rem", "1"],
      },
    },
  },
  plugins: [],
};
