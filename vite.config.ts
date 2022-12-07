import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// @ts-ignore
import Icons from 'unplugin-icons/vite'
// @ts-ignore
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
    plugins: [vue(), vueJsx(),
        AutoImport({
            resolvers: [ElementPlusResolver(),
                IconsResolver({
                    prefix: 'Icon',
                }),],
        }),
        Components({
            resolvers: [ElementPlusResolver(),
                IconsResolver({
                    enabledCollections: ['ep'],
                })],
        }),
        Icons({
            autoInstall: true,
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
