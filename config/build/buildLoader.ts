import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoader({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoaders = buildCssLoader(isDev);

    // если не использовать тайпскрипт - нужно использовать babel-loader (транспилятор - берет новый стандарт js и перегоняет в старый)
    // Умеет обрабатывать jsx
    const typescriptLoader = { // помогает обрабатывать файлы которые выходят за рамки JavaScript png, gif, css, scss, typeScript
        test: /\.tsx?$/, // регулярное выражение по которому находим файлы которые необходимо пропустить через loader
        use: 'ts-loader',
        exclude: /node_modules/, // исключаем папку в которой искать ненужно
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoaders,
    ];
}
