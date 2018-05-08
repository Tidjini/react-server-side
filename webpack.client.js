const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  //specify the entry point of the server applcation
  entry: "./src/client/client.js",

  //tell webpack where to put the generated build file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};
module.exports = merge(baseConfig, config);
