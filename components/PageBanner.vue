<template>
  <v-card hover class="page-banner__wrapper">
    <v-parallax
      :height="height"
      :src="src"
    >
      <slot />
    </v-parallax>
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
        return '256'
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
