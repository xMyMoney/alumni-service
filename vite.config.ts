import vue from "@vitejs/plugin-vue";
import styleImport from "vite-plugin-style-import";
import { UserConfig } from "vite";
import { resolve } from "path";

export default (): UserConfig => {
  return {
    // css设置
    css: {
      preprocessorOptions: {
        less: {
          // 不加报错
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 9527,
      open: true,
      fs: {
        strict: true,
      },
    },
    // 插件配置
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: "vant",
            esModule: false,
            resolveStyle: (name) => `vant/es/${name}/style/index`,
          },
        ],
      }),
    ],

    resolve: {
      // 别名，访问路径久不用../../../../这样，改用@views、@utils
      // 这里只是逻辑上能用，但是要编译器通过ts提示得配tsconfig
      // 要加自己加
      alias: {
        "@utils": resolve(__dirname, "./src/utils"),
        "@api": resolve(__dirname, "./src/api"),
        "@views": resolve(__dirname, "./src/views"),
        "@hooks": resolve(__dirname, "./src/hooks"),
        "@components": resolve(__dirname, "./src/components"),
        "@router": resolve(__dirname, "./src/router"),
      },
    },
  };
};
