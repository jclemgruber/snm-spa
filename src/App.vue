<template>
  <div id="app">
      <RootHeader></RootHeader>
      <div class="container">
          <header class="page-header">
              <h2>Hello World</h2>
          </header>
      </div>
  </div>
</template>

<script>
import RootHeader from './components/root/header/Main.vue'

export default {
  name: 'app',
  components: {
    RootHeader
  }
}
</script>

<style src="assets/sass/app.scss" lang="sass">

</style>
