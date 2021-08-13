<template>
  <v-app>
    <Snackbar />
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
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
    </v-navigation-drawer>
    <v-app-bar
      app
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title>
        <nuxt-link :to="{name:'index'}" class="text-color--gradient">
          {{ title }}
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <profile-menu />
    </v-app-bar>
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <nuxt />
      </transition>
    </v-main>
    <v-footer app>
      <div class="text-center">
        {{ new Date().getFullYear() }}
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Snackbar from '../components/Snackbar'
import ProfileMenu from '~/components/ProfileMenu'
export default {
  components: {
    ProfileMenu,
    Snackbar
  },
  middleware: 'authenticated',
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
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Warframe.Helper'
  })
}
</script>
