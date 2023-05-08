import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        return { name: 'login' }
      }
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'auth-layout',
        title: 'Login Page'
      },
      component: () => import('../views/auth/LoginPage.vue')
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      meta: {
        layout: 'auth-layout',
        title: 'Forget Password Page '
      },
      component: () => import('../views/auth/ForgetPasswordPage.vue')
    },
    {
      path: '/return-password',
      name: 'return-password',
      meta: {
        layout: 'auth-layout',
        title: 'Return Password Page'
      },
      component: () => import('../views/auth/ReturnPasswordPage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        layout: 'dashboard-layout',
        title: 'Dashboard Page'
      },
      component: () => import('../views/dashboard/DashboardPage.vue')
    },
    {
      path: '/tenants',
      name: 'tenants',
      meta: {
        layout: 'dashboard-layout',
        title: 'Tenants page'
      },
      component: () => import('../views/tenants/TenantsPage.vue')
    },
    {
      path: '/angel',
      name: 'angel',
      meta: {
        layout: 'dashboard-layout',
        title: 'Angel page'
      },
      component: () => import('../views/angel/AngelPage.vue')
    },
    {
      path: '/units',
      name: 'units',
      meta: {
        layout: 'dashboard-layout',
        title: 'Units page'
      },
      component: () => import('../views/units/UnitsPage.vue')
    },
    {
      path: '/contracts',
      name: 'contracts',
      meta: {
        layout: 'dashboard-layout',
        title: 'Contracts page'
      },
      component: () => import('../views/contracts/ContractsPage.vue')
    },
    {
      path: '/contracts/:id',
      name: 'update contract',
      meta: {
        layout: 'dashboard-layout',
        title: 'Update Contract page'
      },
      component: () => import('../views/contracts/UpdateContractPage.vue'),
      children: [
        { path: '', component: () => import('../views/contracts/PaymentsPage.vue') },
        { path: 'expenses', component: () => import('../views/contracts/ExpensesPage.vue') },
        {
          path: 'administration-wages',
          component: () => import('../views/contracts/AdministrationWagesPage.vue')
        },
        {
          path: 'owners-entitlements',
          component: () => import('../views/contracts/OwnersEntitlementsPage.vue')
        },
        {
          path: 'statment-of-account',
          component: () => import('../views/contracts/StatmentOfAccountPage.vue')
        }
      ]
    },
    {
      path: '/reports',
      name: 'reports',
      meta: {
        layout: 'dashboard-layout',
        title: 'Reports page'
      },
      component: () => import('../views/reports/ReportsPage.vue'),
      children: [
        { path: '', component: () => import('../views/reports/TenantsReports.vue') },
        { path: 'angel', component: () => import('../views/reports/AngelReports.vue') },
        {
          path: 'units',
          component: () => import('../views/reports/UnitsReports.vue')
        },
        {
          path: 'contracts',
          component: () => import('../views/reports/ContractsReports.vue')
        }
      ]
    },
    {
      path: '/settings',
      name: 'settings',
      meta: {
        layout: 'dashboard-layout',
        title: 'Settings page'
      },
      component: () => import('../views/settings/SettingsPage.vue')
    }
  ]
})
router.afterEach((to) => {
  document.title = to.meta.title || 'alwan'
})
export default router
