import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1500px",
      },
    },
    extend: {
      colors: {
        primary: "#111111",
        background: "#FFFBF5",
      },
    },
  },
  plugins: [],
};
