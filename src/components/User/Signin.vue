<template lang='pug'>
  b-container
    b-card(title='Уже зарегестрированы?' class='cd')

      b-form(@submit.prevent='onSignin')
        b-form-input(type='text' 
          v-model.trim='email'
          placeholder='Email'
          required
          class='inp-bg')
        b-form-input(type='password' 
          v-model.trim='password'
          placeholder='Пароль' 
          required
          class='inp-bg')
        //- b-alert(variant='danger'
        //-   dismissible
        //-   :show='!!err') {{ msg }}
        b-button(type='submit' variant='success') Войти
</template>
<script>
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component({
  components: {}
})
class Signin extends Vue {
  //data
  password = ''
  email = ''
  //computed
  get err() {
    return this.$store.getters.error
  }
  get msg() {
    return this.err ? this.err.message : 'no'
  }
  //methods
  onSignin(e) {
    const user = {
      password: this.password,
      email: this.email
    }

    this.$store.dispatch('signUserIn', user)
  }
}

export default Signin
</script>
<style lang='stylus' scoped>
  input {
    margin: 20px 0
  }
</style>
