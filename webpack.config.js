const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'index': './src/index.js'
    },
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                include: [
                    path.resolve(__dirname, 'src/css/index.css'),
                ]
            }, {
                test: /\.css$/i,
                use: ['css-loader'],
                exclude: [
                    path.resolve(__dirname, 'src/css/index.css'),
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '400.html',
            template: 'src/html/400.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '401.html',
            template: 'src/html/401.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '403.html',
            template: 'src/html/403.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '404.html',
            template: 'src/html/404.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '405.html',
            template: 'src/html/405.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '408.html',
            template: 'src/html/408.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '410.html',
            template: 'src/html/410.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '411.html',
            template: 'src/html/411.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '412.html',
            template: 'src/html/412.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '413.html',
            template: 'src/html/413.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '414.html',
            template: 'src/html/414.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '415.html',
            template: 'src/html/415.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '500.html',
            template: 'src/html/500.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '501.html',
            template: 'src/html/501.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '502.html',
            template: 'src/html/502.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '503.html',
            template: 'src/html/503.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '504.html',
            template: 'src/html/504.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '505.html',
            template: 'src/html/505.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackPlugin({
            filename: '506.html',
            template: 'src/html/506.html',
            chunks: ['index'],
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
};
