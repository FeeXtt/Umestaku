/** @type {import('tailwindcss').Config} */



export default {
  content: [

    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements-react/dist/js/**/*.js"],
  

  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      maxHeight: {
        '128': '32rem',
      },
      rotate:{
        '360': '360deg',
      },
      dropShadow: {
        'slate800': '5px 5px 0 rgba(30, 41, 59, 1)',
        'slate900': '5px 5px 0 rgba(15, 23, 42, 1)',
      }
    },
    fontFamily: {
      'notable': ["Notable"],
      'mate':["Mate"]
    },
  },

  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
}