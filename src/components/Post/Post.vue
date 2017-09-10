<template lang='pug'>
  b-container
    b-card(header-tag='header'
      class='cd')
      div(slot='header' class='flex-el') 
        div
          b-button(variant='link' to='/users' class='link') {{ post.author }}
          | {{ post.dateOfPub }}
        div
          span(v-for='(keyword, i) in post.keywords' :key='i') 
            b-button(variant='link' :to='"/filtered/" + keyword' class='link') {{ keyword }}
      div( v-html='postContent')
      
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import md from '../../assets/md.js'

@Component({
  components: {}
})

class Post extends Vue {
  // computed
  get id() {
    return this.$route.params.id
  }
  get postContent() {
    return md(this.post.content)
  }
  get post() {
    return this.$store.getters.loadedPost(this.id)
  }
}

export default Post
</script>

<style lang='stylus' scoped>
  .link {
    color: #FFC107
  }

  .flex-el {
    display: flex
    justify-content: space-between
    align-items: center
  }

  span {
    margin: 0 7px
  }
</style>
