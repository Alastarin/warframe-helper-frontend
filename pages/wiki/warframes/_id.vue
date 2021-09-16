<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" sm="9">
        <v-row>
          <v-col cols="12" sm="4">
            <v-card>
              <v-img
                :src="image"
                class="rounded"
              >
                <v-card-title class="white--text">
                  {{ $route.params.id }}
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="8">
            <v-card height="100%">
              <v-card-title>
                {{ $route.params.id }}
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    Ash is great for players looking for a stealthier approach to combat. lethal abilities are
                    complemented by powers of distraction.
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-for="(param,index) in params" :key="index">
                    <v-card outlined hover>
                      <v-card-text class="text-center">
                        <div class="text-h6">
                          {{ param.value }}
                        </div>
                        <div>{{ param.name }}</div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="pa-0 overflow-hidden" hover>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="auto">
                    <v-sheet rounded elevation="8">
                      <v-img :src="image" class="rounded" height="136" width="136" />
                    </v-sheet>
                    <v-card>
                      <v-card-text class="pa-2">
                        25 | 150
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col>
                    <v-card-title>
                      Title
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi, deserunt dignissimos dolor
                      dolorem earum eius enim et illum incidunt iusto nostrum odit praesentium quam quo rem sint ut
                      voluptas.
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
              <v-divider />
              <v-card-actions class="pa-0 text-center">
                <v-btn
                  tile
                  color="primary"
                  text
                  block
                  @click="show = !show"
                >
                  <v-icon left>
                    {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                  </v-icon>
                  Explore
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="show">
                  <v-divider />

                  <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time
                    for
                    sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file!
                    Hey,
                    you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a
                    way
                    to escape.
                  </v-card-text>
                </div>
              </v-expand-transition>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.smAndUp" cols="3">
        <WarframeNavigation :warframes="warframes" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import WarframeNavigation from './WarframeNavigation'

export default {
  name: 'Id',
  components: {
    WarframeNavigation
  },
  props: {
    image: {
      type: String,
      default: 'https://picsum.photos/200'
    }
  },
  data () {
    return {
      show: false,
      params: [{ name: 'Health', value: 100 },
        { name: 'Armor', value: 150 },
        { name: 'Energy', value: 65 },
        { name: 'Shield', value: 50 }]
    }
  },
  computed: {
    ...mapState('warframes', ['warframes'])
  }
}
</script>
