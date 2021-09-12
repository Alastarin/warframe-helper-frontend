<template>
  <v-card
    hover
    dark
  >
    <v-img
      class="pa-4"
      :src="src"
      position="50% 20%"
      :max-height="height"
    >
      <slot />
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    src: {
      type: [String],
      default () {
        return '/images/Mesa.jpg'
      }
    },
    height: {
      type: [String, Number],
      default () {
        return '186'
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page{
  &-banner{
    &__wrapper{
    }
  }
}
</style>
