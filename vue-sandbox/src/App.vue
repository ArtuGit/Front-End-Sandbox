<template>
  <main>
    <h1 class="text-blue-700 text-center">Vue Tailwind Boilerplate</h1>
    <p>Store Counter: {{ $store.state.counter }}</p>
    <demo-component></demo-component>
    <router-view></router-view>
  </main>
</template>

<script>
export default {};
</script>

<style></style>
