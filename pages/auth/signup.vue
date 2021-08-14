<template>
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
          @keyup.enter="onSubmit"
        />
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
            Create account
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
          <v-btn color="secondary" text :to="{name:'auth-signin'}" block>
            Sign In
          </v-btn>
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
