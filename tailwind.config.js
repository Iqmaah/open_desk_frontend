module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
          'Desk': "url('~/src/assets/images/Desk.png')",
          'logowhite': "url('~/src/assets/images/opendesklogowhite.png')"
       })
    },
  },
  plugins: [],
}


// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: theme => ({
//         'Desk': "url('/src/assets/images/Desk.png')",
//         'logowhite': "url('/src/assets/images/opendesklogowhite.png')"
//        })
//     },
//   },
//   plugins: [],
// }