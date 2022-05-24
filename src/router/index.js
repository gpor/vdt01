import Vue from 'vue'
import VueRouter from 'vue-router'
import PageDashboard from '../components/PageDashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageDashboard,
    meta: { title: 'Dashboard' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
