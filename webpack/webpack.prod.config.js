var _ = require('lodash')
var DefinePlugin = require('webpack/lib/DefinePlugin')
var commonConfig = require('./webpack.common.config')

const config = _.extend(commonConfig, {
  plugins: [
    ...commonConfig.plugins,
    new DefinePlugin({
      __DEV__: false
    })
  ]
})

//console.log('webpack-config=%s', JSON.stringify(config, null, 2))

module.exports = config
