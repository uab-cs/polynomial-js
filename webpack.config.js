module.exports = {
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ]
    },
    entry: './src/modules/reduce.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'reduce.js',
        libraryTarget: "umd",
        library: 'mylib'
    }
};