import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      authenticated: false,
      token: '',
      profile: {}
    },
    config: {
      serverAddress: 'http://localhost/api'
    }
  },
  mutations: {
    authenticate (state, token) {
      state.user.authenticated = true
      state.user.token = token
    },
    profile (state, profile) {
      state.user.profile = profile
    },
    logout (state) {
      state.user.authenticated = false
      state.user.token = ''
    }
  }
})

export default store
