const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");


const project_root = path.resolve(__dirname, '..', '..')
const current_dir = path.resolve(__dirname, 'main.tsx')

const webpack = require("webpack");


module.exports = {
  mode: "production",
  entry: current_dir,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname),
  },
  // We need this for a warning on tailwindcss 
  ignoreWarnings: [
    /Critical dependency: require function is used in a way in which dependencies cannot be statically extracted/,
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env.IS_CLI_APP': JSON.stringify(true),
    }),
    new CopyPlugin({
      patterns: [
        // this works because i'm running the script from the root of the project
        { from: "./src/CV/fonts", to: "fonts" },
      ],
      
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      // {
      //   test: /\.json$/,
      //   use: [
      //     { loader: 'json-loader'}
      //   ]
      // },
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
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            compact: true,
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
