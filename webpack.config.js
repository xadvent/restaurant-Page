const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');
const { ExternalModule } = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'index_bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: false
                    },
                },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            '...',
            new TerserPlugin({
                terserOptions: {
                    mangle: true,
                }
            }),
            new CssMinimizerPlugin(),
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
};