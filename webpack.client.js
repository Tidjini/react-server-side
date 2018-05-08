const path = require("path");

module.exports = {
  //specify the entry point of the server applcation
  entry: "./src/client/client.js",

  //tell webpack where to put the generated build file
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },

  //tell webpack to convert each JSX file and turn in to ES5
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { target: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
