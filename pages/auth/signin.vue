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
          Hello there! Sign in and start managing your account
        </div>
      </v-col>
    </v-row>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="user.email"
          label="Email"
          outlined
          append-icon="mdi-email"
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
        <v-row align="center" justify="space-between">
          <v-col cols="auto">
            <v-checkbox
              v-model="rememberMe"
              label="Remember me"
            />
          </v-col>
          <v-col cols="auto">
            <a href="" class="text-decoration-none">
              Forgot Password?
            </a>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row dense>
        <v-col cols="12">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn
                color="primary"
                block
                v-bind="attrs"
                v-on="on"
                @click.exact="onSubmit"
                @click.shift.exact="testLogin"
              >
                Sign in
              </v-btn>
            </template>
            <span>Click with pressed Shift for Demo</span>
          </v-tooltip>
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
          <v-row justify="center">
            <v-col cols="6">
              <v-btn color="secondary" class="darken-2" block>
                <v-icon left>
                  mdi-google
                </v-icon>
                Google
              </v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn color="primary" class="darken-2" block>
                <v-icon left>
                  mdi-facebook
                </v-icon>
                Facebook
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col>
          <v-divider class="my-2" />
        </v-col>
        <v-col cols="12">
          <div class="text-center">
            <span class="text--secondary">Don't have an account?</span> <nuxt-link :to="{name:'auth-signup'}" class="text-decoration-none">
              Create one
            </nuxt-link>
          </div>
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
      rememberMe: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async testLogin () {
      await this.$apolloHelpers.onLogin('TestToken')
      await this.openSnackbar({ text: 'Glad to see you again, testUser', type: 'success' })
      this.$router.push({ name: 'index' })
    },
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
