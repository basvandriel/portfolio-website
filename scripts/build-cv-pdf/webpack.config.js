const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  // real men test in
  mode: "production",
  entry: "./src/generatePDF.tsx",
  output: {
    filename: "generatePDF.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/CV/fonts", to: "fonts" }],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
          {
            loader: require.resolve("postcss-loader"),
            options: {
              postcssOptions: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: "postcss",
                config: false,
                plugins: [
                  "tailwindcss",
                  "postcss-flexbugs-fixes",
                  [
                    "postcss-preset-env",
                    {
                      autoprefixer: {
                        flexbox: "no-2009",
                      },
                      stage: 3,
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.(j|t)sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              [
                "@babel/preset-env",
                {
                  modules: false,
                },
              ],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  target: "node",
};
