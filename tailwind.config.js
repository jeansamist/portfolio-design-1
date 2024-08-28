import { adaptPath } from "rasengan";

/** @type {import('tailwindcss').Config} */
export default {
  content: adaptPath(["./src/**/*.{ts,tsx,js,jsx}"]),
  theme: {
    extend: {
      colors: {
        primary: "#111111",
      },
    },
  },
  plugins: [],
};
