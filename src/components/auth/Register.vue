<template>
  <div class="container">
    <div class="row">
         <div class="page-header">
             <h2>Registrar</h2>
         </div>
     </div>

     <div class="row" v-show="error">
        <div class="alert alert-danger" role="alert">
            <ul>
                <li v-for="item in error">
                    {{item}}
                </li>
            </ul>
        </div>
     </div>

     <div class="row">
        <form>
            <div class="form-group">
                <label for="nome">Nome</label>
                <input v-model="User.name" type="text" class="form-control" id="nome" placeholder="Digite seu nome">
            </div>

            <div class="form-group">
                <label for="email">Endereço de e-mail</label>
                <input v-model="User.email" type="email" class="form-control" id="email" placeholder="Digite seu email">
            </div>

            <div class="form-group">
                <label for="cpf">CPF</label>
                <input v-model="User.cpf" v-mask="'###.###.###-##'" type="text" class="form-control" id="cpf" placeholder="Digite seu cpf">
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input v-model="User.password" type="password" class="form-control" id="password" placeholder="Digite sua senha">
            </div>

            <div class="form-group">
                <label for="password_confirmation">Confirme sua senha</label>
                <input v-model="User.password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Confirme sua senha">
            </div>

            <button type="submit" class="btn btn-default form-control" @click.prevent="register">Registrar</button>
        </form>
    </div>
</template>

<script>
import helper from '../../libs/helper.js'

export default {
  data () {
    return {
      User: {
        name: '',
        email: '',
        cpf: '',
        password: '',
        password_confirmation: ''
      },
      error: null
    }
  },
  computed: {
    serverAddress () {
      return this.$store.state.config.serverAddress
    }
  },
  methods: {
    register () {
      this.$http.post(this.serverAddress + '/register', this.User).then((response) => {
        this.$router.push('/login')
      }, (response) => {
        this.error = helper.getListError(response.data)
      })
    }
  }
}
</script>
