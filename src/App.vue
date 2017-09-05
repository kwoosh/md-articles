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
//TODO: сделай что-то с задним фоном, и стилизуй лучше все...
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
  body {
    background: #31D7E1
  }

  $_cyan = #C1F4FE
  $_dark_main = #2B2E3B
  $_dark_header = #2F3241
</style>

