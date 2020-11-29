<template>
  <router-link class="p-3 hover:bg-blue-400" :to="path">
    {{ name }}</router-link
  >
</template>

<script>
export default {
  name: "MainMenuItem",
  props: {
    name: String,
    path: String
  },
  linkActiveClass: "active"
};
</script>

<style scoped>
.router-link-active {
  @apply bg-blue-500;
}
</style>
