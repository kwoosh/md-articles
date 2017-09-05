<template lang='pug'>
  div
    pre-loader(v-if='isLoading')
    b-card(v-if='!isLoading'
      v-for='(post, i) in posts' 
      :key='i'
      :title='post.title'
      header-tag='header'
      footer-tag='footer'
      class='card'
      bg-variant='dark')
      div(v-html='sliceOfPost[i]' class='slice-article')
      div(slot='header') 
        b-button(variant='link' to='/users' class='link') {{ post.author }}
        | {{ post.dateOfPub }}
      div(slot='footer')
          span(v-for='(keyword, i) in post.keywords' :key='i') 
            b-button(variant='link' :to='"/filtered/" + keyword' class='link') {{ keyword }}
      b-button(variant='primary' :to='\'/post/\' + post.id') Читать дальше -->
      
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import marked from 'marked'

@Component({
  components: {},
})

class Posts extends Vue {
  // computed
  get isLoading() {
    return this.$store.getters.loading
  }
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
  .link {
    color: #FFC107
  }

  .card {
    margin: 30px 40px
    color: #fff
  }

  .slice-article {
    font-size: 1.2em
    margin: 15px
  }
</style>
