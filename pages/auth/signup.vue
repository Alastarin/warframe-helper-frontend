<template>
  <v-row class="fill-height" no-gutters>
    <v-col align-self="center">
      <v-card flat>
        <v-card-title>
          <span class="text-color--gradient">
            Warframe Helper
          </span>
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="user.name"
              label="Name"
              outlined
              :error="hasValidationError('name')"
              :error-messages="hasValidationError('name',true)"
            />
            <v-text-field
              v-model="user.email"
              label="Email"
              outlined
              :error="hasValidationError('email')"
              :error-messages="hasValidationError('email',true)"
            />
            <v-text-field
              v-model="user.password"
              label="Password"
              outlined
              :error="hasValidationError('password')"
              :error-messages="hasValidationError('password',true)"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text :to="{name:'auth-signin'}">
            Sign In
          </v-btn>
          <v-spacer />
          <v-btn text @click="clearErrors">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="onSubmit">
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import createUser from '~/gql/mutations/create-user.gql'
export default {
  name: 'Signup',
  layout: 'auth',
  data () {
    return {
      showPassword: false,
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const createUserInput = this.user
      try {
        await this.$apollo.mutate({
          mutation: createUser,
          variables: { createUserInput }
        })
        this.$router.push({ name: 'auth-signin' })
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>
