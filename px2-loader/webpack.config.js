const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    resolveLoader:{
        // alias:{
        //     'px2-loader':path.resolve(__dirname,'loaders','px2-loader.js')
        // }
        modules:[path.resolve(__dirname,'loaders'),'node_modules']
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader',{
                        loader:'px2-loader',
                        options:{
                            remUnit:75,
                            remPrecision:8
                        }
                    }
                ]
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'
    })]

}