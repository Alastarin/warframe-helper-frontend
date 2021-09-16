<template>
  <v-card class="overflow-hidden">
    <v-toolbar dense flat>
      <v-toolbar-title>
        Warframes
      </v-toolbar-title>
    </v-toolbar>
    <v-container fluid style="height:calc(100vh - 196px)" class="overflow-y-auto">
      <v-row dense>
        <v-col
          v-for="(warframe,index) in warframes"
          :key="index"
          cols="4"
        >
          <mini-card
            :title="warframe.name"
            :image="warframe.image"
            :image-height="72"
            :to="{name:'wiki-warframes-id',params:{id:warframe.name}}"
            width="auto"
            height="100%"
            :dark="$route.params.id===warframe.name"
            :color="$route.params.id===warframe.name ? 'primary': ''"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import MiniCard from '../../../components/MiniCard'

export default {
  name: 'WarframeNavigation',
  components: { MiniCard },
  props: {
    warframes: {}
  }
}
</script>
