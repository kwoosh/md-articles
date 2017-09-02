<template lang='pug'>
  div
    b-card(v-for='(post, i) in posts' 
      :key='i'
      :title='post.title'
      header-tag='header'
      footer-tag='footer'
      class='post-card')
      div(v-html='sliceOfPost[i]' class='slice-article')
      div(slot='header') 
        b-button(variant='link' to='/users') {{ post.author }}
        | {{ post.dateOfPub }}
      div(slot='footer')
          span(v-for='(keyword, i) in post.keywords' :key='i') 
            b-button(variant='link' :to='"/filtered/" + keyword') {{ keyword }}
      b-button(variant='outline-primary' :to='\'/post/\' + post.id') Читать дальше -->
      
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import marked from 'marked'

@Component({
  components: {},
})

class Posts extends Vue {
  // computed
  get posts() {
    return this.$store.getters.allPosts
  }
  get sliceOfPost() {
    return this.$store.getters.slicesOfPosts.map(slice => marked(slice))
  }
}

export default Posts
</script>
<style lang='stylus' scoped>
  .slice-article {
    font-size: 1.2em
  }
</style>
