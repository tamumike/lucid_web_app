const ArcGISPlugin = require("@arcgis/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {
    entry: ["./src/css/main.scss", "./src/index.tsx"],
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.tsx$/, 
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            }, {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: false }
                  }
                ],
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  "css-loader",
                  {
                    loader: "resolve-url-loader",
                    options: { includeRoot: true }
                  },
                  "sass-loader?sourceMap"
                ]
            }
        ]
    },
    plugins: [
        new ArcGISPlugin({
            root: "."
        }),

        new HtmlWebPackPlugin({
            title: "ArcGIS Template Application",
            template: "./src/index.html",
            filename: "./index.html",
            chunksSortMode: "none",
            inlineSource: ".(css)$"
        }),

        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css"
        })
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, "/src"),
            path.resolve(__dirname, "node_modules/")
        ],
        extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
    },
    node: {
        process: false,
        global: false,
        fs: "empty"
    }
}