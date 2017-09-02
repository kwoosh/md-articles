<template lang='pug'>
  b-card(title='Уже зарегестрированы?' class='cont')
    b-form(@submit.prevent='onSignin')
      | Email:{{ form.email }}
      | Name:{{ form.name }}
      b-form-input(type='text' 
        v-model.trim='form.input'
        placeholder='Имя или email'
        @input='nameOrEmail'
        required)
      b-form-input(type='password' 
        v-model.trim='form.password'
        placeholder='Пароль' 
        required)
      div {{ this.msg }}
      
      b-button(type='submit' variant='success') Войти
</template>
<script>
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
class Signin extends Vue {
  //data
  form = {
    input: '',
    password: '',
    name: null,
    email: null
  }
  msg = this.$store.getters.authMsg
  //methods
  onSignin(e) {
    const user = {
      password: this.form.password,
      email: this.form.email,
      name: this.form.name
    }

    this.$store.dispatch('signIn', user)

    this.msg = 'Что-то не правильно ввел...'
  }
  nameOrEmail() {
    const input = this.form.input

    if (~input.indexOf('@')) {
      this.form.email = input
      this.form.name = null
    } else {
      this.form.name = input
      this.form.email = null
    }
  }
}

export default Signin
</script>
<style lang='stylus' scoped>
  .cont {
    margin: 30px 200px
    padding: 20px 40px
  }

  input {
    margin: 20px 0
  }
</style>
