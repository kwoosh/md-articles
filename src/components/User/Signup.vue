<template lang='pug'>
  b-container
    b-card(title='Регистрация' class='cd')
      b-form(@submit='onSignup')

        b-form-group(id='email'
          label='Ваш email:' 
          label-for='emailInput'
          description='Ваша почта будет использоваться только для входа.')
          b-form-input(id='emailInput'
            type='email' 
            v-model.trim='form.email' 
            required
            class='inp-bg')

        b-form-group(id='password'
          label='Придумайте пароль:' 
          label-for='passwordInput'
          :description='passwordMsg'
          title='lol')
          b-form-input(id='passwordInput'
            type='password' 
            v-model.trim='form.password' 
            required
            class='inp-bg')
          b-form-feedback Введите не меньше 6 символов
        
        b-form-group(id='confirmPassword'
          label='Введите пароль повторно:' 
          label-for='confirmPasswordInput'
          :description='passwordMatch')
          b-form-input(id='confirmPasswordInput'
            type='password' 
            v-model.trim='form.confirmPassword' 
            required
            class='inp-bg')
        
        b-button(type='submit' variant='success') Зарегестрироваться
</template>
<script>
import { Component, Vue, Watch } from 'vue-property-decorator'
import moment from 'moment'

moment.locale('ru')

@Component({
  components: {}
})
class Signup extends Vue {
  //data
  form = {
    email: '',
    password: '',
    confirmPassword: ''
  }
  // computed
  get passwordMatch() {
    if (this.form.password === this.form.confirmPassword) {
      return 'Отлично, пароли совпадают'
    } else {
      return 'Пароли не совпадают'
    }
  }
  get passwordMsg() {
    if (this.form.password.length < 6) {
      return 'Пароль должен содержать не меньше 6 символов'
    } else {
      return 'Надежный пароль ;)'
    }
  }
  get user() {
    return this.$store.getters.user
  }
  //methods
  onSignup(e) {
    const user = { 
      email: this.form.email,
      password: this.form.password,
      dateOfReg: moment().format('LLLL'),
    }

    this.$store.dispatch('signUserUp', user)
    this.$router.push('/')
  }
}

export default Signup
</script>
<style lang='stylus' scoped>

</style>
