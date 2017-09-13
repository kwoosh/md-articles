<template lang='pug'>
  b-container
  
    b-jumbotron(class='under-head')
      template(slot='lead') Хочешь попробовать себя в роли Ньюс-райтера? Тогда ты по адресу!
      template(slot='header') Markdown News
      
      b-button(variant='warning' 
        size='lg' 
        class='write-btn'
        to='/new') Написать
    pre-loader(v-if='isLoading')
    
    b-pagination(align='center' 
      :total-rows='totalRows' 
      v-model='currentPage' 
      :per-page='perPage'
      size='lg'
      @change='loadCards')

    b-card(v-if='!isLoading'
      v-for='(post, i) in items' 
      :key='i'
      :title='post.title'
      header-tag='header'
      footer-tag='footer'
      class='cd')
      div(v-html='slices[i]' class='slice-article')
      div(slot='header') 
        b-button(variant='link' class='link') {{ post.dateOfPub }}
      div(slot='footer')
          span(v-for='(keyword, i) in post.keywords' :key='i') 
            b-button(variant='link' class='link') {{ keyword }}
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
  slices = []
  items = []
  perPage = 3
  currentPage = 1
  //methods
  loadCards(page) {
    let end = page * 3
    let begin = end - 3

    const arr = this.posts.slice(begin, end)

    const slices = arr.map(post => post.content.substr(0, 550) + '...')

    //console.log(arr, slices)
    this.slices = slices
    this.items = arr
  }
  // computed
  get isLoading() {
    return this.$store.getters.loading
  }
  get posts() {
    return this.$store.getters.allPosts
  }
  get totalRows() {
    return this.posts.length
  }
  //lifecycle hook
  beforeMount() {
    this.loadCards(this.currentPage)
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
