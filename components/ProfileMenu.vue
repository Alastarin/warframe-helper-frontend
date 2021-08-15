<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-x
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        dark
        text
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>
          mdi-account-circle
        </v-icon>
        <v-icon
          right
        >
          mdi-chevron-down
        </v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://picsum.photos/200" alt="Me">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Alexandr</v-list-item-title>
            <v-list-item-subtitle>Founder of Warframe.Helper</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn
              icon
              :to="{name:'profile'}"
            >
              <v-icon>settings</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-switch
              v-model="darkTheme"
              color="purple"
            />
          </v-list-item-action>
          <v-list-item-title>Dark Mode</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer />

        <v-btn
          text
          @click="onLogout"
        >
          Log out
        </v-btn>
        <v-btn
          color="primary"
          @click="menu = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProfileMenu',
  data: () => ({
    fav: true,
    menu: false
  }),
  computed: {
    ...mapState('settings', ['dark']),
    darkTheme: {
      get () {
        return this.dark
      },
      set (newVal) {
        this.$vuetify.theme.dark = newVal
        this.setDark(newVal)
      }
    }
  },
  created () {
    this.$vuetify.theme.dark = this.dark
  },
  methods: {
    ...mapActions('settings', ['setDark']),
    async onLogout () {
      await this.$apolloHelpers.onLogout()
      this.$router.push({ name: 'auth-signin' })
    }
  }
}
</script>

<style scoped>
</style>
