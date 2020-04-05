<template>
  <div class="login">
    <h1>Login Page</h1>
    <label for="loginEmail">Email</label>
    <b-form-input
      id="loginEmail"
      v-model="loginEmail"
      type="email"
    ></b-form-input>

    <label for="loginPassword">Password</label>
    <b-form-input
      id="loginPassword"
      v-model="loginPassword"
      type="password"
    ></b-form-input>

    <b-button class="mt-4" @click="login">Login</b-button>
  </div>
</template>

<script>
export default {
  middleware: 'authenicated-checker',
  data: () => ({
    loginEmail: '',
    loginPassword: ''
  }),
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.client) {
      const { hash } = window.location
      console.log('TCL: mounted -> hash', hash)
    }
  },

  methods: {
    async login() {
      const email = this.$store.state.mockUserEmail;
      const password = this.$store.state.mockUserPass;

      await this.$store.dispatch('handleLogin', { email, password })
      /*
      await this.$store.distpach('handleLogin', {
        email: this.loginEmail,
        password: this.loginPassword
      })*/
    }
  }
}
</script>

<style></style>
