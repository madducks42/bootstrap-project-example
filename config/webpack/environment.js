const { environment } = require('@rails/webpacker')

// Lines 3-11 are what is added for Bootstrap
const webpack = require('webpack')

environment.plugins.prepend('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
  })
)

module.exports = environment
