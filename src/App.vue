<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './sass/base.scss'
export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">

</style>
