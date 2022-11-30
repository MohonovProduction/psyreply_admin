import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/api/admin/Auth';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/block',
    name: 'block',
    component: () => import('@/views/BlockView')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/TestView')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import('@/views/CompanyView')
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('@/views/ResultsView')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if (!Admin.checkAuth() && to.meta.requiresAuth) {
    return {
      path: '/',
      query: { redirect: to.fullPath }
    }
  }
})

export default router
