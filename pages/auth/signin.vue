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
          <v-btn color="primary" text :to="{name:'auth-signup'}">
            Sign Up
          </v-btn>
          <v-spacer />
          <v-btn text @click="clearErrors">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="onSubmit">
            Sign In
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import createAuth from '~/gql/mutations/create-auth.gql'

export default {
  name: 'Signin',
  layout: 'auth',
  data () {
    return {
      showPassword: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const createAuthInput = this.user
      try {
        const { data } = await this.$apollo.mutate({
          mutation: createAuth,
          variables: { createAuthInput }
        })
        this.$apolloHelpers.onLogin(data.createAuth.accessToken)
        await this.openSnackbar({ text: `Glad to see you again, ${data.createAuth.userName}`, type: 'success' })
        this.$router.push({ name: 'index' })
      } catch (e) {
      }
    }
  }
}
</script>

<style scoped>

</style>
