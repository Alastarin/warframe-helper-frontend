<template>
  <v-card flat>
    <v-card-title>
      <div class="text-color--gradient">
        Warframe Helper
      </div>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="user.email"
          label="Email"
          outlined
          :error="hasValidationError('email')"
          :error-messages="hasValidationError('email',true)"
          @keyup.enter="onSubmit"
        />
        <v-text-field
          v-model="user.password"
          label="Password"
          outlined
          :error="hasValidationError('password')"
          :error-messages="hasValidationError('password',true)"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @keyup.enter="onSubmit"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row dense>
        <v-col cols="12">
          <v-btn color="primary" block @click="onSubmit">
            Login
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-divider />
        </v-col>
        <v-col cols="12">
          <v-btn color="secondary" text :to="{name:'auth-signup'}" block>
            Sign Up
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
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
