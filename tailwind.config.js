module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}, './node_modules/tw-elements/dist/js/**/*.js'",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
          'Desk': "url('~/src/assets/images/Desk.png')",
          'logowhite': "url('~/src/assets/images/opendesklogowhite.png')"
       })
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
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