<template>
  <v-snackbar
    :value="snackbar"
    :timeout="timeout"
    :color="color"
    @input="closeSnackbar"
  >
    {{ text }}

    <template #action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="closeSnackbar"
      >
        Закрыть
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Snackbar',
  computed: {
    ...mapState('snackbar', ['snackbar',
      'color',
      'text',
      'timeout'])
  },
  methods: {
    ...mapActions('snackbar', ['closeSnackbar'])
  }
}
</script>

<style scoped>
</style>
