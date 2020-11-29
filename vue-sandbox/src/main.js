import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

import "../assets/css/tailwind.css";

import DemoComponent from "./components/DemoComponent";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0
    };
  }
});

app.component("demo-component", DemoComponent);

app.use(store);

app.mount("#app");
