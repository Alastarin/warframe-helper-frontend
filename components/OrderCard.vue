<template>
  <v-card
    hover
  >
    <v-list-item dense>
      <v-list-item-avatar color="grey" />
      <v-list-item-content>
        <v-list-item-title>
          Vauban Prime Set
        </v-list-item-title>
        <v-list-item-subtitle>
          Kurt Wagner
        </v-list-item-subtitle>
        <div class="text-caption">
          <v-row dense justify="space-between">
            <v-col cols="auto">
              <v-icon small>
                attach_money
              </v-icon>
              490
            </v-col>
            <v-col cols="auto">
              <v-icon small>
                filter_1
              </v-icon>
              1
            </v-col>
            <v-col cols="auto">
              <v-icon small>
                military_tech
              </v-icon>
              Rank 5 of 5
            </v-col>
          </v-row>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-row
        dense
        justify="center"
      >
        <v-col cols="auto">
          <v-btn
            small
          >
            <v-icon small>
              chat
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
          >
            <v-icon small>
              file_copy
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: 'OrderCard',
  methods: {
    test () {
      return ''
    }
  }
}
</script>
