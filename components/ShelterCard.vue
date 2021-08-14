<template>
  <v-card hover>
    <v-img :src="background" height="164" />
    <v-card-title>
      Awesomse shelter
    </v-card-title>
    <v-card-text>
      lorem
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">
        Visit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'ShelterCard',
  props: {
    background: {
      type: [String],
      required: true
    }
  }
}
</script>
