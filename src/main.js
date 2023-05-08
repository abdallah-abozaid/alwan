import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Layouts
import Default from './layouts/Default.vue'
import Auth from './layouts/Auth.vue'
import Dashboard from './layouts/Dashboard.vue'

// bootstrap imports (css & js)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// public style
import './assets/style/main.css'

const app = createApp(App)

app.use(createPinia())
app
  .use(router)
  .component('default-layout', Default)
  .component('auth-layout', Auth)
  .component('dashboard-layout', Dashboard)
app.mount('#app')
