<template>
  <v-card hover class="pa-2 pb-0" v-bind="$attrs" :width="$attrs.width||150">
    <v-sheet rounded elevation="6">
      <v-img
        :src="image"
        contain
        height="86"
        class="rounded"
      />
    </v-sheet>
    <v-card-text class="text-center subtitle-2 text-uppercase">
      {{ title }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'MiniCard',
  props: {
    image: {
      type: String,
      default: 'https://picsum.photos/200'
    },
    imageHeight: {
      type: [Number, String],
      default: 150
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    attr () {
      return this.$attrs
    }
  }
}
</script>

<style scoped>

</style>
