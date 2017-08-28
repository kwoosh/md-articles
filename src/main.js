import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { mark } from './filters'

Vue.config.productionTip = false

Vue.filter('md', mark)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
