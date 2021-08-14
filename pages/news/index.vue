<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <page-banner>
          <v-row>
            <v-col cols="12">
              <div class="display-4">
                Main news
              </div>
            </v-col>
            <v-col cols="12">
              <v-btn color="primary">
                Learn more
              </v-btn>
            </v-col>
          </v-row>
        </page-banner>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col v-for="i in 3" :key="i" cols="12">
            <v-card>
              <v-card-text>Some Newsl</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card>
          <v-card-text>Somw widget</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageBanner from '../../components/PageBanner'

export default {
  name: 'Index',
  components: { PageBanner }
}
</script>

<style scoped>

</style>
