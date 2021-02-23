import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from 'vite-svg-loader'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  
  server: {
    port: parseInt(process.env.VITE_PORT) || 8080,
    cors: true,
    strictPort: true,
    hmr: true,
    proxy: {
      "^/graphql": {
        target: process.env.VITE_API_URL || "http://localhost:4000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/graphql/, "/graphql"),
        ws: true,
      },
    },
    watch: {
      usePolling: true,
      useFsEvents: true,
    }
  },
  resolve: {
    alias: {
      "#": resolve(__dirname, "src/assets"),
      "@": resolve(__dirname, "src"),
    },
  },
});
