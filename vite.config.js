import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { fileURLToPath } from 'url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
