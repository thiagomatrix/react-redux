const webpack = require('webpack')

module.exports={
    entry: './app/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer:{
        port:8080,
        contentBase: './public',
    },

    resolve:{
       extensions:['','.js','.jsx'] 
    },

    module:{
        loaders:[{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015', 'react']
            }
        }]
    }
}