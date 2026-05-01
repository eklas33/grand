import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import App from "./App.vue";
import router from "./router";
import { bootstrapModules } from "@/core/bootstrap";
import "@/assets/styles/tailwind.css";

const app = createApp(App);
const pinia = createPinia();

app.use(Antd);
app.use(pinia);
app.use(router);

async function start() {
  await bootstrapModules();
  app.mount("#app");
}

start();
