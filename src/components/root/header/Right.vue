<template>
    <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/login" v-if="!authenticated">Login</router-link></li>
      <li v-if="authenticated" class="dropdown" @click="toogle" :class="{open: isOpen}">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" :aria-expanded="{'true':isOpen, 'false':!isOpen}">{{profile}} <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#" @click="logout">Sair</a></li>
        </ul>
      </li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    authenticated () {
      return this.$store.state.user.authenticated
    },
    profile () {
      return this.$store.state.user.profile != null ? this.$store.state.user.profile.name : ''
    }
  },
  methods: {
    toogle () {
      this.isOpen = !this.isOpen
    },
    logout () {
      this.$store.commit('logout')
      this.$router.push('/')
    }
  }
}
</script>
