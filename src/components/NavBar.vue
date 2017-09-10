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
            b-button.b(variant='outline-warning' to='/new' v-if='user') Написать
            b-button.b(variant='outline-success' v-if='user' @click='onSignout') Выйти
            b-button.b(variant='outline-success' to='/signup' v-if='!user') Регистрация
            b-button.b(variant='outline-success' to='/signin' v-if='!user') Войти
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'


@Component({
  components: {}
})

class NavBar extends Vue {
  // computed
  get user() {
    return this.$store.getters.user
  }
  //methods
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
</style>