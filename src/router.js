import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = {
  // Not found
  '*': {
    component: require('./components/root/errors/Error404.vue')
  },

  // Index
  '/': {
    name: 'index',
    component: require('./App.vue')
  }
 /*
  '/login': {
    name: 'login',
    component: require('./compoments/Login.vue')
  },

  '/register': {
    name: 'register',
    component: load('auth/register')
  },

  '/profile': {
    name: 'profile',
    component: load('layouts/menu'),
    subRoutes: {
      '/': {component: load('profile')}
    }
  },

  '/jokes': {
    name: 'jokes',
    component: load('layouts/menu'),
    subRoutes: {
      '/': {component: load('jokes')}
    }
  } */
}

var Router = new VueRouter()
Router.map(routes)

export default Router
