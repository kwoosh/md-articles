export default {
  CREATE_POST(state, payload) {
    payload.author = state.user.name
    state.posts.push(payload)
  },
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_LOADED_POSTS(state, payload) {
    state.posts = payload
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_ERROR(state, payload) {
    state.error = payload
  },
  CLEAR_ERROR(state, payload) {
    state.error = null
  }
}