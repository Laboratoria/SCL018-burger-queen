module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': {'min':'300px', 'max': '850px'},
              // => @media (max-width: 850px) { ... }
       'md': {'min':'851px'},
      // => @media (min-width: 851px) { ... }

     

     
    }
  },
  plugins: [],
}