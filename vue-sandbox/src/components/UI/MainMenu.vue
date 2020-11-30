<template>
  <nav
    class="w-full h-16 bg-pink-300 flex flex-col justify-center items-center mb-8"
  >
    <ul class="flex justify-center items-center">
      <li class="mx-8" v-for="item in menu" :key="item.id">
        <menu-item :name="item.name" :path="item.path"></menu-item>
      </li>
    </ul>
  </nav>
</template>

<script>
import MenuItem from "./MainMenuItem";
export default {
  components: {
    MenuItem
  },
  props: {
    menu: Array
  }
};
</script>

<style scoped></style>
