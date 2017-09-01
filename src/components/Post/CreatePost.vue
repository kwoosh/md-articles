<template lang='pug'>
  div 
    b-card(title='Новая статья')

      h5 Заголовок:
      b-form-input(type="text"
        placeholder="Введите заголовок"
        v-model='title')
      b-form-text Заголовок должен быть наполнен смыслом, чтобы можно было понять, о чем будет публикация.

      h5 Текст:
      b-tabs( ref='tabs' card)
        b-tab(title='Редактор')
          b-form-textarea(:rows='50' v-model='content')
        b-tab(title='Просмотр')
      
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import marked from 'marked'

@Component({
  components: {},
})

class CreatePost extends Vue {
  title = ''
  content = ''
}

export default CreatePost
</script>
<style lang="stylus" scoped>
  h5 {
    margin-top: 40px
  }
</style>
