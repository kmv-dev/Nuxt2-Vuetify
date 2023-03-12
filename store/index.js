export const state = () => ({
  isShow: false
})

export const mutations = {
  setIsShow (state, isShow) {
    state.isShow = isShow
  }
}

export const getters = {
  getIsShow (state) {
    return state.isShow
  }
}

export const actions = {
  setShowModal ({ commit }, isShow) {
    commit('setIsShow', isShow)
  }
}
