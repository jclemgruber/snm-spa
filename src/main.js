import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
