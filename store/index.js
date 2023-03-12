export const state = () => ({
  isShow: false,
  posts: []
})

export const mutations = {
  setIsShow (state, isShow) {
    state.isShow = isShow
  },
  setPosts (state, data) {
    state.posts = data
  }
}

export const getters = {
  getIsShow (state) {
    return state.isShow
  },
  getPosts (store) {
    return store.posts
  }
}

export const actions = {
  setShowModal ({ commit }, isShow) {
    commit('setIsShow', isShow)
  },
  async nuxtServerInit ({
    commit
  }, context) {
    const posts = await this.$axios.$get('http://localhost:3000/db.json')
    commit('setPosts', posts.posts)
  }
}
