export default {
  loadedPost(state) {
    return id => state.posts.find(post => post.id == id)
  },
  allPosts(state) {
    return state.posts
  },
  slicesOfPosts(state) {
    return state.posts.map(post => post.content.substr(0, 550) + '...')
  }
}