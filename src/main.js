import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Layouts
import Default from './layouts/Default.vue'
import Dashboard from './layouts/Dashboard.vue'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router).component('default-layout', Default).component('dashboard-layout', Dashboard)
app.mount('#app')
