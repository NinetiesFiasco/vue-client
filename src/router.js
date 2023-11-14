import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'
import Info from './components/Info.vue'
import ApiActions from './components/ApiActions.vue'
import Faker from './components/Faker'

const routes = [
  { path: '/', component: Main },
  { path: '/info', component: Info },
  { path: '/api', component: ApiActions },
  { path: '/faker', component: Faker}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router