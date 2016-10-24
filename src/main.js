import Vue from 'vue'
import App from './App'
import Home from './Home'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter()

router.map({
  '/': {
    component: Home
  }
})

router.start(App, '#app')

/* eslint-disable no-new */
/*
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
*/
