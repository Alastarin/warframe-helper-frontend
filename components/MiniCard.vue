<template>
  <v-card hover width="150" class="pa-2 pb-0">
    <v-sheet rounded elevation="6">
      <v-img src="https://picsum.photos/200" max-height="150" max-width="150" contain class="rounded" />
    </v-sheet>
    <v-card-text class="text-center">
      {{ title }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MiniCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
