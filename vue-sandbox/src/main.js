import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";

import "../assets/css/tailwind.css";

import DemoComponent from "./components/aux/DemoComponent";
import RouteComponent from "./components/aux/Route";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/route", component: RouteComponent }]
});

const store = createStore({
  state() {
    return {
      counter: 0
    };
  }
});

const app = createApp(App);

app.component("demo-component", DemoComponent);
app.component("route", RouteComponent);

app.use(router);
app.use(store);

app.mount("#app");
