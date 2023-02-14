import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader({isDev}: BuildOptions): webpack.RuleSetRule[] {
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",

        ],
    }


    //если не использовать тайпскрипт - нужно использовать babel-loader (транспилятор - берет новый стандарт js и перегоняет в старый)
    //Умеет обрабатывать jsx
    const typescriptLoader = { // помогает обрабатывать файлы которые выходят за рамки JavaScript png, gif, css, scss, typeScript
        test: /\.tsx?$/, //регулярное выражение по которому находим файлы которые необходимо пропустить через loader
        use: 'ts-loader',
        exclude: /node_modules/, //исключаем папку в которой искать ненужно
    }


    return [
        typescriptLoader,
        cssLoaders,
    ]
}
