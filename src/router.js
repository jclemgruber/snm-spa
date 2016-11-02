import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home', component: require('./Home.vue')
  },
  {
    path: '/login', component: require('./components/auth/Login.vue')
  },
  {
    path: '/register', component: require('./components/auth/Register.vue')
  },
  {
    path: '/temas',
    component: require('./components/admin/TemaList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/temas/create',
    component: require('./components/admin/Tema.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({routes})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user.authenticated) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
