const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // inform webpack that we are building a bundle for
  // nodejs rather than for the browser
  target: "node",

  // tell webpack the root file of our server application
  entry: "./src/index.js",

  // tell webpack where to put the output file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};

module.exports = merge(baseConfig, config);
