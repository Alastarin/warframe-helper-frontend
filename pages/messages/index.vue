<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-card-text>
            <v-text-field label="Search" outlined append-icon="search" clearable />
            <v-list two-line nav class="overflow-y-auto" max-height="100%">
              <v-list-item-group
                v-model="selected"
              >
                <v-list two-line>
                  <template v-for="(item, index) in items">
                    <v-subheader
                      v-if="item.header"
                      :key="item.header"
                      v-text="item.header"
                    />

                    <v-divider
                      v-else-if="item.divider"
                      :key="index"
                      class="my-2"
                    />

                    <v-list-item
                      v-else
                      :key="item.title"
                    >
                      <v-list-item-avatar>
                        <v-img :src="item.avatar" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title v-html="item.title" />
                        <v-list-item-subtitle v-html="item.subtitle" />
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-btn text color="primary">
                  <v-icon left>
                    mdi-arrow-left
                  </v-icon>
                  Back
                </v-btn>
              </v-col>
              <v-col cols="auto">
                Alexandr
              </v-col>
              <v-col cols="auto">
                <v-btn icon>
                  <v-icon>
                    mdi-dots-vertical
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row justify="start">
              <v-col cols="auto">
                <v-card color="accent" max-width="450">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, assumenda cum dicta ducimus
                    eligendi ex explicabo facilis, id nesciunt nisi obcaecati pariatur perferendis porro qui recusandae
                    veritatis voluptatibus. Architecto, libero?
                  </v-card-text>
                  <v-card-actions>
                    <span>Today</span>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
            <v-row justify="end">
              <v-col cols="auto">
                <v-card color="primary" max-width="450">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dicta itaque nobis nostrum
                    numquam obcaecati odit quo. Atque, culpa dolor dolore, harum hic inventore maiores nam, sunt vel
                    veniam voluptatibus.
                  </v-card-text>
                  <v-card-actions>
                    <span>Today</span>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-text-field label="Message" placeholder="Text your message here..." append-icon="send" outlined @click:append="()=>{}" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      selected: [2],
      items: [
        { header: 'Today' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: '<span class="text--primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: '<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
