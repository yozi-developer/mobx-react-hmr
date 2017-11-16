const path = require("path");
const webpack = require("webpack");
const CheckerPlugin = require("awesome-typescript-loader").CheckerPlugin;

module.exports = function getWebpackConf() {
    const plugins = [
        new CheckerPlugin(),
        new webpack.NamedModulesPlugin()
    ];

    return {
        resolve: {
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        },

        entry: {
            "main": ["react-hot-loader/patch", "./src/index.tsx"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    include: [/src/],
                    loaders: ["react-hot-loader/webpack", "awesome-typescript-loader?silent=true"],
                }
            ]
        },

        output: {
            path: path.join(__dirname, "./dist"),
            filename: "[name].js",
            publicPath: "/"
        },

        devServer: {
            historyApiFallback: {
                index: "src/index.html"
            }
        },

        devtool: "eval",

        plugins: plugins
    };
};