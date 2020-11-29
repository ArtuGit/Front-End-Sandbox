import { createApp } from "vue";
import App from "./App.vue";

import "../assets/css/tailwind.css";

import DemoComponent from "./components/DemoComponent";

const app = createApp(App);

app.component("demo-component", DemoComponent);
app.mount("#app");
