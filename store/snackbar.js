export const state = () => ({
  snackbar: false,
  color: 'info',
  text: '',
  timeout: 2000
})
export const getters = {}
export const mutations = {
  /**
   *
   * @param state
   * @param payload
   * @constructor
   */
  OPEN_SNACKBAR: (state, { text, color }) => {
    state.snackbar = true
    state.color = color
    state.text = text
  },
  CLOSE_SNACKBAR: (state, payload) => {
    state.snackbar = false
  }
}
export const actions = {
  /**
   *
   * @param commit
   * @param text
   * @param color
   * @returns {Promise<void>}
   */
  async openSnackbar ({ commit }, { text, color }) {
    await commit('OPEN_SNACKBAR', { text, color })
  },
  async closeSnackbar ({ commit }, payload) {
    await commit('CLOSE_SNACKBAR')
  }
}
