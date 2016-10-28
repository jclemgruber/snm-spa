import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: require('./Home.vue')
  },
  {
    path: '/login',
    component: require('./components/auth/Login.vue')
  },
  {
    path: '/register',
    component: require('./components/auth/Register.vue')
  }
]
const router = new VueRouter({routes})

export default router
