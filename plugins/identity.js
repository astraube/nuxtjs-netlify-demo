/* eslint-disable no-console */
import GoTrue from 'gotrue-js'

const auth = new GoTrue({
  APIUrl: process.env.NETLIFY_IDENTITY_URL,
  audience: '',
  setCookie: true
})

export default ({ app }, inject) => {
  inject('identity', auth)
}
