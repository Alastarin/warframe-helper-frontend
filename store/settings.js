export const state = () => ({
  dark: false,
  miniMenuVariant: false
})

export const getters = {}

export const mutations = {
  SET_DARK: (state, payload) => {
    state.dark = payload
  },
  SET_MIN_MENU: (state, payload) => {
    state.miniMenuVariant = payload
  }
}

export const actions = {
  async setDark ({ commit }, payload) {
    this.$cookies.set('dark', payload)
    await commit('SET_DARK', payload)
  },
  async setMinMenu ({ commit, app }, payload) {
    this.$cookies.set('miniMenuVariant', payload)
    await commit('SET_MIN_MENU', payload)
  }

}
