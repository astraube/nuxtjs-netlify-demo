/* eslint-disable no-console */
export default async (context) => {
  if (process.client) {
    const user = await context.app.$identity.currentUser()
    console.log('from client-auth: user', user)
    context.store.dispatch('nuxtClientInit', user)
  }
}
