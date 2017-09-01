import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  getters,
  mutations: {
    createPost(state, payload) {
      state.posts.push(payload)
    }
  },
  actions: {
    createPost({commit}, payload) {
      const post = {
        id: 3,
        title: payload.title,
        content: payload.content,
        dateOfPub: payload.dateOfPub,
        author: payload.author,
        keywords: payload.keywords
      }
      
      commit('createPost', post)
    },
  }
})
