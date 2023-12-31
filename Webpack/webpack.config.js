const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|webp)$/i,
        type: 'asset/resource',
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',"sass-loader"],
            },
           
        ]

    },

    devtool: 'source-map',

    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack testing',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ]
}