const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'js-libtimidity',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  resolve: {
    modules: [`${__dirname}/src`, 'node_modules'],
    extensions: ['.js'],
  }
}
