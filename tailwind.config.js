// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.vue',
    './public/index.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
