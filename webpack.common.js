const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => {
    return {
        entry : './src',
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        output: {
            filename: '[name].main.js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            //publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react']
                        }
                    }
                }
            ]
        },
        optimization: {
            runtimeChunk: 'single',
            splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `npm.${packageName.replace('@', '')}`;
                        },
                    },
                },
            },
        },
    }
}