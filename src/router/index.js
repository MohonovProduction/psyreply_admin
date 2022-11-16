import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/results',
    name: 'results',
    component: () => import('@/views/Res')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
