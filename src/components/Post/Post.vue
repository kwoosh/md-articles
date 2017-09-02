<template lang='pug'>
  div 
    b-card(header-tag='header'
      footer='Card Footer'
      footer-tag='footer'
      class='post-card')
      div(slot='header' class='flex-el') 
        div
          b-button(variant='link' to='/users') {{ post.author }}
          | {{ post.dateOfPub }}
        div
          span(v-for='(keyword, i) in post.keywords' :key='i') 
            b-button(variant='link' :to='"/filtered/" + keyword') {{ keyword }}
      div( v-html='postContent')
      
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import marked from 'marked'

@Component({
  components: {},
  props: ['id']
})

class Post extends Vue {
  // computed
  get postContent() {
    return marked(this.post.content)
  }
  get post() {
    return this.$store.getters.loadedPost(this.id)
  }
}

export default Post
</script>

<style lang='stylus' scoped>
  .flex-el {
    display: flex
    justify-content: space-between
    align-items: center
  }

  span {
    margin: 0 7px
  }
</style>
