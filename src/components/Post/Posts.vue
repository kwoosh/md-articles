<template lang='pug'>
  b-container
  
    b-jumbotron(class='under-head')
      template(slot='lead') Хочешь попробовать себя в роли Ньюс-райтера? Тогда ты по адресу!
      template(slot='header') Markdown News
      
      b-button(variant='warning' 
        size='lg' 
        class='write-btn'
        to='/new') Написать  

    b-pagination(align='center' 
      :total-rows='posts.length' 
      v-model='currentPage' 
      :per-page='1'
      size='lg')
    pre-loader(v-if='isLoading')
    b-card(v-if='!isLoading'
      v-for='(post, i) in posts' 
      :key='i'
      :title='post.title'
      header-tag='header'
      footer-tag='footer'
      class='cd')
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
import md from '../../assets/md.js'

@Component({
  components: {},
})

class Posts extends Vue {
  //data
  currentPage = 1
  // computed
  get isLoading() {
    return this.$store.getters.loading
  }
  get posts() {
    return this.$store.getters.allPosts
  }
  get sliceOfPost() {
    return this.$store.getters.slicesOfPosts.map(slice => md(slice))
  }
}

export default Posts
</script>
<style lang='stylus' scoped>
  .under-head {
    margin-bottom: 100px
    background: rgba(#ccc, 0)
  }

  .link {
    color: #FFC107
  }

  .slice-article {
    font-size: 1.2em
    margin: 15px
  }
</style>
