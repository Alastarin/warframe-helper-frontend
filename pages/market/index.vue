<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <page-banner>
          <v-row
            class="fill-height"
            justify="center"
            align="center"
          >
            <v-col
              cols="12"
              md="6"
            >
              <v-autocomplete
                v-model="select"
                :loading="loading"
                :items="items"
                :search-input.sync="search"
                cache-items
                flat
                hide-no-data
                hide-details
                label="Search"
                solo
              />
            </v-col>
          </v-row>
        </page-banner>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-row justify="center" dense>
              <v-col cols="auto">
                <v-btn-toggle
                  v-model="orderOwnerStatus"
                  dense
                  mandatory
                  color="primary"
                  rounded
                >
                  <v-btn small value="all">
                    All
                  </v-btn>
                  <v-btn small value="inGame">
                    In Game
                  </v-btn>
                  <v-btn small value="onSite">
                    On Site
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="auto">
                <v-btn-toggle
                  v-model="orderSellStatus"
                  dense
                  mandatory
                  color="primary"
                  rounded
                >
                  <v-btn small value="wts">
                    Want to sell
                  </v-btn>
                  <v-btn small value="wtb">
                    Want to buy
                  </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in 54" :key="i" cols="6">
        <order-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OrderCard from '@/components/OrderCard'
import PageBanner from '@/components/PageBanner'
export default {
  name: 'Index',
  components: {
    OrderCard,
    PageBanner
  },
  data: () => ({
    select: '',
    loading: false,
    items: [],
    orderOwnerStatus: ''
  }),
  methods: {
    search () {
      return ''
    }
  }
}
</script>
