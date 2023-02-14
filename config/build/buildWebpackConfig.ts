import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode,
        entry: paths.entry, //стартовая точка нашего приложения
        output: {//куда и как будем делать сборку
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoader(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined, //отследить где в коде произошла ошибка (по стек трейсу)
        devServer: isDev ? buildDevServer(options) : undefined
    }
}
