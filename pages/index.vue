<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <page-banner height="256">
          Main Page1
        </page-banner>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageBanner from '../components/PageBanner'

export default {
  name: 'Index',
  components: {
    PageBanner
  }
}
</script>

<style scoped>

</style>
