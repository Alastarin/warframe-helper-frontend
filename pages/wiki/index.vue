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
    <v-row>
      <v-col v-for="(category,index) in categories" :key="index" cols="auto">
        <mini-card :title="category" :to="{name:'wiki-warframes'}" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageBanner from '../../components/PageBanner'
import MiniCard from '../../components/MiniCard'

export default {
  name: 'Index',
  components: {
    PageBanner,
    MiniCard
  },
  data () {
    return {
      categories: ['warframes', 'mods', 'resources']
    }
  }
}
</script>

<style scoped>

</style>
