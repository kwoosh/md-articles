<template lang='pug'>
  b-container
    img(src='../assets/Pacman.svg' class='loader-center')
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})

class PreLoader extends Vue {
  
}

export default PreLoader
</script>
<style lang='stylus' scoped>
  .loader-center {
    display: block
    margin: 30px auto
  }
</style>