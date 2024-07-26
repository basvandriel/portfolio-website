const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

process.env.NODE_ENV = "production";

const existingConfig = require("react-scripts/config/webpack.config");
const reactconfig = existingConfig("production");

module.exports = {
  ...reactconfig,
  entry: "./src/generatePDF.tsx",
  output: {
    filename: "generatePDF.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/CV/fonts", to: "fonts" }],
    }),
    ...reactconfig.plugins,
  ],
  module: {
    ...reactconfig.module,
    rules: [
      {
        loader: "file-loader",
        test: /\.(woff|woff2|ttf)$/,

        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
      ...reactconfig.module.rules,
    ],
  },
  target: "node",
};
