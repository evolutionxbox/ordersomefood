var path = require("path");
var fs = require("fs");

module.exports = {
  devtool: "#inline-source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: "index.js",
    sourceMapFilename: '[file].map',
    path: path.resolve(__dirname, "public"),
  },
  mode: 'development'
};
