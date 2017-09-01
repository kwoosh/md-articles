<template lang='pug'>
  b-navbar(toggleable='md' type='dark' variant='info')

    b-nav-toggle(target='nav_collapse')
    
    b-navbar-brand(to='/') MarkdownBlog
    b-collapse(is-nav id='nav_collapse')
      b-nav(is-nav-bar)
        b-nav-item(to='/posts') Публикации
        b-nav-item(to='/users') Пользователи

      b-nav(is-nav-bar class='ml-auto')
        b-button(variant='outline-warning' to='/new') Написать
    
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  components: {
  }
})

class NavBar extends Vue {
  
}

export default NavBar
</script>
<style lang='stylus'>

</style>