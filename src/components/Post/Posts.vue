<template lang='pug'>
  div
    b-card(v-for='(post, i) in posts' 
      :key='i'
      :title='post.title'
      header-tag='header'
      footer-tag='footer'
      class='card')
      div(slot='header') 
        b-button(variant='link' to='/users') {{ post.author }}
        | {{ post.dateOfPub }}
      div(slot='footer')
          span(v-for='(keyword, i) in post.keywords' :key='i') 
            b-button(variant='link' :to='"/filtered/" + keyword') {{ keyword }}
      b-button(variant='outline-primary' :to='\'/post/\' + post.id') Читать дальше -->
      
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {},
})

class Posts extends Vue {
  get posts() {
    return this.$store.getters.allPosts
  }
}

export default Posts
</script>
<style lang='stylus' scoped>
  .card {
    margin: 30px
  }
</style>
