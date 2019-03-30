const webpack = require('webpack');
const configMerge = require('webpack-merge');
const commonConfig = require('./webpack.common')();

module.exports = configMerge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devtool: 'inline-source-map',
});