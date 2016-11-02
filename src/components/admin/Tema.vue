<template>
<div class="container">
  <div class="row">
       <div class="page-header">
           <h2>Novo Tema</h2>
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
              <label for="nome">Nome do Tema</label>
              <input v-model="Tema.nome" type="text" class="form-control" id="nome" placeholder="Digite o nome do Tema">
          </div>

          <div class="form-group">
              <label for="inicio_evento">Data de início do Evento</label>
              <datepicker :value.sync="Tema.inicio_evento" format="dd/mm/yyyy" placeholder="Data de início do evento">
              </datepicker>
              <!--input v-model="Tema.inicio_evento" type="text" class="form-control" id="inicio_evento" placeholder="Data de início do evento"-->
          </div>

          <div class="form-group">
              <label for="fim_evento">Data de término do Evento</label>
              <input v-model="Tema.fim_evento" type="text" class="form-control" id="fim_evento" placeholder="Data de término do evento">
          </div>

          <div class="form-group">
              <label for="inicio_inscricoes">Data de início das Inscrições</label>
              <input v-model="Tema.inicio_inscricoes" type="text" class="form-control" id="inicio_inscricoes" placeholder="Data de início das inscrições">
          </div>

          <div class="form-group">
              <label for="fim_inscricoes">Data de término das Inscrições</label>
              <input v-model="Tema.fim_inscricoes" type="text" class="form-control" id="fim_inscricoes" placeholder="Data de término das inscrições">
          </div>

          <button type="submit" class="btn btn-default form-control" @click.prevent="create">Salvar</button>
      </form>
  </div>
</div>

</template>

<script>
import {datepicker} from 'vue-strap'

export default {
  data () {
    return {
      error: null,
      Tema: {
        nome: '',
        inicio_evento: '',
        fim_evento: '',
        inicio_inscricoes: '',
        fim_inscricoes: ''
      }
    }
  },
  computed: {},
  methods: {
    create () {

    }
  },
  components: {
    datepicker
  }
}
</script>
