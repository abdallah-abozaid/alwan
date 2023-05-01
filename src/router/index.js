import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'default-layout',
        title: 'home page'
      },
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        layout: 'dashboard-layout',
        title: 'about page'
      },
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.afterEach((to) => {
  document.title = to.meta.title || 'alwan'
})
export default router
