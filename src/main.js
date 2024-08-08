import {
  createSSRApp
} from 'vue'
import App from './App.vue'
import { store } from './stores'
import '@/assets/styles/main.scss'
import uvUI from '@climblee/uv-ui'

export function createApp () {
  const app = createSSRApp(App)
  app.use(store)
  app.use(uvUI)

  return {
    app,
    store
  }
}
