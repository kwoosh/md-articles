import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  getters: {
    loadedPost(state) {
      return id => state.posts.find(post => post.id == id)
    }
  }
})
