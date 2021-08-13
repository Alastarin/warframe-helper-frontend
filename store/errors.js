export const state = () => ({
  errors: []
})
export const getters = {

}
export const mutations = {
  SET_ERRORS: (state, payload) => {
    state.errors = payload
  },
  CLEAR_ERRORS: (state, payload) => {
    state.errors = []
  }
}
export const actions = {
  async setErrors ({ commit }, payload) {
    await commit('SET_ERRORS', payload)
  },
  async clearErrors ({ commit }, payload) {
    await commit('CLEAR_ERRORS')
  }

}
