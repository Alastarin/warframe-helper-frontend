export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  async nuxtServerInit ({ dispatch }, { app }) {
    const darkTheme = !!app.$cookies.get('dark')
    const miniMenuVariant = !!app.$cookies.get('miniMenuVariant')
    await Promise.all([dispatch('settings/setDark', darkTheme), dispatch('settings/setMinMenu', miniMenuVariant)])
  }
}
