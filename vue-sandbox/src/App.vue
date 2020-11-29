<template>
  <main>
    <main-menu></main-menu>
    <h1 class="text-blue-700 text-center text-3xl">Vue Tailwind Boilerplate</h1>
    <router-view></router-view>
  </main>
</template>

<script>
import MainMenu from "./components/UI/MainMenu";

export default {
  components: {
    MainMenu
  }
};
</script>

<style></style>
