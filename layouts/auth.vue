<template>
  <v-app>
    <Snackbar />
    <v-main class="auth-layout">
      <v-container fluid class="pa-0 fill-height">
        <v-row class="fill-height" no-gutters>
          <v-col cols="12" sm="6" offset-sm="6" md="4" offset-md="8">
            <v-sheet class="fill-height auth-layout__auth-card transparent">
              <v-row class="fill-height" no-gutters justify="center">
                <v-col align-self="center" cols="10">
                  <transition
                    name="fade"
                    mode="out-in"
                  >
                    <Nuxt />
                  </transition>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '../components/Snackbar'

export default {
  name: 'Auth',
  components: {
    Snackbar
  }
}
</script>

<style scoped>

</style>
