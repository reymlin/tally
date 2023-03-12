 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import {resolve}  from 'path'
export default defineConfig({
  base:'./',
  plugins: [
    vue(),
    // 引入插件vueJsx才能支持jsx语法
    // 插件vueJSx配置文档：https://github.com/vuejs/babel-plugin-jsx
    vueJsx({
        transformOn: true, 
        mergeProps: true
    })],
    resolve:{
      alias:{
        "@":resolve(__dirname,'src')
      }
    }
})
