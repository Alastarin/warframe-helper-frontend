<template>
  <v-card
    hover
  >
    <v-list-item dense>
      <v-list-item-avatar>
        <v-img src="https://picsum.photos/200" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          Vauban Prime Set
        </v-list-item-title>
        <v-list-item-subtitle>
          Kurt Wagner
        </v-list-item-subtitle>
        <div class="text-caption">
          <v-row dense align="center">
            <v-col cols="auto">
              <v-icon small>
                attach_money
              </v-icon>
              <span>490</span>
            </v-col>
            <v-col cols="auto">
              <v-icon small>
                filter_1
              </v-icon>
              <span>1</span>
            </v-col>
            <v-col cols="auto">
              <v-icon small>
                military_tech
              </v-icon>
              <span>Rank 5 of 5</span>
            </v-col>
          </v-row>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-card-actions>
      <v-row
        dense
        justify="center"
      >
        <v-col cols="auto">
          <v-btn
            small
            color="primary"
          >
            <v-icon small>
              chat
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn
            small
            color="secondary"
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
