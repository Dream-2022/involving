import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true,
    port: 5173,
    https: false,
    hotOnly: false
  },
  server: {
    host: '0.0.0.0'
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://192.168.50.32:10010',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  css: {
    preprocessorOptions: {
      // 全局导入颜色静态变量
      scss: {
        additionalData: '@import "@/assets/scss/default.scss";',
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
