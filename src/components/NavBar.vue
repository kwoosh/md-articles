<template lang='pug'>
  div
    b-navbar(toggleable='md' 
      type='dark' 
      class='nav-bg')
      b-container

        b-nav-toggle(target='nav_collapse')
        
        b-navbar-brand(to='/') MarkdownBlog
        b-collapse(is-nav id='nav_collapse')
          b-nav(is-nav-bar)

          b-nav(is-nav-bar class='ml-auto')
            b-nav-form(class='nav-f')
              b-form-input(v-show='showSearshIput' 
                type='text'
                placeholder='Найти...'
                v-model='search'
                class='search-input'
                autocomplete='false')
              search-list(class='search-list' :posts='filteredPosts' @clearinput='onClearInput')

              b-button.b(variant='outline-info' @click='onInputShow')
                i(class='fa fa-search' aria-hidden='true') 

            b-button.b(variant='outline-warning' to='/new' v-if='user') Написать
            b-button.b(variant='outline-success' v-if='user' @click='onSignout') Выйти
            b-button.b(variant='outline-success' to='/signup' v-if='!user') Регистрация
            b-button.b(variant='outline-success' to='/signin' v-if='!user') Войти
        
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import SearchList from './Post/SearchList'

@Component({
  components: {
    SearchList
  }
})

class NavBar extends Vue {
  search = ''
  showSearshIput = false
  // computed
  get user() {
    return this.$store.getters.user
  }
  get posts() {
    return this.$store.getters.allPosts
  }
  get filteredPosts() {
    if (this.search == '') return null

    return this.posts.filter(post => {
      return post.title
        .toLowerCase()
        .includes(this.search.toLowerCase())
    })
  }
  //methods
  onClearInput(val) {
    this.search = val
  }
  onInputShow() {
    this.showSearshIput = !this.showSearshIput
  }
  onSignout(e) {
    this.$store.dispatch('signUserOut')
  }
}

export default NavBar
</script>
<style lang='stylus' scoped>
  .b {
    margin: 0 10px    
  }

  .blue {
    background-color: #555
  }

  .write-btn {
    margin: 0 auto -143px auto
  }

  .search-list {
    position: absolute
    left: 0
    top: 50px
    z-index: 999
  }

  .nav-f {
    position: relative
  }
</style>