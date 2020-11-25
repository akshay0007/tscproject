const path = require("path");
const cleanplugin=require('clean-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "non",/* not to genrate soure */
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins:[
    new cleanplugin.CleanWebPackPlugin()
  ]
};


/* build:webpack --config webpack.config.prod.js inside package json*/