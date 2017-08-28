<template lang='pug'>
  div#app {{ msg }}
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})

export default class App extends Vue {
  msg = 'app'
}
</script>
<style lang='stylus'>

</style>

