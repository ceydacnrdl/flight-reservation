import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  plugins: [],

  theme: {
    container: {
      center: true,
      screens: {
        xs: "100%",
        sm: `${576 / 16}rem`,
        md: `${768 / 16}rem`,
        lg: `${992 / 16}rem`,
        xl: `${1200 / 16}rem`,
      },
    },
  },
};
export default config;
