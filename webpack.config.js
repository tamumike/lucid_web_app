const ArcGISPlugin = require("@arcgis/webpack-plugin");

const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            { test: /\.tsx$/, loader: "ts-loader" }
        ]
    },
    plugins: [
        new ArcGISPlugin()
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, "/src"),
            path.resolve(__dirname, "node_modules/")
        ],
        extensions: ["*",".ts",".tsx",".js"]
    },
    node: {
        process: false,
        global: false,
        fs: "empty"
    }
}