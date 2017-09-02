import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state,
  getters,
  mutations: {
    CREATE_POST(state, payload) {
      state.posts.push(payload)
    },
    SIGN_USER_UP(state, payload) {
      state.users.push(payload)
    },
    SIGN_USER_IN(state, payload) {
      const u = state.users.find(user => (user.name == payload.name || user.email == payload.email) && user.password == payload.password )
      state.user = {
        id: u.id,
        name: u.name,
        dateOfReg: u.dateOfReg,
        email: u.email,
        postsId: u.postId,
        password: u.password
      }
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
      
      commit('CREATE_POST', post)
    },
    signUp({commit}, payload) {
      const user = {
        email: payload.email,
        password: payload.password,
        name: payload.name,
        dateOfReg: payload.dateOfReg,
        id: this.id, //TODO: нужен динамический id
        postId: this.postId
      }

      commit('SIGN_USER_UP', user)
    },
    signIn({commit}, payload) {
      const user = {
        email: payload.email,
        password: payload.password,
        name: payload.name,
      }

      commit('SIGN_USER_IN', user)
    },

  }
})
