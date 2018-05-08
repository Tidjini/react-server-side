module.exports = {
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
