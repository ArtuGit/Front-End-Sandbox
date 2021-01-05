<template>
  <div>
    <main-menu :menu="menu"></main-menu>
    <before-content
      v-if="currentPageTitle"
      :title="currentPageTitle"
    ></before-content>
    <main class="m-5">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MainMenu from "./components/UI/MainMenu";
import BeforeContent from "./components/UI/BeforeContent";

export default {
  components: {
    MainMenu,
    BeforeContent
  },
  data() {
    return {
      menu: [
        { id: 1, name: "Home", path: "/", title: "Vue Sandbox" },
        { id: 2, name: "Router", path: "/router" },
        { id: 3, name: "Vuex", path: "/vuex" }
      ]
    };
  },
  computed: {
    currentRoutePath: function() {
      return this.$route.path;
    },
    currentMenu: function() {
      let paramFirst = "/" + this.currentRoutePath.split("/")[1];
      return this.menu.find(element => element.path === paramFirst);
    },
    currentPageTitle: function() {
      if (typeof this.currentMenu !== "undefined") {
        if ("title" in this.currentMenu) {
          return this.currentMenu.title;
        } else {
          return this.currentMenu.name;
        }
      } else {
        return "";
      }
    }
  }
};
</script>

<style>
.m-name {
  @apply text-red-500 italic;
}

.c-link {
  @apply text-blue-600 hover:underline;
}
</style>
