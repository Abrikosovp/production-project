import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";


export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], //ответственен за расширение import Component from './component' он сам определяет расширение

        //absolute import path (относительный)
        preferAbsolute: true, //абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],

    }
}
