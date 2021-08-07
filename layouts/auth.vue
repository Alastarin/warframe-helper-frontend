<template>
  <v-app>
    <v-main class="auth-layout">
      <v-container fluid class="pa-0 fill-height">
        <v-row class="fill-height" no-gutters>
          <v-col cols="4" offset="8">
            <v-sheet class="fill-height">
              <Nuxt />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped>

</style>
