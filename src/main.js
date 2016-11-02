import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMask from 'v-mask'
import App from './App'
import store from './store'
import router from './router'

Vue.use(VueResource)
Vue.use(VueMask)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
