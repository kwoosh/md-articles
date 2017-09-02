export default {
  CREATE_POST(state, payload) {
    payload.author = state.user.name
    state.posts.push(payload)
    state.user.postsId.push(payload.id)
  },
  SIGN_USER_UP(state, payload) {
    state.users.push(payload)
  },
  SIGN_USER_OUT(state, payload) {
    state.user = payload
  },
  SIGN_USER_IN(state, payload) {
    const u = state.users.find(user => (user.name == payload.name || user.email == payload.email) && user.password == payload.password )
    if(u) {
      state.user = {
        id: u.id,
        name: u.name,
        dateOfReg: u.dateOfReg,
        email: u.email,
        postsId: u.postsId,
        password: u.password
      }

      state.authMsg = ''
    } else {
      state.authMsg = 'Не правильный пароль или логин.'
    }
  }
}