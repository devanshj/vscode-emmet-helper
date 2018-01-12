'use strict';

import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';


export default {
    entry: './src/emmetHelper.ts',
    format: 'umd',
    plugins: [resolve(), typescript({
        typescript: require('typescript')
      })],
    dest: 'dist/emmet-helper.js',
    moduleName: 'emmet',
    external: [
        'path',
        'fs',
        'vscode-languageserver-types'
    ],
    globals: {
        path: 'path',
        fs: 'fs',
        'vscode-languageserver-types': 'vscode-languageserver-types'
    }
};


