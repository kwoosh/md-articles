<template lang='pug'>
  div#app
    nav-bar
    main
      router-view
    
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Alert from '@/components/Alert'
import NavBar from '@/components/NavBar'

@Component({
  components: {
    Alert,
    NavBar
  }
})

class App extends Vue {
  msg = 'app'
}

export default App
</script>
<style lang='stylus'>

</style>

