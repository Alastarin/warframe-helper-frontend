<template>
  <v-card
    hover
    class="pa-2 pb-0 overflow-hidden"
    :width="$attrs.width || defaultWidth"
    v-bind="$attrs"
  >
    <v-row justify="center" no-gutters class="fill-height">
      <v-col cols="12">
        <v-sheet rounded elevation="8">
          <v-img
            :src="image"
            :height="imageHeight"
            position="center top"
            class="rounded"
          />
        </v-sheet>
      </v-col>
      <v-spacer />
      <v-col>
        <v-card-text class="text-center pa-2 text-uppercase">
          {{ title }}
        </v-card-text>
      </v-col>
    </v-row>
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
      default: 120
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    defaultWidth () {
      return 136
    }
  }
}
</script>

<style scoped>

</style>
