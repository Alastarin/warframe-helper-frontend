import { onError } from 'apollo-link-error'

export default ({ store }) => {
  const errorLink = onError(({ graphQLErrors, networkError, response }) => {
    const errors = graphQLErrors[0].extensions?.response?.message || graphQLErrors[0].message
    const message = graphQLErrors[0].extensions?.response?.error || 'Internal Error'
    if (store.state.errors.errors.length) {
      store.dispatch('errors/clearErrors')
    }
    if (Array.isArray(errors)) {
      store.dispatch('errors/setErrors', errors[0])
    }
    store.dispatch('snackbar/openSnackbar', { text: message, color: 'danger' })
  })
  return {
    link: errorLink,
    httpEndpoint: 'http://localhost:3000/graphql'
  }
}
