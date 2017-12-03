var path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'build.js'
    },
    watch: true,
    devServer: {
        // TODO: add dist folder
        //contentBase: path.join(__dirname, "dist"),
        contentBase: path.join(__dirname, ""),
        compress: true,
        port: 9001
    },
    module: {
        rules: [
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['babel-preset-env']
                }
            }
        ]
    }
};