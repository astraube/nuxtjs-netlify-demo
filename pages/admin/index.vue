<template>
  <div>
    <h1>Admin</h1>
    <section>
      <p>URL: {{ $route.fullPath }}</p>
      <p>SSR: {{ ssr ? 'true' : 'false' }}</p>
    </section>
    <nuxt-link to="/admin/profile">Profile</nuxt-link>
    <div v-if="user">
      <strong>user.email</strong>
      <hr />
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
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

  middleware: 'admin-guard'
}
</script>

<style></style>
