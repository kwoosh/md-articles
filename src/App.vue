<template lang='pug'>
  div#app
    alert
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Alert from '@/components/Alert'

@Component({
  components: {
    Alert
  }
})

class App extends Vue {
  msg = 'app'
}

export default App
</script>
<style lang='stylus'>

</style>

