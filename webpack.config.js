const path = require('path')
const isDevelopment = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/, /** Adicionei esse objeto de regra :) */
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                loader: 'image-webpack-loader',
                options: {
                    mozjpeg: {
                    progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                    enabled: false,
                    },
                    pngquant: {
                    quality: [0.65, 0.9],
                    speed: 4,
                    },
                    gifsicle: {
                    interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                    quality: 75,
                    },
                },
                },
            ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: "index.html",
          hash: true,
          favicon: "./src/images/favicon.png"
        }),
    ],
    devServer: {
    static: {
        directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3333,
    },
    watchOptions: {
    ignored: "**/node_modules",
    }    
}