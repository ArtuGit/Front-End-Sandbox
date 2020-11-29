import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";

import "../assets/css/tailwind.css";

import Home from "./components/pages/Home";
import Vuex from "./components/pages/Vuex";
import Router from "./components/pages/Router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/router", component: Router },
    { path: "/vuex", component: Vuex }
  ]
});
// We do not add components that are routers already

const store = createStore({
  state() {
    return {
      counter: 7
    };
  }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
