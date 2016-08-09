var webpack = require('webpack');
var autoprefixer = require('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require("path");
var entry = require("./webpack.entry");

var hotMiddleware={
    hotmid:'webpack-hot-middleware/client'
};
var extractSASS = new ExtractTextPlugin('[name].css');
var extractLESS = new ExtractTextPlugin('lib.css');
var loaders=[
    {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
    },{
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
    },{
        test: /\.html$/,
        loader: 'raw'
    },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css?sourceMap!postcss')
    },
    {
        test: /\.scss$/,
        loader: extractSASS.extract("style-loader",[
            "css-loader",
            "autoprefixer-loader?browsers=last 2 version",
            "sass-loader?outputStyle=expanded&includePaths[]=" + path.resolve(__dirname, './src/'),
        ].join("!"))
    },
    {
        test: /\.less$/,
        loader: extractLESS.extract("style-loader",[
            "css-loader",
            "autoprefixer-loader?browsers=last 2 version",
            'less-loader'
        ].join("!"))
    }
];
var plugins=[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    extractSASS,
    extractLESS,

    new webpack.optimize.CommonsChunkPlugin({
        name:'vendor',
        filename:'vendor.js',
        minChunks:function(module,count){
            var resourceName = module.resource;
            var reg = /node_modules/;
            if(reg.test(resourceName)){
                return true;
            }
            return false;
        }
    }),
];
module.exports = function(env) {
    var outpath=process.cwd()+'/public';
    if(env=== "public"){
        hotMiddleware={};
        outpath=process.cwd()+'/public';
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        );
        plugins.push(
            new ExtractTextPlugin('css/[name].bundle.css', {})
        );
    }else{
        plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"development"'
            }));
        outpath=__dirname;
    }
    return {
        devtool: 'sourcemap',
        debug: true,
        entry: Object.assign(hotMiddleware,entry),
        module: {
            loaders: loaders
        },
        output: {
            filename: '[name].js',
            path: outpath + "/static/",
            publicPath: "/static/",
            include: outpath,
            chunkFilename: 'chunk/[name].chunk.js'
        },
        plugins:plugins ,
        resolve: {
            extensions: ['', '.jsx', '.js', '.tsx', '.ts'],
        },
        alias: {
        }
    };

}