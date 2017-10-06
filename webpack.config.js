let path = require('path');
let webpack = require('webpack');

module.exports = [{
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        library: "polyreduce",
        libraryTarget: 'umd',
        filename: 'polyreduce.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: "/node_modules/",
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}];