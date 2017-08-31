<template lang='pug'>
  div#app
    nav-bar
    main
      router-view
    
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import NavBar from '@/components/NavBar'

@Component({
  components: {
    NavBar
  }
})

class App extends Vue {
  
}

export default App
</script>
<style lang='stylus'>

</style>

