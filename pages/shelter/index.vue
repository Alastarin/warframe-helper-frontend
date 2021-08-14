<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <page-banner>
          <div class="display-4">
            Shelter's
          </div>
        </page-banner>
      </v-col>
    </v-row>
    <v-subheader>Most popular shelter's</v-subheader>
    <v-row>
      <v-col v-for="i in 3" :key="i" cols="4">
        <shelter-card background="/images/Mesa.jpg" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ShelterCard from '../../components/ShelterCard'
import PageBanner from '../../components/PageBanner'

export default {
  name: 'Index',
  components: { PageBanner, ShelterCard }
}
</script>
