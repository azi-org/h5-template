import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

import 'normalize.css'
import '@/style/global.scss'

const app = createApp(App)
app.use(router)
app.use(store)

router.isReady().then(() => {
  app.mount('#app')
})
