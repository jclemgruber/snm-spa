<template>
  <div class="container">
    <div class="row">

         <div class="page-header">
             <h2>Temas</h2>
             <router-link to="/temas/create">
               <button type="button" class="btn btn-default"><i class="fa fa-plus-square"></i> Novo tema</button>
             </router-link>
             <div id="loading" v-show="isLoading">
               <i class="fa fa-spinner fa-lg fa-spin"></i> Carregando dados..
            </div>
            <div class="row" v-show="error">
               <div class="alert alert-danger" role="alert">
                   <span>{{error}}</span>
               </div>
            </div>
         </div>

         <div v-for="temas in chunk" class="row">
           <div v-for="tema in temas" class="col-sm-6 col-md-4">
             <div class="thumbnail">
               <div class="caption">
                 <h3>{{tema.nome}}</h3>
                 <p>Evento a ser realizado no perído de {{tema.inicio_evento}} a {{tema.fim_evento}}.</p>
                 <p>Inscrições de {{tema.inicio_inscricoes}} à {{tema.fim_inscricoes}}</p>
                 <p><a href="#" class="btn btn-primary" role="button">Editar</a>
                    <a href="#" class="btn btn-default" role="button">Gerenciar</a>
                 </p>
               </div>
             </div>
           </div>
         </div>
     </div>
  </div>
</template>

<script>
import helper from '../../libs/helper.js'

export default {
  name: 'TemaList',
  data () {
    return {
      isLoading: false,
      temas: [],
      error: null
    }
  },
  computed: {
    serverAddress () {
      return this.$store.state.config.serverAddress
    },
    chunk () {
      return helper.chunk(this.temas, 3)
    }
  },
  created () {
    this.carregarDados()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    carregarDados () {
      this.isLoading = true
      this.$http.get(this.serverAddress + '/temas').then((response) => {
        this.temas = response.data
        this.isLoading = false
      }, (response) => {
        this.error = response.data.error
        this.isLoading = false
      })
    }
  }
}
</script>
