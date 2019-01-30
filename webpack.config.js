const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');//vue-loader插件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//单独打包css文件

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    },
    plugins: [
        // 生成html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true
            },
            hash: true
        }),
        // vue-loader
        new VueLoaderPlugin(),
        // 独立打包css文件
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,      //js文件babel处理
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            // 处理图片
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',   // url-loader会自动调用file-loader
                    options: {
                        limit: 8,         //limit限制转成base64的图片大小
                        outputPath: 'images/'//打包到images目录下
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
}