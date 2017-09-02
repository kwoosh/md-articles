<template lang='pug'>
  b-card(title='Публикация, претендующая на приглашение' class='post-card')
    b-form(@submit='onCreatePost')
      h5 Заголовок:
      b-form-input(type="text"
        placeholder="Введите заголовок"
        v-model='title')
      b-form-text Заголовок должен быть наполнен смыслом, чтобы можно было понять, о чем будет публикация.

      h5 Метки:
      b-form-input(type="text"
        placeholder="Введите хотябы 1 метку"
        v-model.trim='kw'
        size='sm')
      b-form-text Вводите метки через запятые.

      h5 Текст:
      b-tabs( ref='tabs' pills)
        b-tab(title='Редактор')
          b-form-textarea(:rows='50' v-model='content' class='margin')
        b-tab(title='Просмотр')
          div( v-html='cont')

      b-button(type='submit' variant='primary') Опубликовать
      
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
import marked from 'marked'
import moment from 'moment'

moment.locale('ru')

@Component({
  components: {},
})
//TODO: сделай еще валидацию формочек
class CreatePost extends Vue {
  title = ''
  content = ''
  kw = ''

  onCreatePost(e) {
    const postData = {
      id: 3,
      title: this.title,
      content: this.content,
      dateOfPub: this.dateOfPub,
      author: 'Admin',
      keywords: this.keywords
    }

    this.$store.dispatch('createPost', postData)
    this.$router.push('/posts')
  }

  get keywords() {
    return this.kw.split(',')
  }

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

  .margin {
    margin-top: 20px
  }
</style>
