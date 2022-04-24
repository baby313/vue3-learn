import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    redirect: '/funt'
  },
  {
    path: '/funt',
    name: 'funt',
    component: () => import('@/views/index.vue'),
    meta: { title: '公积金服务' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('@/views/watch.vue')
  },
  {
    path: '/watchEffect',
    name: 'watchEffect',
    component: () => import('@/views/watchEffect.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('@/views/computed.vue')
  },
  {
    path: '/css',
    name: 'css',
    component: () => import('@/views/css.vue')
  },
  {
    path: '/style',
    name: 'style',
    component: () => import('@/views/style.vue')
  },
  {
    path: '/styleModule',
    name: 'styleModule',
    component: () => import('@/views/styleModule.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
