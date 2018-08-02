module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    resolve: {
        extensions: ["*",".ts",".tsx",".js"]
    },
    module: {
        rules: [
            { test: /\.tsx$/, loader: "ts-loader" }
        ]
    }
}