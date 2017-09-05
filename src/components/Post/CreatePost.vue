<template lang='pug'>
  b-container
    b-card(title='Удивите нас вашим творением!' 
      class='cd cd-inner')
      b-form(@submit.prevent='onCreatePost')
        h5 Заголовок:
        b-form-input(type="text"
          placeholder="Введите заголовок"
          v-model='title'
          class='inp-bg')
        b-form-text Заголовок должен быть наполнен смыслом, чтобы можно было понять, о чем будет публикация.

        h5 Метки:
        b-form-input(type="text"
          placeholder="Введите хотябы 1 метку"
          v-model.trim='kw'
          size='sm'
          class='inp-bg')
        b-form-text Вводите метки через запятые.

        h5 Текст:
        b-tabs( ref='tabs' pills)
          b-tab(title='Редактор')
            b-form-textarea(:rows='30' 
              v-model='content' 
              class='margin inp-bg')
          b-tab(title='Просмотр')
            div( v-html='cont')

        b-button(type='submit' 
          variant='primary'
          class='mg-btn') Опубликовать
      
</template>
<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import marked from 'marked'
import moment from 'moment'

moment.locale('ru')

@Component({
  components: {},
})
class CreatePost extends Vue {
  //data
  title = ''
  content = ''
  kw = ''
  //methods
  onCreatePost(e) {
    const postData = {
      title: this.title,
      content: this.content,
      dateOfPub: this.dateOfPub,
      keywords: this.keywords,
    }

    this.$store.dispatch('createPost', postData)
    this.$store.dispatch('loadPosts')
    this.$router.push('/')
  }
  //не корректно(
  @Watch('user')
  ifUser(val) {
    val ? this.$router.push('/signin') : false
  }

  // computed
  get userAuthed() {
    const u = this.$store.getters.user
    return (u !== null && u !== undefined)
  }
  get user() {
    return this.$store.getters.user
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

    return `${date} в ${time}`
  }
}

export default CreatePost
</script>
<style lang="stylus" scoped>

  .mg-btn {
    margin-top: 20px
    margin-bottom: -20px
  }

  .cd-inner {
    padding: 25px
  }

  h5 {
    margin-top: 40px
  }

  .margin {
    margin-top: 20px
  }
</style>
