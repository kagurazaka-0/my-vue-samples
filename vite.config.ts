import { fileURLToPath, URL } from "node:url"
import pluginVue from "@vitejs/plugin-vue"
import pluginVueJsx from "@vitejs/plugin-vue-jsx"
import pluginAutoImport from "unplugin-auto-import/vite"
import pluginVueComponents from "unplugin-vue-components/vite"
import pluginVueRouter from "unplugin-vue-router/vite"
import { defineConfig } from "vite"
import pluginVueDevTools from "vite-plugin-vue-devtools"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @refs: https://github.com/unplugin/unplugin-auto-import#configuration
    pluginAutoImport({
      dts: "./node_modules/.cache/auto-imports.d.ts",
      imports: ["vue"],
    }),
    pluginVueRouter({
      dts: "./node_modules/.cache/router.d.ts",
    }),
    // pluginVueComponents({
    //   resolvers: [
    //     // refs: https://ui.vuestic.dev/extensions/unplugin-vue-components
    //     (componentName) => {
    //       if (componentName.startsWith("Va")) return { name: componentName, from: "vuestic-ui" }
    //     },
    //   ],
    // }),
    pluginVue(),
    pluginVueJsx(),
    pluginVueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
