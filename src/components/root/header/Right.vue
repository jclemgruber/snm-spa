<template>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#">Link</a></li>
      <li class="dropdown" @click="toogle" :class="{open: isOpen}">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" :aria-expanded="{'true':isOpen, 'false':!isOpen}">Dropdown <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
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

  methods: {
    toogle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
