
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pinkbg': "url('/src/components/images/pinkbg.png')",
        'image1': "url('/src/components/images/planscard1/Awards-bro.png')",
        'image2': "url('/src/components/images/planscard1/Group 420.png')",
        'image3': "url('/src/components/images/planscard1/Women day-amico 1.png')",

       })
    },
  },
  plugins: [],
}