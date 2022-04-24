const path = require('path');

const path = require('path');

let mode = 'development';
if (process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
    devtool: 'source-map',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        hot: true,
    }
}