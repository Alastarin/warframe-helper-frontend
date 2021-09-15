<template>
  <v-app>
    <Snackbar />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniMenuVariant"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list nav dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="{name:item.to}"
          nuxt
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <div class="pa-2">
          <v-btn
            block
            color="accent"
            class="rounded pa-0"
            @click.stop="setMinMenu(!miniMenuVariant)"
          >
            <v-icon>mdi-{{ `chevron-${miniMenuVariant ? 'right' : 'left'}` }}</v-icon>
            <span v-show="!miniMenuVariant">Collapse</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar
      app
      elevate-on-scroll
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon class="rounded" :ripple="{ center: true }" @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        <nuxt-link :to="{name:'index'}" class="text-color--gradient">
          {{ title }}
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn text :color="dark? 'primary' : ''" @click="darkTheme =! darkTheme">
        <v-icon>
          mdi-theme-light-dark
        </v-icon>
      </v-btn>
      <v-divider class="mx-2" vertical inset />
      <profile-menu v-if="isAuthenticated" />
      <div v-else class="d-inline-flex mx-n3">
        <v-col cols="auto">
          <v-btn color="primary" small text :to="{name:'auth-signin'}">
            Sign In
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" small :to="{name:'auth-signup'}">
            Sign Up
          </v-btn>
        </v-col>
      </div>
    </v-app-bar>
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt />
      </transition>
    </v-main>
    <v-footer padless>
      <v-container fluid>
        <v-row
          justify="center"
          align="center"
        >
          <v-col cols="auto">
            <v-btn
              v-for="link in links"
              :key="link"
              color="white"
              text
            >
              {{ link }}
            </v-btn>
          </v-col>
          <v-spacer />
          <v-col
            class="text-center"
            cols="auto"
          >
            {{ new Date().getFullYear() }} — <strong>Warframe.Helper</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Snackbar from '../components/Snackbar'
import ProfileMenu from '~/components/ProfileMenu'

export default {
  name: 'DefaultLayout',
  components: {
    ProfileMenu,
    Snackbar
  },
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ],
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: 'article',
        title: 'News',
        to: 'news'
      },
      {
        icon: 'store',
        title: 'Market',
        to: 'market'
      },
      {
        icon: 'mdi-wikipedia',
        title: 'Wiki',
        to: 'wiki'
      },
      {
        icon: 'storefront',
        title: 'Shelter',
        to: 'shelter'
      }
    ],
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us'
    ],
    right: true,
    rightDrawer: false,
    title: 'Warframe.Helper'
  }),
  computed: {
    ...mapState('settings', ['miniMenuVariant', 'dark']),

    isAuthenticated () {
      return !!this.$apolloHelpers.getToken()
    },
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
    ...mapActions('settings', ['setMinMenu', 'setDark'])

  }
}
</script>
