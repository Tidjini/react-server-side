const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //targeting the node js instead the browser we need to transform JSX, and JS in server side
  target: "node",

  //specify the entry point of the server applcation
  entry: "./src/index.js",

  //tell webpack where to put the generated build file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
