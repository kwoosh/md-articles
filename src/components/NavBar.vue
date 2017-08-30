<template lang='pug'>
  b-navbar(toggleable='md' type='dark' variant='info')

    b-nav-toggle(target='nav_collapse')
    
    b-navbar-brand(to='/') MarkdownBlog
    b-collapse(is-nav id='nav_collapse')
      b-nav(is-nav-bar)
        b-nav-item(to='/posts') Публикации
        b-nav-item(to='/users') Пользователи

      b-nav(is-nav-bar class='ml-auto')
        b-nav-form
          b-form-input(size='sm' class='mr-sm-2' type='text' placeholder='Найти статью')
          b-button(size='sm' class='my-2 my-sm-0' type='submit') Поиск
    
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