import { createWebHashHistory, createRouter } from 'vue-router'

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./Test.vue')
    }
  ]
})

export default routes
