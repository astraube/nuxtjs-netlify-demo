export default function({ store, redirect }) {
  if (process.client) {
    console.log('hash-handler ran')

    const { hash } = window.location
    if (hash !== '') {
      const token = hash.split('=')
      const [actionName, tokenValue] = token
      console.log('TCL: actionName, tokenValue', actionName, tokenValue)
    }
    this.$router.push('/test-route')
    // return redirect('/test-route')
  }
}
