import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path"; // 解决报错：pnpm install @types/node -D

export default defineConfig({
    base: "./",
    server: {
        host: true,
        port: 3000
    },
    plugins: [
        vue(),
        // 引入插件vueJsx才能支持jsx语法
        // 插件vueJSx配置文档：https://github.com/vuejs/babel-plugin-jsx
        vueJsx({
            transformOn: true,
            mergeProps: true
        })
    ],
    resolve: {
        extensions: [".tsx", ".jsx", ".js", ".ts"],
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }
});
