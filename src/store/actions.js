import firebase from 'firebase'

export default {
  loadPosts({ commit }) {
    commit('SET_LOADING', true)

    firebase.database().ref('articles').once('value')
      .then(data => {
        const posts = []
        const obj = data.val()

        for (let key in obj) {
          posts.push({
            id: key,
            title: obj[key].title,
            content: obj[key].content,
            dateOfPub: obj[key].dateOfPub,
            author: obj[key].author,
            keywords: obj[key].keywords
          })
        }

        commit('SET_LOADED_POSTS', posts)
        commit('SET_LOADING', false)
      }).catch(err => {
        commit('SET_LOADING', false)
        console.log(err)
      })
  },
  createPost({ commit, getters }, payload) {
    const post = {
      title: payload.title,
      content: payload.content,
      dateOfPub: payload.dateOfPub,
      author: getters.user.id,
      keywords: payload.keywords
    }

    firebase.database().ref('articles').push(post)
      .then(data => {
        const key = data.key
        commit('CREATE_POST', {
          ...post,
          id: key
        })
      }).catch(err => console.log(err))
  },
  signUserOut({ commit }) {
    firebase.auth().signOut()

    commit('SET_USER', null)
  },
  signUserUp({ commit }, payload) {
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('SET_USER', {
          id: user.uid,
          email: payload.email,
        })
      })
      .catch(err => console.log(err))
  },
  signUserIn({ commit }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        commit('SET_USER', {
          id: user.uid,
          email: payload.email,
        })
      })
      .catch(err => console.log(err))
  },
  autoSignIn({ commit }, payload) {
    commit('SET_USER', {
      id: payload.uid,
      email: payload.email,
    })
  },
}