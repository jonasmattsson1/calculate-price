const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        'price-calculator': './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist') 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                loader: 'babel-loader',
                }
            },
            {
                test: /spec\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/
            }
        ]
    }
}