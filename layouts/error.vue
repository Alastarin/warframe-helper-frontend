<template>
  <client-only>
    <video-background
      :src="videoUrl"
      style="height: 100vh;"
    >
      <v-container fluid fill-height>
        <v-row justify="center" align="center">
          <v-col cols="auto">
            <h1 class="text-h1 text-center font-weight-bold text-color--gradient">
              {{ statusCode }}
            </h1>
            <v-divider class="my-4" />
          </v-col>
          <v-col cols="12">
            <h2 class="text-h2 text-center">
              Where's the page, Lebowski?
            </h2>
          </v-col>
          <v-col cols="12">
            <h5 class="text-h5 text-center">
              A Barry says you have it!
            </h5>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn x-large color="primary" :to="{name:'index'}">
              Go Back
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </video-background>
  </client-only>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    pageNotFound: '404 Not found',
    otherError: 'An error occurred',
    videoUrl: 'videos/page_lebowski.mp4'
  }),
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  computed: {
    statusCode () {
      return (this.error && this.error.statusCode) || 500
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
