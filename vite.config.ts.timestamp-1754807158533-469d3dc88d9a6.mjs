// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import VueRouter from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.27.4_vue-router@4.5.0_vue@3.5.13_typescript@5.6.3___vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-router/dist/vite.js";
import autoprefixer from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import AutoImport from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/unplugin-auto-import@19.1.0_@vueuse+core@12.0.0_typescript@5.6.3_/node_modules/unplugin-auto-import/dist/vite.js";
import { VueRouterAutoImports } from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.27.4_vue-router@4.5.0_vue@3.5.13_typescript@5.6.3___vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-router/dist/index.js";
import Components from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/unplugin-vue-components@28.4.1_@babel+parser@7.26.2_vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig } from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.8/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/reykim/github/vuejs-masterclass-2024/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@20.17.8__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/reykim/github/vuejs-masterclass-2024/vite.config.ts";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      imports: ["vue", VueRouterAutoImports, {
        "pinia": ["defineStore", "storeToRefs", "acceptHMRUpdate"]
      }],
      dts: true,
      viteOptimizeDeps: true,
      dirs: ["src/stores"]
    }),
    Components({
      /* options */
    }),
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith("iconify-icon")
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXlraW1cXFxcZ2l0aHViXFxcXHZ1ZWpzLW1hc3RlcmNsYXNzLTIwMjRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHJleWtpbVxcXFxnaXRodWJcXFxcdnVlanMtbWFzdGVyY2xhc3MtMjAyNFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcmV5a2ltL2dpdGh1Yi92dWVqcy1tYXN0ZXJjbGFzcy0yMDI0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xyXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcclxuaW1wb3J0IHRhaWx3aW5kIGZyb20gJ3RhaWx3aW5kY3NzJ1xyXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xyXG5pbXBvcnQgeyBWdWVSb3V0ZXJBdXRvSW1wb3J0cyB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIEF1dG9JbXBvcnQoe1xyXG4gICAgICBpbmNsdWRlOiBbXHJcbiAgICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcclxuICAgICAgICAvXFwudnVlJC8sXHJcbiAgICAgICAgL1xcLnZ1ZVxcP3Z1ZS8sIC8vIC52dWVcclxuICAgICAgICAvXFwubWQkLywgLy8gLm1kXHJcbiAgICAgIF0sXHJcbiAgICAgIGltcG9ydHM6IFsndnVlJywgVnVlUm91dGVyQXV0b0ltcG9ydHMsIHtcclxuICAgICAgICAncGluaWEnOiBbJ2RlZmluZVN0b3JlJywgJ3N0b3JlVG9SZWZzJywgJ2FjY2VwdEhNUlVwZGF0ZSddXHJcbiAgICAgIH1dLFxyXG4gICAgICBkdHM6IHRydWUsXHJcbiAgICAgIHZpdGVPcHRpbWl6ZURlcHM6IHRydWUsXHJcbiAgICAgIGRpcnM6IFsnc3JjL3N0b3JlcyddXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoeyAvKiBvcHRpb25zICovIH0pLFxyXG4gICAgVnVlUm91dGVyKCksXHJcbiAgICB2dWUoe1xyXG4gICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgaXNDdXN0b21FbGVtZW50OiBlbGVtZW50ID0+IGVsZW1lbnQuc3RhcnRzV2l0aCgnaWNvbmlmeS1pY29uJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVUsU0FBUyxlQUFlLFdBQVc7QUFDdFcsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sY0FBYztBQUNyQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLGdCQUFnQjtBQUV2QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFUMkwsSUFBTSwyQ0FBMkM7QUFZNVAsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUM7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDLE9BQU8sc0JBQXNCO0FBQUEsUUFDckMsU0FBUyxDQUFDLGVBQWUsZUFBZSxpQkFBaUI7QUFBQSxNQUMzRCxDQUFDO0FBQUEsTUFDRCxLQUFLO0FBQUEsTUFDTCxrQkFBa0I7QUFBQSxNQUNsQixNQUFNLENBQUMsWUFBWTtBQUFBLElBQ3JCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQTtBQUFBLElBQWdCLENBQUM7QUFBQSxJQUM1QixVQUFVO0FBQUEsSUFDVixJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQSxVQUNmLGlCQUFpQixhQUFXLFFBQVEsV0FBVyxjQUFjO0FBQUEsUUFDL0Q7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
