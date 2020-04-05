export const state = () => ({
  mockUserEmail: 'a.straube.m@gmail.com',
  mockUserPass: '1234567890$',
  currentUser: null
})

export const mutations = {
  setCurrentUser(state, user) {
    state.currentUser = user
  }
}

export const actions = {
  nuxtClientInit({ commit }, user) {
    commit('setCurrentUser', user)
  },

  handleUserUpdate({ commit }, user) {
    commit('setCurrentUser', user)
  },

  async handleLogin({ commit }, { email, password }) {
    const user = await this.$identity.login(email, password, true)
    commit('setCurrentUser', user)
    alert('Signed In')
    this.$router.push('/admin')
  },

  async handleSignUp({ commit }, { email, password }) {
    await this.$identity.signup(email, password)
    alert('signed up! Check your email')
  },

  async handleConfirmation({ dispatch }, token) {
    const response = await this.$identity.confirm(token)
    console.log(
      'Account confirmed! Welcome to the party!',
      JSON.stringify({ response })
    )
    alert('Account confirmed! Welcome to the party!')
    this.$router.push('/login')
  }
}
