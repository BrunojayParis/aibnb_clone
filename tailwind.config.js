const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      
    },
        maxWidth: {
      'logo': '100px',
      'card': '150px'
    },  height: {
      'nav': '70px',
      'card': '200px'
    }, width:{
      'card': '100px'
    },
    extend: {},
  },
  plugins: [],
}