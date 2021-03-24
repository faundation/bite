import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import "./styles/index.css";

import App from "./App.vue";
import { router } from "./router";
import "./styles/index.css";

createApp(App).use(router).use(createHead()).mount("#app");
