<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <page-banner>
          <v-card-title>
            This is Awesome Shelter
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto, at cupiditate facere harum iste
            iusto laboriosam minus mollitia qui reiciendis reprehenderit sapiente sunt! A aspernatur delectus dicta in
            totam.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">
              Visit this awesome Shelter
            </v-btn>
          </v-card-actions>
        </page-banner>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in 3" :key="i" cols="4">
        <shelter-card />
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
