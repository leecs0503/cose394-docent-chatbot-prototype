/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: [
        "Pretendard\\ Variable",
        "Pretendard",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dosont: {
          primary: "#145D29",
          secondary: "#FFFBEF", // XXX: 논의 필요
          accent: "#ff0000", // XXX: 논의 필요, 임시
          neutral: "#3F3F3F",
          "base-100": "#FBFAF6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
