var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
module.exports = {
    entry: {
        vue: ['vue', 'vue-router']
    },
    mode: 'production',
    output: {
        filename: '[name].dll.[hash:6].js',
        path: path.resolve(__dirname, '../dist', 'dll'),
        library: '[name]_dll' //暴露给外部使用
        //libraryTarget 指定如何暴露内容，缺省时就是 var
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            //name和library一致
            name: '[name]_dll',
            path: path.resolve(__dirname, '../dist', 'dll', 'manifest.json') //manifest.json的生成路径
        }),
    ]
};
