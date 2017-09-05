import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import PreLoader from '@/components/PreLoader.vue'

Vue.component('pre-loader', PreLoader)

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDr7BV4XnR9ooziHYHy4TOm8vD4X3TQ62M",
      authDomain: "markdown-articles.firebaseapp.com",
      databaseURL: "https://markdown-articles.firebaseio.com",
      projectId: "markdown-articles",
      storageBucket: "markdown-articles.appspot.com",
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    this.$store.dispatch('loadPosts')
  }
})
