// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import VueRouter from "file:///home/reykim-wsl/github/vuejs-masterclass/vuejs-masterclass-2024/node_modules/.pnpm/unplugin-vue-router@0.10.8_rollup@4.27.4_vue-router@4.5.0_vue@3.5.13_typescript@5.6.3___vue@3.5.13_typescript@5.6.3_/node_modules/unplugin-vue-router/dist/vite.js";
import autoprefixer from "file:///home/reykim-wsl/github/vuejs-masterclass/vuejs-masterclass-2024/node_modules/.pnpm/autoprefixer@10.4.20_postcss@8.4.49/node_modules/autoprefixer/lib/autoprefixer.js";
import tailwind from "file:///home/reykim-wsl/github/vuejs-masterclass/vuejs-masterclass-2024/node_modules/.pnpm/tailwindcss@3.4.17/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///home/reykim-wsl/github/vuejs-masterclass/vuejs-masterclass-2024/node_modules/.pnpm/vite@5.4.11_@types+node@20.17.8/node_modules/vite/dist/node/index.js";
import vue from "file:///home/reykim-wsl/github/vuejs-masterclass/vuejs-masterclass-2024/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_@types+node@20.17.8__vue@3.5.13_typescript@5.6.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///home/reykim-wsl/github/vuejs-masterclass/vuejs-masterclass-2024/vite.config.ts";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [VueRouter(), vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yZXlraW0td3NsL2dpdGh1Yi92dWVqcy1tYXN0ZXJjbGFzcy92dWVqcy1tYXN0ZXJjbGFzcy0yMDI0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yZXlraW0td3NsL2dpdGh1Yi92dWVqcy1tYXN0ZXJjbGFzcy92dWVqcy1tYXN0ZXJjbGFzcy0yMDI0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3JleWtpbS13c2wvZ2l0aHViL3Z1ZWpzLW1hc3RlcmNsYXNzL3Z1ZWpzLW1hc3RlcmNsYXNzLTIwMjQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcblxuLy8gaHR0cHM6Ly92aXRlLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtWdWVSb3V0ZXIoKSwgdnVlKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrWCxTQUFTLGVBQWUsV0FBVztBQUNyWixPQUFPLGVBQWU7QUFDdEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxjQUFjO0FBRXJCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQU53TixJQUFNLDJDQUEyQztBQVN6UixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7QUFBQSxFQUM1QixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
