import { createRouter, createWebHistory } from 'vue-router'
import MeuRouters from './meu/index'
import ConfiguracaoRouters from './configuracao/index'

import LoginView from '@/views/LoginView.vue'
import HomeNavView from '@/views/HomeNavView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeNavView
  }
]

routes.push(ConfiguracaoRouters[0]);
routes.push(MeuRouters[0]);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
