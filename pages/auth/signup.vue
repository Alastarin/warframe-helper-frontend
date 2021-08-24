<template>
  <v-card flat>
    <v-row justify="center" class="px-4">
      <v-col cols="auto">
        <nuxt-link :to="{name:'index'}" class="text-color--gradient text-h5">
          Warframe Helper
        </nuxt-link>
      </v-col>
      <v-col cols="auto">
        <div class="text--secondary text-center">
          Hello there! Sign Up and start managing your account
        </div>
      </v-col>
    </v-row>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="user.name"
          label="Name"
          outlined
          append-icon="mdi-account"
          :error="hasValidationError('name')"
          :error-messages="hasValidationError('name',true)"
          @keyup.enter="onSubmit"
        />
        <v-text-field
          v-model="user.email"
          label="Email"
          append-icon="mdi-email"
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
            Create
          </v-btn>
        </v-col>
        <v-col cols="12">
          <v-row dense align="center">
            <v-col>
              <v-divider />
            </v-col>
            <v-col cols="auto">
              Or
            </v-col>
            <v-col>
              <v-divider />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <span class="text--secondary">Already have an account?</span> <nuxt-link :to="{name:'auth-signin'}" class="text-decoration-none">
              Sign in
            </nuxt-link>
          </div>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
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
