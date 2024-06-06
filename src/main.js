import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import router from "./router"

createApp(App).use(router).use(createPinia()).mount("#app");
