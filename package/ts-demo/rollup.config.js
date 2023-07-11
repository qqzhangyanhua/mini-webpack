

import ts from 'rollup-plugin-typescript2';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import path from 'path';
export default {
    input: 'src/index.ts',
    output: {
        format: 'iife', // 模块化类型
        file: 'dist/bundle.js', // 打包后的文件名
        sourcemap: true, // 生成映射文件
        name: 'bundle' // 打包后的全局变量的名字
        
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.ts']
        }),
        ts({
            tsconfig: path.resolve(__dirname, 'tsconfig.json')
        }),
        serve({
            // open: true,
            openPage: '/public/index.html',
            port: 3000,
        }),
    ]
}