import {
  createSSRApp
} from 'vue'
import App from './App.vue'
import { store } from './stores'
import './main.less'

// if (import.meta.env.VITE_BUILD_ENV !== 'PRO') {
//   new VConsole()
// }

export function createApp () {
  const app = createSSRApp(App)
  app.use(store)

  return {
    app,
    store
  }
}
