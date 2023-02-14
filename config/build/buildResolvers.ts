import {ResolveOptions} from "webpack";


export function buildResolvers(): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], //ответственен за расширение import Component from './component' он сам определяет расширение
    }
}
