<template lang='pug'>
  div#app
    nav-bar
    main
      router-view
    
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import NavBar from '@/components/NavBar'

@Component({
  components: {
    NavBar
  }
})
//TODO: зделай что-то с задним фоном, и стилизуй лучше все...
class App extends Vue {
  
}

export default App
</script>
<style lang='stylus'>
  .post-card {
    margin: 30px
  }
</style>

