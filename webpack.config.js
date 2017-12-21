var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        context: path.resolve(__dirname, "src/index.js")  
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js'
    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9001,
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            // {
            //     test: /\.js$/, // include .js files
            //     enforce: "pre", // preload the jshint loader
            //     exclude: /node_modules/, // exclude any and all files in the node_modules folder
            //     loader: "jshint-loader"
            // },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['babel-preset-env', 'react']
                }
            }
        ]
    },
    // Use the custom html file
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
        // new UglifyJsPlugin({
        //     test: /\.js($|\?)/i
        // })
    ]
};
