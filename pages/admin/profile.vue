<template>
  <div>
    <h1>Profile Page</h1>
    <section>
      <p>URL: {{ $route.fullPath }}</p>
      <p>SSR: {{ ssr ? 'true' : 'false' }}</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      ssr: process.server
    }
  }
}
</script>

<style lang="scss" scoped></style>
