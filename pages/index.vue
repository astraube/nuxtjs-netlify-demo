<template>
  <div class="container">
    <div>
      <h1 class="title">Nuxt Identity Demo</h1>
      <section>
        <p>URL: {{ $route.fullPath }}</p>
        <p>SSR: {{ ssr ? 'true' : 'false' }}</p>
      </section>
      <b-button @click="login">Login</b-button>
      <b-button @click="logout">Logout</b-button>
      <b-button @click="updateUserData">Update User Data</b-button>
      <b-button @click="signUp">Sign Up</b-button>

      <div v-if="user" style="margin-top: 1.5em;">
        <strong>user.email</strong>
        <hr />
        <pre>{{ user }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
const email = 'droyer01@gmail.com'
const password = 'Dance4life'
export default {
  computed: {
    user() {
      return this.$store.state.currentUser || {}
    }
  },

  asyncData() {
    return {
      ssr: process.server
    }
  },

  // beforeRouteEnter(to, from, next) {
  //   console.log('beforeRouteEnter: to, from', to, from)
  //   if (process.client) {
  //     console.log('hash-handler ran')

  //     const { hash } = window.location
  //     if (hash !== '') {
  //       const token = hash.split('=')
  //       const [actionName, tokenValue] = token
  //       console.log('TCL: actionName, tokenValue', actionName, tokenValue)
  //       alert('here!')
  //       next({ name: '/test-routes' })
  //     } else next()
  //     // this.$router.push('/logisn')
  //     // return redirect('/test-route')
  //   }
  //   next()
  // },

  async mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    console.log('hash-handler ran')

    const { hash } = window.location
    if (hash !== '') {
      const token = hash.split('=')
      const [actionName, tokenValue] = token
      console.log('TCL: actionName, tokenValue', actionName, tokenValue)
      const confirmResponse = await this.$identity.confirm(tokenValue)
      console.log('TCL: mounted -> confirmResponse', confirmResponse)
      this.$router.push('/login')
    } else {
      await Promise.resolve()
    }
  },

  methods: {
    async updateUserData() {
      const updatedUser = await this.$identity.currentUser().update({
        data: {
          courses: ['course1', 'course2'],
          stringValue: 'Some string',
          objectValue: {
            propA: 'Property A',
            propB: 'Property B'
          }
        }
      })
      console.log('updatedUser', updatedUser)
    },

    async login() {
      await this.$store.dispatch('handleLogin', { email, password })
    },

    async logout() {
      const user = await this.$identity.currentUser()
      this.$store.dispatch('handleUserUpdate', null)
      await user.logout()
      alert('Logged Out')
    },

    async signUp() {
      await this.$store.dispatch('handleSignUp', {
        email: 'andre@idooh.com.br',
        password: '1234567890$'
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
