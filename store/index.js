export const state = () => ({
  showParams: {
    isOpen: false,
    isStatus: ''
  },
  modalOptions: {},
  posts: []
})

export const mutations = {
  setModalOptions (state, payload) {
    state.modalOptions = payload
  },
  setModalParams (state, payload) {
    state.showParams.isOpen = payload.isOpen
    state.showParams.isStatus = payload.isStatus
  },
  setEditPost (state, payload) {
    state.posts = state.posts.map(post => (
      post.id === payload.id
        ? { ...post, name: payload.name }
        : post
    ))
  },
  setSearch (state, searchValue) {
    state.posts = state.posts.filter((post) => {
      return post.name?.toLowerCase().includes(searchValue.toLowerCase())
    })
  },
  setDeletePost (state, id) {
    state.posts = state.posts.filter(post => post.id !== id)
  },
  setPosts (state, data) {
    state.posts = data
  },
  setNewPost (state, payload) {
    state.posts.unshift(payload)
  }
}

export const getters = {
  getModalParams (state) {
    return state.showParams
  },
  getPosts (state) {
    return state.posts
  },
  getModalStatus (state) {
    return state.showParams.isStatus
  },
  getModalOptions (state) {
    return state.modalOptions
  }
}

export const actions = {
  setShowModalParams ({ commit }, payload) {
    commit('setModalParams', payload)
  },
  setModalOptions ({ commit }, payload) {
    commit('setModalOptions', payload)
  },
  setNewPost ({ commit }, payload) {
    commit('setNewPost', payload)
  },
  editPost ({ commit }, payload) {
    commit('setEditPost', payload)
  },
  deletePost ({ commit }, id) {
    commit('setDeletePost', id)
  },
  search ({ commit }, searchValue) {
    commit('setSearch', searchValue)
  },
  async nuxtServerInit ({
    commit
  }, context) {
    const posts = await this.$axios.$get('http://localhost:3000/db.json')
    commit('setPosts', posts.posts)
  }
}
