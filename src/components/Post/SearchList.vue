<template lang='pug'>
  b-list-group()
    b-list-group-item(v-for='(post, i) in posts' :key='i' @click='clear') 
      b-button(variant='link' :to='\'/post/\' + post.id') {{ post.title }}
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'


@Component({
  components: {},
  props: ['posts']
})

class SearchList extends Vue {
  clear() {
    this.$emit('clearinput', '')
  }
}

export default SearchList
</script>
<style lang='stylus' scoped>

</style>