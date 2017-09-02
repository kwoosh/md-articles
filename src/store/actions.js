export default {
  createPost({commit}, payload) {
    const post = {
      id: payload.id,
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
  signOut({commit}, payload) {
    commit('SIGN_USER_OUT', payload)
  }
}