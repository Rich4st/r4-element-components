import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home'
import Layout from '../layout/Layout.vue'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { path: '/home', name: 'Home', component: Home },
      { path: '/chooseIcon', name: 'chooseIcon', component: () => import('../views/chooseIcon/index.vue') },
      { path: '/chooseArea', name: 'chooseArea', component: () => import('../views/chooseArea/index.vue') },
      { path: '/trend', name: 'trend', component: () => import('../views/trend/index.vue') },
      { path: '/notification', name: 'notification', component: () => import('../views/notification/index.vue') },
      { path: '/menu', name: 'menu', component: () => import('../views/menu/index.vue') },
      { path: '/progress', name: 'progress', component: () => import('../views/progress/index.vue') },
      { path: '/datePicker', name: 'datePicker', component: () => import('../views/datepicker/index.vue') },
      { path: '/chooseDate', name: 'chooseDate', component: () => import('../views/chooseDate/index.vue') },
      { path: '/chooseCity', name: 'chooseCity', component: () => import('../views/chooseCity/index.vue') },
      { path: '/form', name: 'form', component: () => import('../views/form/index.vue') },
      { path: '/modelForm', name: 'modelForm', component: () => import('../views/modelForm/index.vue') },
      { path: '/table', name: 'table', component: () => import('../views/table/index.vue') },
      { path: '/calendar', name: 'calendar', component: () => import('../views/calendar/index.vue') }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
