const configMerge = require('webpack-merge');
const commonConfig = require('./webpack.common')();

module.exports = configMerge(commonConfig, {
    mode: "production",
    devtool: "source-map"
});