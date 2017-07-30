const webpack = require('webpack')

module.exports={
    entry: './app/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer:{
        host:'0.0.0.0',
        port:1337,
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
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }]
    }
}