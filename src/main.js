import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//匯入vue3-prism套件(code-board要用的)
import Vue3Prism from "vue3-prism/lib/Vue3Prism.common.js";
import "vue3-prism/lib/Vue3Prism.css";

const app = createApp(App);

app.use(router);

app.use(Vue3Prism);

app.mount("#app");
