/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(229, 23%, 23%)",
        secondary: "hsl(227, 10%, 46%)",
        rear: "hsl(185, 75%, 39%)",
        hrline: "hsl(227, 10%, 46%)",
      },
      fontFamily: {
        kumbh: ["kumbh","sans-serif"]
      },
 
    },
  },
  plugins: [],
}

