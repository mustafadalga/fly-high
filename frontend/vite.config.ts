import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [ vue() ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    strictPort: true,
    port: 8080,
    host: "::", //'0.0.0.0',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: "./jest-dom.setup.ts",
  }
})
