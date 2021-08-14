<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <page-banner height="164">
          Profile
        </page-banner>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-text>
            <v-row justify="center">
              <v-col cols="auto">
                <v-avatar
                  color="primary"
                  size="128"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                asf
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>
                asfasf
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text>
                asfasf
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>
                asfasf
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-subheader>Order Items</v-subheader>
        <v-row>
          <v-col>
            <v-card>
              <v-card-text>asf</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text>asf</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text>asf</v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card>
              <v-card-text>asf</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageBanner from '../../components/PageBanner'

export default {
  name: 'Index',
  components: {
    PageBanner
  }
}
</script>

<style scoped>

</style>
