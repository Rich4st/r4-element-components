import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsX from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': './src'
    }
  },
  plugins: [vue(), vueJsX()]
})
