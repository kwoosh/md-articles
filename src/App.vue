<template lang='pug'>
  div#app
    nav-bar
    main
      router-view
    
</template>
<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import NavBar from '@/components/NavBar'

@Component({
  components: {
    NavBar
  }
})
class App extends Vue {
  // computed
  get userAuthed() {
    const u = this.$store.getters.user
    return (u !== null && u !== undefined)
  }
  //      если юрез вошол - редирект на /
  @Watch('userAuthed')
  ifUser(val) {
    val ? this.$router.push('/') : false
  }
}

export default App
</script>
<style lang='stylus'>
  @import "./assets/helpers.styl"
</style>

