<template lang='pug'>
  div 
    b-card(title='Новая статья' class='post-card')

      h5 {{ dateOfPub }}

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
          div( v-html='cont')
      
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import marked from 'marked'
import moment from 'moment'

moment.locale('ru')

@Component({
  components: {},
})

class CreatePost extends Vue {
  title = ''
  content = ''
  keywords = ''

  get cont() {
    return marked(this.content)
  }

  get dateOfPub() {
    const arr = moment().format('LLLL').split(',')

    const day = arr[0][0].toUpperCase() + arr[0].slice(1)
    const time = arr[2]
    const date = arr[1]

    return `${date} | ${time} ${day}`
  }
}

export default CreatePost
</script>
<style lang="stylus" scoped>
  h5 {
    margin-top: 40px
  }
</style>
