import { createApp } from "vue";
import routes from "./routes";
import "./App.css";
import "flowbite";
import App from "./App.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import { registerModules } from "@/register-modules";
import modules from "@/modules";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

registerModules(modules);

const app = createApp(App);

app.use(routes);
app.use(Antd);
app.component("layout-nav", DefaultLayout);
app.mount("#app");
