const path = require('path');

module.exports = {

  entry: [
    './storyboard/src/scripts/index.js'
  ],

  output: {
    filename: 'storyboard.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.json'],
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};