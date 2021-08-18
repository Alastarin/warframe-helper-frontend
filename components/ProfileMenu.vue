<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="true"
    :nudge-width="200"
    max-width="300"
    offset-x
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        text
        color="primary"
        v-bind="attrs"
        v-on="on"
      >
        <v-avatar color="primary" size="24">
          <span class="white--text">A</span>
        </v-avatar>
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
              :to="{name:'settings'}"
            >
              <v-icon>settings</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list nav dense>
        <v-list-item v-for="(link,index) in links" :key="index" link :to="{name:link.name}" nuxt>
          <v-list-item-icon>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-switch
              v-model="darkTheme"
              inset
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
    menu: false,
    links: [{
      name: 'profile',
      title: 'Profile',
      icon: 'mdi-account'
    },
    {
      name: 'messages',
      title: 'Messages',
      icon: 'mdi-message'
    }]
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
