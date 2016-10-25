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

              <button type="submit" class="btn btn-default form-control" @click="login">Login</button>
          </form>
      </div>
</template>

<script>
export default {
  data () {
    return {
      User: {
        email: '',
        password: ''
      },

      token: '',

      error: null
    }
  },
  methods: {
    login () {
      this.$http.post('http://localhost/api/token', this.User).then((response) => {
        this.token = response.data.token
      }, (response) => {
        this.error = response.data.error
      })
    }
  }
}
</script>
