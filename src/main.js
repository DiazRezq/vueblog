import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import bootstrap */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

/* jquery */
import jQuery from "jquery";
window.$ = jQuery;

/* fontawesome */
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

/* clear blog css */
import "@/assets/css/clean-blog.css";
import "@/assets/js/clean-blog.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
