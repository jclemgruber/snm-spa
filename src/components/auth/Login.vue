<template>
    <div class="container">
      <div class="row">
           <div class="page-header">
               <h2>Login</h2>
           </div>
       </div>

       <div class="row" v-show="error">
          <div class="alert alert-danger" role="alert">
              <span>{{error}}</span>
          </div>
       </div>

       <div class="row">
          <form>
              <div class="form-group">
                  <label for="email">Endereço de e-mail</label>
                  <input v-model="User.email" type="email" class="form-control" id="email" placeholder="Digite seu email">
              </div>

              <div class="form-group">
                  <label for="password">Senha</label>
                  <input v-model="User.password" type="password" class="form-control" id="password" placeholder="Digite sua senha">
              </div>

              <button type="submit" class="btn btn-default form-control" @click.prevent="login">Login</button>
          </form>
      </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Login',
  data () {
    return {
      User: {
        email: '',
        password: ''
      },
      error: null
    }
  },
  computed: {
    authenticated () {
      return this.$store.state.user.authenticated
    },
    serverAddress () {
      return this.$store.state.config.serverAddress
    }
  },
  methods: {
    login () {
      this.$http.post(this.serverAddress + '/token', this.User).then((response) => {
        Vue.http.headers.common['Authorization'] = 'Bearer ' + response.data.token
        this.$store.commit('authenticate', response.data.token)

        // Busca os dados do usuário caso a autenticação seja concluída
        this.$http.get(this.serverAddress + '/user').then((response) => {
          this.$store.commit('profile', response.data)
        }, (response) => {
          console.log(response)
        })
        this.$router.push('/home')
      }, (response) => {
        console.log(response)
        this.error = response.data.error
      })
    }
  }
}
</script>
