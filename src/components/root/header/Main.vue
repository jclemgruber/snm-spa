<template>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <brand @toogle="onToogleMenu"></brand>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" :class="{in: isOpen}">
          <left></left>
          <right></right>
        </div>

      </div>
    </nav>
</template>

<script>
import Left from './Left.vue'
import Right from './Right.vue'
import Brand from './Brand.vue'

export default {
  name: 'snm-header',
  components: {
    Left, Right, Brand
  },

  data () {
    return {
      isOpen: false
    }
  },

  methods: {
    onToogleMenu () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
