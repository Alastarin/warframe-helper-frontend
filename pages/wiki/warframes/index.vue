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
        </page-banner>
      </v-col>
    </v-row>
    <v-row justify="space-between" align="center">
      <v-col cols="auto">
        <v-subheader>
          Warframes
        </v-subheader>
      </v-col>
      <v-col cols="auto">
        <v-btn-toggle dense>
          <v-btn x-small>
            Prime
          </v-btn>
          <v-btn x-small>
            Usual
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="(warframe,index) in warframes"
        :key="index"
        cols="auto"
      >
        <mini-card
          :title="warframe.name"
          :image="warframe.image"
          height="100%"
          :to="{name:'wiki-warframes-id',params:{id:warframe.name}}"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import PageBanner from '../../../components/PageBanner'
import MiniCard from '../../../components/MiniCard'

export default {
  name: 'Index',
  components: {
    PageBanner,
    MiniCard
  },
  computed: {
    ...mapState('warframes', ['warframes'])
  }
}
</script>

<style scoped>

</style>
