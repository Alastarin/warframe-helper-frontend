<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <page-banner>
          <v-card-title>
            POWER UP WITH PRIME VAULT
          </v-card-title>
          <v-card-text>
            Add Rhino Prime and Nyx Prime to your Arsenal!
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">
              Learn more
            </v-btn>
          </v-card-actions>
        </page-banner>
      </v-col>
    </v-row>
    <v-subheader>
      Shelter
    </v-subheader>
    <v-slide-group show-arrows>
      <v-slide-item
        v-for="n in 25"
        :key="n"
        v-slot="{ toggle }"
      >
        <mini-card class="ma-4" :title="'Shelter '+n" @click.native="toggle" />
      </v-slide-item>
      <template #next>
        <v-btn icon>
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <template #prev>
        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </template>
    </v-slide-group>

    <v-row>
      <v-col cols="8">
        <v-subheader>
          News
        </v-subheader>
        <v-row>
          <v-col v-for="i in 5" :key="i" cols="12">
            <news-card />
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="auto">
            <v-btn color="primary" text>
              Load more
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-subheader>
          Timers
        </v-subheader>
        <v-row>
          <v-col v-for="i in 5" :key="i" cols="12">
            <v-card hover>
              <v-card-title>04D 13h 23m</v-card-title>
              <v-card-text>Baro Ki'Teer is absent and arrives in</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageBanner from '../components/PageBanner'
import MiniCard from '../components/MiniCard'
import NewsCard from '../components/NewsCard'

export default {
  name: 'Index',
  components: {
    NewsCard,
    PageBanner,
    MiniCard
  },
  data () {
    return {
      carousel: ''
    }
  }
}
</script>
