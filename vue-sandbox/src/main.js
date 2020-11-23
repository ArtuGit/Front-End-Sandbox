import { createApp } from "vue";
import App from "./App.vue";

import "tailwindcss/tailwind.css";

import NewTask from "./components/NewTask.vue";
import Task from "./components/Task.vue";

const app = createApp(App);

app.component("new-task", NewTask);
app.component("task", Task);
app.mount("#app");
