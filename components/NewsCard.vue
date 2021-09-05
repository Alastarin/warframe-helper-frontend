<template>
  <v-card hover>
    <v-container>
      <v-row>
        <v-col cols="auto" align-self="center">
          <v-sheet elevation="6" rounded>
            <v-img src="https://picsum.photos/150" max-width="150" max-height="150" class="rounded" />
          </v-sheet>
        </v-col>
        <v-col>
          <v-card-title>
            Gara prime access
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consectetur eaque, explicabo hic
            ipsam iusto laboriosam nihil, officiis porro quam quod saepe. Enim ex illo itaque neque, officia rem
            rerum?
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary">
              Learn more
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'NewsCard'
}
</script>
