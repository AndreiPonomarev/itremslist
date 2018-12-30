const webpack = require("webpack");

const itemsList = require("./stub/ads.json");
const items = itemsList.reduce((acc, val) => acc.concat(val.ads), []);

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/"
                        }
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: "url-loader?limit=100000"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        contentBase: "./dist",
        hot: true,
        port: 3000,
        historyApiFallback: true,
        before: (app, server) => {
            app.get("/api/items/", (req, res) => {
                const page = req.query.page || 1;
                res.json({ data: itemsList[page - 1] });
            });

            app.get("/api/item/", (req, res) => {
                const itemId = req.query.id;
                const item = items.find(el => el.id === itemId);
                res.json({ item });
            });
        }
    }
};
