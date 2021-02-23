import { createApp } from 'vue'
import { createHead } from '@vueuse/head'

import App from "./App.vue";
import router from "./router";
import "./styles/index.postcss";

createApp(App)
  .use(router)
  .use(createHead())
  .mount("#app");