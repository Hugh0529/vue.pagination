var webpack = require('webpack')

module.exports = {
  entry: './demo/src/main.js',
  output: {
    path: './demo/static',
    publicPath: './demo/static/',
    filename: 'build.js'
  },
  module: {
    // avoid webpack trying to shim process
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //}),
    //new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
  //module.exports.devtool = 'eval-source-map'

  //module.exports.devServer = {
  //  // allow access over local network
  //  host: '0.0.0.0',
  //  // change port 8080 to 8888, to avoid conflict
  //  port: 8888,
  //  // enable HTML5 history routing
  //  historyApiFallback: true,
  //  // suppress useless text
  //  noInfo: true
  //}
}
