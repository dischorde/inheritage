var path = require("path")

module.exports = {
  context: __dirname,

  entry: './frontend/entry.jsx', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./src/static/'),
      filename: "bundle.js",
  },


  module: {
    loaders: [
      { test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
                   //specify that we will be dealing with React code
                   presets: ['react', 'es2015']
               }
      }, // to transform JSX into JS
    ],
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
};
