var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: __dirname + '\\src\\App.tsx',
    output: {
        filename: "app.js",
        path: __dirname + "\\_wwwroot"
    },
    devtool: "source-map",
    target: 'web',
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
}