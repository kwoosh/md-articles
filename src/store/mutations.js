export default {
  CREATE_POST(state, payload) {
    payload.author = state.user.name
    state.posts.push(payload)
    //state.user.postsId.push(payload.id)
  },
  SET_USER(state, payload) {
    state.user = payload
  },
  SET_LOADED_POSTS(state, payload) {
    state.posts = payload
  },
  SET_LOADING(state, payload) {
    state.loading = payload
  }
}