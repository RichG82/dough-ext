var path = require('path');

module.exports = {
    context: path.join(__dirname + "/src"),
    entry: "./app.tsx",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx', 'less', 'css'],
        root: path.resolve(__dirname),
        fallback: path.join(__dirname, "node_modules"),
        alias: {
            modernizr$: path.resolve(__dirname, ".modernizrrc"),
            less: path.resolve(__dirname, "src", "less"),
            utilities: path.resolve(__dirname, "src", "utilities"),
            settings: path.resolve(__dirname, "src", "app", "settings")
        },
        modulesDirectories: ['src', 'less', 'node_modules']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.ts$/,
            loader: 'ts-loader'
        }, {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }],
        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};