import { mapActions, mapState } from 'vuex'
import Vue from 'vue'
Vue.mixin({
  computed: {
    ...mapState('errors', ['errors'])
  },
  methods: {
    ...mapActions('errors', ['clearErrors']),
    ...mapActions('snackbar', ['openSnackbar']),
    hasValidationError (errorKey, showMessage = false) {
      if (!showMessage) { return !!this.errors?.[errorKey] || false }
      return this.errors?.[errorKey] || ''
    }
  }
})
