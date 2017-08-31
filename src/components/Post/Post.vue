<template lang='pug'>
  div 
    b-card(header-tag='header'
      footer='Card Footer'
      footer-tag='footer')
      div(slot='header') 

      div( v-html='postContent')
      
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import marked from 'marked'

@Component({
  components: {},
  props: ['id']
})

class Post extends Vue {
  get postContent() {
    return marked(this.post.content)
  }
  get post() {
    return this.$store.getters.loadedPost(this.id)
  }
}

export default Post
</script>

<style lang='stylus'>

</style>
