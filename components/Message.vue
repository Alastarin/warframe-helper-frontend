<template>
  <v-row :justify="incoming? 'start':'end'">
    <v-col cols="auto" :order="incoming? 'first':'last'">
      <v-avatar size="36" :color="incoming? 'accent':'primary'">
        <span class="white--text">G</span>
      </v-avatar>
    </v-col>
    <v-col cols="auto">
      <v-card max-width="450" :color="incoming? '':'primary'" :class="{'white--text':!incoming}" :dark="!incoming">
        <v-card-text>
          <v-row>
            <v-col>
              {{
                message
              }}
            </v-col>
          </v-row>
          <v-row :justify="incoming? 'start':'end'">
            <v-col cols="auto">
              Today
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
      default: ''
    },
    incoming: {
      type: Boolean,
      default: false
    }
  }
}
</script>
