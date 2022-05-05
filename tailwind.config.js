module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'Desk': "url('/src/assets/images/Desk.png')",
       })
    },
  },
  plugins: [],
}
