var config = require('./webpack.config'), path = require('path'), join = path.join.bind(path, __dirname);
var webpack = require('webpack');
var nodeExternals = require("webpack-node-externals");

module.exports = Object.assign({}, config, {
    entry: [
        'webpack/hot/poll?1000',
        join('./src/app.js')
    ],
    context: __dirname,
    devtool: "source-map",
    cache: true,
    debug: true,
    resolve: {
        extensions: ['', '.jsx', '.json', '.js'],

        modulesDirectories: [
            "src",
            "public",
            "node_modules"
        ],

        alias: {
            'fbjs': join('node_modules/fbjs'),
            'react': join('node_modules/react'),
            'Subschema': join('node_modules/subschema/dist/subschema-server.js')
        }
    },
    target: 'node',
    output: {
        path: join('build'),
        filename: 'backend.js',
        libraryTarget: "commonjs"
    },
    node: {
        __dirname: true,
        __filename: true
    },
    externals: [nodeExternals({
        whitelist: ["webpack/hot/poll?1000"],
        schemas: join('schemas')
    })],
    plugins: [
        new webpack.DefinePlugin({__CLIENT__: false, __SERVER__: true, __PRODUCTION__: true, __DEV__: false}),
        new webpack.DefinePlugin({"process.env": {NODE_ENV: '"production"'}}),
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();',
            {raw: true, entryOnly: false}),
        new webpack.HotModuleReplacementPlugin({quiet: true})
    ]
});
