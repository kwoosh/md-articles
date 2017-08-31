export default {
  loadedPost(state) {
    return id => state.posts.find(post => post.id == id)
  },
  allPosts(state) {
    return state.posts
  }
}