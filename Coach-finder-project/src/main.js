import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import router from './router.js'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
